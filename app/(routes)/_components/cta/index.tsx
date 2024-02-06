"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import SectionTitle from "@/components/ui/section-title";
import { CarouselLogo } from "./components/carousel";
import { Hackathon } from "./components/hackathon";
import { HackathonMobile } from "@/app/(routes)/_components/cta/components/hackathon-mobile";
import { FadeIn } from "@/components/motion/fade-in";
import { Subscription } from "@/app/(routes)/_components/cta/components/subscription";

const ctaVariants = cva(
  "relative z-0 max-sm:pb-[60px] max-sm:pt-[60px] sm:py-[160px] lg:py-[100px] 3xl:py-[192px] md:pt-0 w-full overflow-hidden bg-star bg-center bg-no-repeat bg-cover flex flex-col gap-[60px] sm:gap-[192px] items-center justify-center",
);

type CtaVariantProps = VariantProps<typeof ctaVariants>;

type CtaProps = CtaVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CtaVariantProps>;

export function Cta({ className }: CtaProps) {
  return (
    <div className={ctaVariants({ className })}>
      {/* Hackathons & Grants Won Section */}
      <div className={cn("w-full flex flex-col gap-[24px] items-center")}>
        <SectionTitle className={"max-sm:text-center"}>
          Hackathons & <br className={"sm:hidden"} />
          Grants Won
        </SectionTitle>

        {/* Card Section */}
        <FadeIn
          options={{
            direction: "up",
            duration: 0.65,
            type: "tween",
            delay: 0.1,
          }}
          className={"w-full"}
        >
          <Hackathon
            className={"max-lg:hidden container max-2xl:max-w-[1100px]"}
          />
          <HackathonMobile className={"lg:hidden container"} />
        </FadeIn>
      </div>

      {/* Team Background */}
      <div
        className={cn(
          "w-full flex flex-col gap-[24px] lg:gap-[20px] items-center",
        )}
      >
        <SectionTitle>Team Background</SectionTitle>

        {/* Carousel Brand*/}
        <CarouselLogo />
      </div>

      <Subscription />
    </div>
  );
}
