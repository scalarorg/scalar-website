import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import MASSBIT from "@/public/massbit.webp";
import MASSBIT_BACKGROUND_2 from "@/public/massbit-background-2.webp";
import MASSBIT_BACKGROUND_LARGE from "@/public/massbit-background-large.webp";
import STAR_BACKGROUND from "@/public/star.webp";
import MOON_BACKGROUND from "@/public/moon-background.webp";
import { FadeIn } from "@/components/motion/fade-in";
import { SolarNavigate } from "@/app/(routes)/_components/hero-solar-system/solar-navigate";
import Link from "next/link";

const permissionlessVariants = cva(
  "bg-star bg-no-repeat bg-cover relative lg:h-screen my-[84px] md:my-[192px] z-0 gap-[16px] lg:gap-[45px] w-full flex flex-col items-start px-5 lg:px-0",
);

type permissionlessVariantProps = VariantProps<typeof permissionlessVariants>;

type permissionlessProps = permissionlessVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof permissionlessVariantProps>;

export function Permissionless({ className }: permissionlessProps) {
  return (
    <div className={permissionlessVariants({ className })}>
      {/* Background Mobile */}
      {/* Moon */}
      <Image
        src={MOON_BACKGROUND}
        sizes="100vw"
        className={cn(
          "absolute select-none w-[80px] h-[80px] lg:hidden top-[12px] left-[80px] -z-10",
        )}
        alt="moon"
      />

      {/* Background Right */}
      <Image
        src={MASSBIT}
        sizes="100vw"
        className={cn(
          "absolute select-none right-0 -top-[60px] md:w-3/5 md:-top-3/4 lg:right-0 -z-10 lg:hidden",
        )}
        alt=""
      />

      {/* Background Desktop */}
      {/* Background left */}
      <Image
        src={MASSBIT_BACKGROUND_2}
        sizes="100vw"
        className={cn(
          "absolute hidden max-2xl:scale-[78%] lg:block select-none max-2xl:-left-10 left-0 top-1/2 -translate-y-1/2 -z-10",
        )}
        alt="Planet"
      />

      {/* Background Star */}
      <Image
        src={STAR_BACKGROUND}
        width={40}
        height={38}
        className={cn(
          "absolute hidden lg:block select-none left-[268px] top-1/2 -translate-y-[187px] -z-10",
        )}
        alt="Star background"
      />
      <Image
        src={STAR_BACKGROUND}
        width={40}
        height={38}
        className={cn(
          "absolute hidden lg:block select-none right-[720px] top-1/2 -translate-y-[570px] -z-10",
        )}
        alt="Star background"
      />
      <Image
        src={STAR_BACKGROUND}
        width={40}
        height={38}
        className={cn(
          "absolute hidden lg:block select-none right-[588px] bottom-1/2 translate-y-[490px] -z-10",
        )}
        alt="Star background"
      />

      {/* Background Right */}
      <Image
        src={MASSBIT_BACKGROUND_LARGE}
        sizes="100vw"
        className={cn(
          "absolute hidden lg:block lg:w-[47%] 3xl:w-1/2 select-none right-0 top-1/2 -translate-y-1/2 -z-10",
        )}
        alt="Planet"
      />

      {/* Block Content */}
      <div
        className={cn(
          "lg:absolute lg:top-[46%] 2xl:top-1/2 lg:-translate-y-1/2 lg:left-[278px] xl:left-[257px] 2xl:left-[328px] max-w-[600px] 2xl:w-[750px] flex flex-col gap-[16px] lg:gap-[30px] 2xl:gap-[45px]",
        )}
      >
        <SectionTitle className="text-left">
          Permissionless
          <br />
          Interoperability
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3760F2] to-[#0EF1F1]">
            Massbit
          </span>
        </SectionTitle>

        <FadeIn
          options={{
            direction: "up",
            duration: 0.65,
            type: "tween",
            delay: 0.1,
          }}
        >
          <p className="text-[15px] leading-[24.5px] text-neutral-6 lg:text-[16px] lg:leading-[27px] 2xl:text-[20px] 2xl:leading-[30px]">
            Scalar’s massbit serves as an interoperability protocol with planned
            support to connect{" "}
            <span className={cn("text-primary-cyan-500")}>over 20+ EVM</span>{" "}
            and{" "}
            <span className={cn("text-primary-cyan-500")}>
              non EVM blockchains
            </span>
            , providing developers the capability to create unified
            interoperable experiences. The protocol utilizes immutable on-chain
            standardized endpoints and a permissionless set of oracle nodes to
            facilitate the transfer of censorship-resistant messages/data/assets
            between various chains.
          </p>
        </FadeIn>

        <FadeIn
          options={{
            direction: "up",
            duration: 0.65,
            type: "tween",
            delay: 0.1,
          }}
        >
          <Link href={"/"} passHref>
            <SolarNavigate
              className={"text-lg lg:text-xl xl:text-2xl text-neutral-1"}
              large
            >
              Learn more
            </SolarNavigate>
          </Link>
          {/*<PermissionlessNavigate*/}
          {/*  className={*/}
          {/*    "text-neutral-1 text-[18px] leading-[27px] lg:text-[34px] lg:leading-[47px] h-[27px] w-fit lg:w-[260px] flex gap-[10px] items-center border-none bg-transparent p-0 hover:transition-all hover:ease-in-out hover:delay-500"*/}
          {/*  }*/}
          {/*>*/}
          {/*  Learn more*/}
          {/*</PermissionlessNavigate>*/}
        </FadeIn>
      </div>
    </div>
  );
}
