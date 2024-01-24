import * as React from "react"
import { LogoBrand } from "@/lib/constants/logo-brand"
import Image from "next/image"

export function CarouselLogo() {
  const infiniteLogoBrand = [...LogoBrand];

  while (infiniteLogoBrand.length < 200) {
    infiniteLogoBrand.push(...LogoBrand);
  }

  return (
    <div className="w-full px-5 md:px-0 lg:py-[65px] flex items-center gap-[24px] md:gap-[10px] animate-infinity-scroll duration-[10s] md:duration-[30s]">
      {infiniteLogoBrand.map((item, index) => (
        <Image
          sizes="100vw"
          className="w-fit px-2 h-[26px] xl:h-[33px]"
          src={item.src}
          alt={item.alt}
          key={index}
        />
      ))}
    </div>
  )
}