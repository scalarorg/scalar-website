import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import FooterColumn from "./components/footer-column";
import { FooterContent } from "@/lib/constants/footer";
import { FooterWithLogo } from "./components/footer-with-logo";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Footer
 * ------------------------------------------------------------------------------------------------------------------ */

const footerVariants = cva(
  "bg-transparent flex flex-col gap-3 lg:gap-[24px] h-full px-[18px] lg:px-[115px] py-[32px] lg:py-[117px]",
);

type FooterVariantProps = VariantProps<typeof footerVariants>;

type FooterProps = FooterVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof FooterVariantProps>;

export function Footer({
  className,
  children,
  ...props
}: FooterProps): React.JSX.Element {
  return (
    <div
      className={footerVariants({ className })}
      {...props}
    >
      <div className={cn('flex flex-col gap-6 lg:flex-row lg:gap-[161px] lg:justify-between')}>
        {/* Footer column with Logo */}
        <FooterWithLogo />

        {/* Footer column */}
        <div className={cn("w-full grid grid-cols-2 pb-3 lg:pb-0 border-b border-neutral-8 lg:border-none lg:flex gap-x-2 gap-y-3 lg:justify-between")}>
          {FooterContent.map((column: FooterContent, index: number) =>
            <FooterColumn column={column} index={index} />
          )}
        </div>
      </div>

      {/* Footer copyright */}
      <div className={cn("w-full flex gap-1 text-neutral-7 font-bold lg:text-[22px] lg:leading-[33px]")}>
        Copyright ©
        <span className="text-white">Scalar</span>
        | Designed by Scalar
      </div>
    </div>
  );
}
