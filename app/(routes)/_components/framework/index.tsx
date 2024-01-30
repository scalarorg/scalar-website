import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const FrameworkVariants = cva(
  "h-[300px] lg:h-[682px] w-full bg-star bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row lg:items-center justify-between px-5 2xl:px-[330px]",
);

type FrameworkVariantProps = VariantProps<typeof FrameworkVariants>;

type FrameworkProps = FrameworkVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof FrameworkVariantProps>;

export default function Framework({ className }: FrameworkProps) {
  return (
    <div className={FrameworkVariants({ className })}>
      <FadeIn
        options={{
          direction: "left",
          duration: 0.65,
          type: "tween",
          delay: .2,
        }}
      >
        <label className={cn('font-bold text-[20px] leading-[28px] lg:text-[43px] lg:leading-[55.9px]')}>
          Title is needed to be like this <span className={cn("text-primary-cyan-500")}>Framework</span> dont't break it!
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
          src="https://www.youtube.com/embed/zC0BkZoUT2g?si=SXaL-MZUh9N3NbE4&amp;start=132"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={cn("rounded-[24px] border border-neutral-6 w-full lg:w-[748px] h-[200px] md:[h-390px] lg:h-[459px]")}
        >
        </iframe>
      </FadeIn>
    </div>
  );
};
