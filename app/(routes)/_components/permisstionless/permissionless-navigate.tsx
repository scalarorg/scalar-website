import { cva, VariantProps } from "class-variance-authority";
import { Fragment, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: PermissionlessNavigate
 * ------------------------------------------------------------------------------------------------------------------ */

type NavigateVariant = "back" | "explore" | "next";

const permissionlessNavigateVariants = cva(
  "flex items-center relative group/explore select-none cursor-pointer",
);

type PermissionlessNavigateVariantProps = VariantProps<
  typeof permissionlessNavigateVariants
> & {
  variant?: NavigateVariant;
};

type PermissionlessNavigateProps = PermissionlessNavigateVariantProps &
  Omit<
    HTMLAttributes<HTMLDivElement>,
    keyof PermissionlessNavigateVariantProps
  >;

export function PermissionlessNavigate({
  className,
  children,
  variant = "back",
  ...props
}: PermissionlessNavigateProps): React.JSX.Element {
  return (
    <div {...props} className={permissionlessNavigateVariants({ className })}>
      {variant === "next" && (
        <Fragment>
          <div
            className={
              "text-white font-dm -translate-y-[1px] opacity-80 whitespace-nowrap group-hover/explore:-translate-x-1/4 group-hover/explore:opacity-100 transition-opacity"
            }
          >
            &lt;
          </div>
          <div
            className={
              "text-white -translate-y-[1px] opacity-0 font-dm whitespace-nowrap group-hover/explore:-translate-x-1/4 group-hover/explore:opacity-100 transition-opacity"
            }
          >
            &lt;
          </div>
        </Fragment>
      )}
      {variant === "back" && (
        <div
          className={
            "text-white opacity-0 mr-2.5 absolute left-0 font-dm group-hover/explore:left-0 whitespace-nowrap group-hover/explore:opacity-100 transition-all"
          }
        >
          &lt;&lt;
        </div>
      )}
      <div
        className={cn(
          "text-white font-dm opacity-80 whitespace-nowrap group-hover/explore:opacity-100 transition-all",
          variant === "back" && "group-hover/explore:translate-x-[22%]",
          variant === "next" && "group-hover/explore:-translate-x-[22%]",
        )}
      >
        {children}
      </div>
      {variant === "back" && (
        <Fragment>
          <div
            className={
              "text-white font-dm ml-4 translate-y-0 opacity-80 whitespace-nowrap group-hover/explore:translate-x-full group-hover/explore:opacity-100 transition-opacity"
            }
          >
            &gt;
          </div>
          <div
            className={
              "text-white opacity-0 font-dm translate-y-0 whitespace-nowrap group-hover/explore:translate-x-full group-hover/explore:opacity-100 transition-opacity"
            }
          >
            &gt;
          </div>
        </Fragment>
      )}
      {variant === "next" && (
        <div
          className={
            "text-white opacity-0 mr-0 absolute right-0 font-dm group-hover/explore:-right-1/4 whitespace-nowrap group-hover/explore:opacity-100 transition-all"
          }
        >
          &gt;&gt;
        </div>
      )}
    </div>
  );
}
