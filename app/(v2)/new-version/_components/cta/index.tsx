import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import STARS_BACKGROUND from '@/public/stars.webp'
import Image from "next/image";
import { HTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ctaVariants = cva(
  "relative z-0 h-screen w-full overflow-hidden bg-star bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center",
);

type CtaVariantProps = VariantProps<typeof ctaVariants>;

type CtaProps = CtaVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof CtaVariantProps>;


export function Cta({
  className
}: CtaProps) {

  return (
    <div className={ctaVariants({ className })}>
      <div className="flex flex-col px-[20px] gap-[44px] bg-transparent border-none md:w-[750px]">
        <div className={cn('flex flex-col gap-[28px]')}>
          <label
            className={cn('font-bold text-[31px] md:[text-34px] leading-[46.5px] md:leading-[47.6px] text-neutral-1')}
          >
            Your <span className={cn('text-cyan-500')}>Business</span> Ready For The Blockchain
          </label>
          <label className={cn("text-[18px] leading-[27px] text-neutral-4 text-left")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit ut nulla eu stetur
            eget. Nec, ac, sollicitudin aliquam ut egestas duis dolor. Congue suspendisse
            aliquam ut egestas duis dolor. Congue suspendisse
          </label>
        </div>
        <form className={cn('relative')}>
          <Input
            className={cn("bg-transparent h-[48px] md:h-[93px] outline-none text-neutral-5 text-[18px] leading-[27px] flex justify-between items-center rounded-xl border border-cyan-400 px-[16px] md:py-[16px]")}
            placeholder="Your email"
            type="email"
          />

          <Button
            itemType="submit"
            className={cn('absolute top-1/2 -translate-y-1/2 right-[20px] py-[6px] px-[20px] md:py-[14px] md:px-[32px] bg-cyan-400 text-white rounded-lg border-none')}
          >
            <span className="md:text-[22px] md:leading-[33px] md:text-neutral-10">Subscribe</span>
          </Button>
        </form>
      </div>
    </div>
  )
}