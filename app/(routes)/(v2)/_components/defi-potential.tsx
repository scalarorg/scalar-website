import { Heading } from '@/components/ui/heading';

export const DeFiPotential = () => {
  return (
    <section className="bg-defi-potential bg-cover bg-no-repeat rounded-lg py-12 md:py-[72px]">
      <div className="container">
        <div className="flex flex-col gap-8 md:gap-12.5 text-center">
          <Heading level={2} className="font-medium">
            Bitcoin&apos;s Unleashed Potential in DeFi 🔥
          </Heading>
          <p className="text-sm md:text-base max-w-6xl mx-auto">
            Over $1T in BTC sits idle, lacking native yield mechanisms like
            ETH&apos;s staking. Security risks in cross-chain bridging,
            fragmented liquidity across Layer 2s and wrapped tokens, and limited
            integration with DeFi primitives hinder Bitcoin&apos;s role in
            lending, borrowing, and broader crypto ecosystem growth.
          </p>
        </div>
      </div>
    </section>
  );
};
