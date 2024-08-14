import { StaticImageData } from 'next/image';

import Google from '@/public//logo-brand/google.webp';
import Harmony from '@/public//logo-brand/harmony.webp';
import JPMorgan from '@/public//logo-brand/jpmorgan.webp';
import MIT from '@/public//logo-brand/mit.webp';
import Stanfo from '@/public//logo-brand/stanfo.webp';
import Amazon from '@/public/logo-brand/amazon.webp';
import Facebook from '@/public/logo-brand/facebook.webp';

export interface LogoBrandProps {
  src: StaticImageData;
  alt: string;
}

export const LogoBrand: LogoBrandProps[] = [
  {
    src: Amazon,
    alt: 'Amazon',
  },
  {
    src: Facebook,
    alt: 'facebook',
  },
  {
    src: Google,
    alt: 'Google',
  },
  {
    src: Harmony,
    alt: 'Harmony',
  },
  {
    src: JPMorgan,
    alt: 'JPMorgan',
  },
  {
    src: MIT,
    alt: 'MIT',
  },
  {
    src: Stanfo,
    alt: 'Stanfo',
  },
];
