'use client';
import { HTMLAttributes, useState } from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { DiscordIcon } from '@/components/icon/discord';
import { TelegramIcon } from '@/components/icon/telegram';
import { XIcon } from '@/components/icon/x';
import { DISCORD_URL, TELEGRAM_URL, X_URL } from '@/lib/constants/links';
import { cn } from '@/lib/utils';
import ArrowLeftGradient from '@/public/icon/arrow-left-gradient.svg';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Navigator
 * ------------------------------------------------------------------------------------------------------------------ */

const NAVIGATOR = [
  {
    title: 'Platform',
    items: [
      {
        title: 'Consensus',
        href: '/',
      },
      {
        title: 'Interoperable Layer',
        href: '/',
      },
      {
        title: 'EVM Compatibility',
        href: '/',
      },
      {
        title: 'Network Scan',
        href: '/',
      },
    ],
  },
  {
    title: 'Projects',
    items: [
      {
        title: "Decentralized API's",
        href: '/',
      },
      {
        title: 'Wallet',
        href: '/',
      },
      {
        title: 'Bridge',
        href: '/',
      },
      {
        title: 'RWA Protocol',
        href: '/',
      },
    ],
  },
  {
    title: 'Build',
    items: [
      {
        title: 'Get Started',
        href: '/',
      },
      {
        title: 'Docs',
        href: '/',
      },
      {
        title: 'Examples & Tutorials',
        href: '/',
      },
      {
        title: 'Grants',
        href: '/',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Governance',
        href: '/',
      },
      {
        title: 'Social',
        href: '/',
      },
      {
        title: 'Blog',
        href: '/',
      },
      {
        title: 'Whitepaper',
        href: '/',
      },
      {
        title: 'Career',
        href: '/',
      },
      {
        title: 'Contact Us',
        href: '/',
      },
    ],
  },
];

const navigatorVariants = cva('max-sm:space-y-6 space-y-7');

type NavigatorVariantProps = VariantProps<typeof navigatorVariants>;

type NavigatorProps = NavigatorVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof NavigatorVariantProps>;

export function Navigator({
  className,
  ...props
}: NavigatorProps): React.JSX.Element {
  const [selected, setSelected] = useState<number | boolean>(false);

  return (
    <div {...props} className={navigatorVariants({ className })}>
      {NAVIGATOR.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={''} key={index}>
          <motion.div
            className={
              'justify-end cursor-pointer select-none text-2xl sm:text-5xl font-bold flex items-center gap-2.5'
            }
            initial={{
              opacity: 0,
              height: 0,
            }}
            transition={{ type: 'tween', duration: 0.35 }}
            animate={{ opacity: 100, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onHoverStart={() => setSelected(index)}
            // onHoverEnd={() => setSelected(false)}
            onClick={() =>
              setSelected((selected) => (index === selected ? false : index))
            }
          >
            <span
              className={cn(
                'text-transparent bg-clip-text bg-neutral-1 transition-all [background-position:100%_0%]',
                index === selected &&
                  'bg-[linear-gradient(265deg,#00FFBD_-5.84%,#025B8C_111.58%)] [background-position:100%_100%]',
              )}
            >
              {item.title}
            </span>
            <AnimatePresence initial={false} mode={'popLayout'}>
              {index === selected ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${index}-arrow-left`}
                >
                  <Image
                    src={ArrowLeftGradient}
                    alt={'Arrow left gradient'}
                    className={'w-[30px] h-[30px]'}
                  />
                </motion.div>
              ) : (
                <motion.div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${index}-arrow-right`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                >
                  <ChevronRight
                    className={'w-[30px] h-[30px] text-neutral-1'}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <AnimatePresence initial={false} mode={'sync'}>
            {selected === index && (
              <motion.div
                // eslint-disable-next-line react/no-array-index-key
                key={`navigator-${index}-open`}
                initial={{
                  opacity: 0,
                  marginTop: 0,
                  height: 0,
                }}
                transition={{ type: 'tween', duration: 0.35 }}
                animate={{ opacity: 100, height: 'auto', marginTop: 28 }}
                exit={{
                  opacity: 0,
                  height: 0,
                  overflow: 'hidden',
                  marginTop: 0,
                }}
                className={'space-y-3 sm:space-y-6'}
                onClick={() => setSelected(false)}
              >
                <div className={'space-y-2 sm:space-y-4'}>
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      className={
                        'text-neutral-6 relative group/navigate hover:text-neutral-1 hover:-translate-x-4 transition-all justify-end cursor-pointer text-lg sm:text-3xl flex items-center gap-2.5'
                      }
                      href={subItem.href}
                      // eslint-disable-next-line react/no-array-index-key
                      key={subIndex}
                    >
                      <span>{subItem.title}</span>
                      <div
                        className={
                          'absolute -right-0 transition-opacity top-1/2 opacity-0 group-hover/navigate:opacity-100 blur-[12px] sm:blur-[25px] -translate-y-1/2 w-[20px] h-[20px] sm:w-[45px] sm:h-[45px] rounded-full bg-[linear-gradient(265deg,#00FFBD_-5.84%,#025B8C_111.58%)]'
                        }
                      ></div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div
        key={'social'}
        className={
          'flex gap-4 sm:gap-[33px] justify-end items-center text-black'
        }
      >
        {/*TODO: Update social icons with real links*/}
        <Link href={X_URL} target={'_blank'}>
          <XIcon
            className={
              'cursor-pointer w-6 sm:w-[33px] aspect-[33/34.32] transition-colors hover:text-neutral-1'
            }
          />
        </Link>
        {/*<GithubIcon*/}
        {/*  className={*/}
        {/*    "cursor-pointer w-6 sm:w-[33px] aspect-[33/34.32] transition-colors hover:text-neutral-1"*/}
        {/*  }*/}
        {/*/>*/}
        <Link href={DISCORD_URL} target={'_blank'}>
          <DiscordIcon
            className={
              'cursor-pointer w-6 sm:w-[33px] aspect-[33/34.32] transition-colors hover:text-neutral-1'
            }
          />
        </Link>
        {/*<MediumIcon*/}
        {/*  className={*/}
        {/*    "cursor-pointer w-6 sm:w-[33px] aspect-[33/34.32] transition-colors hover:text-neutral-1"*/}
        {/*  }*/}
        {/*/>*/}
        <Link href={TELEGRAM_URL} target={'_blank'}>
          <TelegramIcon
            className={
              'cursor-pointer w-6 sm:w-[33px] aspect-[33/34.32] transition-colors hover:text-neutral-1'
            }
          />
        </Link>
      </div>
    </div>
  );
}
