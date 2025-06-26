import { HTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import Logo from '@/public/icon/logo.svg?url';

const NAV_ITEMS: {
  label: string;
  href: string;
  children?: React.ReactNode;
}[] = [
  {
    label: 'News',
    href: 'https://scalarprotocolnews.substack.com/',
  },
  {
    label: 'Community',
    href: 'https://discord.com/invite/7FFhERZwB7',
  },
  {
    label: 'Docs V1',
    href: '/docs-overview',
  },
  {
    label: 'Airdrop',
    href: '/airdrop',
  },
] as const;

type Props = HTMLAttributes<HTMLDivElement>;

export function Header({ className, children, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        'fixed top-0 z-50 py-4 sm:py-7 w-full bg-background shadow-1',
        className,
      )}
    >
      <div className="flex items-center justify-between container">
        <Link href="/" className={'relative flex flex-col gap-1'}>
          <Image
            width={280}
            height={30.86}
            src={Logo}
            className={'w-20 md:w-[200px] lg:w-[221px]'}
            alt={'Scalar logo'}
          />
          <div
            className={'text-[8px] md:text-sm lg:text-base whitespace-nowrap'}
          >
            Bitcoin Native Infrastructure
          </div>
        </Link>

        <div className="flex gap-1.5 sm:gap-4 md:gap-5 lg:gap-8 xl:gap-6 2xl:gap-[38px] 3xl:gap-[46px] items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              href={item.href}
              target="blank"
              key={item.label}
              className="text-[10px] hover:text-primary md:text-base"
            >
              {item.children ?? item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
