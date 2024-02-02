import { FadeIn } from "@/components/motion/fade-in";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import REVEALED__VIDEO_PREVIEW from "@/public/scalar-revealed-preview.svg";

const RevealedVariants = cva(
  "w-full flex flex-col lg:flex-row gap-[60px] xl:gap-[120px] lg:items-center justify-center px-5 py-[60px] 3xl:py-[192px] sm:py-[100px] xl:py-[135px] z-0",
);

type RevealedVariantProps = VariantProps<typeof RevealedVariants>;

type RevealedProps = RevealedVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof RevealedVariantProps>;

export default function Revealed({ className }: RevealedProps) {
  return (
    <div className={RevealedVariants({ className })}>
      <label
        className={cn(
          "font-semibold text-[30px] leading-[45px] xl:text-[37px] xl:leading-[51px] 3xl:text-[43px] 3xl:leading-[55.9px] max-w-[631px]",
        )}
      >
        <FadeIn
          options={{
            direction: "right",
            duration: 0.65,
            type: "tween",
            delay: 0.2,
          }}
        >
          Scalar revealed:{" "}
          <span
            className={cn(
              "font-semibold bg-gradient-to-tr bg-clip-text from-[60%] text-transparent from-primary-blue-500 to-[#0EF1F1]",
            )}
          >
            <br />
            Immerse
          </span>{" "}
          yourself
          <br />
          in our product demo
        </FadeIn>
      </label>

      <FadeIn
        options={{
          direction: "up",
          duration: 0.65,
          type: "tween",
          delay: 0.6,
        }}
        className="flex justify-center"
      >
        <Dialog>
          <DialogTrigger asChild>
            <button
              title="video player"
              className={cn(
                "relative rounded-[24px] border border-neutral-6 w-full max-w-[628px] 3xl:w-[628px] lg:w-[500px] aspect-[628/386] z-10 mx-auto overflow-hidden hover:scale-105 transition-all duration-300",
              )}
            >
              <Image
                sizes="100vw"
                className={cn("absolute left-0 right-0 top-0 bottom-0")}
                src={REVEALED__VIDEO_PREVIEW}
                alt="preview"
              />

              <div
                className={cn(
                  "flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-[100px] 2xl:w-[126px] aspect-square rounded-full bg-primary-cyan-50/50 shadow-inner hover:scale-105 transition-all duration-300",
                )}
              >
                <div
                  className={cn(
                    "flex items-center relative justify-center w-6 sm:w-[40px] aspect-[34/25]",
                  )}
                >
                  <Image fill src="/icon/play.svg" alt="Play icon" />
                </div>
              </div>
            </button>
          </DialogTrigger>

          <DialogContent>
            <iframe
              src="https://www.youtube.com/embed/OO4BN1Eol7g?autoplay=1&&playsinline=1&loop=1&showinfo=0&playlist=OO4BN1Eol7g"
              title="video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={cn(
                "w-[80vw] rounded-[24px] border-2 border-neutral-6 aspect-video mx-auto overflow-hidden bg-black",
              )}
            />
          </DialogContent>
        </Dialog>
      </FadeIn>
    </div>
  );
}
