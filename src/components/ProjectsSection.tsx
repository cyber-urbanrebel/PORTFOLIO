import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "../data/site";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";
import { CrewVisual, MitmVisual, SophiaVisual, TradingVisual, WakanVisual } from "./ProjectVisuals";
import Tilt3D from "./Tilt3D";

function Visual({ kind }: { kind: (typeof PROJECTS)[number]["visual"] }) {
  if (kind === "sophia") return <SophiaVisual />;
  if (kind === "mitm") return <MitmVisual />;
  if (kind === "crew") return <CrewVisual />;
  if (kind === "wakan") return <WakanVisual />;
  return <TradingVisual />;
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-[calc(5.5rem+var(--stack))] h-[90vh] md:top-[calc(7rem+var(--stack))]"
      style={{ ["--stack" as string]: `${index * 26}px` }}
    >
      <motion.article
        style={{ scale }}
        className="flex h-[min(82vh,880px)] flex-col overflow-hidden rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[44px] sm:p-6 md:p-8"
      >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-start gap-4">
            <span className="font-black leading-none text-[#D7E2EA]" style={{ fontSize: "clamp(2.6rem, 8vw, 7rem)" }}>
              {project.number}
            </span>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.22em] text-[#57d8ff]/80">{project.category}</p>
              <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)" }}>
                {project.name}
              </h3>
              <p className="mt-2 max-w-xl font-light leading-relaxed text-[#D7E2EA]/80">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.7rem] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <LiveProjectButton
            href={project.href}
            label={project.visual === "crew" ? "View Brand" : "Live Project"}
          />
        </div>
        <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-[0.9fr_1.4fr]">
          <div className="flex flex-col justify-end gap-3 rounded-[28px] border border-[#D7E2EA]/15 p-5 md:rounded-[40px]">
            {project.points.map((point) => (
              <p key={point} className="border-b border-[#D7E2EA]/10 pb-3 text-sm uppercase tracking-wider last:border-0 last:pb-0">
                {point}
              </p>
            ))}
            {"shots" in project && project.shots ? (
              <div className="grid grid-cols-3 gap-2 pt-2">
                {project.shots.slice(0, 3).map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            ) : null}
          </div>
          <Tilt3D className="min-h-0">
            <Visual kind={project.visual} />
          </Tilt3D>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-16 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn delay={0} y={32}>
        <p className="mb-3 text-center text-xs uppercase tracking-[0.28em] text-[#D7E2EA]/50">Selected work</p>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 9vw, 7rem)" }}
        >
          Projects
        </h2>
      </FadeIn>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.number} project={project} index={index} total={PROJECTS.length} />
      ))}
    </section>
  );
}
