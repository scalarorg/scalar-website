"use client";

import SectionTitle from "@/components/ui/section-title";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, useEffect, useState } from "react";
import ADVANTAGE_EARTH_SMALL from "@/public/advantage-earth-small.webp";
import ADVANTAGE_MARS_SMALL from "@/public/advantage-mars-small.webp";
import GROW_EFFECT from "@/public/grow-effect.svg";
import ADVANTAGE_MARS_LARGE from "@/public/advantage-mars-large.svg";
import ADVANTAGE_EARTH_LARGE from "@/public/advantage-earth-large.svg";
import ADVANTAGE_MOON_LARGE from "@/public/advantage-moon-large.svg";
import Image from "next/image";
import {
  ScalarAdvantageContentDesktop,
  ScalarAdvantageContentMobile,
} from "@/lib/constants/scalar-advantage-content";
import AdvantageItem from "./advantage-item";
import { FadeIn } from "@/components/motion/fade-in";

const ScalarAdvantageVariants = cva(
  "relative flex z-0 justify-center mb-[60px] lg:h-[90vh] lg:pb-[220px] border-0 border-dashed lg:border-2 lg:border-neutral-11 lg:border-t-0 lg:border-l-0 lg:border-r-0 lg:rounded-[160%]",
);

type ScalarAdvantageVariantProps = VariantProps<typeof ScalarAdvantageVariants>;

type ScalarAdvantageProps = ScalarAdvantageVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ScalarAdvantageVariantProps>;

const ScalarAdvantage = ({ className }: ScalarAdvantageProps) => {
  const [widthScreen, setWidthScreen] = useState<number>(() =>
    typeof window === "undefined" ? 1540 : window.innerWidth,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResizeWidth = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);

    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  return (
    <div
      className={cn(
        "w-full h-[100vh] bg-advantage bg-center bg-no-repeat bg-cover",
      )}
    >
      <div className={ScalarAdvantageVariants({ className })}>
        {/* Background */}
        {/* Mobile */}
        <Image
          src={GROW_EFFECT}
          alt=""
          sizes="100vw"
          className={cn(
            "xl:hidden pointer-events-none absolute select-none -z-10 max-sm:top-0 -top-[22%] -left-[30%]",
          )}
        />
        <Image
          src={ADVANTAGE_EARTH_SMALL}
          alt="Earth"
          width={98}
          height={121}
          className={cn("lg:hidden absolute -right-[10px] top-[28%] z-0")}
        />

        <Image
          src={ADVANTAGE_MARS_SMALL}
          alt="Mars"
          width={60}
          height={63}
          className={cn("lg:hidden absolute left-0 bottom-[27%] z-0")}
        />

        {/* Desktop */}
        <Image
          src={GROW_EFFECT}
          alt=""
          sizes="100vw"
          className={cn(
            "hidden pointer-events-none xl:block absolute select-none -z-10 -top-1/2 xl:-top-[60%] -left-[140px]",
          )}
        />

        {/* Plant */}
        <Image
          src={ADVANTAGE_MARS_LARGE}
          alt=""
          sizes="100vw"
          className={cn(
            "hidden lg:block w-[234px] h-[247px] 2xl:w-[354px] 2xl:h-[367px] absolute select-none -z-10 -left-[30px] bottom-0",
          )}
        />

        <Image
          src={ADVANTAGE_EARTH_LARGE}
          alt=""
          sizes="100vw"
          width={477}
          height={456}
          className={cn(
            "hidden lg:block w-[341px] h-[327px] 2xl:w-[477px] 2xl:h-[456px] absolute select-none -z-10 left-[283px] 2xl:left-[593px] -bottom-[18%] 2xl:-bottom-[24%]",
          )}
        />

        <Image
          src={ADVANTAGE_MOON_LARGE}
          alt=""
          width={392}
          height={404}
          className={cn(
            "hidden lg:block w-[322px] h-[347px] 2xl:w-[392px] 2xl:h-[404px] absolute select-none -z-10 -right-[64px] top-[18%]",
          )}
        />

        {/* Block content */}
        <div className="px-5 lg:px-0 py-[60px] w-full flex flex-col items-center gap-[16px] lg:gap-[64px] 2xl:gap-0 z-10 container lg:relative">
          <SectionTitle className="z-10">Scalar Advantage</SectionTitle>

          {/* Content Mobile */}
          <FadeIn
            options={{
              direction: "up",
              duration: 0.65,
              type: "tween",
              delay: 0.2,
            }}
          >
            <div className="lg:hidden w-full flex flex-col justify-between gap-[24px]">
              {ScalarAdvantageContentMobile.map((item, index) => (
                <AdvantageItem item={item} key={index} size={widthScreen} />
              ))}
            </div>
          </FadeIn>

          {/* Content Desktop */}
          <FadeIn
            className={"relative w-full"}
            options={{
              direction: "up",
              duration: 0.65,
              type: "tween",
              delay: 0.2,
            }}
          >
            <div className="hidden w-full lg:flex flex-row justify-between lg:gap-0 2xl:relative">
              {ScalarAdvantageContentDesktop.map((item, index) => (
                <AdvantageItem item={item} key={index} size={widthScreen} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ScalarAdvantage;
