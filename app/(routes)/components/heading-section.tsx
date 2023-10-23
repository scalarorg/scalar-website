import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { TitleText, TypingText } from "@/components/motion/text";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@/components/icon/chevron-right";
import { twMerge } from "tailwind-merge";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: HeadingSection
 * ------------------------------------------------------------------------------------------------------------------ */

const headingSectionVariants = cva("", {
  variants: {
    variant: {
      default: "",
      centered: "flex flex-col items-center text-center",
    },
  },
});

export type CTA = {
  label: string;
  href: string;
};

type Classnames = {
  prefix?: string;
  title?: string;
  description?: string;
  ctas?: string;
};

type HeadingSectionVariantProps = VariantProps<
  typeof headingSectionVariants
> & {
  prefix?: string;
  title: string;
  description: string;
  ctas?: CTA[];
  classNames?: Classnames;
};

type HeadingSectionProps = HeadingSectionVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof HeadingSectionVariantProps>;

export function HeadingSection({
  className,
  prefix,
  title,
  description,
  ctas,
  classNames,
  variant,
  ...props
}: HeadingSectionProps): React.JSX.Element {
  return (
    <div {...props} className={headingSectionVariants({ className, variant })}>
      {prefix ? (
        <TypingText
          className={twMerge(
            "text-neutral-500 uppercase text-sm font-bold",
            classNames?.prefix,
          )}
          title={prefix}
        />
      ) : null}
      <TitleText
        className={twMerge(
          "mt-2 font-baumans text-3xl sm:text-4xl lg:text-5xl max-w-lg",
          classNames?.title,
        )}
      >
        {title}
      </TitleText>
      <p
        className={twMerge(
          "text-neutral-400 text-sm mt-4 lg:mt-6 max-w-sm",
          classNames?.description,
        )}
      >
        {description}
      </p>
      {Boolean(ctas?.length) ? (
        <div className="mt-6 flex gap-3 sm:gap-4 flex-wrap">
          {ctas?.map((cta, index) => (
            <Button
              className={classNames?.ctas}
              key={index}
              variant={index % 2 === 0 ? "contained" : "outlined"}
              endIcon={ChevronRightIcon}
            >
              {cta.label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
