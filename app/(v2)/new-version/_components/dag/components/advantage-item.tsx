import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image';
import { ScalarAdvantageContentItem } from '@/lib/constants/scalar-advantage-content';

interface AdditionalProps {
  item: ScalarAdvantageContentItem
}

const AdvantageItem = ({ item }: AdditionalProps) => {
  return (
    <div
      className={`grid grid-cols-2 lg:flex lg:flex-col lg:jusitfy-center gap-[24px] lg:gap-[40px] px-[30px] py-[18px] border-b lg:border-none border-neutral-12 z-10 lg:order-2 2xl:absolute 
      ${item.position.top && `2xl:top-${item.position.top}`} 
      ${item.position.bottom && `2xl:bottom-${item.position.bottom}`} 
      ${item.position.left && `2xl:left-${item.position.left}`} 
      ${item.position.right && `2xl:right-${item.position.right}`} 
      ${item.position.transform && `2xl:-translate-x-${item.position.transform}`}
    `}
    >
      <div className={cn("flex flex-col gap-[28px] item-start lg:gap-[40px] lg:items-center")}>
        <Image
          src={item.imageSmall.image}
          width={item.imageSmall.width}
          height={item.imageSmall.height}
          alt='Logo'
          className={cn('md:hidden select-none')}
        />

        <Image
          src={item.imageLarge.image}
          width={item.imageLarge.width}
          height={item.imageLarge.height}
          alt='Logo'
          className={cn('hidden md:block select-none')}
        />
      </div>

      {item.dataMobile.map((item, i) => (
        <div className={cn("flex flex-col lg:items-center")} key={i}>
          <p className={cn("font-normal text-[16px] leading-[24px] text-neutral-6")}>{item.title}</p>
          <label className={cn("font-bold text-[20px] leading-[30px] text-white")}>{item.data}</label>
        </div>
      ))}
    </div>
  )
}

export default AdvantageItem