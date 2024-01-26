import LOGO_SMALL from '@/public/logo-small.webp'
import SUI_MARK_SMALL from '@/public/sui-mark-small.webp'
import APTOS_MARK_SMALL from '@/public/aptos-mark-small.webp'
import LOGO from '@/public/icon/logo.svg'
import SUI_MARK from '@/public/sui-mark.svg'
import APTOS_MARK from '@/public/aptos-mark.svg'
import { StaticImageData } from "next/image";

export interface PositionItem {
  left?: string
  top?: string
  right?: string
  bottom?: string
  transform?: string
}

export interface ScalarAdvantageContentData {
  title: string
  data: string
}

export interface ImageData {
  image: StaticImageData
  width: number
  height: number
}

export interface ScalarAdvantageContentItem {
  imageSmall: ImageData,
  imageLarge: ImageData,
  dataMobile: ScalarAdvantageContentData[]
  dataDesktop: ScalarAdvantageContentData[]
  position: PositionItem
}

export const ScalarAdvantageContent: ScalarAdvantageContentItem[] = [
  {
    imageSmall: {
      image: LOGO_SMALL,
      width: 50.29,
      height: 40
    },
    imageLarge: {
      image: LOGO,
      width: 280,
      height: 32
    },
    dataMobile: [
      {
        title: "Transactional Throughout",
        data: "20 fps"
      },
      {
        title: "Transactional Finality",
        data: "380 ms"
      },
      {
        title: "Processing style",
        data: "Parallelized"
      },
    ],
    dataDesktop: [
      {
        title: "Transactions per second",
        data: "240,000"
      },
      {
        title: "Average fee per transaction",
        data: "<$0.0001"
      },
      {
        title: "New blockchain deployable",
        data: "Yes"
      }
    ],
    position: {
      top: '72px',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },
  {
    imageSmall: {
      image: SUI_MARK_SMALL,
      width: 31,
      height: 39
    },
    imageLarge: {
      image: SUI_MARK,
      width: 100,
      height: 46
    },
    dataMobile: [
      {
        title: "Transactional Throughout",
        data: "20 fps"
      },
      {
        title: "Transactional Finality",
        data: "380 ms"
      },
      {
        title: "Processing style",
        data: "Parallelized"
      },
    ],
    dataDesktop: [
      {
        title: "Transactions per second",
        data: "120,000"
      },
      {
        title: "Average fee per transaction",
        data: "<$0.015"
      },
      {
        title: "New blockchain deployable",
        data: "No"
      }
    ],
    position: {
      top: "212px",
    }
  },
  {
    imageSmall: {
      image: APTOS_MARK_SMALL,
      width: 40,
      height: 39
    },
    imageLarge: {
      image: APTOS_MARK,
      width: 146,
      height: 36
    },
    dataMobile: [
      {
        title: "Transactional Throughout",
        data: "20 fps"
      },
      {
        title: "Transactional Finality",
        data: "380 ms"
      },
      {
        title: "Processing style",
        data: "Parallelized"
      },
    ],
    dataDesktop: [
      {
        title: "Transactions per second",
        data: "160,000"
      },
      {
        title: "Average fee per transaction",
        data: "<$0.0003"
      },
      {
        title: "New blockchain deployable",
        data: "No"
      }
    ],
    position: {
      top: "212px",
      right: "0"
    }
  }
]