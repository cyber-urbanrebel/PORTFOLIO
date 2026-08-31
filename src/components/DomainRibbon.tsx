import { DOMAINS } from "../data/site";

export default function DomainRibbon() {
  const row = [...DOMAINS, ...DOMAINS];

  return (
    <section className="overflow-hidden border-y border-[#D7E2EA]/12 py-4" aria-label="Practice areas">
      <div className="ribbon flex w-max gap-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="text-sm font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/55">
            {item}
            <span className="ml-10 text-[#57d8ff]/70">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
