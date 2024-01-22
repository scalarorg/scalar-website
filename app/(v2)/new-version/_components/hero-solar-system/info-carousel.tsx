"use client";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: InfoCarousel
 * ------------------------------------------------------------------------------------------------------------------ */

const slides = [
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus metus ut etiam magna nunc vel amet. Condimentum duis quisque lacus eros fermentum sed. Et vitae est curabitur rhoncus iaculis elit scelerisque tristique.",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus metus ut etiam magna nunc vel amet. Condimentum duis quisque lacus eros fermentum sed. Et vitae est curabitur rhoncus iaculis elit scelerisque tristique.",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus metus ut etiam magna nunc vel amet. Condimentum duis quisque lacus eros fermentum sed. Et vitae est curabitur rhoncus iaculis elit scelerisque tristique.",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus metus ut etiam magna nunc vel amet. Condimentum duis quisque lacus eros fermentum sed. Et vitae est curabitur rhoncus iaculis elit scelerisque tristique.",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus metus ut etiam magna nunc vel amet. Condimentum duis quisque lacus eros fermentum sed. Et vitae est curabitur rhoncus iaculis elit scelerisque tristique.",
  },
];

const TWEEN_FACTOR = 1.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const infoCarouselVariants = cva("");

type InfoCarouselVariantProps = VariantProps<typeof infoCarouselVariants>;

type InfoCarouselProps = InfoCarouselVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof InfoCarouselVariantProps>;

export function InfoCarousel({
  className,
  children,
  ...props
}: InfoCarouselProps): React.JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    startIndex: 1,
  });

  const [tweenValues, setTweenValues] = useState<number[]>([]);

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

  return (
    <div {...props} className={infoCarouselVariants({ className })}>
      <div
        className={
          "relative [mask-image:linear-gradient(90deg,rgba(196,196,196,0.00)_2.82%,rgba(196,196,196,0.40)_28.13%,#C4C4C4_33.19%,#C4C4C4_65.55%,rgba(196,196,196,0.40)_70.83%,rgba(196,196,196,0.00)_97.48%)]"
        }
      >
        <div className="overflow-hidden max-w-3xl" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4 [backface-visibility:hidden]">
            {slides.map((content, index) => (
              <div
                className="flex-[0_0_80%] cursor-pointer min-w-0 pl-4 text-white space-y-2.5 max-w-xs"
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
      </div>
    </div>
  );
}
