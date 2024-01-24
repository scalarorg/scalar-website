import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import SectionTitle from "@/components/ui/section-title";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import MASSBIT from "@/public/massbit.webp"
import MASSBIT_BACKGROUND_2 from "@/public/massbit-background-2.webp"
import MASSBIT_BACKGROUND_LARGE from "@/public/massbit-background-large.webp"
import STAR_BACKGROUND from "@/public/star.webp"
import MOON_BACKGROUND from "@/public/moon-background.webp"

const permissionlessVariants = cva(
  "relative lg:h-screen pb-[220px] z-0 gap-[16px] lg:gap-[45px] w-full flex flex-col items-start px-5 lg:px-0",
);

type permissionlessVariantProps = VariantProps<typeof permissionlessVariants>;

type permissionlessProps = permissionlessVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof permissionlessVariantProps>;


export function Permissionless({
  className
}: permissionlessProps) {

  return (
    <div className={permissionlessVariants({ className })}>
      <div className={cn("lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[328px] md:w-[580px] lg:w-[750px] flex flex-col gap-[16px] lg:gap-[45px]")}>
        <SectionTitle className="text-left">Permissionless Interoperability <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3760F2] to-[#0EF1F1]">Massbit</span></SectionTitle>

        <p className="text-[13px] leading-[19.5px] text-neutral-6 lg:text-[18px] lg:leading-[28px] xl:text-[22px] xl:leading-[33px]">
          Scalar’s massbit serves as an interoperability protocol with planned support to connect <span className={cn("text-cyan-500")}>over 20+ EVM</span> and <span className={cn("text-cyan-500")}>non EVM blockchains</span>,
          providing developers the capability to create unified interoperable experiences. The protocol utilizes immutable on-chain
          standardized endpoints and a permissionless set of oracle nodes to facilitate the transfer of censorship-resistant
          messages/data/assets between various chains.
        </p>

        <button className={(cn("text-neutral-1 text-[18px] leading-[27px] lg:text-[34px] lg:leading-[47px] h-[27px] w-fit  lg:w-[200px] flex gap-[10px] justify-between items-center border-none bg-transparent p-0"))}>
          Learn more
          <ChevronRight
            width={11}
            height={13}
            className={cn("pt-0.5")} />
        </button>
      </div>
      {/* Background Mobile */}
      {/* Moon */}
      <Image
        src={MOON_BACKGROUND}
        sizes="100vw"
        className={cn('absolute select-none w-[60px] h-[60px] lg:hidden top-[12px] left-[80px] -z-10')}
        alt="moon"
      />

      {/* Background Right */}
      <Image
        src={MASSBIT}
        sizes="100vw"
        className={cn('absolute select-none -right-20 -top-[117px] lg:right-0 -z-10 lg:hidden')}
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
        sizes="100vh"
        className={cn('absolute hidden lg:block select-none right-0 top-1/2 -translate-y-1/2 -z-10')}
        alt=""
      />
    </div>
  )
}