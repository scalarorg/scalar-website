import { HTMLAttributes } from 'react';

import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Button
 * ------------------------------------------------------------------------------------------------------------------ */

const buttonVariants = cva(
  cn(
    'flex items-center gap-x-2',
    'px-4 sm:px-8 py-2 sm:py-4 rounded-lg',
    'hover:opacity-80 transition-opacity cursor-pointer',
  ),
  {
    variants: {
      variant: {
        contained: 'bg-neutral-100 text-[#181818]',
        outlined: 'border border-neutral-500 text-neutral-0',
      },
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

type ButtonProps = ButtonVariantProps &
  Omit<HTMLAttributes<HTMLButtonElement>, keyof ButtonVariantProps>;

export function Button({
  className,
  children,
  variant,
  asChild,
  ...props
}: ButtonProps): React.JSX.Element {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp {...props} className={buttonVariants({ className, variant })}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
}
