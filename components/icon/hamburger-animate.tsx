"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { figmaSlow } from "@/components/motion/transition";
import { useState } from "react";

export const HamburgerAnimateIcon = ({ className, ...props }: any) => {
  const [isHover, setIsHover] = useState(false);
  const line = cn(
    "rounded-[10px] h-[3px] sm:h-1 bg-white w-full transition-colors duration-700",
    isHover && "!bg-[linear-gradient(265deg,#00FFBD_-5.84%,#025B8C_111.58%)]",
  );
  return (
    <motion.div
      className={cn(
        "w-[27px] aspect-square flex flex-col transition-all justify-between items-end",
        isHover && "!items-start",
        className,
      )}
      onHoverStart={(isHover) => setIsHover(true)}
      onHoverEnd={(isHover) => setIsHover(false)}
      {...props}
    >
      <div className={cn(line)}></div>
      <motion.div
        transition={{ ...figmaSlow, duration: 0.8 }}
        layout
        className={cn(line, "w-[70%]")}
      ></motion.div>
      <div className={cn(line)}></div>
    </motion.div>
  );
};
