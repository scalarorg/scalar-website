import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { FadeIn } from "@/components/motion/fade-in";

const sectionTitleVariants = cva(
  "text-white text-[31px] leading-[46.5px] lg:text-[48px] lg:leading-[66px] xl:text-[51px] xl:leading-[63.75px] 2xl:text-[67px] 2xl:leading-[83.75px] font-bold",
);

type sectionTitleVariantProps = VariantProps<typeof sectionTitleVariants>;

type sectionTitleProps = sectionTitleVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof sectionTitleVariantProps>;

const SectionTitle = ({ children, className }: sectionTitleProps) => {
  return (
    <FadeIn
      options={{
        direction: "right",
        duration: 0.65,
        type: "tween",
        delay: 0,
      }}
    >
      <h2 className={sectionTitleVariants({ className })}>{children}</h2>
    </FadeIn>
  );
};

export default SectionTitle;
