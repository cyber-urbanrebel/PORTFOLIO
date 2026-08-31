import { FormEvent, useEffect, useState } from "react";
import FadeIn from "./FadeIn";

type Review = { name: string; message: string };

const SLOTS = 4;

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("emk-reviews");
      if (stored) setReviews(JSON.parse(stored) as Review[]);
    } catch {
      setReviews([]);
    }
  }, []);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const next = [{ name: name.trim(), message: message.trim() }, ...reviews].slice(0, SLOTS);
    setReviews(next);
    localStorage.setItem("emk-reviews", JSON.stringify(next));
    setName("");
    setMessage("");
  };

  return (
    <section id="reviews" className="relative z-10 px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0} y={24}>
        <p className="mb-3 text-center text-xs uppercase tracking-[0.28em] text-[#D7E2EA]/50">Clients & reviews</p>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}
        >
          Reviews
        </h2>
      </FadeIn>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        {Array.from({ length: SLOTS }).map((_, i) => {
          const review = reviews[i];
          return (
            <div
              key={i}
              className="min-h-[140px] rounded-[24px] border border-dashed border-[#D7E2EA]/25 p-6"
            >
              {review ? (
                <>
                  <p className="font-light leading-relaxed text-[#D7E2EA]">{review.message}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#57d8ff]">{review.name}</p>
                </>
              ) : (
                <p className="text-sm uppercase tracking-[0.2em] text-[#D7E2EA]/35">Open slot</p>
              )}
            </div>
          );
        })}
      </div>
      <form onSubmit={onSubmit} className="mx-auto mt-10 flex max-w-5xl flex-col gap-4 md:flex-row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="flex-1 rounded-2xl border-2 border-[#D7E2EA]/30 bg-transparent px-5 py-4 outline-none placeholder:text-[#D7E2EA]/40"
        />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a review"
          className="flex-[2] rounded-2xl border-2 border-[#D7E2EA]/30 bg-transparent px-5 py-4 outline-none placeholder:text-[#D7E2EA]/40"
        />
        <button
          type="submit"
          className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#D7E2EA]/10"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
