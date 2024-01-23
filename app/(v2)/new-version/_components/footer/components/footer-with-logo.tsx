import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Image from "next/image";
import Logo from "@/public/icon/logo.svg";
import { cn } from "@/lib/utils";
import { FooterContent, FooterSocialLink } from "@/lib/constants/footer";
import Link from "next/link";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Footer
 * ------------------------------------------------------------------------------------------------------------------ */

const footerWithLogoVariants = cva(
  "flex flex-col gap-3 lg:gap-[28px] lg:w-[394px] w-full border-b border-neutral-8 pb-3 lg:pb-0 lg:border-none",
);

type FooterVariantProps = VariantProps<typeof footerWithLogoVariants>;

type FooterWithLogoProps = FooterVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof FooterVariantProps>;

export function FooterWithLogo({
  className,
  children,
  ...props
}: FooterWithLogoProps): React.JSX.Element {
  return (
    <div className={footerWithLogoVariants({ className })}>
      <div className={cn('w-full flex flex-col font-normal gap-3 lg:gap-[22px] text-neutral-7')}>
        <Image
          sizes="100vw"
          className="w-[188px] h-[21px] lg:w-[280px] lg:h-[32px]"
          src={Logo}
          alt={"Scalar logo"}
        />

        <p className={cn('text-[11px] leading-4 lg:w-[394px] lg:text-[18px] lg:leading-[27px]')}>
          Scalar Protocol is the next gen L1 blockchain
          built from the ground up with limitless
          scalability, high throughput by separating consensus and computation.
        </p>
      </div>

      <div className={cn('w-[188px] lg:w-[280px] flex lg:gap-x-[38px] items-center justify-between lg:justify-start')}>
        {FooterSocialLink.map((item, index) =>
          <Link href={item.link}>
            <Image
              src={item.icon}
              sizes="100vw"
              className="w-[20px] h-[19px] lg:w-[33px] lg:h-[33px]"
              key={index}
              alt="icon"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
