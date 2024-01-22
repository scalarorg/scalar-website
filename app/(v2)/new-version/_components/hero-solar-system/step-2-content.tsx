import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Step2Content
 * ------------------------------------------------------------------------------------------------------------------ */

const CONTENTS = [
  {
    title: "Atmosphere varies seasonally",
    description:
      "The atmosphere varies seasonally, as winter forces carbon dioxide to freeze out of the Martian air. In the ancient past, the atmosphere was likely thicker and able to support water flowing on its surface",
  },
  {
    title: "Much colder than Earth",
    description:
      "The average temperature is about minus 80 degrees Fahrenheit, although it can vary from minus 195 F near the poles during the winter to as much as 70 F at midday near the equator",
  },
  {
    title: "Carbon-dioxide snow clouds",
    description:
      "Reconnaissance Orbiter found the cloud making Mars the only body in the solar system known to host such unusual winter weather. The Red Planet also causes water-ice snow to fall from the clouds.",
  },
];

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
        The dust storms on Mars are the largest in the solar system
      </div>
      <div className={"mt-8 space-y-4"}>
        {CONTENTS.map(({ title, description }, index) => (
          <div key={index} className={"space-y-2"}>
            <div className={"text-white text-lg font-semibold"}>{title}</div>
            <div className={"text-white/80 text-sm"}>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
