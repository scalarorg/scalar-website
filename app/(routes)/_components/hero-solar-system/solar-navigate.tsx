import { Fragment, HTMLAttributes } from "react";

import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: SolarNavigate
 * ------------------------------------------------------------------------------------------------------------------ */

type NavigateVariant = "back" | "explore" | "next";

const solarNavigateVariants = cva(
  "flex items-center relative group/explore select-none cursor-pointer",
);

type SolarNavigateVariantProps = VariantProps<typeof solarNavigateVariants> & {
  variant?: NavigateVariant;
  large?: boolean;
};

type SolarNavigateProps = SolarNavigateVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof SolarNavigateVariantProps>;

export function SolarNavigate({
  className,
  children,
  variant = "back",
  large = false,
  ...props
}: SolarNavigateProps): React.JSX.Element {
  return (
    <div {...props} className={solarNavigateVariants({ className })}>
      {variant === "next" && (
        <Fragment>
          <div
            className={
              "text-white font-dm -translate-y-[1px] opacity-80 whitespace-nowrap group-hover/explore:-translate-x-4 group-hover/explore:opacity-100 transition-opacity"
            }
          >
            &lt;
          </div>
          <div
            className={
              "text-white mr-2.5 -translate-y-[1px] opacity-0 font-dm whitespace-nowrap group-hover/explore:-translate-x-4 group-hover/explore:opacity-100 transition-opacity"
            }
          >
            &lt;
          </div>
        </Fragment>
      )}
      {variant === "back" && (
        <div
          className={cn(
            "text-white opacity-0 mr-2.5 absolute left-0 font-dm whitespace-nowrap group-hover/explore:opacity-100 transition-all",
            large
              ? "group-hover/explore:-left-0.5"
              : "group-hover/explore:-left-3",
          )}
        >
          &lt;&lt;
        </div>
      )}
      <div
        className={cn(
          "text-white font-dm opacity-80 whitespace-nowrap group-hover/explore:opacity-100 transition-all",
          variant === "back" &&
            (!large
              ? "group-hover/explore:translate-x-4"
              : "group-hover/explore:translate-x-8"),
          variant === "next" && "group-hover/explore:-translate-x-4",
        )}
      >
        {children}
      </div>
      {variant === "back" && (
        <Fragment>
          <div
            className={cn(
              "text-white ml-2.5 font-dm -translate-y-[1px] opacity-80 whitespace-nowrap group-hover/explore:translate-x-4 group-hover/explore:opacity-100 transition-opacity",
              large
                ? "group-hover/explore:translate-x-8"
                : "group-hover/explore:translate-x-4",
            )}
          >
            &gt;
          </div>
          <div
            className={cn(
              "text-white opacity-0 font-dm -translate-y-[1px] whitespace-nowrap group-hover/explore:opacity-100 transition-opacity",
              large
                ? "group-hover/explore:translate-x-8"
                : "group-hover/explore:translate-x-4",
            )}
          >
            &gt;
          </div>
        </Fragment>
      )}
      {variant === "next" && (
        <div
          className={
            "text-white opacity-0 mr-2.5 absolute right-0 font-dm group-hover/explore:-right-6 whitespace-nowrap group-hover/explore:opacity-100 transition-all"
          }
        >
          &gt;&gt;
        </div>
      )}
    </div>
  );
}
