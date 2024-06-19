import SectionTitle from "@/components/ui/section-title";
import ProblemBackground from '@/public/problem.png';
import Image from "next/image";
import Navigator from "@/public/icon/navigator.svg";
import MilkyWay2 from "@/public/milky-way-2.png";
import { cn } from "@/lib/utils";
import GROW_EFFECT from "@/public/grow-effect-1.svg";
import Globe from '@/public/globe-removebg-preview.png'
import Navigator1 from '@/public/icon/navigator-1.svg'

function Solution() {
    return (
        <div className="relative w-full bg-star max-md:mt-40">
            <Image
                src={GROW_EFFECT}
                alt=""
                sizes="100vw"
                className={cn(
                    "absolute -top-[200px] left-[250px]",
                )}
            />
            <SectionTitle className="text-center">Solutions We Offer</SectionTitle>

            <div className="max-w-7xl mx-auto items-center justify-between flex mt-[150px]">
                <div className="flex flex-col gap-y-[64px] ml-20">
                    <div className="relative inline-block p-0.5 bg-custom-border rounded-xl mt-[44px] z-20 w-fit">
                        <div className="bg-black rounded-xl px-[28px] py-[18px] text-neutral-6 text-[22px] font-medium w-[242px]">
                            Unusable assets:
                            <br />
                            Bitcoins
                        </div>
                    </div>
                    <div className="relative inline-block p-0.5 bg-custom-border rounded-xl mt-[44px] z-20 w-fit">
                        <div className="bg-black rounded-xl px-[28px] py-[18px] text-neutral-6 text-[22px] font-medium w-[242px]">
                            TVL / Assets
                            <br />
                            from siloed
                        </div>
                    </div>
                    <div className="relative inline-block p-0.5 bg-custom-border rounded-xl mt-[44px] z-20 w-fit">
                        <div className="bg-black rounded-xl px-[28px] py-[18px] text-neutral-6 text-[22px] font-medium w-[242px]">
                            Staking Collateral
                            <br />
                            Receipts
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    {/* <Image src={Globe} alt={""} width={1000} /> */}
                    <div className="w-[400px]">
                        <span className="text-transparent bg-clip-text bg-custom-text text-[43px] font-bold">
                            Scalar main-chain
                        </span>
                        <p className="text-center text-[22px] font-medium">
                            Shared Liquidity Layer, Move
                            <br />
                            and EVM supported
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[190px] ml-20">
                    <div className="relative shadow-solution bg-gradient-card rounded-lg py-4 px-7 w-fit text-[22px] text-neutral-6 font-medium">
                        <Image
                            className={"absolute -left-[27px] top-1"}
                            src={Navigator1}
                            alt={"Navigator1"}
                        />
                        Defi
                    </div>
                    <div className="relative shadow-solution bg-gradient-card rounded-lg py-4 px-7 text-[22px] text-neutral-6 font-medium w-[242px]">
                        <Image
                            className={"absolute -left-[27px] top-6"}
                            src={Navigator1}
                            alt={"Navigator1"}
                        />
                        Dapp & RWAs
                        <br />
                        for yield
                    </div>
                    <div className="relative shadow-solution bg-gradient-card rounded-lg py-4 px-7 w-fit text-[22px] text-neutral-6 font-medium">
                        <Image
                            className={"absolute -left-[27px] top-1"}
                            src={Navigator1}
                            alt={"Navigator1"}
                        />
                        Restaking
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solution;