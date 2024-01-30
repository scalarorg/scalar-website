import { FadeIn } from "@/components/motion/fade-in";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import REVEALED__VIDEO_PREVIEW from '@/public/scalar-revealed-preview.svg'

const RevealedVariants = cva(
  "w-full flex flex-col lg:flex-row gap-[60px] lg:items-center justify-center px-5 py-[192px] z-0",
);

type RevealedVariantProps = VariantProps<typeof RevealedVariants>;

type RevealedProps = RevealedVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof RevealedVariantProps>;

export default function Revealed({ className }: RevealedProps) {
  return (
    <div className={RevealedVariants({ className })}>
      <label className={cn('font-bold text-[30px] leading-[45px] lg:text-[43px] lg:leading-[55.9px] max-w-[631px]')}>
        <FadeIn
          options={{
            direction: "left",
            duration: 0.65,
            type: "tween",
            delay: .2,
          }}
        >
          Scalar revealed: <span className={cn("font-bold bg-gradient-to-tr bg-clip-text text-transparent from-primary-blue-500 to-[#0EF1F1]")}><br />Immerse</span> yourself in our product demo
        </FadeIn>
      </label>

      <FadeIn
        options={{
          direction: "up",
          duration: 0.65,
          type: "tween",
          delay: .6,
        }}
      >
        <Dialog>
          <DialogTrigger asChild>
            <button
              title="video player"
              className={cn("relative rounded-[24px] border border-neutral-6 w-full max-w-[628px] lg:w-[628px] aspect-video z-10 mx-auto overflow-hidden hover:scale-105 transition-all duration-300")}
            >
              <Image
                sizes="100vw"
                className={cn("absolute left-0 right-0 top-0 bottom-0")}
                src={REVEALED__VIDEO_PREVIEW}
                alt="preview"
              />

              <div className={cn("flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[126px] h-[126px] rounded-full bg-primary-cyan-50 shadow-inner hover:scale-105 transition-all duration-300")}>
                <div className={cn("flex items-center justify-center w-[67.85px] h-[67.85px]")}>
                  <Image
                    width={33}
                    height={25.21}
                    src='/icon/play.svg'
                    alt="Play icon"
                  />
                </div>
              </div>
            </button>
          </DialogTrigger>

          <DialogContent className="">
            <iframe
              src="https://player.vimeo.com/video/875784142?h=3ed6db7c17"
              // src="https://player.vimeo.com/video/907817049?h=c7688b4aa1"
              title="video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={cn("w-[80vw] rounded-[24px] border border-neutral-6 aspect-video mx-auto overflow-hidden")}
            />
          </DialogContent>
        </Dialog>
      </FadeIn>
    </div>
  );
};
