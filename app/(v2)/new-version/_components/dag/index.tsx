"use client";
import Image from "next/image";
import DagBackground from "@/public/dag-background.webp";
import EarthDag from "@/public/earth-dag.webp";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SolarNavigate } from "@/app/(v2)/new-version/_components/hero-solar-system/solar-navigate";
import Navigator from "@/public/icon/navigator.svg";
import { motion } from "framer-motion";
import { figmaSlow } from "@/components/motion/transition";

const CONTENTS = [
  {
    title: "Novel DAG Structure & Ultra-Light Client",
    description:
      "Our blockchain boasts a novel <span class='text-primary-cyan-500'>Directed Acyclic Graph (DAG)</span> structure supporting parallel transactions, ensuring lightning-fast transactions. With an ultra-light client, resource efficiency is maximized, ensuring seamless operation across devices.",
  },
  {
    title: "Gas-free Future",
    description:
      "Say goodbye to exorbitant gas fees. Scalar <span class='text-primary-cyan-500'>prioritizes</span> user <span class='text-primary-cyan-500'>accessibility</span> by keeping transaction costs low, ensuring that participating in the ecosystem remains accessible to all.",
  },
  {
    title: "Revolutionizing Transactions",
    description:
      "Scalar introduces <span class='text-primary-cyan-500'>non-sequential</span> transaction processing, unlocking the potential for higher throughput. Imagine two individuals sending funds simultaneously to two recipients, all executed optimistically and validated post-execution.",
  },
  {
    title: "Dev-Friendly & Hack-Resistant",
    description:
      "With a novel approach to horizontal scalability, Scalar minimizes the potential for developer errors and vulnerabilities. This enables <span class='text-primary-cyan-500'>faster iteration</span> and a <span class='text-primary-cyan-500'>more secure</span> environment for building cutting-edge applications.",
  },
  {
    title: "Seamless Interoperability",
    description:
      "Scalar bridges the gap between <span class='text-primary-cyan-500'>EVM</span> and <span class='text-primary-cyan-500'>non-EVM</span> chains, offering a unified experience across different blockchain ecosystems. Achieve true interoperability with seamless cross chain messaging.",
  },
];

const rotateDegrees = [-38, -17, 0, 21, 40];

export function Dag() {
  const [selected, setSelected] = useState(0);

  return (
    <div className={"relative z-0 h-[1458px]"}>
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
          "absolute top-1/2 left-0 aspect-square w-[65vw] transition-transform"
        }
        style={{
          transform: `translateX(-60%) translateY(-50%) rotate(${rotateDegrees[selected]}deg)`,
          animationDuration: "800ms",
        }}
      />
      <div
        className={
          "absolute top-1/2 -translate-top-1/2 left-0 -translate-x-[70%] w-[60vw] h"
        }
      ></div>
      <div
        className={
          "absolute top-1/2 -translate-y-1/2 w-[54vw] left-0 -translate-x-[60%] aspect-square"
        }
      >
        <motion.div
          className={cn(
            "absolute inset-0 border-neutral-7 rounded-full border-dotted border-[3px]",
          )}
          transition={figmaSlow}
          style={{
            rotate: `0deg`,
            animationDuration: "800ms",
          }}
          animate={{
            rotate: `${rotateDegrees[selected]}deg`,
          }}
        >
          <Image
            className={"absolute top-1/2 -translate-y-1/2 -right-[2em]"}
            src={Navigator}
            alt={"Navigator"}
          />
        </motion.div>

        {CONTENTS.map((content, index) => (
          <div
            key={index}
            className={cn(
              "absolute transition-all leading-tight text-neutral-7 font-bold text-[28px] cursor-pointer !duration-[800ms] ease-in aspect-square max-w-[330px] right-0 top-1/2",
              index === 0 &&
                "translate-x-[90%] -translate-y-[120%] max-w-[325px]",
              index === 1 && "translate-x-[130%] -translate-y-[80%]",
              index === 2 && "translate-x-[125%] -translate-y-[5%]",
              index === 3 &&
                "translate-x-[115%] translate-y-[60%] max-w-[300px]",
              index === 4 && "translate-x-[80%] translate-y-[106%]",
              selected === index &&
                "text-neutral-1 text-[32px] cursor-default select-none",
            )}
            onClick={() => setSelected(index)}
          >
            {content.title}
          </div>
        ))}
      </div>

      {/*Content*/}
      <div
        className={
          "left-1/2 top-1/2 -translate-y-1/2 absolute space-y-8 w-full max-w-2xl"
        }
      >
        {CONTENTS.map(({ description }, index) => (
          <p
            key={index}
            className={cn(
              "text-neutral-6 text-xl absolute opacity-0 transition-opacity duration-[800ms]",
              index === selected && "opacity-100",
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ))}

        <SolarNavigate
          className={"text-2xl text-neutral-1 absolute -bottom-[160px]"}
        >
          Learn more
        </SolarNavigate>
      </div>
    </div>
  );
}
