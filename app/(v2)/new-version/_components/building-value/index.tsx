import { ValueItem } from "./value-item";
import BuildingValueBackground from "@/public/building-value.webp";
import MilkyWay from "@/public/milky-way-1.webp";
import Image from "next/image";
import HighlightRight from "@/public/icon/highlight-right.svg";
import HighlightLeft from "@/public/icon/highlight-left.svg";

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
        src={HighlightRight}
        alt={"Highlight right"}
        className={"absolute top-0 -right-[10%]"}
      />
      <Image
        src={HighlightLeft}
        alt={"Highlight left"}
        className={"absolute top-0 -left-[10%]"}
      />
      <Image
        src={BuildingValueBackground}
        alt={"Building value background"}
        className={
          "absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1920px] object-cover object-center aspect-[1920/2196] h-[2196px]"
        }
      />
      <Image
        src={MilkyWay}
        alt={"Milky way"}
        className={
          "absolute top-[147px] left-1/2 -translate-x-1/2 z-0 w-[1918.5px] object-cover object-center aspect-[1918/316] h-[316px]"
        }
      />
      <div className={"pt-[800px] container pb-[150px] space-y-32"}>
        <div id={"intro"} className={"pb-[21px]"}></div>
        <div className={"space-y-10 text-center flex flex-col items-center"}>
          <h1 className={"text-7xl font-bold max-w-3xl leading-normal"}>
            The Future of Scalable{" "}
            <span className={"text-primary-cyan-500"}>Blockchain</span>
          </h1>
          <p className={"text-2xl text-neutral-1 max-w-4xl"}>
            <span className={"text-primary-cyan-500"}>
              Redefine what’s possible
            </span>{" "}
            with limitless scalability, interconnectivity and unrivaled
            throughput.
          </p>
        </div>
        <div className={"flex gap-20 items-center justify-center"}>
          {/*<div className={"text-5xl font-bold"}>Crypto Ipsum</div>*/}
          <div className={"grid grid-cols-2 gap-8"}>
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
