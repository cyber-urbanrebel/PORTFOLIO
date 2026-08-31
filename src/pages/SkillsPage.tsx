import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV, SKILL_GROUPS, SKILL_LEVELS, SKILL_STRENGTHS } from "../data/site";
import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

export default function SkillsPage() {
  return (
    <main className="relative z-10 min-h-screen px-5 pb-20 pt-10 sm:px-8 md:px-10">
      <FadeIn delay={0} y={-12}>
        <nav className="mb-12 flex justify-between">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity hover:opacity-70 md:text-lg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </FadeIn>
      <FadeIn delay={0.08} y={28}>
        <p className="mb-3 text-center text-xs uppercase tracking-[0.28em] text-[#57d8ff]/80">Stack, systems, art</p>
        <h1
          className="hero-heading mb-6 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}
        >
          Skills
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-center font-light leading-relaxed text-[#D7E2EA]/80">
          Software, networks, graphics, and operations — plus the way I debug, design products, lead teams, and run a live business.
        </p>
      </FadeIn>
      <div className="mx-auto mb-20 grid max-w-5xl gap-5 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <FadeIn
            key={group.title}
            delay={i * 0.08}
            className="rounded-[28px] border border-[#D7E2EA]/20 p-7"
          >
            <h2 className="mb-4 text-xs uppercase tracking-[0.28em] text-[#57d8ff]/80">{group.title}</h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D7E2EA]/25 px-4 py-2 text-sm uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
      <div id="strengths" className="mx-auto mb-20 max-w-5xl">
        <FadeIn delay={0} y={20}>
          <h2 className="mb-10 text-center text-sm uppercase tracking-[0.28em] text-[#D7E2EA]/55">How I work</h2>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_STRENGTHS.map((group, i) => (
            <FadeIn
              key={group.title}
              delay={i * 0.08}
              className="rounded-[28px] border border-[#D7E2EA]/20 p-7"
            >
              <h3 className="mb-4 text-xs uppercase tracking-[0.22em] text-[#57d8ff]/80">{group.title}</h3>
              <ul className="space-y-3">
                {group.points.map((point) => (
                  <li key={point} className="font-light leading-relaxed text-[#D7E2EA]/80">
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0} y={20}>
          <h2 className="mb-10 text-center text-sm uppercase tracking-[0.28em] text-[#D7E2EA]/55">Proficiency</h2>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
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
      </div>
      <FadeIn delay={0.2} y={16} className="mt-16 flex justify-center">
        <ContactButton href="/#contact">Contact Me</ContactButton>
      </FadeIn>
    </main>
  );
}
