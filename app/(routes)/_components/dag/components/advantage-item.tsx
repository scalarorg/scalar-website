import React, { Fragment } from 'react';

import Image from 'next/image';

import { ScalarAdvantageContentItem } from '@/lib/constants/scalar-advantage-content';
import { cn } from '@/lib/utils';

interface AdditionalProps {
  item: ScalarAdvantageContentItem;
  size: number;
  isLast?: boolean;
}

const AdvantageItem = ({ item, size, isLast }: AdditionalProps) => {
  return (
    <Fragment>
      {/* Mobile */}
      <div
        className={cn(
          `grid grid-cols-2 lg:hidden gap-[14px] sm:gap-8 px-0 sm:px-[24px] md:px-[30px] py-[18px] border-dashed border-b border-neutral-12 z-10`,
          isLast && 'border-none',
        )}
      >
        <div className={'space-y-[14px]'}>
          <Image
            src={item.image.image}
            width={item.image.width}
            height={item.image.height}
            alt="Logo"
            className={cn('lg:hidden select-none')}
          />
          {item.data
            .filter((_, index) => index % 2 !== 0)
            .map((content, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className={cn('flex flex-col')} key={i}>
                <p
                  className={cn(
                    'font-normal text-[16px] leading-[24px] text-neutral-6',
                  )}
                >
                  {content.title}
                </p>
                <label
                  className={cn(
                    'font-bold text-[18px] leading-[28px] text-white',
                  )}
                >
                  {content.data}
                </label>
              </div>
            ))}
        </div>

        <div className={'flex flex-col justify-between'}>
          {item.data
            .filter((_, index) => index % 2 === 0)
            .map((content, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className={cn('flex flex-col')} key={i}>
                <p
                  className={cn(
                    'font-normal text-[16px] leading-[24px] text-neutral-6',
                  )}
                >
                  {content.title}
                </p>
                <label
                  className={cn(
                    'font-bold text-[18px] leading-[28px] text-white',
                  )}
                >
                  {content.data}
                </label>
              </div>
            ))}
        </div>
      </div>

      {/* Desktop */}
      <div
        className={`hidden lg:flex flex-col jusitfy-center gap-[40px] px-[30px] py-[18px] border-none z-10 2xl:absolute`}
        style={size >= 1536 ? item.position : {}}
      >
        <div className={cn('flex flex-col gap-[40px] items-center')}>
          <Image
            src={item.image.image}
            width={item.image.width}
            height={item.image.height}
            alt="Logo"
            className={cn('hidden md:block select-none')}
          />
        </div>

        {item.data.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={cn('flex flex-col items-center')} key={i}>
            <p
              className={cn(
                'font-normal text-[20px] leading-[30px] text-neutral-6',
              )}
            >
              {item.title}
            </p>
            <label
              className={cn(
                'font-semibold text-[28px] leading-[40px] text-white',
              )}
            >
              {item.data}
            </label>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AdvantageItem;
