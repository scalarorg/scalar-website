"use client"

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, useState } from "react";
import SectionTitle from "@/components/ui/section-title";
import { ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";
import MASSBIT from "@/public/massbit.webp"
import MASSBIT_BACKGROUND_2 from "@/public/massbit-background-2.webp"
import MASSBIT_BACKGROUND_LARGE from "@/public/massbit-background-large.webp"
import STAR_BACKGROUND from "@/public/star.webp"
import MOON_BACKGROUND from "@/public/moon-background.webp"

const permissionlessVariants = cva(
  "bg-star_dark bg-no-repeat bg-cover xl:bg-none relative lg:h-screen pb-[120px] z-0 gap-[16px] lg:gap-[45px] w-full flex flex-col items-start px-5 lg:px-0",
);

type permissionlessVariantProps = VariantProps<typeof permissionlessVariants>;

type permissionlessProps = permissionlessVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof permissionlessVariantProps>;


export function Permissionless({
  className
}: permissionlessProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className={permissionlessVariants({ className })}>
      {/* Background Mobile */}
      {/* Moon */}
      <Image
        src={MOON_BACKGROUND}
        sizes="100vw"
        className={cn('absolute select-none w-[80px] h-[80px] lg:hidden top-[12px] left-[80px] -z-10')}
        alt="moon"
      />

      {/* Background Right */}
      <Image
        src={MASSBIT}
        sizes="100vw"
        className={cn('absolute select-none right-0 -top-[60px] md:w-3/5 md:-top-3/4 lg:right-0 -z-10 lg:hidden')}
        alt=""
      />


      {/* Background Desktop */}
      {/* Background left */}
      <Image
        src={MASSBIT_BACKGROUND_2}
        sizes="100vw"
        className={cn('absolute hidden lg:block select-none left-0 top-1/2 -translate-y-1/2 -z-10')}
        alt=""
      />

      {/* Background Star */}
      <Image
        src={STAR_BACKGROUND}
        width={40}
        height={38}
        className={cn('absolute hidden lg:block select-none left-[268px] top-1/2 -translate-y-[187px] -z-10')}
        alt=""
      />
      <Image
        src={STAR_BACKGROUND}
        width={40}
        height={38}
        className={cn('absolute hidden lg:block select-none right-[720px] top-1/2 -translate-y-[570px] -z-10')}
        alt=""
      />
      <Image
        src={STAR_BACKGROUND}
        width={40}
        height={38}
        className={cn('absolute hidden lg:block select-none right-[588px] bottom-1/2 translate-y-[490px] -z-10')}
        alt=""
      />

      {/* Background Right */}
      <Image
        src={MASSBIT_BACKGROUND_LARGE}
        sizes="100vw"
        className={cn('absolute hidden lg:block lg:w-1/2 select-none right-0 top-1/2 -translate-y-1/2 -z-10')}
        alt=""
      />


      {/* Block Content */}
      <div className={cn("lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[278px] xl:left-[328px] md:w-[750px] flex flex-col gap-[16px] lg:gap-[45px]")}>
        <SectionTitle className="text-left">Permissionless Interoperability <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3760F2] to-[#0EF1F1]">Massbit</span></SectionTitle>

        <p className="text-[16px] leading-[24.5px] text-neutral-6 lg:text-[18px] lg:leading-[28px] xl:text-[20px] xl:leading-[30px]">
          Scalar’s massbit serves as an interoperability protocol with planned support to connect <span className={cn("text-primary-cyan-500")}>over 20+ EVM</span> and <span className={cn("text-primary-cyan-500")}>non EVM blockchains</span>,
          providing developers the capability to create unified interoperable experiences. The protocol utilizes immutable on-chain
          standardized endpoints and a permissionless set of oracle nodes to facilitate the transfer of censorship-resistant
          messages/data/assets between various chains.
        </p>

        <button
          className={(cn("text-neutral-1 text-[18px] leading-[27px] lg:text-[34px] lg:leading-[47px] h-[27px] w-fit lg:w-[260px] flex gap-[10px] items-center border-none bg-transparent p-0 hover:transition-all hover:ease-in-out hover:delay-500"))}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ChevronsLeft
            width={20}
            height={30}
            className={cn(`pt-0.5 ${isHovered ? 'block transition-all ease-in-out delay-500' : 'hidden'}`)}
          />
          Learn more
          <ChevronRight
            width={11}
            height={13}
            className={cn(`pt-0.5 ${isHovered && 'hidden'}`)}
          />

          <ChevronsRight
            width={20}
            height={30}
            className={cn(`pt-0.5 ${isHovered ? 'block transition-all ease-in-out delay-500' : 'hidden'}`)}
          />

        </button>
      </div>
    </div>
  )
}