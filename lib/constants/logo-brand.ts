import Amazon from '@/public/logo-brand/amazon.png'
import Facebook from '@/public/logo-brand/facebook.png'
import Google from '@/public//logo-brand/google.png'
import Harmony from '@/public//logo-brand/harmony.png'
import JPMorgan from '@/public//logo-brand/jpmorgan.png'
import MIT from '@/public//logo-brand/mit.png'
import Stanfo from '@/public//logo-brand/stanfo.png'
import { StaticImageData } from 'next/image'

export interface LogoBrandProps {
  src: StaticImageData
  alt: string
}

export const LogoBrand: LogoBrandProps[] = [
  {
    src: Amazon,
    alt: 'Amazon'
  },
  {
    src: Facebook,
    alt: 'facebook'
  },
  {
    src: Google,
    alt: 'Google'
  },
  {
    src: Harmony,
    alt: 'Harmony'
  },
  {
    src: JPMorgan,
    alt: 'JPMorgan'
  },
  {
    src: MIT,
    alt: 'MIT'
  },
  {
    src: Stanfo,
    alt: 'Stanfo'
  },
]