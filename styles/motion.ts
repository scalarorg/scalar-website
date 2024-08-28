'use client';
import { Variants } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down';
type Type = 'spring' | 'tween';
export type FadeInProps = {
  direction: Direction;
  type: Type;
  delay: number;
  duration: number;
};

export const textContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const textVariant3 = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      delay: 0.2,
    },
  },
};

export const fadeIn = ({ direction, type, delay, duration }: FadeInProps) => ({
  hidden: {
    x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
