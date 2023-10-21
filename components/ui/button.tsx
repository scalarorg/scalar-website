import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { IconProps } from "@/lib/types/icon";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Button
 * ------------------------------------------------------------------------------------------------------------------ */

const buttonVariants = cva(
  "px-4 sm:px-8 py-2 sm:py-4 flex rounded-lg items-center font-medium text-base sm:text-lg gap-x-2 hover:opacity-80 transition-opacity cursor-pointer",
  {
    variants: {
      variant: {
        contained: "bg-neutral-100 text-[#181818]",
        outlined: "border border-neutral-500 text-neutral-0",
      },
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants> & {
  endIcon?: IconProps;
  startIcon?: IconProps;
};

type ButtonProps = ButtonVariantProps &
  Omit<HTMLAttributes<HTMLButtonElement>, keyof ButtonVariantProps>;

export function Button({
  className,
  children,
  variant,
  endIcon: EndIcon,
  startIcon: StartIcon,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button {...props} className={buttonVariants({ className, variant })}>
      {StartIcon && <StartIcon />}
      {children}
      {EndIcon && <EndIcon />}
    </button>
  );
}
