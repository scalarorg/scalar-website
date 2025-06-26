import React from 'react';

import { HeroTitle } from './hero-title';
import { cn } from '@/lib/utils';

interface HeroProps {
  pill?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: React.ReactNode;
  image?: React.ReactNode;
  className?: string;
  animate?: boolean;
  additionalContent?: React.ReactNode;
}

export function Hero({
  pill,
  title,
  subtitle,
  cta,
  image,
  additionalContent,
  className,
  animate = true,
}: HeroProps) {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col space-y-8 md:space-y-12 lg:space-y-14 2xl:space-y-20',
        className,
      )}
    >
      <div
        style={{
          MozAnimationDuration: '100ms',
        }}
        className={cn(
          'mx-auto flex flex-1 flex-col items-center justify-center gap-10 duration-800 md:flex-row md:gap-12 xl:gap-14',
          {
            ['animate-in fade-in zoom-in-90 slide-in-from-top-24']: animate,
          },
        )}
      >
        <div className="flex w-full flex-1 flex-col items-center gap-y-7">
          {pill && (
            <div
              className={cn({
                ['animate-in fade-in fill-mode-both delay-300 duration-700']:
                  animate,
              })}
            >
              {pill}
            </div>
          )}

          <div className="flex flex-col items-center gap-y-4.5 md:gap-5">
            <HeroTitle>{title}</HeroTitle>

            {subtitle && (
              <div className="flex max-w-2xl">
                <h3 className="text-muted-foreground leading-snug p-0 text-center font-sans md:text-2xl font-normal tracking-tight">
                  {subtitle}
                </h3>
              </div>
            )}
          </div>

          {cta && (
            <div
              className={cn({
                ['animate-in fade-in fill-mode-both delay-500 duration-1000']:
                  animate,
              })}
            >
              {cta}
            </div>
          )}
        </div>
      </div>

      {image && (
        <div
          style={{
            MozAnimationDuration: '100ms',
          }}
          className={cn('mx-auto flex w-full max-w-6xl justify-center', {
            ['animate-in fade-in zoom-in-90 slide-in-from-top-32 fill-mode-both delay-600 duration-1000']:
              animate,
          })}
        >
          {image}
        </div>
      )}
      {additionalContent}
    </div>
  );
}
