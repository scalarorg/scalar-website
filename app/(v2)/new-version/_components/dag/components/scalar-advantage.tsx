'use client'

import SectionTitle from '@/components/ui/section-title';
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority';
import React, { HTMLAttributes, useEffect, useState } from 'react'
import ADVANTAGE_EARTH_SMALL from '@/public/advantage-earth-small.webp'
import ADVANTAGE_MARS_SMALL from '@/public/advantage-mars-small.webp'
import GROW_EFFECT from '@/public/grow-effect.svg'
import ADVANTAGE_MARS_LARGE from '@/public/advantage-mars-large.svg'
import ADVANTAGE_EARTH_LARGE from '@/public/advantage-earth-large.svg'
import ADVANTAGE_MOON_LARGE from '@/public/advantage-moon-large.svg'
import Image from 'next/image';
import { ScalarAdvantageContent } from '@/lib/constants/scalar-advantage-content';
import AdvantageItem from './advantage-item';

const ScalarAdvantageVariants = cva(
  "relative z-10 flex justify-center mb-[60px] lg:h-screen lg:mb-[220px] border-0 xl:border-2 xl:border-neutral-11 xl:border-t-0 xl:border-l-0 xl:border-r-0 xl:rounded-[120%]",
);

type ScalarAdvantageVariantProps = VariantProps<typeof ScalarAdvantageVariants>;

type ScalarAdvantageProps = ScalarAdvantageVariantProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ScalarAdvantageVariantProps>;

const ScalarAdvantage = ({ className }: ScalarAdvantageProps) => {
  const [widthScreen, setWidthScreen] = useState<number>(() => (typeof window === 'undefined') ? 0 : window.innerWidth)

  const handleResizeWidth = () => setWidthScreen(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResizeWidth);

    return () => window.removeEventListener('resize', handleResizeWidth);
  }, []);

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
        className={(cn('hidden xl:block absolute select-none -z-10 -top-1/3 -left-[140px]'))}
      />
      <Image
        src={GROW_EFFECT}
        alt=''
        sizes='100vw'
        className={(cn('hidden xl:block absolute select-none -z-10 -top-1/3 -left-[140px]'))}
      />

      {/* Plant */}
      <Image
        src={ADVANTAGE_MARS_LARGE}
        alt=''
        sizes='100vw'
        className={(cn('hidden xl:block w-[234px] h-[247px] 2xl:w-[354px] 2xl:h-[367px] absolute select-none -z-10 left-0 bottom-0'))}
      />

      <Image
        src={ADVANTAGE_EARTH_LARGE}
        alt=''
        sizes='100vw'
        width={477}
        height={456}
        className={(cn('hidden xl:block w-[341px] h-[327px] 2xl:w-[477px] 2xl:h-[456px] absolute select-none -z-10 left-[283px] 2xl:left-[472px] -bottom-[18%] 2xl:-bottom-[26%]'))}
      />

      <Image
        src={ADVANTAGE_MOON_LARGE}
        alt=''
        width={392}
        height={404}
        className={(cn('hidden xl:block w-[322px] h-[347px] 2xl:w-[392px] 2xl:h-[404px] absolute select-none -z-10 right-0 top-[30%]'))}
      />


      {/* Block content */}
      <div className="px-5 lg:px-0 my-[60px] w-full flex flex-col items-center gap-[16px] z-10 2xl:w-[1394px] lg:relative">
        <SectionTitle className='z-10'>Scalar Advantage</SectionTitle>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-[24px] lg:gap-0 2xl:relative">
          {ScalarAdvantageContent.map((item, index) =>
            <AdvantageItem
              item={item}
              key={index}
              size={widthScreen}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ScalarAdvantage