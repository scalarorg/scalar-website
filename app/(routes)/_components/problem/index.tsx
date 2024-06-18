import SectionTitle from "@/components/ui/section-title";
import ProblemBackground from '@/public/problem.png';
import Image from "next/image";
import Navigator from "@/public/icon/navigator.svg";
import MilkyWay2 from "@/public/milky-way-2.png";

function Problem() {
    return (
        <div className="relative w-full bg-star bg-center bg-cover">
            <Image
                src={ProblemBackground}
                alt={"problem background"}
                className={
                    "absolute inset-x-0 w-full object-cover object-center aspect-[1920/2196]"
                }
            />
            <SectionTitle className="pt-[190px] mx-auto text-center">Current Industry Problems</SectionTitle>

            <div className="w-full flex flex-col items-center mt-[90px]">
                <div className="relative 2xl:self-start 2xl:ml-[380px]">
                    <Image
                        className={"absolute top-1/4 -left-20"}
                        src={Navigator}
                        alt={"Navigator"}
                    />
                    <div className="px-[44px] py-[25px] bg-[#282A34] bg-opacity-50 w-[488px] rounded-lg">
                        <p className="pl-6 border-l border-primary-cyan-900 text-[34px] text-neutral-5 font-medium">$1T+ in unusable assets <br /> on Bitcoin</p>
                    </div>
                </div>

                <div className="relative 2xl:self-end 2xl:mr-[380px] -mt-20 max-2xl:mt-20">
                    <Image
                        className={"absolute top-1/4 -left-20"}
                        src={Navigator}
                        alt={"Navigator"}
                    />
                    <div className="px-[44px] py-[25px] bg-[#282A34] bg-opacity-50 w-[488px] rounded-lg">
                        <p className="pl-6 border-l border-primary-cyan-900 text-[34px] text-neutral-5 font-medium">$3T+ in siloed liquidity <br /> with 100+ chains</p>
                    </div>
                </div>

                <div className="relative mt-20">
                    <Image
                        className={"absolute top-1/4 -left-20"}
                        src={Navigator}
                        alt={"Navigator"}
                    />
                    <div className="px-[44px] py-[25px] bg-[#282A34] bg-opacity-50 w-[488px] rounded-lg">
                        <p className="pl-6 border-l border-primary-cyan-900 text-[34px] text-neutral-5 font-medium">$1B+/year in MEV attacks, taxes users</p>
                    </div>
                </div>
            </div>

            <Image
                src={MilkyWay2}
                alt={"Milky way"}
                className={
                    "-mt-60 mx-auto"
                }
            />
        </div>
    );
}

export default Problem;