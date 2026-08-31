import { useEffect, useRef } from "react";

export default function CursorMotion() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    let hover = false;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      hover = Boolean(target?.closest("a, button, input, textarea, [data-interactive]"));
    };

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      const scale = hover ? 1.85 : 1;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.x - 18}px, ${pos.y - 18}px, 0) scale(${scale})`;
      }
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mouse.x - 3}px, ${mouse.y - 3}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.classList.add("has-cursor");
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden>
      <div
        ref={ring}
        className="absolute h-9 w-9 rounded-full border border-[#D7E2EA]/80 mix-blend-difference"
      />
      <div ref={dot} className="absolute h-1.5 w-1.5 rounded-full bg-[#D7E2EA] mix-blend-difference" />
    </div>
  );
}
