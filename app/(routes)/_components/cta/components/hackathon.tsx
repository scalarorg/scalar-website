'use client';
import { HTMLAttributes, useState } from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';

import { figmaGentle } from '@/components/motion/transition';
import { HACKATHON_CONTENT } from '@/lib/constants/hackathon';
import { cn } from '@/lib/utils';
import HackathonBackground from '@/public/hackathon.webp';
import Expand from '@/public/icon/expand.svg?url';

export function Hackathon({ className }: HTMLAttributes<HTMLDivElement>) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={cn('', className)}>
      <div className={'flex relative z-0 overflow-hidden'}>
        <Image
          className={'absolute inset-0 -z-10 brightness-75'}
          src={HackathonBackground}
          alt={'hackathon'}
        />
        <LayoutGroup>
          {HACKATHON_CONTENT.map((item, index) => (
            <HackathonItem
              key={item.title}
              icon={item.icon}
              index={index}
              title={item.title}
              selected={selected === index}
              description={item.description}
              onClick={() => setSelected(index)}
              className={index != 2 ? 'border-r-[31px] border-black' : ''}
            />
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: HackathonItem
 * ------------------------------------------------------------------------------------------------------------------ */

const hackathonItemVariants = cva('select-none');

type HackathonItemVariantProps = VariantProps<typeof hackathonItemVariants> & {
  icon: string;
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
  index: number;
};

type HackathonItemProps = HackathonItemVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof HackathonItemVariantProps>;

function HackathonItem({
  className,
  icon,
  title,
  description,
  selected = false,
  onClick,
  index,
}: HackathonItemProps): React.JSX.Element {
  return (
    <motion.div
      layout
      className={cn(
        hackathonItemVariants({ className }),
        !selected ? 'overflow-hidden cursor-pointer relative' : '',
      )}
      transition={figmaGentle}
      style={{ flex: selected ? 2 : 1, animationDuration: '0.8s' }}
      onClick={onClick}
    >
      <div className={'p-[52px] 2xl:p-16 pb-32'}>
        <Image src={icon} alt={title} width={54} height={54} />
        <div className={cn('mt-12', !selected && 'max-w-full')}>
          <div className={'text-3xl font-bold text-neutral-1'}>{title}</div>
          <div
            className={cn(
              'text-base 2xl:text-xl text-neutral-6 mt-2.5',
              !selected
                ? index === 0
                  ? 'max-2xl:min-w-[350px] 2xl:min-w-[500px]'
                  : 'min-w-[500px]'
                : index === 0 && 'max-2xl:max-w-[95%]',
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
      <Image
        src={Expand}
        alt={'Expand icon'}
        className={cn(
          'absolute bottom-10 right-10 hover:scale-105 opacity-100 duration-500 transition-[transform,opacity]',
          selected && 'opacity-0',
        )}
      />
    </motion.div>
  );
}
