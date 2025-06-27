import Image from 'next/image';

import { Heading } from '@/components/ui/heading';
import SecurityImage from '@/public/v2/shield.png';

export function Security() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center">
            <Heading level={2} className="text-3xl lg:text-4xl">
              Security & Trust
            </Heading>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
            <div className="space-y-4 md:space-y-6 w-full lg:max-w-sm">
              <Heading level={3} className="font-medium">
                Your Bitcoin, Always Protected 🔒
              </Heading>

              <p className="text-sm md:text-base">
                Multi-signature vaults and distributed custodians ensure no
                single point of failure.
                <br />
                Recover your assets anytime with on-chain proofs on Bitcoin and
                Ethereum.
              </p>
            </div>

            <div className="relative w-full lg:max-w-3xl size-full aspect-[738/200]">
              <Image
                src={SecurityImage}
                alt="Security"
                fill
                className="object-cover size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
