import { FormEvent, useState } from "react";
import { DETAILS } from "../data/site";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";

const LINKS = [
  {
    label: "GitHub",
    detail: "@cyber-urbanrebel",
    href: "https://github.com/cyber-urbanrebel",
  },
  {
    label: "LinkedIn",
    detail: "edwin-kamau",
    href: "https://www.linkedin.com/in/edwin-kamau-56584a392",
  },
  {
    label: "CV",
    detail: "Download PDF",
    href: "/assets/cv.pdf",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const contactMessage = `Hello Edwin Mburu Kamau,\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nSubject: ${data.get("subject")}\n\n${data.get("message")}`;

    try {
      await navigator.clipboard.writeText(contactMessage);
                    setStatus("Message copied. Send it by email, phone, LinkedIn, or GitHub.");
    } catch {
      setStatus("Copy failed. Please copy your message manually.");
    }
  };

  return (
    <section id="contact" className="px-5 pb-20 pt-8 sm:px-8 md:px-10">
      <FadeIn delay={0} y={32}>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 9vw, 7rem)" }}
        >
          Contact
        </h2>
      </FadeIn>
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <FadeIn delay={0.08} y={20}>
          <p className="mb-8 max-w-md font-light leading-relaxed" style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}>
            Collaborations, technical work, creative ventures, and mentorship. Start with a note — I will take it from there.
          </p>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {DETAILS.map((item) => {
              const href =
                item.label === "Phone"
                  ? "tel:+254728763053"
                  : item.label === "Email"
                    ? "mailto:eddiekamau56@gmail.com"
                    : undefined;
              const inner = (
                <>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/55">{item.label}</p>
                  <p className="mt-2 break-all text-lg">{item.value}</p>
                </>
              );
              return href ? (
                <a key={item.label} href={href} className="rounded-3xl border border-[#D7E2EA]/15 p-5 transition-colors hover:border-[#D7E2EA]/40">
                  {inner}
                </a>
              ) : (
                <div key={item.label} className="rounded-3xl border border-[#D7E2EA]/15 p-5">
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-4 rounded-full border-2 border-[#D7E2EA] px-6 py-4 tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                <span className="font-medium uppercase">{link.label}</span>
                <span className="text-right text-xs opacity-70 sm:text-sm">{link.detail}</span>
              </a>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.16} y={20}>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Full name" className="rounded-2xl border-2 border-[#D7E2EA]/30 bg-transparent px-5 py-4 outline-none placeholder:text-[#D7E2EA]/40" />
              <input required type="email" name="email" placeholder="Email address" className="rounded-2xl border-2 border-[#D7E2EA]/30 bg-transparent px-5 py-4 outline-none placeholder:text-[#D7E2EA]/40" />
            </div>
            <input required name="subject" placeholder="Project or collaboration topic" className="rounded-2xl border-2 border-[#D7E2EA]/30 bg-transparent px-5 py-4 outline-none placeholder:text-[#D7E2EA]/40" />
            <textarea required name="message" rows={5} placeholder="Tell me what you want to build." className="rounded-2xl border-2 border-[#D7E2EA]/30 bg-transparent px-5 py-4 outline-none placeholder:text-[#D7E2EA]/40" />
            <div className="flex flex-wrap items-center gap-4">
              <ContactButton>Copy message</ContactButton>
              <p className="text-sm text-[#D7E2EA]/70">{status}</p>
            </div>
          </form>
        </FadeIn>
      </div>
      <p className="mt-16 text-center text-xs uppercase tracking-[0.24em] text-[#D7E2EA]/40">
        Built with precision. Deployed with purpose. Secured by design.
      </p>
    </section>
  );
}
