import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import Image from "next/image";
import { ScalarAdvantageContentItem } from "@/lib/constants/scalar-advantage-content";

interface AdditionalProps {
  item: ScalarAdvantageContentItem;
  size: number;
  isLast?: boolean;
}

const AdvantageItem = ({ item, size, isLast }: AdditionalProps) => {
  return (
    <Fragment>
      {/* Mobile */}
      <div
        className={cn(
          `grid grid-cols-2 lg:hidden gap-[14px] px-[30px] py-[18px] border-dashed border-b border-neutral-12 z-10`,
          isLast && "border-none",
        )}
      >
        <Image
          src={item.image.image}
          width={item.image.width}
          height={item.image.height}
          alt="Logo"
          className={cn("lg:hidden select-none")}
        />

        {item.data.map((content, i) => (
          <div className={cn("flex flex-col")} key={i}>
            <p
              className={cn(
                "font-normal text-[16px] leading-[24px] text-neutral-6",
              )}
            >
              {content.title}
            </p>
            <label
              className={cn("font-bold text-[20px] leading-[30px] text-white")}
            >
              {content.data}
            </label>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div
        className={`hidden lg:flex flex-col jusitfy-center gap-[40px] px-[30px] py-[18px] border-none z-10 2xl:absolute`}
        style={size >= 1536 ? item.position : {}}
      >
        <div className={cn("flex flex-col gap-[40px] items-center")}>
          <Image
            src={item.image.image}
            width={item.image.width}
            height={item.image.height}
            alt="Logo"
            className={cn("hidden md:block select-none")}
          />
        </div>

        {item.data.map((item, i) => (
          <div className={cn("flex flex-col items-center")} key={i}>
            <p
              className={cn(
                "font-normal text-[20px] leading-[30px] text-neutral-6",
              )}
            >
              {item.title}
            </p>
            <label
              className={cn(
                "font-semibold text-[28px] leading-[40px] text-white",
              )}
            >
              {item.data}
            </label>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AdvantageItem;
