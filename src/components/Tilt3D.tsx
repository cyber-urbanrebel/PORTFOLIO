import { useRef, type ReactNode } from "react";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  shine?: boolean;
};

export default function Tilt3D({ children, className = "", max = 11, shine = true }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    const glare = el.querySelector<HTMLElement>("[data-glare]");
    if (glare) glare.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      data-interactive
      className={`relative ${className}`}
      style={{
        transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
        transition: "transform 0.35s ease",
        willChange: "transform",
      }}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el || window.matchMedia("(hover: none)").matches) return;
        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateX = (0.5 - py) * max;
        const rotateY = (px - 0.5) * max;
        el.style.transition = "transform 0.08s ease-out";
        el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(18px)`;
        const glare = el.querySelector<HTMLElement>("[data-glare]");
        if (glare) {
          glare.style.opacity = "1";
          glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.22), transparent 55%)`;
        }
      }}
      onMouseLeave={reset}
    >
      {children}
      {shine ? (
        <span
          data-glare
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-overlay transition-opacity duration-200"
        />
      ) : null}
    </div>
  );
}
