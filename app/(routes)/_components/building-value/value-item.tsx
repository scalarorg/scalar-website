import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Image from "next/image";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ValueItem
 * ------------------------------------------------------------------------------------------------------------------ */

const valueItemVariants = cva("");

type ValueItemVariantProps = VariantProps<typeof valueItemVariants> & {
  icon: string;
  value: string;
  description: string;
};

type ValueItemProps = ValueItemVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ValueItemVariantProps>;

export function ValueItem({
  className,
  children,
  icon,
  value,
  description,
  ...props
}: ValueItemProps): React.JSX.Element {
  return (
    <div {...props} className={valueItemVariants({ className })}>
      <Image
        src={icon}
        alt={value}
        className={
          "aspect-square w-[25px] sm:w-[30px] md:w-[35px] lg:w-[38px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[50px]"
        }
        width={50}
        height={50}
      />
      <div className={"mt-2 sm:mt-3 md:mt-4 text-neutral-1"}>
        <div
          className={
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-5xl 3xl:text-[54px] font-bold !leading-tight"
          }
        >
          {value}
        </div>
        <div className={"text-[13px] sm:text-sm 2xl:text-base 3xl:text-lg"}>
          {description}
        </div>
      </div>
    </div>
  );
}
