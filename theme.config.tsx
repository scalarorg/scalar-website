import { DocsThemeConfig } from 'nextra-theme-docs';

import ScalarLogo from '@/assets/icons/logo-large.svg';
import ScalarSmallLogo from '@/assets/icons/logo-small.svg';
import { ExtraSocial, Footer } from '@/features/docs';

const config: DocsThemeConfig = {
  logo: (
    <>
      <ScalarLogo width={280} height={30.86} className="max-sm:hidden" />
      <ScalarSmallLogo className="sm:hidden" width={39} height={31} />
    </>
  ),
  navbar: {
    extraContent: <ExtraSocial />,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
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
