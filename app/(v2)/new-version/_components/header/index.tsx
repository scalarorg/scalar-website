import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Image from "next/image";
import Logo from "@/public/icon/logo.svg";
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
      <Image width={280} height={30.86} src={Logo} alt={"Scalar logo"} />
      <div className={"flex gap-8 items-center"}>
        <button
          className={cn(
            "px-8 py-3 border-indigo-500 font-bold text-lg text-white border-2 rounded-xl flex gap-2.5 items-center",
          )}
        >
          <div>Explore tokens</div>
          <LongArrowRightIcon />
        </button>
        <HamburgerIcon className={"text-white"} />
      </div>
    </div>
  );
}
