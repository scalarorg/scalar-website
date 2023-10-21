"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2, textVariant3 } from "@/styles/motion";
import { cx } from "class-variance-authority";

export function TypingText({
  title,
  className,
}: {
  title: string;
  className?: string;
}): React.JSX.Element {
  return (
    <motion.p
      key={title}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={textContainer}
      className={cx("font-bold text-neutral-500 text-sm", className)}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span
          custom={index}
          variants={textVariant2}
          key={`${title}-${index}-${letter}`}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function TitleText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element {
  return (
    <motion.h2
      viewport={{ once: true }}
      variants={textVariant3}
      initial="hidden"
      whileInView="show"
      className={className}
    >
      {children}
    </motion.h2>
  );
}
