import { cn } from "@/lib/utils";

type CardProps = {
    title: string,
    description: string,
    hasGradientBg: boolean,
}

function Card({ title, description, hasGradientBg }: CardProps) {
    return (
        <div className={cn("border px-[45px] max-md:px-4 pt-[55px] max-md:pt-[30px] pb-[35px] max-md:pb-4 rounded-xl w-[325px] max-md:w-[157px]", hasGradientBg ? 'bg-gradient-card' : '')}>
            <p className="text-[43px] max-md:text-xl font-bold">{title}</p>
            <p className="text-[22px] max-md:text-base">{description}</p>
        </div>
    );

}

export default Card;