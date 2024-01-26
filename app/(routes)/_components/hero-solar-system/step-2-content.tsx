import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { EXPLORE_TWO } from "@/lib/constants/hero-explore";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Step2Content
 * ------------------------------------------------------------------------------------------------------------------ */

const step2ContentVariants = cva("");

type Step2ContentVariantProps = VariantProps<typeof step2ContentVariants>;

type Step2ContentProps = Step2ContentVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof Step2ContentVariantProps>;

export function Step2Content({
  className,
  ...props
}: Step2ContentProps): React.JSX.Element {
  return (
    <div {...props} className={step2ContentVariants({ className })}>
      <div className={"text-white text-3xl font-semibold"}>
        The Dawn of Scalable Blockchain
      </div>
      <div className={"mt-8 space-y-4"}>
        {EXPLORE_TWO.map(({ title, description }, index) => (
          <div key={index} className={"space-y-2"}>
            <div className={"text-white text-lg font-semibold"}>{title}</div>
            <div className={"text-white/80 text-sm"}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
