import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

function Char({
  char,
  index,
  length,
  progress,
}: {
  char: string;
  index: number;
  length: number;
  progress: MotionValue<number>;
}) {
  const start = index / length;
  const end = Math.min(1, start + 1 / length);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  if (char === " ") {
    return <span> </span>;
  }

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={ref} className={className} style={style}>
      {Array.from(text).map((char, index) => (
        <Char
          key={`${char}-${index}`}
          char={char}
          index={index}
          length={text.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
