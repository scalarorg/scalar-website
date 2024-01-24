import BSC from '@/public/icon/bsc.svg'
import Polygon from '@/public/icon/polygon.svg'
import Solana from '@/public/icon/solana.svg'
import { StaticImageData } from 'next/image'

export interface CardClickContentType {
  icon: StaticImageData
  title: string
  description: string
}

export const CardClickContent: CardClickContentType[] = [
  {
    icon: BSC,
    title: "BSC",
    description: "Won Binance Smart Chain Hackathon The Binance Hackathon provided an excellent opportunity for blockchain engineers to display their skills through innovative crypto projects."
  },
  {
    icon: Polygon,
    title: "Polygon",
    description: "Won a Grant from Polygon Polygon Grant supports web3 startups at all stages with grants, mentorship, strategic aid, vouchers, co-working spaces, and more to help founders reach unicorn status."
  },
  {
    icon: Solana,
    title: "Solana",
    description: "Solana Won Solana Hackathon With 13,000+ builders and 350 teams, the hackathon spanned DeFi, NFTs, Web3, and more. After judging, 39 projects, including ours, were selected as award-winning initiatives."
  }
]