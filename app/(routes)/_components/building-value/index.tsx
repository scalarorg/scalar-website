import Image from "next/image";

import { ValueItem } from "./value-item";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import BuildingValueBackground from "@/public/building-value.webp";
import HeroBackgroundBottom from "@/public/hero-background-bottom.webp";
import MilkyWay from "@/public/milky-way-1.webp";

const VALUES = [
  {
    icon: "/icon/tps.svg",
    value: "< 1 second",
    description: "Time to Finality",
  },
  {
    icon: "/icon/low-to-no.svg",
    value: "20+ Chains",
    description: "& EVM Compatible",
  },
  {
    icon: "/icon/blockchain.svg",
    value: "L0 & L1",
    description: "Hybrid Blockchain",
  },
  {
    icon: "/icon/hybrid.svg",
    value: "< $0.001",
    description: "Gas fees",
  },
  {
    icon: "/icon/dag.svg",
    value: "400,000",
    description: "Transactions per second",
  },
  {
    icon: "/icon/chart.svg",
    value: "Novel DAG",
    description: "& Ultra-Light Client",
  },
];
export function BuildingValue() {
  return (
    <div className={"relative text-neutral-2 z-0 overflow-hidden"}>
      <Image
        src={BuildingValueBackground}
        alt={"Building value background"}
        className={
          "absolute -top-20 max-md:top-0 left-1/2 inset-x-0 -translate-x-1/2 w-full -z-[9] object-cover object-center aspect-[1920/2196]"
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
        src={MilkyWay}
        alt={"Milky way"}
        className={
          "absolute top-[147px] left-1/2 -translate-x-1/2 z-0 w-[1918.5px] object-cover object-center aspect-[1918/316] h-[316px]"
        }
      />
      <div
        className={
          "pt-[40vw] container pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[120px] xl:pb-[140px] 2xl:pb-[150px] space-y-[22px] sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-32"
        }
      >
        <div id={"intro"} className={"max-sm:hidden sm:pb-[21px]"}></div>
        <div
          className={
            "space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-8 2xl:space-y-10 text-center flex flex-col items-center"
          }
        >
          <FadeIn
            options={{
              direction: "right",
              duration: 0.65,
              type: "tween",
              delay: 0,
            }}
          >
            <h1
              className={
                "-mt-[360px] max-lg:-mt-40 max-md:-mt-20 first-line:text-shadow-h1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] xl:!leading-[84px] 2xl:leading-[125px] font-bold max-w-2xl xl:max-w-3xl 2xl:max-w-7xl !leading-normal sm:leading-normal"
              }
            >
              Unified and
              {" "}
              <span className={"text-primary-cyan-500"}>shared security and liquidity</span>
              {" "}
              to secure blockchains & aggregate siloed TVL
            </h1>
          </FadeIn>
          {/* <FadeIn
            options={{
              direction: "right",
              duration: 0.6,
              type: "tween",
              delay: 0.2,
            }}
          >
            <p
              className={
                "text-[13px] sm:text-base font-medium md:text-lg lg:text-xl xl:text-2xl text-neutral-1 max-w-xs sm:max-w-xl md:max-w-2xl xl:max-w-4xl"
              }
            >
              <span className={"text-primary-cyan-500"}>
                Redefine what’s possible
              </span>{" "}
              with limitless scalability, interconnectivity and unrivaled
              throughput.
            </p>
          </FadeIn> */}
        </div>
        <div className={"flex sm:justify-center items-center"}>
          <div
            className={
              "grid grid-cols-[55%_45%] sm:grid-cols-3 max-sm:w-full sm:gap-y-10 gap-x-2 lg:gap-x-10 md:gap-x-8 sm:gap-x-6 xl:gap-x-12 2xl:gap-x-14 gap-y-7 md:gap-y-16 lg:gap-y-20 xl:gap-y-[98px] 2xl:gap-y-28 3xl:gap-y-32"
            }
          >
            {VALUES.map((value, index) => (
              <FadeIn
                options={{
                  direction: "right",
                  duration: 0.6,
                  type: "tween",
                  delay: index % 3 === 0 ? 0.3 : index % 3 === 1 ? 0.4 : 0.5,
                }}
                key={value.value}
                className={cn(
                  index === 0 && "max-sm:order-1",
                  index === 1 && "max-sm:order-2",
                  index === 2 && "max-sm:order-6",
                  index === 3 && "max-sm:order-3",
                  index === 4 && "max-sm:order-5",
                  index === 5 && "max-sm:order-4",
                )}
              >
                <ValueItem
                  icon={value.icon}
                  value={value.value}
                  description={value.description}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
