import { DocsThemeConfig } from 'nextra-theme-docs';

import ScalarLogo from '@/assets/icons/logo-large.svg';
import { ExtraSocial, Footer } from '@/features/docs';

const config: DocsThemeConfig = {
  logo: <ScalarLogo width={280} height={30.86} />,
  navbar: {
    extraContent: <ExtraSocial />,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    component: () => <Footer />,
  },
};

export default config;
