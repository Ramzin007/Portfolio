"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#f43f5e)]"
      style={{ scaleX }}
    />
  );
}
