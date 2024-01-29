import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Image from "next/image";
import Logo from "@/public/icon/logo-white-large.svg";
import LogoSmall from "@/public/icon/logo-small.svg";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/app/(routes)/_components/header/sidebar";
import Link from "next/link";
import { ArrowTopRightIcon } from "@/components/icon/arrow-top-right";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Header
 * ------------------------------------------------------------------------------------------------------------------ */

const headerVariants = cva(
  "fixed top-0 z-50 sm:pt-12 max-sm:py-4 max-sm:bg-black/70 w-full",
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
      <div
        className={
          "flex items-center justify-between container max-sm:!px-[1rem]"
        }
      >
        <div className={"relative max-sm:hidden"}>
          <Link href={"/"}>
            <Image
              width={280}
              height={30.86}
              src={Logo}
              className={"aspect-[280/30.86] max-md:w-[200px]"}
              alt={"Scalar logo"}
            />
          </Link>
          <div
            className={
              "absolute translate-y-4 lg:translate-y-5 text-lg lg:text-xl whitespace-nowrap left-0 text-neutral-1"
            }
          >
            The Future of Scalable
          </div>
        </div>
        <Link href={"/"} className={"sm:hidden"}>
          <div className={"flex gap-2 items-center"}>
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
        </Link>

        <div className={"flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center"}>
          <button
            className={cn(
              "xl:px-8 hover:shadow-button-hover transition-all rounded-xl active:bg-neutral-12 px-2 sm:px-4 md:px-6 xl:py-3 py-1.5 [border-image-slice:7] sm:[border-image-slice:6] [border-image-width:5px] [border-image-repeat:round] [border-image-source:url(/icon/border-gradient.svg)] font-bold text-sm sm:text-base md:text-lg text-white border-2 flex gap-2 sm:gap-2.5 md:gap-4 lg:gap-6 xl:gap-8 items-center",
            )}
          >
            <div>Explore more</div>
            <ArrowTopRightIcon className={"w-2.5 sm:w-3 aspect-square"} />
          </button>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
