"use client";
import { motion } from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";
import { Fragment, HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SidebarClose from "@/public/icon/sidebar-close.svg";
import LogoWhite from "@/public/icon/logo-white.svg";
import { Navigator } from "@/app/(routes)/_components/header/navigator";
import Logo from "@/public/icon/logo.svg";
import LogoSmall from "@/public/icon/logo-small.svg";
import CloseMobile from "@/public/icon/close-mobile.svg";
import Link from "next/link";
import { ArrowTopRightIcon } from "@/components/icon/arrow-top-right";
import { HamburgerAnimateIcon } from "@/components/icon/hamburger-animate";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Sidebar
 * ------------------------------------------------------------------------------------------------------------------ */

const sidebarVariants = cva(
  "fixed w-full h-full -top-[10%] right-0 object-cover object-center bg-[url(/sidebar-background.webp)] flex flex-end opacity-0 bg-black invisible duration-300 ease-in-out transition-all",
);

type SidebarVariantProps = VariantProps<typeof sidebarVariants>;

type SidebarProps = SidebarVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof SidebarVariantProps>;

export function Sidebar({
  className,
  ...props
}: SidebarProps): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  return (
    <Fragment>
      <HamburgerAnimateIcon
        onClick={() => setSelected((selected) => !selected)}
        className={cn("text-white aspect-square max-sm:w-5 cursor-pointer")}
      />
      <div
        className={cn(
          "w-full top-0 fixed inset-x-0 container pt-4 sm:pt-[3vh] z-[8] bg-transparent invisible opacity-0 transition-opacity duration-700",
          selected && "opacity-100 visible",
          "max-sm:hidden",
        )}
      >
        <div className={"max-w-full flex justify-between items-center"}>
          <Link href={"/"} passHref>
            <Image
              src={LogoWhite}
              width={124.59}
              height={99.1}
              className={"aspect-[124.59/99.1] w-[124.59px]"}
              alt={"Scalar logo white"}
            />
          </Link>
          <Image
            src={SidebarClose}
            alt={"Sidebar close"}
            className={"cursor-pointer translate-x-4 -translate-y-0.5"}
            onClick={() => setSelected((selected) => !selected)}
          />
        </div>
      </div>
      <div
        className={cn(
          "flex items-center justify-between container max-sm:!px-[1rem]",
          "w-full top-0 fixed inset-x-0 container mt-4 sm:mt-[48px] z-[8] bg-transparent invisible opacity-0 transition-opacity duration-700",
          selected && "opacity-100 visible",
          "sm:hidden",
        )}
      >
        <Link className={"max-sm:hidden"} href={"/"} passHref>
          <Image
            width={280}
            height={30.86}
            src={Logo}
            className={"aspect-[280/30.86] max-md:w-[200px]"}
            alt={"Scalar logo"}
          />
        </Link>
        <Link className={"sm:hidden"} href={"/"} passHref>
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
              "xl:px-8 hover:shadow-button-hover transition-all rounded-xl active:bg-neutral-12 active:shadow-button-active px-2 sm:px-4 md:px-6 xl:py-3 py-1.5 [border-image-slice:6] sm:[border-image-slice:5] [border-image-width:5px] [border-image-repeat:round] [border-image-source:url(/icon/border-gradient.svg)] font-bold text-sm sm:text-base md:text-lg text-white border-2 flex gap-2 sm:gap-2.5 items-center",
            )}
          >
            <div>Explore more</div>
            <ArrowTopRightIcon className={"w-2.5 sm:w-3 aspect-square"} />
          </button>
          <Image
            className={
              "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] cursor-pointer sm:scale-125"
            }
            src={CloseMobile}
            alt={"Close mobile"}
            onClick={() => setSelected((selected) => !selected)}
          />
        </div>
      </div>
      <div
        className={cn(
          "w-full flex justify-end top-0 fixed inset-x-0 container mt-[15vh] sm:mt-[20vh] z-[8] bg-transparent invisible opacity-0 transition-all duration-300",
          selected && "opacity-100 visible",
        )}
      >
        <Navigator />
      </div>
      <div
        {...props}
        className={cn(
          sidebarVariants({ className }),
          selected && "visible opacity-100 top-0 z-[6]",
        )}
      >
        <motion.span
          className={"fixed top-[5vh] right-[14vw] aspect-square w-[27px]"}
          style={{
            animationDuration: "1000ms",
            animationTimingFunction: "ease",
            translateX: "50%",
            translateY: "-42%",
          }}
          animate={{
            width: selected ? "128vh" : "27px",
          }}
        >
          <motion.span
            className={
              "block absolute top-1/2 z-[4] left-1/2 rounded-tl-[200%] rounded-tr-[200%] rounded-br-[200%] rounded-bl-[200%] bg-auto bg-repeat [background-position-x:0%,0%] [background-position-y:0%,0%] bg-scroll bg-origin-padding bg-clip-border bg-[radial-gradient(37.54%_37.54%_at_50.07%_47.01%,rgba(173,26,175,0.50)_0%,rgba(36,93,137,0.00)_100%)]"
            }
            initial={{
              width: "90%",
              height: "90%",
              opacity: 0,
            }}
            style={{
              translateX: "-75%",
              translateY: "-52%",
              animationDuration: "800ms",
              animationTimingFunction: "ease",
              animationDelay: "0.05s",
            }}
            animate={{
              opacity: selected ? 0.7 : 0,
              width: selected ? "145%" : "90%",
              height: selected ? "145%" : "90%",
            }}
          ></motion.span>
          <motion.em
            className={
              "block w-full h-full absolute top-0 rounded-tl-[200%] rounded-tr-[200%] rounded-br-[200%] rounded-bl-[200%] bg-auto bg-repeat [background-position-x:0%,0%] [background-position-y:0%,0%] bg-scroll bg-origin-padding bg-clip-border bg-[radial-gradient(37.54%_37.54%_at_50.07%_47.01%,rgba(48,239,152,0.70)_0%,rgba(36,93,137,0.00)_100%)] z-[5]"
            }
          ></motion.em>
          <motion.span
            className={
              "block absolute top-[65%] z-[6] left-[25%] rounded-tl-[200%] rounded-tr-[200%] rounded-br-[200%] rounded-bl-[200%] bg-auto bg-repeat [background-position-x:0%,0%] [background-position-y:0%,0%] bg-scroll bg-origin-padding bg-clip-border bg-[radial-gradient(37.54%_37.54%_at_50.07%_47.01%,rgba(57,98,241,0.50)_0%,rgba(36,93,137,0.00)_100%)]"
            }
            initial={{
              width: "90%",
              height: "90%",
              opacity: 0,
            }}
            style={{
              translateX: "-36%",
              translateY: "-43%",
              animationDuration: "700ms",
              animationTimingFunction: "ease",
            }}
            animate={{
              opacity: selected ? 1 : 0,
              width: selected ? "180%" : "90%",
              height: selected ? "180%" : "90%",
            }}
          ></motion.span>
        </motion.span>
      </div>
    </Fragment>
  );
}
