import { Link } from "react-router-dom";
import { CERTS, PROCESS, SIGNALS, VENTURES } from "../data/site";
import FadeIn from "./FadeIn";

export default function VenturesSection() {
  return (
    <section id="ventures" className="relative z-10 px-5 py-24 sm:px-8 md:px-10">
      <FadeIn delay={0} y={28}>
        <p className="mb-3 text-center text-xs uppercase tracking-[0.28em] text-[#D7E2EA]/50">Building in public</p>
        <h2
          className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 8vw, 6.5rem)" }}
        >
          Ventures
        </h2>
      </FadeIn>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        {VENTURES.map((item, i) => (
          <FadeIn
            key={item.name}
            delay={i * 0.08}
            className="group rounded-[28px] border border-[#D7E2EA]/20 p-7 transition-colors duration-300 hover:border-[#57d8ff]/50 hover:bg-[#57d8ff]/5"
          >
            {item.href.startsWith("/") ? (
              <Link to={item.href} className="block">
                <h3 className="text-xl font-medium uppercase md:text-2xl">{item.name}</h3>
                <p className="mt-3 font-light leading-relaxed text-[#D7E2EA]/75">{item.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#57d8ff]">Enter store →</p>
              </Link>
            ) : (
              <>
                <h3 className="text-xl font-medium uppercase md:text-2xl">{item.name}</h3>
                <p className="mt-3 font-light leading-relaxed text-[#D7E2EA]/75">{item.description}</p>
              </>
            )}
          </FadeIn>
        ))}
      </div>
      <div className="mx-auto mt-20 max-w-5xl">
        <FadeIn delay={0} y={20}>
          <h3 className="mb-8 text-center text-sm uppercase tracking-[0.28em] text-[#D7E2EA]/55">Process</h3>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {PROCESS.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.1} className="border-t border-[#D7E2EA]/20 pt-6">
              <p className="font-black text-[#57d8ff]/50" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {item.number}
              </p>
              <h4 className="mt-2 text-lg uppercase">{item.name}</h4>
              <p className="mt-2 font-light leading-relaxed text-[#D7E2EA]/70">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm uppercase tracking-[0.28em] text-[#D7E2EA]/55">Credentials</h3>
          {CERTS.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08} className="mb-4 border-b border-[#D7E2EA]/15 pb-4">
              <h4 className="uppercase">{item.name}</h4>
              <p className="mt-1 font-light text-[#D7E2EA]/70">{item.detail}</p>
            </FadeIn>
          ))}
        </div>
        <div>
          <h3 className="mb-6 text-sm uppercase tracking-[0.28em] text-[#D7E2EA]/55">Signals</h3>
          {SIGNALS.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08} className="mb-4 border-b border-[#D7E2EA]/15 pb-4">
              <h4 className="uppercase">{item.name}</h4>
              <p className="mt-1 font-light text-[#D7E2EA]/70">{item.detail}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
