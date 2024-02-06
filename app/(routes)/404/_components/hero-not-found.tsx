import BuildingValueBackground from "@/public/building-value.webp";
import Image from "next/image";
import HeroBackgroundBottom from "@/public/hero-background-bottom.webp";
import { Subscription } from "@/app/(routes)/_components/cta/components/subscription";
import { SolarNavigate } from "@/app/(routes)/_components/hero-solar-system/solar-navigate";

export function HeroNotFound() {
  return (
    <div className={"relative text-neutral-2 z-0 overflow-hidden"}>
      <Image
        src={BuildingValueBackground}
        alt={"Building value background"}
        className={
          "absolute top-0 left-1/2 inset-x-0 -translate-x-1/2 w-full -z-[9] object-cover object-center aspect-[1920/2196]"
        }
      />
      <Image
        src={HeroBackgroundBottom}
        alt={"Building value background"}
        className={
          "absolute bottom-0 left-1/2 inset-x-0 w-full -translate-x-1/2 -z-10 object-cover object-center aspect-[1920/1873]"
        }
      />
      <Image
        src={HeroBackgroundBottom}
        alt={"Building value background"}
        className={
          "absolute top-1/2 -translate-y-1/2 left-1/2 inset-x-0 w-full -translate-x-1/2 -z-10 object-cover object-center aspect-[1920/1873]"
        }
      />
      <div
        className={
          "pt-[32vw] container space-y-[22px] sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-32"
        }
      >
        <div id={"intro"} className={"max-sm:hidden sm:pb-[21px]"}></div>
        <div className={"flex flex-col items-center"}>
          <h1
            className={
              "3xl:leading-[200px] text-center 3xl:text-[200px] text-[128px] leading-[128px] font-semibold text-neutral-1 sm:text-[140px] md:text-[152px] lg:text-[164px] xl:text-[176px] 2xl:text-[188px]"
            }
          >
            404
          </h1>
          <div
            className={
              "space-y-6 3xl:space-y-[68px] text-center flex flex-col items-center sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16"
            }
          >
            <p
              className={
                "3xl:text-[54px] 3xl:leading-[67.5px] text-[31px] font-semibold leading-[46.5px] text-neutral-1 sm:text-[36px] lg:text-[42px] xl:text-[45px] 2xl:text-[50px]"
              }
            >
              Page not found
            </p>
            <p
              className={
                "text-base leading-[24px] 3xl:text-[34px] sm:text-lg lg:text-xl 2xl:text-2xl"
              }
            >
              This page is under construction
              <br />
              Please come back later
            </p>
            <SolarNavigate
              className={"text-lg lg:text-xl xl:text-2xl text-neutral-1"}
              large
            >
              Go Home
            </SolarNavigate>
          </div>
        </div>
      </div>
      <div
        className={
          "pt-[75px] 3xl:pt-[335px] mb-[49px] 3xl:mb-[122px] sm:pt-[120px] md:pt-[165px] lg:pt-[200px] xl:pt-[240px] 2xl:pt-[320px] sm:mb-[60px] md:mb-[70px] lg:mb-[80px] xl:mb-[85px] 2xl:mb-[90px]"
        }
      >
        <Subscription />
      </div>
    </div>
  );
}
