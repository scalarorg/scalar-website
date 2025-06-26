import { cn } from '../../lib/utils';
import { Heading } from '../ui/heading';

interface SecondaryHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  pill?: React.ReactNode;
  heading: React.ReactNode;
  subheading: React.ReactNode;
}

export const SecondaryHero: React.FC<SecondaryHeroProps> =
  function SecondaryHeroComponent({
    className,
    pill,
    heading,
    subheading,
    children,
    ...props
  }) {
    return (
      <div
        className={cn(
          'flex flex-col items-center space-y-16 text-center',
          className,
        )}
        {...props}
      >
        {pill}

        <div className="flex flex-col gap-4.5">
          <Heading
            level={2}
            className="w-full text-center text-4xl font-semibold xl:text-6xl/tight"
          >
            {heading}
          </Heading>

          <h3 className="text-muted-foreground font-sans text-base font-normal tracking-tight md:text-xl">
            {subheading}
          </h3>
        </div>

        {children}
      </div>
    );
  };
