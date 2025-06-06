import { HTMLAttributes } from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRightIcon } from '@/components/icon/arrow-top-right';
import { cn } from '@/lib/utils';
import LogoSmall from '@/public/icon/logo-small.svg?url';
import Logo from '@/public/icon/logo-white-large.svg?url';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Header
 * ------------------------------------------------------------------------------------------------------------------ */

const headerVariants = cva(
  'fixed top-0 z-50 sm:pt-12 max-sm:py-4 max-sm:bg-black/70 w-full',
);

type HeaderVariantProps = VariantProps<typeof headerVariants>;

type HeaderProps = HeaderVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof HeaderVariantProps>;

export function Header({
  className,
  children,
  ...props
}: HeaderProps): React.JSX.Element {
  return (
    <div {...props} className={headerVariants({ className })}>
      <div
        className={
          'flex items-center justify-between container max-sm:!px-[1rem]'
        }
      >
        <div className={'relative max-sm:hidden'}>
          <Link href="/">
            <Image
              width={280}
              height={30.86}
              src={Logo}
              className={
                'aspect-[280/30.86] max-md:w-[200px] max-2xl:w-[221px]'
              }
              alt={'Scalar logo'}
            />
          </Link>
          <div
            className={
              'absolute translate-y-4 lg:translate-y-5 text-lg lg:text-xl whitespace-nowrap left-0 text-neutral-1'
            }
          >
            Bitcoin Native Infrastructure
          </div>
        </div>
        <Link href="/" className={'sm:hidden'}>
          <div className={'flex gap-2 items-center'}>
            <Image
              width={35}
              height={27.84}
              src={LogoSmall}
              className={'aspect-[35/27.84]'}
              alt={'Scalar logo'}
            />
            <div className={'text-[11px] font-bold text-neutral-3 hidden'}>
              Bitcoin Native
              <br />
              Infrastructure
            </div>
          </div>
        </Link>

        <div
          className={
            'flex gap-1 sm:gap-4 md:gap-5 lg:gap-8 xl:gap-6 2xl:gap-[38px] 3xl:gap-[46px] items-center'
          }
        >
          <Link href="https://scalarprotocolnews.substack.com/" target="blank">
            News
          </Link>
          <Link href="https://discord.com/invite/7FFhERZwB7" target="blank">
            Community
          </Link>
          <Link href="/docs-overview">Docs V1</Link>
          <Link href="/airdrop">
            <button
              className={cn(
                'flex gap-2 sm:gap-2.5 md:gap-4 lg:gap-6 2xl:gap-7 3xl:gap-8 items-center',
                '3xl:px-8 2xl:px-6 px-2 sm:px-4 md:px-5 3xl:py-3 xl:py-[10px] py-[5px]',
                'rounded-xl border-2',
                'font-medium 3xl:font-semibold text-sm sm:text-base3xl:text-lg text-white !leading-snug',
                'hover:shadow-button-hover transition-all active:bg-neutral-12 [border-image-slice:7] md:[border-image-slice:6] sm:[border-image-slice:8] [border-image-width:4px] sm:[border-image-width:5px] [border-image-source:url(/icon/border-gradient.svg)] ',
              )}
            >
              <p>Airdrop</p>
              <ArrowTopRightIcon className="w-2.5 sm:w-3 aspect-square" />
            </button>
          </Link>
          {/* <Sidebar /> */}
        </div>
      </div>
    </div>
  );
}
