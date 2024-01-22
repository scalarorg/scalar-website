"use client";
import Image from "next/image";
import DagBackground from "@/public/dag-background.webp";
import EarthDag from "@/public/earth-dag.webp";
import { cn } from "@/lib/utils";

const CONTENTS = [
  {
    title: "Novel DAG Structure & Ultra-Light Client",
    description:
      "Scalar’s massbit serves as an interoperability protocol with planned support to connect over 20+ EVM and non EVM blockchains, providing developers the capability to create unified interoperable experiences. The protocol utilizes immutable on-chain standardized endpoints and a permissionless set of oracle nodes to facilitate the transfer of censorship-resistant messages/data/assets between various chains.",
  },
  {
    title: "Gas-free Future",
    description:
      "Scalar’s massbit serves as an interoperability protocol with planned support to connect over 20+ EVM and non EVM blockchains, providing developers the capability to create unified interoperable experiences. The protocol utilizes immutable on-chain standardized endpoints and a permissionless set of oracle nodes to facilitate the transfer of censorship-resistant messages/data/assets between various chains.",
  },
  {
    title: "Revolutionizing Transactions",
    description:
      "Scalar’s massbit serves as an interoperability protocol with planned support to connect over 20+ EVM and non EVM blockchains, providing developers the capability to create unified interoperable experiences. The protocol utilizes immutable on-chain standardized endpoints and a permissionless set of oracle nodes to facilitate the transfer of censorship-resistant messages/data/assets between various chains.",
  },
  {
    title: "Dev-Friendly & Hack-Resistant",
    description:
      "Scalar’s massbit serves as an interoperability protocol with planned support to connect over 20+ EVM and non EVM blockchains, providing developers the capability to create unified interoperable experiences. The protocol utilizes immutable on-chain standardized endpoints and a permissionless set of oracle nodes to facilitate the transfer of censorship-resistant messages/data/assets between various chains.",
  },
  {
    title: "Seamless Interoperability",
    description:
      "Scalar’s massbit serves as an interoperability protocol with planned support to connect over 20+ EVM and non EVM blockchains, providing developers the capability to create unified interoperable experiences. The protocol utilizes immutable on-chain standardized endpoints and a permissionless set of oracle nodes to facilitate the transfer of censorship-resistant messages/data/assets between various chains.",
  },
];

export function Dag() {
  return (
    <div className={"relative z-0 h-[1858px]"}>
      <Image
        src={DagBackground}
        alt={"Dag background"}
        className={"absolute inset-0 object-cover -z-10"}
      />
      <Image
        src={DagBackground}
        alt={"Dag background"}
        className={"absolute inset-0 object-cover -z-10"}
      />
      <Image
        src={EarthDag}
        alt={"Earth dag"}
        className={
          "absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[60%]"
        }
      />
      <div
        className={
          "absolute top-1/2 -translate-top-1/2 left-0 -translate-x-[70%] w-[60vw] h"
        }
      ></div>
      <div
        className={
          "absolute top-1/2 -translate-y-1/2 w-[57vw] left-0 -translate-x-[60%] aspect-square border rounded-full border-dashed"
        }
      >
        {CONTENTS.map((content, index) => (
          <div
            className={cn(
              "absolute text-neutral-1 font-bold text-2xl aspect-square",
              index === 0 && "-right-[50%] top-[20%]",
            )}
          >
            {content.title}
          </div>
        ))}
      </div>
    </div>
  );
}
