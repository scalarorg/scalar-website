import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Image from "next/image";
import Logo from "@/public/icon/logo.svg";
import { cn } from "@/lib/utils";
import { FooterSocialLink } from "@/lib/constants/footer";
import Link from "next/link";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Footer
 * ------------------------------------------------------------------------------------------------------------------ */

const footerWithLogoVariants = cva(
  "flex flex-col gap-3 xl:gap-[28px] xl:w-[394px] w-full border-b border-neutral-8 pb-3 xl:pb-0 xl:border-none",
);

type FooterVariantProps = VariantProps<typeof footerWithLogoVariants>;

type FooterWithLogoProps = FooterVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof FooterVariantProps>;

export function FooterWithLogo({
  className,
  children,
  ...props
}: FooterWithLogoProps): React.JSX.Element {
  return (
    <div className={footerWithLogoVariants({ className })} {...props}>
      <div
        className={cn(
          "w-full flex flex-col font-normal gap-3 lg:gap-[18px] 2xl:gap-[22px] text-neutral-7",
        )}
      >
        <Link href="/">
          <Image
            sizes="100vw"
            className="w-[188px] aspect-[280/31] lg:w-[232px] 2xl:w-[280px] hover:cursor-pointer"
            src={Logo}
            alt={"Scalar logo"}
          />
        </Link>

        <p
          className={cn(
            "text-[11px] leading-4 lg:!leading-[23px] lg:min-w-[310px] w-full 2xl:w-[394px] lg:text-[14px] 2xl:text-[18px] 2xl:!leading-[27px]",
          )}
        >
          Scalar - The most performant EVM and Move compatible, high throughput, interoperable smart contract platform in the space ever seen to date
        </p>
      </div>

      <div
        className={cn(
          "w-[188px] xl:w-[280px] flex gap-x-[24px] 2xl:gap-x-[38px] items-center justify-between xl:justify-start",
        )}
      >
        {FooterSocialLink.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target={"_blank"}
            className={cn(
              "hover:opacity-90 hover:scale-110 transition-all ease-in",
            )}
          >
            <Image
              src={item.icon}
              sizes="100vw"
              className="w-[20px] h-[19px] 2xl:w-[33px] 2xl:h-[33px]"
              key={index}
              alt="icon"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
