import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Image from "next/image";
import Logo from "@/public/icon/logo.svg";
import LogoSmall from "@/public/icon/logo-small.svg";
import { LongArrowRightIcon } from "@/components/icon/long-arrow-right";
import { cn } from "@/lib/utils";
import { HamburgerIcon } from "@/components/icon/hamburger";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Header
 * ------------------------------------------------------------------------------------------------------------------ */

const headerVariants = cva(
  "fixed top-0 flex items-center justify-between z-10 pt-12 px-[5%] w-full",
);

type HeaderVariantProps = VariantProps<typeof headerVariants>;

type HeaderProps = HeaderVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof HeaderVariantProps>;

export function Header({
  className,
  children,
  ...props
}: HeaderProps): React.JSX.Element {
  return (
    <div {...props} className={headerVariants({ className })}>
      <Image
        width={280}
        height={30.86}
        src={Logo}
        className={"aspect-[280/30.86] max-md:w-[200px] max-sm:hidden"}
        alt={"Scalar logo"}
      />
      <div className={"sm:hidden flex gap-2 items-center"}>
        <Image
          width={35}
          height={27.84}
          src={LogoSmall}
          className={"aspect-[35/27.84]"}
          alt={"Scalar logo"}
        />
        <div className={"text-[11px] font-bold text-neutral-3"}>
          The Future of
          <br />
          Scalable
        </div>
      </div>

      <div className={"flex gap-6 sm:gap-8 items-center"}>
        <button
          className={cn(
            "xl:px-8 px-3 sm:px-4 md:px-6 xl:py-3 py-2 [border-image-slice:5] [border-image-width:5px] [border-image-repeat:round] [border-image-source:url(/icon/border-gradient.svg)] font-bold text-sm sm:text-base md:text-lg text-white border-2 flex gap-2 sm:gap-2.5 items-center",
          )}
        >
          <div>Explore tokens</div>
          <LongArrowRightIcon className={"max-sm:w-4 aspect-[3/2]"} />
        </button>
        <HamburgerIcon className={"text-white aspect-square max-sm:w-6"} />
      </div>
    </div>
  );
}