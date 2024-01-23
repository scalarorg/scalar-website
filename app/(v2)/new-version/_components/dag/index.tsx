"use client";
import Image from "next/image";
import DagBackground from "@/public/dag-background.webp";
import EarthDag from "@/public/earth-dag.webp";
import { cn } from "@/lib/utils";
import { Fragment, useState } from "react";
import { SolarNavigate } from "@/app/(v2)/new-version/_components/hero-solar-system/solar-navigate";
import Navigator from "@/public/icon/navigator.svg";
import { motion } from "framer-motion";
import { figmaSlow } from "@/components/motion/transition";
import EarthBacklight from "@/public/earth-backlight.webp";
import EarthLight from "@/public/earth-light.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <Fragment>
      {/*Mobile*/}
      <Accordion
        type="multiple"
        // collapsible
        defaultValue={["item-0"]}
        className="w-full md:hidden px-5 text-neutral-1 py-14"
      >
        {CONTENTS.map(({ title, description }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <div className={"flex items-center gap-4"}>
                <div className={"font-normal"}>0{index + 1}</div>
                <div>{title}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "text-sm leading-tight",
                index === selected && "opacity-100",
              )}
            >
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/*Desktop*/}
      <div
        className={
          "relative z-0 2xl:h-[1458px] xl:h-[1200px] lg:h-[1000px] md:h-[800px] max-md:hidden"
        }
      >
        {/*Background*/}
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

        {/*Earth*/}
        <motion.div
          className="absolute top-1/2 left-0 aspect-square w-[80vw]"
          transition={figmaSlow}
          initial={{
            translateX: "-60%",
            translateY: "-50%",
          }}
          style={{
            rotate: `0deg`,
            animationDuration: "800ms",
          }}
          animate={{
            rotate: `${rotateDegrees[selected]}deg`,
          }}
        >
          <Image src={EarthDag} alt={"Earth dag"} fill />
        </motion.div>
        <Image
          src={EarthBacklight}
          alt={"Earth backlight"}
          className={
            "absolute top-1/2 left-0 -translate-x-[52%] w-[60vw] -translate-y-1/2 -z-10"
          }
        />
        <Image
          src={EarthLight}
          alt={"Earth light"}
          className={
            "absolute top-1/2 left-0 aspect-square w-[56vw] -translate-x-[64%] -translate-y-1/2 mix-blend-hard-light"
          }
        />

        {/*Circular Navigator*/}
        <div
          className={
            "absolute top-1/2 -translate-y-1/2 w-[52vw] left-0 -translate-x-[58%] aspect-square"
          }
        >
          <motion.div
            className="absolute inset-0 border-neutral-7 rounded-full border-dotted border-[3px]"
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
            <motion.div
              key={index}
              className={cn(
                "absolute leading-tight text-neutral-7 font-bold cursor-pointer ease-in aspect-square right-0 top-1/2",
                "2xl:text-[28px] xl:text-xl lg:text-lg",
                "2xl:max-w-[330px] xl:max-w-[210px] lg:max-w-[190px] md:max-w-[170px]",
                index === 0 &&
                  "md:translate-x-[80%] md:-translate-y-[120%] lg:translate-x-[85%] lg:-translate-y-[140%] lg:max-w-[190px] xl:translate-x-[90%] xl:-translate-y-[120%] 2xl:max-w-[325px] xl:max-w-[260px]",
                index === 1 && "translate-x-[130%] -translate-y-[80%]",
                index === 2 && "translate-x-[125%] -translate-y-[5%]",
                index === 3 &&
                  "translate-x-[115%] translate-y-[60%] 2xl:max-w-[300px]",
                index === 4 &&
                  "md:translate-x-[70%] md:translate-y-[110%] lg:translate-x-[80%] lg:translate-y-[120%] 2xl:translate-x-[80%] 2xl:translate-y-[106%] xl:translate-x-[80%] xl:translate-y-[130%]",
                selected === index &&
                  "text-neutral-1 scale-[105%] cursor-default select-none",
              )}
              transition={figmaSlow}
              style={{
                transitionDuration: "650ms",
              }}
              onClick={() => setSelected(index)}
            >
              {content.title}
            </motion.div>
          ))}
        </div>

        {/*Content*/}
        <div
          className={
            "left-1/2 top-1/2 -translate-y-[45%] absolute space-y-8 w-full md:max-w-xs lg:max-w-md 2xl:max-w-2xl xl:max-w-xl"
          }
        >
          {CONTENTS.map(({ description }, index) => (
            <motion.p
              key={index}
              className={cn(
                "text-neutral-6 text-lg xl:text-xl absolute -translate-y-1/2",
                index === selected && "opacity-100",
              )}
              transition={figmaSlow}
              style={{
                opacity: 0,
                animationDuration: "800ms",
              }}
              animate={{
                opacity: index === selected ? 1 : 0,
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ))}

          <SolarNavigate
            className={
              "text-lg lg:text-xl xl:text-2xl text-neutral-1 absolute lg:-bottom-[80px] -bottom-[110px]"
            }
          >
            Learn more
          </SolarNavigate>
        </div>
      </div>
    </Fragment>
  );
}
