"use client";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { figmaGentle } from "@/components/motion/transition";
import { HACKATHON_CONTENT } from "@/lib/constants/hackathon";
import HackathonBackground from "@/public/hackathon.webp";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: HackathonMobile
 * ------------------------------------------------------------------------------------------------------------------ */

const hackathonMobileVariants = cva("container space-y-4");

type HackathonMobileVariantProps = VariantProps<typeof hackathonMobileVariants>;

type HackathonMobileProps = HackathonMobileVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof HackathonMobileVariantProps>;

export function HackathonMobile({
  className,
  children,
  ...props
}: HackathonMobileProps): React.JSX.Element {
  const [selected, setSelected] = useState(0);
  return (
    <div {...props} className={hackathonMobileVariants({ className })}>
      {HACKATHON_CONTENT.map((item, index) => (
        <HackathonItem
          key={index}
          icon={item.icon}
          title={item.title}
          selected={selected === index}
          description={item.description}
          onClick={() => setSelected(index)}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: HackathonItem
 * ------------------------------------------------------------------------------------------------------------------ */

const hackathonItemVariants = cva(
  "select-none z-0 relative overflow-hidden rounded-xl",
);

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
  icon,
  title,
  description,
  selected = false,
  onClick,
}: HackathonItemProps): React.JSX.Element {
  return (
    <div
      className={cn(
        hackathonItemVariants({ className }),
        !selected ? "cursor-pointer" : "",
      )}
      // style={{ flex: selected ? 1 : "none", animationDuration: "0.8s" }}
      onClick={onClick}
    >
      <Image
        className={
          "absolute inset-0 object-center w-full h-full object-cover -z-10 brightness-75"
        }
        src={HackathonBackground}
        alt={"Hackathon background object-center"}
      />
      <div className={"py-6 px-8"}>
        <Image
          src={icon}
          alt={title}
          width={49}
          height={43.49}
          className={"w-[49px] h-[43.49px]"}
        />
        <div className={cn("mt-3", !selected && "max-w-full")}>
          <div className={"text-xl font-bold text-neutral-1 mb-4"}>{title}</div>
          <AnimatePresence initial={false} mode={"wait"}>
            {selected && (
              <motion.div
                className={cn("text-sm text-neutral-5 overflow-hidden")}
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={figmaGentle}
              >
                {description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
