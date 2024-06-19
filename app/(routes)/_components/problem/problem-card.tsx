import Image from "next/image";
import Navigator from "@/public/icon/navigator.svg";
import { cn } from "@/lib/utils";

type ProblemCardProps = {
    className?: string,
    imageClassName?: string,
    content: string,
}
function ProblemCard({ className, imageClassName, content }: ProblemCardProps) {
    return (
        <div className={cn("group relative", className)}>
            <Image
                className={cn("absolute top-1/4 max-md:top-2 -left-20 transition-transform duration-500 group-hover:scale-125", imageClassName)}
                src={Navigator}
                alt="Navigator"
            />
            <div className="px-[44px] py-[25px] bg-[#282A34] bg-opacity-50 w-[488px] rounded-lg">
                <div className="border-l group-hover:border-l-2 border-primary-cyan-900">
                    <p className="pl-6 text-[34px] max-md:text-base text-neutral-5 font-medium max-md:font-normal transition-transform duration-500 group-hover:translate-x-4">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProblemCard;