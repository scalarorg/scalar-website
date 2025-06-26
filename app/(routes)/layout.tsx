import { ReactNode } from 'react';

import { Footer } from './(v2)/_components/footer';
import { Header } from './(v2)/_components/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex grow flex-col">{children}</main>
      <Footer />
    </div>
  );
}
