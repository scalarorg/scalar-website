import { cn } from "@/lib/utils";

type CardProps = {
    title: string,
    description: string,
    hasGradientBg: boolean,
}

function Card({ title, description, hasGradientBg }: CardProps) {
    return (
        <div className={cn("border px-[45px] pt-[55px] pb-[35px] rounded-xl w-[325px]", hasGradientBg ? 'bg-gradient-card' : '')}>
            <p className="text-[43px] font-bold">{title}</p>
            <p className="text-[22px]">{description}</p>
        </div>
    );

}

export default Card;