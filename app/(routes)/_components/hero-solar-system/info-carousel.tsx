"use client";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: InfoCarousel
 * ------------------------------------------------------------------------------------------------------------------ */

const TWEEN_FACTOR = 1.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const infoCarouselVariants = cva("");

type InfoCarouselVariantProps = VariantProps<typeof infoCarouselVariants> & {
  content: { title: string; description: string }[];
  showNavigation?: boolean;
};

type InfoCarouselProps = InfoCarouselVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof InfoCarouselVariantProps>;

export function InfoCarousel({
  className,
  children,
  content,
  showNavigation = false,
  ...props
}: InfoCarouselProps): React.JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    startIndex: 1,
  });

  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div {...props} className={infoCarouselVariants({ className })}>
      <div
        className={
          "relative z-0 [mask-image:linear-gradient(90deg,rgba(196,196,196,0.00)_2.82%,rgba(196,196,196,0.40)_28.13%,#C4C4C4_33.19%,#C4C4C4_65.55%,rgba(196,196,196,0.40)_70.83%,rgba(196,196,196,0.00)_97.48%)]"
        }
      >
        <div className="overflow-hidden max-w-5xl" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4 [backface-visibility:hidden]">
            {content.map((content, index) => (
              <div
                className="flex-[0_0_90%] cursor-pointer min-w-0 pl-4 text-white space-y-2.5 max-w-sm"
                key={index}
                style={{
                  ...(tweenValues.length && { opacity: tweenValues[index] }),
                }}
                onClick={() => onThumbClick(index)}
              >
                <div className={"text-2xl font-semibold"}>{content.title}</div>
                <div className={"text-sm"}>{content.description}</div>
              </div>
            ))}
          </div>
        </div>
        {!showNavigation && (
          <div
            className={
              "absolute -z-10 w-[150%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 inset-0 h-[150%] bg-[rgba(5,5,5,30%)] blur-[100px]"
            }
          ></div>
        )}
      </div>
      {showNavigation && (
        <div className={"flex gap-14 mt-10 justify-center"}>
          {Array.from(Array(Math.ceil(content.length / 2))).map((_, index) => {
            let navigationLength = Math.ceil(content.length / 2);

            return (
              <div
                className={cn(
                  "cursor-pointer transition-colors text-neutral-1/30 text-3xl font-bold",
                  (index === selectedIndex ||
                    index === selectedIndex - navigationLength) &&
                    "text-neutral-1",
                )}
                key={index}
                onClick={() => {
                  if (index === selectedIndex) return;
                  if (selectedIndex < navigationLength) {
                    onThumbClick(index);
                    return;
                  }
                  onThumbClick(index + navigationLength);
                }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
