import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SKILL_LEVELS, SKILL_STRENGTHS, SKILL_TAGS } from "../data/site";
import FadeIn from "./FadeIn";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <FadeIn delay={0} y={28}>
        <p className="mb-3 text-center text-xs uppercase tracking-[0.28em] text-[#57d8ff]/80">Stack & craft</p>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16"
          style={{ fontSize: "clamp(2.6rem, 9vw, 7rem)" }}
        >
          Skills
        </h2>
      </FadeIn>
      <div className="mx-auto mb-16 flex max-w-5xl flex-wrap justify-center gap-3">
        {SKILL_TAGS.map((skill, i) => (
          <FadeIn
            key={skill}
            delay={i * 0.04}
            y={16}
            className="rounded-full border border-[#D7E2EA]/25 px-5 py-2.5 text-sm uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:border-[#57d8ff]/60 hover:text-[#57d8ff]"
          >
            {skill}
          </FadeIn>
        ))}
      </div>
      <div className="mx-auto mb-16 grid max-w-5xl gap-4 md:grid-cols-2">
        {SKILL_STRENGTHS.map((group, i) => (
          <FadeIn
            key={group.title}
            delay={i * 0.06}
            className="rounded-[24px] border border-[#D7E2EA]/20 p-6 text-left"
          >
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#57d8ff]/80">{group.title}</h3>
            <p className="mt-3 font-light leading-relaxed text-[#D7E2EA]/75">{group.points[0]}</p>
          </FadeIn>
        ))}
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {SKILL_LEVELS.map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.08} y={18}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <h3 className="text-sm font-medium uppercase tracking-wider md:text-base">{item.name}</h3>
              <span className="text-sm text-[#57d8ff]">{item.level}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#D7E2EA]/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#57d8ff] via-[#B600A8] to-[#BE4C00]"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true, margin: "40px" }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2} className="mt-12 text-center">
        <Link
          to="/skills"
          className="inline-flex items-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm"
        >
            Open full skills
        </Link>
      </FadeIn>
    </section>
  );
}
