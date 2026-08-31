import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-[#57d8ff] via-[#B600A8] to-[#BE4C00]"
      style={{ scaleX, width: "100%" }}
    />
  );
}
