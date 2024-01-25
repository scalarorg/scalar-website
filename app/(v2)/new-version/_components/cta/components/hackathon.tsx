"use client";
import { HTMLAttributes, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import HackathonBackground from "@/public/hackathon.webp";
import { cn } from "@/lib/utils";
import { LayoutGroup, motion } from "framer-motion";
import { figmaGentle } from "@/components/motion/transition";
import { HACKATHON_CONTENT } from "@/lib/constants/hackathon";

export function Hackathon({ className }: HTMLAttributes<HTMLDivElement>) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={cn("container", className)}>
      <div className={"flex max-md:flex-col relative z-0 overflow-hidden"}>
        <Image
          className={"absolute inset-0 -z-10"}
          src={HackathonBackground}
          alt={"hackathon"}
        />
        <LayoutGroup>
          {HACKATHON_CONTENT.map((item, index) => (
            <HackathonItem
              key={index}
              icon={item.icon}
              title={item.title}
              selected={selected === index}
              description={item.description}
              onClick={() => setSelected(index)}
              className={index != 2 ? "border-r-[31px] border-black" : ""}
            />
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: HackathonItem
 * ------------------------------------------------------------------------------------------------------------------ */

const hackathonItemVariants = cva("select-none");

type HackathonItemVariantProps = VariantProps<typeof hackathonItemVariants> & {
  icon: string;
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
};

type HackathonItemProps = HackathonItemVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof HackathonItemVariantProps>;

function HackathonItem({
  className,
  children,
  icon,
  title,
  description,
  selected = false,
  onClick,
}: HackathonItemProps): React.JSX.Element {
  return (
    <motion.div
      layout
      className={cn(
        hackathonItemVariants({ className }),
        !selected ? "overflow-hidden cursor-pointer" : "",
      )}
      transition={figmaGentle}
      style={{ flex: selected ? 2 : 1, animationDuration: "0.8s" }}
      onClick={onClick}
    >
      <div className={"p-16 pb-32"}>
        <Image src={icon} alt={title} width={54} height={54} />
        <div className={cn("mt-12", !selected && "max-w-full")}>
          <div className={"text-3xl font-bold text-neutral-1"}>{title}</div>
          <div
            className={cn(
              "text-xl text-neutral-6 mt-2.5",
              !selected && "min-w-[500px]",
            )}
          >
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
