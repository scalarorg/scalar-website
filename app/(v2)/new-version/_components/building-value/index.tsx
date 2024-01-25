import { ValueItem } from "./value-item";
import BuildingValueBackground from "@/public/building-value.webp";
import MilkyWay from "@/public/milky-way-1.webp";
import Image from "next/image";
import HeroBackgroundBottom from "@/public/hero-background-bottom.webp";

const VALUES = [
  {
    icon: "/icon/tps.svg",
    value: "< 1 second",
    description: "Time to Finality",
  },
  {
    icon: "/icon/low-to-no.svg",
    value: "Low-to-no",
    description: "Gas fees",
  },
  {
    icon: "/icon/hybrid.svg",
    value: "A hybrid",
    description: "Layer 0 & layer 1 blockchain",
  },
  {
    icon: "/icon/dag.svg",
    value: "Novel DAG Structure",
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
        src={MilkyWay}
        alt={"Milky way"}
        className={
          "absolute top-[147px] left-1/2 -translate-x-1/2 z-0 w-[1918.5px] object-cover object-center aspect-[1918/316] h-[316px]"
        }
      />
      <div
        className={
          "pt-[40vw] container pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[120px] xl:pb-[140px] 2xl:pb-[150px] space-y-5 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-32"
        }
      >
        <div id={"intro"} className={"max-sm:hidden sm:pb-[21px]"}></div>
        <div
          className={
            "space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 text-center flex flex-col items-center"
          }
        >
          <h1
            className={
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-3xl leading-tight sm:leading-normal"
            }
          >
            The Future of Scalable{" "}
            <span className={"text-primary-cyan-500"}>Blockchain</span>
          </h1>
          <p
            className={
              "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-1 sm:max-w-sm md:max-w-4xl"
            }
          >
            <span className={"text-primary-cyan-500"}>
              Redefine what’s possible
            </span>{" "}
            with limitless scalability, interconnectivity and unrivaled
            throughput.
          </p>
        </div>
        <div className={"flex justify-center"}>
          <div className={"grid grid-cols-2 gap-6 sm:gap-8"}>
            {VALUES.map((value) => (
              <ValueItem
                icon={value.icon}
                value={value.value}
                description={value.description}
                key={value.value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
