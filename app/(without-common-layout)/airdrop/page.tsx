import Link from 'next/link';

import { Socials } from './components/socials';
import { STATISTICS } from './data/data';
import styles from './styles.module.scss';
import Logo from '@/assets/icons/logo-large.svg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <div className={styles.inside_container}>
          {/* --------------------------------- Header --------------------------------- */}
          <header className={styles.header}>
            <Link href="/">
              <Logo color="white" className={styles.logo} />
            </Link>

            <Socials />
          </header>

          {/* -------------------------------- Content ------------------------------- */}
          <div className={styles.content_wrapper}>
            <div className={styles.title}>
              <p>A Unified Shared</p>
              <p className={cn(styles.text_gradient, 'text-balance')}>
                Liquidity & Security Layer
              </p>
            </div>
            <div className={styles.description}>
              <p>Scalar Krystal is waiting for you, early supporters.</p>
              <p>Your early participation could unlock something special.</p>
            </div>

            <Button className={styles.button} asChild>
              <a
                href="https://forms.gle/mqnzXNn4fENCjxHE9"
                target="_blank"
                rel="noreferrer"
              >
                Claim airdrop
              </a>
            </Button>
          </div>

          {/* -------------------------------- Statistic ------------------------------- */}
          <div className={styles.statistic_container}>
            {STATISTICS.map(({ value, label }) => (
              <div key={label} className="space-y-1">
                <p className={styles.statistic_value}>{value}</p>
                <p className={styles.statistic_label}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
