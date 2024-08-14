import Image from 'next/image';

import SectionTitle from '@/components/ui/section-title';
import { cn } from '@/lib/utils';
import Globe from '@/public/globe.png';
import GROW_EFFECT from '@/public/grow-effect-1.svg';
import Navigator1 from '@/public/icon/navigator-1.svg';
import Highlight from '@/public/solution-highlight.png';

function Solution() {
  return (
    <div className="relative w-full bg-star max-md:mt-40 pb-20">
      <Image
        src={GROW_EFFECT}
        alt=""
        sizes="100vw"
        className={cn('absolute -top-[200px] left-[250px]')}
      />
      <SectionTitle className="text-center">Solutions We Offer</SectionTitle>

      <div className="relative w-full px-80 max-3xl:px-40 max-2xl:px-20 max-xl:px-0 mx-auto flex items-center justify-between mt-[150px] max-lg:mt-4">
        <Image
          src={Highlight}
          alt={'Highlight'}
          className={'absolute -top-100 -left-20 z-20 pointer-events-none'}
        />
        <div className="flex flex-col gap-y-[64px]">
          <div className="relative inline-block p-0.5 bg-custom-border rounded-xl z-20 w-fit">
            <div className="max-md:text-sm max-md:w-fit bg-black/70 rounded-xl px-[28px] py-[18px] text-neutral-6 text-[22px] max-lg:text-xl font-medium w-[242px]">
              Unusable assets:
              <br />
              Bitcoin
            </div>
          </div>
          <div className="relative inline-block p-0.5 bg-custom-border rounded-xl z-20 w-fit">
            <div className="max-md:text-sm max-md:w-fit bg-black/70 rounded-xl px-[28px] py-[18px] text-neutral-6 text-[22px] max-lg:text-xl font-medium w-[242px]">
              TVL / Assets
              <br />
              from siloed
            </div>
          </div>
          <div className="relative inline-block p-0.5 bg-custom-border rounded-xl z-20 w-fit">
            <div className="max-md:text-sm max-md:w-fit bg-black/70 rounded-xl px-[28px] py-[18px] text-neutral-6 text-[22px] max-lg:text-xl font-medium w-[242px]">
              Staking Collateral
              <br />
              Receipts
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <Image
            src={Globe}
            alt={'earth'}
            className="absolute -top-[420px] min-w-[2000px] max-lg:min-w-[1000px] max-md:min-w-[800px] max-md:-top-[160px] max-sm:min-w-[600px] max-sm:-top-[110px] z-20 max-lg:-top-[200px]"
          />
          <div className="w-[400px] max-lg:w-[200px] max-sm:w-[150px] z-20 mt-4">
            <p className="max-md:text-base text-transparent bg-clip-text bg-custom-text text-[43px] text-center max-lg:text-xl font-bold">
              Scalar main-chain
            </p>
            <p className="max-md:text-sm max-sm:text-xs text-center text-[22px] max-lg:text-base font-medium">
              Shared Liquidity Layer, Move and EVM supported
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-[64px]">
          <div className="max-md:text-sm max-md:w-fit relative shadow-solution bg-gradient-card rounded-lg py-4 px-7 w-fit text-[22px] max-lg:text-xl text-neutral-6 font-medium">
            <Image
              className={'absolute -left-[27px] top-1 max-md:top-0'}
              src={Navigator1}
              alt={'Navigator1'}
            />
            Defi
          </div>
          <div className="max-md:text-sm max-md:w-fit relative shadow-solution bg-gradient-card rounded-lg py-4 px-7 text-[22px] max-lg:text-xl text-neutral-6 font-medium w-[242px]">
            <Image
              className={
                'absolute -left-[27px] top-6 max-lg:top-4 max-md:top-2'
              }
              src={Navigator1}
              alt={'Navigator1'}
            />
            Dapp & RWAs
            <br />
            for yield
          </div>
          <div className="max-md:text-sm max-md:w-fit relative shadow-solution bg-gradient-card rounded-lg py-4 px-7 w-fit text-[22px] max-lg:text-xl text-neutral-6 font-medium">
            <Image
              className={'absolute -left-[27px] top-1 max-md:top-0'}
              src={Navigator1}
              alt={'Navigator1'}
            />
            Restaking
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
