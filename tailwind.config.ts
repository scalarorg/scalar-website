import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class', 'html[class~="dark"]'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx,html,js,jsx}',
    './app/**/*.{ts,tsx,html,js,jsx}',
    './features/**/*.{ts,tsx,html,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '2rem',
        lg: '2rem',
        xl: '50px',
        '2xl': '53px',
        '3xl': '116px',
      },
      screens: {
        ...defaultTheme.screens,
        '2xl': '1440px',
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      34: ['2.125rem', '2.5rem'],
      40: ['2.5rem', 'normal'],
    },
    extend: {
      fontFamily: {
        dm: ['var(--font-dm)'],
      },
      screens: {
        'max-xs': {
          max: 'calc(399em/16)',
        },
        'max-sm': {
          max: 'calc(639em/16)',
        },
        'max-md': {
          max: 'calc(767em/16)',
        },
        'max-lg': {
          max: 'calc(1023em/16)',
        },
        'max-xl': {
          max: 'calc(1279em/16)',
        },
        '3xl': '1920px',
      },
      colors: {
        primary: {
          cyan: {
            50: '#E7FEFE',
            100: '#C5FCFC',
            200: '#97F9F9',
            300: '#67F6F6',
            400: '#39F4F4',
            500: '#0EF1F1',
            600: '#0CCDCD',
            700: '#0AABAB',
            800: '#088989',
            900: '#066C6C',
          },
          blue: {
            50: '#EBEFFE',
            100: '#CFD9FC',
            200: '#A9BBF9',
            300: '#819BF7',
            400: '#5B7DF4',
            500: '#3760F2',
            600: '#2F52CE',
            700: '#2744AC',
            800: '#1F378A',
            900: '#192B6D',
          },
        },
        secondary: {
          purple: {
            50: '#F7E8F7',
            100: '#E6B8E6',
            200: '#D996DA',
            300: '#C866C9',
            400: '#BD48BF',
            500: '#AD1AAF',
            600: '#9D189F',
            700: '#7B127C',
            800: '#5F0E60',
            900: '#490B4A',
          },
        },
        neutral: {
          1: '#ffffff',
          2: '#fdfdfd',
          3: '#f6f6f6',
          4: '#f1f1f2',
          5: '#dcdcde',
          6: '#c5c5c8',
          7: '#96979C',
          8: '#67696F',
          9: '#54565E',
          10: '#383B43',
          11: '#31343D',
          12: '#282A34',
          base: '#000000',
        },
        base: {
          50: '#E8E8E9',
          100: '#C7C8CA',
          200: '#9A9CA0',
          300: '#6C6D74',
          400: '#3F424A',
          500: '#151822',
          600: '#12141D',
          700: '#0F1118',
          800: '#0C0E13',
          900: '#090B0F',
        },
        accent: {
          warning: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
          },
          pending: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
          },
          success: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
          },
          info: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
        },
      },
      keyframes: {
        'accordion-down': {
          from: { maxHeight: '0' },
          to: { maxHeight: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { maxHeight: 'var(--radix-accordion-content-height)' },
          to: { maxHeight: '0' },
        },
        'center-gradient-show': {
          '0%': { opacity: '0', display: 'none' },
          '1%': { opacity: '0', display: 'block' },
          '100%': { opacity: '1', display: 'block' },
        },
        'center-gradient-hide': {
          '0%': { opacity: '1', display: 'block' },
          '99%': { opacity: '0', display: 'block' },
          '100%': { opacity: '0', display: 'none' },
        },
        'infinity-scroll': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-in-out',
        'accordion-up': 'accordion-up 0.2s ease-in-out',
        'center-gradient-show': '0.2s center-gradient-show ease-out both',
        'center-gradient-hide': '0.2s center-gradient-hide ease-out both',
        'infinity-scroll': 'infinity-scroll linear infinite 30s',
      },
      boxShadow: {
        title: '0px 4px 4px 0px #00000040',
        solution: '0px 0px 8px 0px #0EADF1CC',
        'button-hover': '0px 0px 10px 0px #0EF1F1',
        'button-active': '0px 0px 10px 0px #FFF',
      },
      backgroundImage: {
        'solution-card':
          'linear-gradient(42deg, rgba(55,96,242,0.20) -2.86%, rgba(14,241,241,0.20) 102.86%)',
        'custom-gradient':
          'linear-gradient(64deg, #3760F2 7.99%, #0EF1F1 28.68%)',
        'gradient-card':
          'linear-gradient(42deg, rgba(55,96,242,0.20) -2.86%, rgba(14,241,241,0.20) 102.86%)',
        'custom-text': 'linear-gradient(43deg, #3760F2 -8.45%, #0EF1F1 63.44%)',
        'custom-border':
          'linear-gradient(90deg, rgba(102, 254, 203, 0.2), rgba(137, 64, 255, 0.2))',
        star: "url('/star-background.webp')",
        advantage: "url('/background-advantage.webp')",
        star_dark: "url('/background-star-dark.webp')",
        footer: "url('/background-footer.webp')",
      },
      textShadow: {
        h1: '4px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar'),
  ],
} satisfies Config;

export default config;
