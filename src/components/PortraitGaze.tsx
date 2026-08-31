import { useEffect, useRef } from "react";

const EYES = [
  { id: "left", left: 34.6, top: 47.6, w: 14.4, h: 9.6 },
  { id: "right", left: 57.4, top: 47.5, w: 14.4, h: 9.6 },
];

export default function PortraitGaze() {
  const plateRefs = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight * 0.42 };
    let frame = 0;

    const look = () => {
      plateRefs.current.forEach((plate) => {
        if (!plate) return;
        const socket = plate.parentElement;
        if (!socket) return;
        const rect = socket.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (mouse.x - cx) / Math.max(window.innerWidth * 0.45, 1);
        const dy = (mouse.y - cy) / Math.max(window.innerHeight * 0.45, 1);
        const x = Math.max(-1, Math.min(1, dx)) * rect.width * 0.14;
        const y = Math.max(-1, Math.min(1, dy)) * rect.height * 0.12;
        plate.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      frame = requestAnimationFrame(look);
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(look);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="portrait-gaze" aria-hidden>
      {EYES.map((eye, index) => (
        <span
          key={eye.id}
          className="portrait-eye"
          style={{
            left: `${eye.left}%`,
            top: `${eye.top}%`,
            width: `${eye.w}%`,
            height: `${eye.h}%`,
          }}
        >
          <img
            src="/assets/hero-portrait.png"
            alt=""
            draggable={false}
            className="portrait-eye-plate"
            style={{
              width: `${(100 / eye.w) * 100}%`,
              height: `${(100 / eye.h) * 100}%`,
              left: `${-(eye.left / eye.w) * 100}%`,
              top: `${-(eye.top / eye.h) * 100}%`,
            }}
            ref={(node) => {
              plateRefs.current[index] = node;
            }}
          />
        </span>
      ))}
    </div>
  );
}
