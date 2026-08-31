import { CAPABILITIES } from "../data/site";
import FadeIn from "./FadeIn";

export default function ServicesSection() {
  return (
    <section
      id="capabilities"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-28"
    >
      <FadeIn delay={0} y={28}>
        <p className="mb-3 text-center text-xs uppercase tracking-[0.28em] text-[#0C0C0C]/50">How I work</p>
        <h2
          className="mb-14 text-center font-black uppercase sm:mb-20"
          style={{ fontSize: "clamp(2.6rem, 9vw, 7rem)" }}
        >
          Capabilities
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl divide-y divide-[rgba(12,12,12,0.15)] border-y border-[rgba(12,12,12,0.15)]">
        {CAPABILITIES.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.08} className="py-8 sm:py-10">
            <div className="flex items-start gap-6 sm:gap-10">
              <span className="font-black leading-none" style={{ fontSize: "clamp(2.4rem, 7vw, 6.5rem)" }}>
                {item.number}
              </span>
              <div className="pt-2">
                <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2vw, 1.9rem)" }}>
                  {item.name}
                </h3>
                <p
                  className="mt-2 max-w-2xl font-light leading-relaxed opacity-60"
                  style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
