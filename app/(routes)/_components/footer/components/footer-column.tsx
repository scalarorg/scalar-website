import { FooterContent } from "@/lib/constants/footer";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributes } from "react";

const footerColumnVariants = cva("flex flex-col gap-2 xl:gap-[18px]");

interface AdditionalProps {
  column: FooterContent;
}

type FooterColumnVariantProps = VariantProps<typeof footerColumnVariants>;

type FooterColumnProps = FooterColumnVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof FooterColumnVariantProps> &
  AdditionalProps;

export default function FooterColumn({
  className,
  column,
}: FooterColumnProps): React.JSX.Element {
  return (
    <div className={footerColumnVariants({ className })}>
      <label
        className={cn(
          "capitalize text-[16px] xl:text-[22px] leading-6 xl:leading-[33px] font-bold text-gray-100 hover:text-primary-cyan-500 cursor-pointer",
        )}
      >
        {column.title}
      </label>

      <ul className={cn("flex flex-col gap-2")}>
        {column.links.map((item, i) => (
          <Link
            key={`footer-column-${i}-${item.name}`}
            href={item.link}
            className={cn(
              "capitalize text-[13px] xl:text-[22px] leading-5 xl:leading-[33px] text-neutral-6 hover:text-primary-cyan-800 ease-linear transition-all",
            )}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
