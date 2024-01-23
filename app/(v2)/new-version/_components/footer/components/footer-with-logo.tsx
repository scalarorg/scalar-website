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
  "flex flex-col gap-3 xl:gap-[28px] xl:w-[394px] w-full border-b border-neutral-8 pb-3 xl:pb-0 xl:border-none",
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
      <div className={cn('w-full flex flex-col font-normal gap-3 xl:gap-[22px] text-neutral-7')}>
        <Link
          href='/'
        >
          <Image
            sizes="100vw"
            className="w-[188px] h-[21px] xl:w-[280px] xl:h-[32px] hover:cursor-pointer"
            src={Logo}
            alt={"Scalar logo"}
          />
        </Link>

        <p className={cn('text-[11px] leading-4 xl:w-[394px] xl:text-[18px] xl:leading-[27px]')}>
          Scalar Protocol is the next gen L1 blockchain
          built from the ground up with limitless
          scalability, high throughput by separating consensus and computation.
        </p>
      </div>

      <div className={cn('w-[188px] xl:w-[280px] flex xl:gap-x-[38px] items-center justify-between xl:justify-start')}>
        {FooterSocialLink.map((item, index) =>
          <Link href={item.link} className={cn('hover:opacity-90 hover:scale-110 transition-all ease-in')}>
            <Image
              src={item.icon}
              sizes="100vw"
              className="w-[20px] h-[19px] xl:w-[33px] xl:h-[33px]"
              key={index}
              alt="icon"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
