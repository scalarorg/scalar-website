import Image from 'next/image';

import { BuildingValue } from './_components/building-value';
import { Cta } from './_components/cta';
import { Dag } from './_components/dag';
import { HeroSolarSystem } from './_components/hero-solar-system';
import { Permissionless } from './_components/permisstionless';
import Problem from './_components/problem';
import Revealed from './_components/revealed';
import Solution from './_components/solution';
import HighlightLeft from '@/public/icon/highlight-left.svg?url';
import HighlightRight from '@/public/icon/highlight-right.svg?url';

export default function HomePage() {
  return (
    <div className={'bg-black relative overflow-hidden'}>
      <HeroSolarSystem className={'max-xl:hidden'} />
      <div className={'relative'}>
        <Image
          src={HighlightRight}
          alt={'Highlight right'}
          className={
            'absolute top-0 -right-[10%] z-10 max-sm:w-[75%] max-2xl:w-[60%] pointer-events-none'
          }
        />
        <Image
          src={HighlightLeft}
          alt={'Highlight left'}
          className={
            'absolute top-0 -left-[10%] z-10 max-sm:w-[75%] max-2xl:w-[60%] pointer-events-none'
          }
        />
        <BuildingValue />
      </div>

      <div className="bg-star_dark bg-cover bg-no-repeat">
        <Revealed />
        <Dag />
      </div>

      <Permissionless />

      {/* Problems */}
      <Problem />

      {/* Solutions */}
      <Solution />

      <Cta />
    </div>
  );
}
