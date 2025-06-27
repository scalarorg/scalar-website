import { Lock, Shield, Zap } from 'lucide-react';

import { Heading } from '@/components/ui/heading';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Zap className="w-4 h-4 text-white" />,
    title: 'Instant Access',
    description: 'Trade BTC for DeFi yields or trading',
  },
  {
    icon: <Shield className="w-4 h-4 text-white" />,
    title: 'Staking Vault',
    description: 'Earn rewards on Bitcoin',
  },
  {
    icon: <Lock className="w-4 h-4 text-white" />,
    title: 'UPC Vault',
    description: 'Use Bitcoin as collateral',
  },
];

export const Features = () => {
  return (
    <section className="bg-grid-tile bg-cover bg-center bg-no-repeat py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-lg">
            <Heading level={2} className="text-3xl lg:text-4xl">
              Scalar: Native{' '}
              <span className="text-primary">Bitcoin DeFi</span>
              <br />
              Unleashed
            </Heading>
            <p className="text-sm md:text-base">
              Scalar unlocks Bitcoin&apos;s DeFi potential with secure,
              non-custodial vaults. Deposit BTC for yield farming, borrowing, or
              trading on Ethereum, Solana, and more. Takes BTC for passive
              income or use your Bitcoin as collateral for business solutions.
              Reclaim BTC anytime with on-chain proofs.
            </p>
            <p className="text-xl md:text-2xl">
              Bitcoin&apos;s liquidity, redefined—secure, flexible, native.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 lg:space-y-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                className={cn('lg:max-w-md', index === 1 && 'lg:ml-24')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function FeatureCard({
  className,
  icon,
  title,
  description,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        'rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-[linear-gradient(90deg,_#3962F1_0%,_#98AFFF_100%)] backdrop-blur-[10px] p-2 md:px-4',
        className,
      )}
    >
      <div className="flex items-center gap-5 text-background">
        {icon}
        <div className="flex flex-col gap-1.5">
          <p className="md:text-lg font-semibold">{title}</p>
          <p className="text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
