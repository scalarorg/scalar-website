import React, { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { cn } from '@/lib/utils';

interface RippleProps extends ComponentPropsWithoutRef<'div'> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 450,
  mainCircleOpacity = 0.24,
  numCircles = 5,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 select-none',
        className,
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 240;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = 'solid';

        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full z-0"
            style={
              {
                '--i': i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: '1px',
                borderColor: `var(--foreground)`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
                background:
                  'radial-gradient(50% 50% at 50% 50%, #DDE4FF 0%, #FFF 100%)',
                boxShadow: '0px 0px 50px 0px rgba(219, 227, 255, 0.1)',
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = 'Ripple';
