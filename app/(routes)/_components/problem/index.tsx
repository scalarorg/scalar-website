import SectionTitle from "@/components/ui/section-title";
import ProblemBackground from '@/public/problem.png';
import Image from "next/image";
import Navigator from "@/public/icon/navigator.svg";
import MilkyWay2 from "@/public/milky-way-2.png";
import ProblemCard from "./problem-card";

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
            <SectionTitle className="pt-[190px] max-md:pt-0 mx-auto text-center">Current Industry Problems</SectionTitle>

            <div className="w-full flex flex-col items-center mt-[90px] max-md:mt-4 px-4">
                <ProblemCard className="xl:self-start 3xl:ml-[380px] xl:ml-40" content={"$1T+ in unusable assets on Bitcoin"} />
                <ProblemCard className="xl:self-end 2xl:mr-[380px] xl:mr-40 -mt-20 max-xl:mt-20 max-md:mt-2" content={"$3T+ in siloed liquidity with 100+ chains"} />
                <ProblemCard className="mt-20 max-md:mt-2" content={"$1B+/year in MEV attacks, taxes users"} />
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