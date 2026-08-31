import { Link } from "react-router-dom";
import {
  FOUNDERS,
  URBAN_CREW_CATEGORIES,
  URBAN_CREW_CONCEPTS,
  URBAN_CREW_ELEMENTS,
  URBAN_CREW_PATTERNS,
  URBAN_CREW_PRODUCTS,
  URBAN_CREW_SYMBOLS,
} from "../data/site";
import ContactButton from "../components/ContactButton";
import FadeIn from "../components/FadeIn";

export default function UrbanCrewPage() {
  return (
    <main className="uc-page relative z-10 min-h-screen px-5 pb-24 pt-10 sm:px-8 md:px-10">
      <FadeIn delay={0} y={-12}>
        <div className="mb-10 flex items-center justify-between">
          <Link to="/" className="text-sm font-medium uppercase tracking-wider hover:opacity-70">
            ← Home
          </Link>
          <Link to="/#contact" className="text-sm font-medium uppercase tracking-wider hover:opacity-70">
            Contact
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.05} y={20} className="text-center">
        <p className="uc-gold mb-2 text-xs uppercase tracking-[0.4em]">Sacred geometry · African spirit · Four elements</p>
        <h1 className="uc-logo">Urban Crew</h1>
        <p className="mx-auto mt-5 max-w-2xl font-light leading-relaxed text-[#D7E2EA]/80">
          Streetwear built from mantra energy, ancient symbolism, and the four elements. Founded by Edwin Mburu Kamau and Suleiman Said. You are the creator.
        </p>
      </FadeIn>

      <div className="mx-auto mt-8 flex max-w-lg justify-center gap-6 text-center text-[0.65rem] uppercase tracking-[0.28em] text-[#C2B280]">
        {["Earth", "Water", "Fire", "Air"].map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>

      <section className="mx-auto mt-20 max-w-6xl">
        <h2 className="uc-gold mb-8 text-center text-xs uppercase tracking-[0.32em]">The 10 concepts</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {URBAN_CREW_CONCEPTS.map((concept, i) => (
            <FadeIn
              key={concept}
              delay={i * 0.04}
              className="rounded-2xl border border-[#C2B280]/20 px-3 py-6 text-center"
            >
              <p className="text-sm uppercase tracking-wider">{concept}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <h2 className="uc-gold mb-8 text-center text-xs uppercase tracking-[0.32em]">Collection palette</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {URBAN_CREW_ELEMENTS.map((swatch) => (
            <div key={swatch.name} className="overflow-hidden rounded-2xl border border-white/10">
              <div className="h-24" style={{ background: swatch.hex }} />
              <div className="p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C2B280]">{swatch.name}</p>
                <p className="mt-1 text-sm">{swatch.color}</p>
                <p className="mt-1 font-light text-[#D7E2EA]/50">{swatch.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <h2 className="uc-gold mb-8 text-center text-xs uppercase tracking-[0.32em]">Mantra & symbols</h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {URBAN_CREW_SYMBOLS.map((symbol) => (
            <div key={symbol.name} className="rounded-2xl border border-[#C2B280]/20 py-6 text-center">
              <p className="text-3xl text-[#C2B280]">{symbol.mark}</p>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em]">{symbol.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="uc-gold mb-6 text-xs uppercase tracking-[0.32em]">Product categories</h2>
          <div className="divide-y divide-[#C2B280]/20 border-y border-[#C2B280]/20">
            {URBAN_CREW_CATEGORIES.map((item, i) => (
              <div key={item.name} className="flex items-baseline justify-between py-4">
                <span className="uppercase">
                  {String(i + 1).padStart(2, "0")} · {item.name}
                </span>
                <span className="text-sm text-[#C2B280]">{item.fit}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="uc-gold mb-6 text-xs uppercase tracking-[0.32em]">Fabric & pattern library</h2>
          <div className="grid grid-cols-2 gap-3">
            {URBAN_CREW_PATTERNS.map((pattern) => (
              <div key={pattern} className="rounded-2xl border border-[#C2B280]/20 p-4">
                <div className="mb-3 h-16 rounded-lg bg-[repeating-linear-gradient(45deg,#C2B28022,#C2B28022_6px,transparent_6px,transparent_12px)]" />
                <p className="text-xs uppercase tracking-wider">{pattern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <h2 className="uc-gold mb-8 text-center text-xs uppercase tracking-[0.32em]">Drop 01 · floating pieces</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {URBAN_CREW_PRODUCTS.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.08} className="overflow-hidden rounded-[28px] border border-[#C2B280]/20">
              <img src={product.image} alt={product.name} className="aspect-[3/4] w-full object-cover mix-blend-lighten" />
              <div className="p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#C2B280]">{product.tag}</p>
                <h3 className="mt-1 text-lg uppercase">{product.name}</h3>
                <p className="mt-2 text-[#D7E2EA]/70">{product.price}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl">
        <h2 className="uc-gold mb-6 text-center text-xs uppercase tracking-[0.32em]">Founders</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {FOUNDERS.map((person) => (
            <div key={person.name} className="rounded-[24px] border border-[#C2B280]/20 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#C2B280]">Co-founder</p>
              <h3 className="mt-2 text-xl uppercase">{person.name}</h3>
              <p className="mt-2 font-light text-[#D7E2EA]/70">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="uc-gold mt-16 text-center text-sm uppercase tracking-[0.4em]">You are the creator</p>
      <div className="mt-8 flex justify-center">
        <ContactButton href="/#contact">Order / collab</ContactButton>
      </div>
    </main>
  );
}
