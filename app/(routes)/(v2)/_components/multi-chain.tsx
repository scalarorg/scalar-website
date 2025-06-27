import { Heading } from '@/components/ui/heading';

export function MultiChain() {
  return (
    <section className="py-20 bg-[#F0F7FF]">
      <div className="container">
        <div className="flex flex-col gap-16">
          <Heading level={2} className="text-3xl lg:text-4xl">
            Your Bitcoin, Any Chain
          </Heading>

          <div className="flex flex-col lg:flex-row gap-12 justify-between w-full">
            <div
              className="relative w-full lg:max-w-3xl size-full aspect-[738/300] rounded-lg"
              style={{
                background: 'linear-gradient(90deg, #3962F1 0%, #98AFFF 100%)',
              }}
            />

            <div className="w-full lg:max-w-sm">
              <p className="text-sm md:text-base">
                Move your Bitcoin seamlessly across Ethereum, Base, Solana, and
                more to explore the best DeFi opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
