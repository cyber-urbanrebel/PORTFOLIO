import { ABOUT_COPY, ROLES } from "../data/site";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import Tilt3D from "./Tilt3D";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 sm:px-8 md:px-10">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0} y={32} className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#57d8ff]/80">About me</p>
          <h2
            className="hero-heading mb-8 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 9vw, 7.5rem)" }}
          >
            About
          </h2>
        </FadeIn>
        <AnimatedText
          text={ABOUT_COPY}
          className="mx-auto max-w-[700px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
        />
        <p className="mt-8 text-center text-xs uppercase tracking-[0.28em] text-[#D7E2EA]/50">My roles</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((role, i) => (
            <Tilt3D key={role.name} className="rounded-[24px]">
              <FadeIn
                delay={i * 0.06}
                className="rounded-[24px] border border-[#D7E2EA]/20 p-6 text-left transition-colors hover:border-[#57d8ff]/50"
              >
                <h3 className="text-lg font-medium uppercase">{role.name}</h3>
                <p className="mt-2 font-light leading-relaxed text-[#D7E2EA]/70">{role.detail}</p>
              </FadeIn>
            </Tilt3D>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <ContactButton href="#contact">Work with Edwin</ContactButton>
          <a
            href="/assets/cv.pdf"
            download
            className="inline-flex items-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
