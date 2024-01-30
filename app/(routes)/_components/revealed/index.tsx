import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const RevealedVariants = cva(
  "lg:h-[782px] w-full flex flex-col lg:flex-row gap-[60px] lg:items-center justify-between px-5 md:px-auto 2xl:px-[330px] z-0",
);

type RevealedVariantProps = VariantProps<typeof RevealedVariants>;

type RevealedProps = RevealedVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof RevealedVariantProps>;

export default function Revealed({ className }: RevealedProps) {
  return (
    <div className={RevealedVariants({ className })}>
      <FadeIn
        options={{
          direction: "left",
          duration: 0.65,
          type: "tween",
          delay: .2,
        }}
      >
        <label className={cn('font-bold text-[30px] leading-[45px] lg:text-[43px] lg:leading-[55.9px] max-w-[681px]')}>
          Scalar revealed: <span className={cn("font-bold bg-gradient-to-tr bg-clip-text text-transparent from-primary-blue-500 to-[#0EF1F1]")}><br />Immerse</span> yourself in our product demo
        </label>
      </FadeIn>

      <FadeIn
        options={{
          direction: "up",
          duration: 0.65,
          type: "tween",
          delay: .6,
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/880633911?h=1bba3547a9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={cn("rounded-[24px] border border-neutral-6 w-full lg:w-[628px] h-[260px] md:h-[386px]")}
        >
        </iframe>
      </FadeIn>
    </div>
  );
};
