import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { FadeIn } from "@/components/motion/fade-in";

const sectionTitleVariants = cva(
  "text-white text-[31px] leading-[46.5px] lg:text-[48px] lg:leading-[66px] xl:text-[67px] xl:leading-[83.75px] font-bold",
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
      <label className={sectionTitleVariants({ className })}>{children}</label>
    </FadeIn>
  );
};

export default SectionTitle;
