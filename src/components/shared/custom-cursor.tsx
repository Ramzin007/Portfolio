"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 220, damping: 26 });
  const springY = useSpring(y, { stiffness: 220, damping: 26 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[80] hidden size-7 rounded-full border border-cyan-300/70 bg-cyan-300/10 mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
