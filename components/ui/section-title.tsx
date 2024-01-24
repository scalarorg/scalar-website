import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority';
import React, { HTMLAttributes } from 'react'

const sectionTitleVariants = cva(
  "text-white text-[31px] leading-[46.5px] lg:text-[84px] lg:leading-[105px] font-bold",
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