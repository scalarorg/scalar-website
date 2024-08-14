import { StaticImageData } from 'next/image';

import APTOS_MARK from '@/public/aptos-mark.svg?url';
import AVALANCHE_SMALL from '@/public/blockchain/avalanche-sm.webp';
import Avalanche from '@/public/blockchain/avalanche.webp';
import COSMOS_SMALL from '@/public/blockchain/cosmos-sm.webp';
import Cosmos from '@/public/blockchain/cosmos.webp';
import Scalar from '@/public/blockchain/scalar.webp';
import LOGO_COLOR from '@/public/icon/logo-color.svg?url';
import LOGO from '@/public/icon/logo.svg?url';
import SUI_MARK from '@/public/sui-mark.svg?url';

export interface PositionItem {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  transform?: string;
}

export interface ScalarAdvantageContentData {
  title: string;
  data: string;
}

export interface ImageData {
  image: StaticImageData | string;
  width: number;
  height: number;
}

export interface ScalarAdvantageContentItem {
  image: ImageData;
  data: ScalarAdvantageContentData[];
  position: PositionItem;
}

export const ScalarAdvantageContentMobile: ScalarAdvantageContentItem[] = [
  {
    image: {
      image: LOGO_COLOR,
      width: 50.29,
      height: 40,
    },
    data: [
      {
        title: 'Transactions per second',
        data: '160,000',
      },
      {
        title: 'Average fee per transaction',
        data: '<$0.001',
      },
      {
        title: 'Time to Finality',
        data: '<1 second',
      },
      {
        title: 'Consensus',
        data: 'DAG-based DPoS',
      },
      {
        title: 'Parallel Transactions',
        data: 'Yes',
      },
      {
        title: 'Natively Interoperable',
        data: 'Yes',
      },
      {
        title: 'EVM Compatible',
        data: 'Yes',
      },
    ],
    position: {
      top: '72px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  {
    image: {
      image: COSMOS_SMALL,
      width: 40,
      height: 40,
    },
    data: [
      {
        title: 'Transactions per second',
        data: '10,000',
      },
      {
        title: 'Average fee per transaction',
        data: '$0.1',
      },
      {
        title: 'Time to Finality',
        data: '6 seconds',
      },
      {
        title: 'Consensus',
        data: 'PoS',
      },
      {
        title: 'Parallel Transactions',
        data: 'No',
      },
      {
        title: 'Natively Interoperable',
        data: 'Yes',
      },
      {
        title: 'EVM Compatible',
        data: 'No',
      },
    ],
    position: {
      top: '212px',
    },
  },
  {
    image: {
      image: AVALANCHE_SMALL,
      width: 39,
      height: 40,
    },
    data: [
      {
        title: 'Transactions per second',
        data: '4,500',
      },
      {
        title: 'Average fee per transaction',
        data: '$2',
      },
      {
        title: 'Time to Finality',
        data: '3 seconds',
      },
      {
        title: 'Consensus',
        data: 'PoS',
      },
      {
        title: 'Parallel Transactions',
        data: 'No',
      },
      {
        title: 'Natively Interoperable',
        data: 'No',
      },
      {
        title: 'EVM Compatible',
        data: 'Yes',
      },
    ],
    position: {
      top: '212px',
      right: '0',
    },
  },
];

export const ScalarAdvantageContentDesktop: ScalarAdvantageContentItem[] = [
  {
    image: {
      image: SUI_MARK,
      width: 100,
      height: 46,
    },
    data: [
      {
        title: 'Transactions per second',
        data: '120,000',
      },
      {
        title: 'Average fee per transaction',
        data: '<$0.015',
      },
      {
        title: 'New blockchain deployable',
        data: 'No',
      },
    ],
    position: {
      top: '212px',
    },
  },
  {
    image: {
      image: LOGO,
      width: 280,
      height: 32,
    },
    data: [
      {
        title: 'Transactions per second',
        data: '160,000',
      },
      {
        title: 'Average fee per transaction',
        data: '<$0.001',
      },
      {
        title: 'New blockchain deployable',
        data: 'Yes',
      },
    ],
    position: {
      top: '72px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  {
    image: {
      image: APTOS_MARK,
      width: 146,
      height: 36,
    },
    data: [
      {
        title: 'Transactions per second',
        data: '160,000',
      },
      {
        title: 'Average fee per transaction',
        data: '<$0.0003',
      },
      {
        title: 'New blockchain deployable',
        data: 'No',
      },
    ],
    position: {
      top: '212px',
      right: '0',
    },
  },
];

export const ADVANTAGE_CONTENT = [
  {
    image: Avalanche,
    width: 434,
    height: 82,
    title: 'Avalanche',
    content: [
      {
        title: 'Transactions per second',
        value: '4,500',
      },
      {
        title: 'Average fee per transaction',
        value: '$2',
      },
      {
        title: 'Time to Finality',
        value: '3 seconds',
      },
      {
        title: 'Consensus',
        value: 'PoS',
      },
      {
        title: 'Parallel Transactions',
        value: 'No',
      },
      {
        title: 'Natively Interoperable',
        value: 'No',
      },
      {
        title: 'EVM Compatible',
        value: 'Yes',
      },
    ],
  },
  {
    image: Cosmos,
    width: 262,
    height: 82,
    title: 'Cosmos',
    content: [
      {
        title: 'Transactions per second',
        value: '10,000',
      },
      {
        title: 'Average fee per transaction',
        value: '$0.1',
      },
      {
        title: 'Time to Finality',
        value: '6 seconds',
      },
      {
        title: 'Consensus',
        value: 'PoS',
      },
      {
        title: 'Parallel Transactions',
        value: 'No',
      },
      {
        title: 'Natively Interoperable',
        value: 'Yes',
      },
      {
        title: 'EVM Compatible',
        value: 'No',
      },
    ],
  },
  {
    image: Scalar,
    width: 408,
    height: 137,
    title: 'Scalar',
    content: [
      {
        title: 'Transactions per second',
        value: '400,000',
      },
      {
        title: 'Average fee per transaction',
        value: '<$0.001',
      },
      {
        title: 'Time to Finality',
        value: '< 1 second',
      },
      {
        title: 'Consensus',
        value: 'DAG-based DPoS',
      },
      {
        title: 'Parallel Transactions',
        value: 'Yes',
      },
      {
        title: 'Natively Interoperable',
        value: 'Yes',
      },
      {
        title: 'EVM Compatible',
        value: 'Yes',
      },
    ],
  },
];
