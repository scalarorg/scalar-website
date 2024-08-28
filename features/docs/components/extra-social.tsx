import { createElement } from 'react';

import Discord from '@/assets/icons/discord.svg';
import Github from '@/assets/icons/github.svg';
import Telegram from '@/assets/icons/telegram.svg';
import XTwitter from '@/assets/icons/x-twitter.svg';

export const ExtraSocial = () => {
  return (
    <div className="flex items-center gap-2">
      {items.map(({ href, icon }) => (
        <a className="p-2" key={href} href={href}>
          {createElement(icon, {
            className: 'size-[27px]',
          })}
        </a>
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
    href: 'https://t.me/scalarchat',
    icon: Telegram,
  },
];
