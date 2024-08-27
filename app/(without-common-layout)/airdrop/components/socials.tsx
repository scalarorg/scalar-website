import { createElement, Fragment } from 'react';

import { tv } from 'tailwind-variants';

import Discord from '@/assets/icons/discord.svg';
import Github from '@/assets/icons/github.svg';
import Telegram from '@/assets/icons/telegram.svg';
import XTwitter from '@/assets/icons/x-twitter.svg';
import { Separator } from '@/components/ui/separator';

const wrapper = tv(
  {
    base: 'flex items-center',
    variants: {
      screen: {
        default: 'gap-2 h-3',
        lg: 'gap-3.5 h-[22px]',
        '3xl': 'gap-[17px] h-[26px]',
      },
    },
  },
  {
    responsiveVariants: ['lg', '3xl'],
  },
)({
  screen: {
    initial: 'default',
    lg: 'lg',
    '3xl': '3xl',
  },
});

export const Socials = () => {
  return (
    <div className={wrapper}>
      {items.map(({ href, icon, isLast }) => (
        <Fragment key={href}>
          <a href={href}>
            {createElement(icon, {
              className: 'size-3 lg:size-[22px] 3xl:size-[26px]',
            })}
          </a>

          {!isLast && (
            <Separator orientation="vertical" className="opacity-70" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

const items = [
  {
    href: 'https://twitter.com/scalarprotocol',
    icon: XTwitter,
  },
  {
    href: 'https://github.com/scalarorg',
    icon: Github,
  },
  {
    href: 'https://discord.com/invite/a5Hx6GnqzJ',
    icon: Discord,
  },
  {
    href: 'ttps://t.me/scalarchat',
    icon: Telegram,
    isLast: true,
  },
];
