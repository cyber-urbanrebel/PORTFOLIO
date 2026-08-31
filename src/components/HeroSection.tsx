import { Link } from "react-router-dom";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { NAV } from "../data/site";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import PortraitGaze from "./PortraitGaze";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  const scrollRotate = useTransform(scrollY, [0, 620], [0, 18]);
  const scrollYMove = useTransform(scrollY, [0, 620], [0, 90]);
  const scrollScale = useTransform(scrollY, [0, 620], [1, 0.84]);
  const rotateX = useTransform([smoothY, scrollRotate], ([tilt, scroll]) => Number(tilt) + Number(scroll));
  const rotateY = useTransform(smoothX, (value) => value);

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight * 0.4 };
    const portrait = { el: null as HTMLElement | null };

    const apply = () => {
      const el = document.querySelector<HTMLElement>("[data-portrait]");
      portrait.el = el;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (mouse.x - (rect.left + rect.width / 2)) / Math.max(rect.width, 1);
      const py = (mouse.y - (rect.top + rect.height / 2)) / Math.max(rect.height, 1);
      mouseX.set(Math.max(-1, Math.min(1, px)) * 14);
      mouseY.set(Math.max(-1, Math.min(1, py)) * -10);
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      apply();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", apply, { passive: true });
    apply();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", apply);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-x-clip">
      <div className="relative z-40 overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-8 w-full whitespace-nowrap text-[13vw] font-black uppercase leading-none tracking-tight sm:mt-10 sm:text-[14vw] md:mt-6 md:text-[15vw] lg:text-[16.5vw]">
            Hi, i&apos;m edwin
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-10 mt-auto flex flex-1 flex-col items-center justify-end pb-6 sm:pb-8">
        <motion.div
          className="relative w-[230px] sm:w-[280px] md:w-[340px] lg:w-[400px]"
          data-portrait
          style={{ rotateX, rotateY, y: scrollYMove, scale: scrollScale, transformPerspective: 1200 }}
        >
          <div className="portrait-aura" />
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <Magnet padding={120} strength={4} className="relative">
              <img
                src="/assets/hero-portrait.png"
                alt="Edwin Mburu Kamau"
                className="portrait-float w-full select-none"
                draggable={false}
              />
              <PortraitGaze />
            </Magnet>
          </motion.div>
        </motion.div>

        <div className="relative z-20 mt-1 flex max-w-md flex-col items-center gap-4 px-6 text-center sm:mt-2">
          <FadeIn delay={0.35} y={16}>
            <p
              className="font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.15rem)" }}
            >
              a software engineer, artist, and founder driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={16}>
            <ContactButton href="#contact">Contact Me</ContactButton>
          </FadeIn>
          <FadeIn delay={0.62} y={12}>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 sm:gap-x-8">
              {NAV.map((item) =>
                item.href.startsWith("/") ? (
                  <Magnet key={item.label} padding={20} strength={7}>
                    <Link
                      to={item.href}
                      className="text-xs font-medium uppercase tracking-[0.18em] text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm"
                    >
                      {item.label}
                    </Link>
                  </Magnet>
                ) : (
                  <Magnet key={item.label} padding={20} strength={7}>
                    <a
                      href={item.href}
                      className="text-xs font-medium uppercase tracking-[0.18em] text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-sm"
                    >
                      {item.label}
                    </a>
                  </Magnet>
                ),
              )}
            </nav>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
