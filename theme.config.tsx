import { DocsThemeConfig } from 'nextra-theme-docs';

import ScalarLogo from '@/assets/icons/logo-large.svg';
import ScalarSmallLogo from '@/assets/icons/logo-small.svg';
import { ExtraSocial, Footer } from '@/features/docs';

const config: DocsThemeConfig = {
  logo: (
    <>
      <ScalarLogo width={190} height={21} className="max-sm:hidden" />
      <ScalarSmallLogo className="sm:hidden" width={39} height={31} />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Scalar',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Scalar documentation." />

      <meta name="og:image" content="/docs/docs-overview.png" />
      <meta name="og:description" content="Scalar documentation." />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </>
  ),

  navbar: {
    extraContent: <ExtraSocial />,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: undefined,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: <Footer />,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
