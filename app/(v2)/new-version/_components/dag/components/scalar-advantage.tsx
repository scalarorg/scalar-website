import SectionTitle from '@/components/ui/section-title';
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority';
import React, { HTMLAttributes } from 'react'
import LOGO_SMALL from '@/public/logo-small.webp'
import SUI_MARK_SMALL from '@/public/sui-mark-small.webp'
import APTOS_MARK_SMALL from '@/public/aptos-mark-small.webp'
import LOGO from '@/public/icon/logo.svg'
import SUI_MARK from '@/public/sui-mark.svg'
import APTOS_MARK from '@/public/aptos-mark.svg'
import ADVANTAGE_EARTH_SMALL from '@/public/advantage-earth-small.webp'
import ADVANTAGE_MARS_SMALL from '@/public/advantage-mars-small.webp'
import GROW_EFFECT from '@/public/grow-effect.svg'
import ADVANTAGE_MARS_LARGE from '@/public/advantage-mars-large.svg'
import ADVANTAGE_EARTH_LARGE from '@/public/advantage-earth-large.svg'
import ADVANTAGE_MOON_LARGE from '@/public/advantage-moon-large.svg'
import Image from 'next/image';

const ScalarAdvantageVariants = cva(
  "relative z-10 flex justify-center h-[60vh] mb-[220px] border-0 xl:border-2 xl:border-neutral-11 xl:border-t-0 xl:border-l-0 xl:border-r-0 xl:rounded-[120%]",
);

type ScalarAdvantageVariantProps = VariantProps<typeof ScalarAdvantageVariants>;

type ScalarAdvantageProps = ScalarAdvantageVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ScalarAdvantageVariantProps>;

const ScalarAdvantage = ({ className }: ScalarAdvantageProps) => {
  return (
    <div className={ScalarAdvantageVariants({ className })}>
      {/* Background */}
      {/* Mobile */}
      <Image
        src={ADVANTAGE_EARTH_SMALL}
        alt="Earth"
        width={98}
        height={121}
        className={cn("lg:hidden absolute -right-[10px] top-0 z-0")}
      />

      <Image
        src={ADVANTAGE_MARS_SMALL}
        alt="Mars"
        width={60}
        height={63}
        className={cn("lg:hidden absolute left-0 bottom-[102px] z-0")}
      />

      {/* Desktop */}
      <Image
        src={GROW_EFFECT}
        alt=''
        sizes='100vw'
        className={(cn('hidden xl:block absolute select-none -z-10 -top-1/3 left-[320px]'))}
      />
      <Image
        src={GROW_EFFECT}
        alt=''
        sizes='100vw'
        className={(cn('hidden xl:block absolute select-none -z-10 -top-1/3 left-[320px]'))}
      />

      {/* Plant */}
      <Image
        src={ADVANTAGE_MARS_LARGE}
        alt=''
        width={354}
        height={367}
        className={(cn('hidden xl:block absolute select-none -z-10 left-0 bottom-0'))}
      />

      <Image
        src={ADVANTAGE_EARTH_LARGE}
        alt=''
        width={477}
        height={456}
        className={(cn('hidden xl:block absolute select-none -z-10 left-[593px] -bottom-[30%]'))}
      />

      <Image
        src={ADVANTAGE_MOON_LARGE}
        alt=''
        width={392}
        height={404}
        className={(cn('hidden xl:block absolute select-none -z-10 right-0 top-[20%]'))}
      />


      {/* Block content */}
      <div className="px-5 lg:px-0 my-[60px] w-full flex flex-col items-center gap-[16px] z-10 2xl:w-[1394px] lg:relative">
        <SectionTitle className='z-10'>Scalar Advantage</SectionTitle>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-[24px] lg:gap-0 2xl:relative">
          {/* Content 1 */}
          <div className={cn("grid grid-cols-2 lg:flex lg:flex-col lg:jusitfy-center gap-[24px] lg:gap-[40px] px-[30px] py-[18px] border-b lg:border-none border-neutral-12 z-10 lg:order-2 2xl:absolute 2xl:top-[72px] 2xl:left-1/2 2xl:-translate-x-1/2")}>
            <div className={cn("flex flex-col gap-[28px] item-start lg:gap-[40px] lg:items-center")}>
              <Image
                src={LOGO_SMALL}
                width={50.29}
                height={40}
                alt='Logo'
                className={cn('md:hidden select-none')}
              />

              <Image
                src={LOGO}
                width={280}
                height={32}
                alt='Logo'
                className={cn('hidden md:block select-none')}
              />

              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Transactional Throughout</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>20 fps</label>
              </div>
            </div>
            <div className={cn("flex flex-col gap-[14px] item-start z-10")}>
              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Transactional Finality</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>380 ms</label>
              </div>

              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Processing style</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>Parallelized</label>
              </div>
            </div>
          </div>

          {/* Content 2 */}
          <div className={cn("grid grid-cols-2 lg:flex lg:flex-col lg:justify-between gap-[24px] lg:gap-[40px] px-[30px] py-[18px] border-b border-neutral-12 lg:border-none z-10 lg:order-1 2xl:absolute 2xl:top-[212px]")}>
            <div className={cn("flex flex-col gap-[28px] item-start lg:gap-[40px] lg:items-center")}>
              <Image
                src={SUI_MARK_SMALL}
                width={31}
                height={39}
                alt='Logo'
                className={cn('md:hidden select-none')}
              />
              <Image
                src={SUI_MARK}
                width={100}
                height={46}
                alt='Logo'
                className={cn('hidden md:block select-none')}
              />

              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Transactional Throughout</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>20 fps</label>
              </div>
            </div>
            <div className={cn("flex flex-col gap-[14px] item-start z-10")}>
              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Transactional Finality</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>380 ms</label>
              </div>

              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Processing style</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>Parallelized</label>
              </div>
            </div>
          </div>

          {/* Content 3 */}
          <div className={cn("grid grid-cols-2 lg:flex lg:flex-col lg:justify-between gap-[24px] lg:gap-[40px] px-[30px] py-[18px] border-b border-neutral-12 lg:border-none z-10 lg:order-3 2xl:absolute 2xl:top-[212px] 2xl:right-0")}>
            <div className={cn("flex flex-col gap-[28px] item-start lg:gap-[40px] lg:items-center")}>
              <Image
                src={APTOS_MARK_SMALL}
                width={40}
                height={39}
                alt='Logo'
                className={cn('md:hidden select-none')}
              />
              <Image
                src={APTOS_MARK}
                width={146}
                height={36}
                alt='Logo'
                className={cn('hidden md:block select-none')}
              />

              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Transactional Throughout</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>20 fps</label>
              </div>
            </div>
            <div className={cn("flex flex-col gap-[14px] item-start z-10")}>
              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Transactional Finality</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>380 ms</label>
              </div>

              <div className={cn("flex flex-col lg:items-center")}>
                <p className={cn("font-medium text-[16px] leading-[24px] text-neutral-6")}>Processing style</p>
                <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>Parallelized</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScalarAdvantage