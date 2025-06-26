import { Ripple } from '@/components/magicui/ripple';
import { Hero as HeroComponent } from '@/components/marketing';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <div
      className={cn(
        'mb-20 pt-[128px]',
        'md:py-[176px]',
        'xl:py-[90px] xl:mt-28',
        'relative w-full overflow-hidden',
      )}
    >
      <Ripple className="absolute h-[1450px] w-full z-0" />
      <div className="relative z-10 min-h-[450px]">
        <HeroComponent
          animate
          title={
            <span>
              Supercharge ⚡ Your Bitcoin <br className="max-md:hidden" />
              with <span className="text-blue-600">Scalar</span>
            </span>
          }
          subtitle="The first full-stack Bitcoin DeFi suite. Earn yields, unlock liquidity, and customize solutions—all secured by native BTC."
          className="container"
        />
      </div>
      <div className="z-10 absolute bottom-2 left-0 right-0 w-full flex justify-center">
        <p className="text-center text-sm md:text-base tracking-tighter text-primary-blue-400">
          Secured by Multi-Signature Vaults
        </p>
      </div>
    </div>
  );
}
