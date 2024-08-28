'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';

import { figmaSlow } from '@/components/motion/transition';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  onClick: () => void;
};

export const HamburgerAnimateIcon = ({ className, ...props }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const line = cn(
    'h-[2px] 2xl:h-[3px] 3xl:h-1 w-full',
    'rounded-[10px] bg-white',
    'transition-colors duration-700',
    isHover && '!bg-[linear-gradient(265deg,#00FFBD_-5.84%,#025B8C_111.58%)]',
  );

  return (
    <motion.div
      className={cn(
        'w-[27px] aspect-square flex flex-col transition-all justify-between items-end',
        isHover && '!items-start',
        className,
      )}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      {...props}
    >
      <div className={cn(line)} />
      <motion.div
        transition={{ ...figmaSlow, duration: 0.8 }}
        layout
        className={cn(line, 'w-[70%]')}
      />
      <div className={cn(line)} />
    </motion.div>
  );
};
