import { FooterContent } from "@/lib/constants/footer"
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributes } from "react";

const footerColumnVariants = cva(
  "flex flex-col gap-2 lg:gap-[18px]",
);

interface AdditionalProps {
  column: FooterContent;
  index: number;
}

type FooterColumnVariantProps = VariantProps<typeof footerColumnVariants>;

type FooterColumnProps = FooterColumnVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof FooterColumnVariantProps> & AdditionalProps;

export default function FooterColumn({
  className,
  column,
  index
}: FooterColumnProps): React.JSX.Element {

  return (
    <div
      className={footerColumnVariants({ className })}
      key={index}
    >
      <label className={cn('capitalize text-[16px] lg:text-[22px] leading-6 lg:leading-[33px] font-bold text-gray-100 shadow-text')}>
        {column.title}
      </label>

      <ul className={cn('flex flex-col gap-2')}>
        {column.links.map((item, i) =>
          <Link
            key={i}
            href={item.link}
            className={cn('capitalize text-[13px] lg:text-[22px] leading-5 lg:leading-[33px] text-neutral-6')}
          >
            {item.name}
          </Link>
        )}
      </ul>
    </div>
  )
}