"use client";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ScrollUpButton
 * ------------------------------------------------------------------------------------------------------------------ */

const scrollUpButtonVariants = cva("fixed bottom-[7%] right-[5%] z-50");

type ScrollUpButtonVariantProps = VariantProps<typeof scrollUpButtonVariants>;

type ScrollUpButtonProps = ScrollUpButtonVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ScrollUpButtonVariantProps>;

export function ScrollUpButton({
  className,
  children,
  ...props
}: ScrollUpButtonProps): React.JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // check if the user has scrolled down screen height from the top of the document
  const [showScroll, setShowScroll] = useState(false);

  // useEffect(() => {
  //   const checkScrollTop = () => {
  //     const isScroll = window.scrollY > window.innerHeight / 2;

  //     if (isScroll !== showScroll) {
  //       setShowScroll(isScroll);
  //     }
  //   };

  //   window.addEventListener("scroll", checkScrollTop);

  //   return () => window.removeEventListener("scroll", checkScrollTop);
  // }, [showScroll]);
  return (
    <div {...props} className={scrollUpButtonVariants({ className })}>
      <button
        className={cn(
          "delay-600 translate-y-20 cursor-pointer rounded-full p-4 sm:p-5 opacity-0 transition-all ease-out bg-[rgba(56,59,67,0.3)]",
          showScroll && "!translate-y-0 !opacity-100",
        )}
        onClick={scrollToTop}
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
