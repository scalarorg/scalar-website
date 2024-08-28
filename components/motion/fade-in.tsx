"use client";
import { motion } from "framer-motion";

import { fadeIn, FadeInProps } from "@/styles/motion";

export function FadeIn({
  children,
  className,
  options,
}: {
  children: React.ReactNode;
  className?: string;
  options: FadeInProps;
}): React.JSX.Element {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
      variants={fadeIn(options)}
    >
      {children}
    </motion.div>
  );
}
