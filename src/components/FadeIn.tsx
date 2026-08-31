import { motion, type HTMLMotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type FadeInProps = {
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLMotionProps<"div">, "children">;

export default function FadeIn({
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
  ...rest
}: FadeInProps) {
  const Component = motion.create(as);
  const { style, ...motionRest } = rest;

  return (
    <Component
      initial={{ opacity: 0, x, y, rotateX: 11, scale: 0.985 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: false, margin: "40px", amount: 0.12 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={{ transformPerspective: 1100, transformOrigin: "center bottom", ...style }}
      {...motionRest}
    >
      {children}
    </Component>
  );
}
