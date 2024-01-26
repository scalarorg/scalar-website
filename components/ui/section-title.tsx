import { VariantProps, cva } from 'class-variance-authority';
import React, { HTMLAttributes } from 'react'

const sectionTitleVariants = cva(
  "text-white text-[36px] leading-[52.5px] lg:text-[48px] lg:leading-[66px] xl:text-[84px] xl:leading-[105px] font-bold",
);

type sectionTitleVariantProps = VariantProps<typeof sectionTitleVariants>;

type sectionTitleProps = sectionTitleVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof sectionTitleVariantProps>;

const SectionTitle = ({ children, className }: sectionTitleProps) => {
  return (
    <label className={sectionTitleVariants({ className })}>
      {children}
    </label>
  )
}

export default SectionTitle