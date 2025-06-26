import { Slot, Slottable } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils';

export const HeroTitle: React.FC<
  React.HTMLAttributes<HTMLHeadingElement> & {
    asChild?: boolean;
  }
> = function HeroTitleComponent({ children, className, ...props }) {
  const Comp = props.asChild ? Slot : 'h1';

  return (
    <Comp
      className={cn(
        'hero-title text-heading font-heading flex flex-col text-center text-[46px]/tight font-semibold tracking-tighter sm:text-6xl lg:max-w-5xl lg:text-7xl xl:text-[4.5rem] dark:text-white',
        className,
      )}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
