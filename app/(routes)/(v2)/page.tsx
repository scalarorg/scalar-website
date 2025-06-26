import { DeFiPotential } from './_components/defi-potential';
import { Features } from './_components/features';
import { Hero } from './_components/hero';
import { HowItWorks } from './_components/how-it-works';
import { MultiChain } from './_components/multi-chain';
import { Security } from './_components/security';

export default function HomePage() {
  return (
    <div className="flex flex-col grow">
      <Hero />
      <DeFiPotential />
      <Features />
      <HowItWorks />
      <Security />
      <MultiChain />
    </div>
  );
}
