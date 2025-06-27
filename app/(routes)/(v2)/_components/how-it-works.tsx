import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import Analysis from '@/public/icon/analysis.svg?url';
import DepositSquare from '@/public/icon/deposit-square.svg?url';
import ReceiveSquare from '@/public/icon/receive-square.svg?url';

const STEPS = [
  {
    title: 'Deposit BTC',
    description: 'Lock your Bitcoin in a secure multi-sig vault',
    icon: DepositSquare,
  },
  {
    title: 'Receive wBTC',
    description: 'Get wBTC on Ethereum, Solana, or Base to use in DeFi',
    icon: ReceiveSquare,
  },
  {
    title: 'Earn & Redeem',
    description: 'Farm yields, borrow or trade - withdraw your BTC anytime',
    icon: Analysis,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center space-y-2.5">
            <Heading level={2} className="text-3xl lg:text-4xl">
              How It Works
            </Heading>
            <p className="text-sm md:text-base">
              From Native Bitcoin to DeFi in{' '}
              <span className="font-semibold text-primary text-xl md:text-2xl">
                3 Steps
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {STEPS.map(({ icon, title, description }) => (
              <Card
                key={title}
                className="hover:shadow-lg transition-shadow hover:border-primary hover:drop-shadow-1"
              >
                <CardContent className="p-5 flex flex-col gap-5 md:flex-row">
                  <Image src={icon} alt={title} width={30} height={30} />
                  <div className="space-y-1">
                    <h3 className="md:text-lg font-semibold">{title}</h3>
                    <p className="text-sm md:text-base">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
