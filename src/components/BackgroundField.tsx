import { useEffect, useRef } from "react";

export default function BackgroundField() {
  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = field.current;
    if (!el) return;
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 40;
      const y = (event.clientY / window.innerHeight - 0.5) * 40;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div ref={field} className="absolute inset-0 transition-transform duration-300 ease-out">
        <div className="orb-cyan absolute -left-24 top-[18%] h-72 w-72 rounded-full bg-[#57d8ff]/16 blur-3xl" />
        <div className="orb-magenta absolute -right-16 top-[55%] h-80 w-80 rounded-full bg-[#B600A8]/14 blur-3xl" />
      </div>
    </div>
  );
}
