"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import STARS_BACKGROUND from "@/public/stars.webp";
import Image from "next/image";
import { SolarNavigate } from "@/app/(routes)/_components/hero-solar-system/solar-navigate";
import { InfoCarousel } from "@/app/(routes)/_components/hero-solar-system/info-carousel";
import { cn } from "@/lib/utils";
import { Step2Content } from "@/app/(routes)/_components/hero-solar-system/step-2-content";
import CENTER_RADIANT from "@/public/center-gradient.webp";
import Mars from "@/public/mars.webp";
import Mouse from "@/public/icon/mouse.svg";
import { EXPLORE_ONE, EXPLORE_THREE } from "@/lib/constants/hero-explore";
import MouseWhite from "@/public/icon/mouse-white.svg";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { figmaSlow } from "@/components/motion/transition";

const planets = ["/moon.webp", "/earth-left.webp"];

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const TWEEN_FACTOR = 0.15;
const PLANET_CONTENT_INDEX = 1;

export function HeroSolarSystem({ className }: { className?: string }) {
  const [step, setStep] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    // align: "center",
    containScroll: false,
    startIndex: 0,
    // skipSnaps: true,
  });

  const [isEmblaRendered, setIsEmblaRendered] = useState(false);
  const [isEmblaLoaded, setIsEmblaLoaded] = useState(false);

  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

    // if user scrolls to the other side of the planet, set step to 0
    if (styles[PLANET_CONTENT_INDEX] < 0.93) {
      if (step !== 0) {
        setStep(0);
      }
    }
    setScrollProgress(scrollProgress);
  }, [emblaApi, setTweenValues, step]);

  useEffect(() => {
    if (!isEmblaRendered) {
      setIsEmblaRendered(true);

      // after 0.5s, set isEmblaLoaded to true
      setTimeout(() => {
        setIsEmblaLoaded(true);
      }, 500);

      return;
    }
  }, [isEmblaRendered]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  const router = useRouter();
  const onScrollDown = useCallback(() => {
    // scroll down to the #intro section
    router.push("#intro", { scroll: true });
  }, [router]);

  return (
    <div className={cn("relative z-0 h-screen overflow-hidden", className)}>
      {/*Colorful background*/}
      <div
        className={
          "w-[1920px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-0 h-[1201px] bg-[radial-gradient(21.01%_31.39%_at_64.95%_44.09%,#0047FF_0%,rgba(0,22,78,0.00)_100%),radial-gradient(46.26%_45.3%_at_48.8%_51.72%,#1755F4_0%,rgba(28,83,224,0.00)_100%)]"
        }
      ></div>
      <div
        className={cn(
          "w-[732px] absolute z-0 -left-[3vw] top-1/2 -translate-y-1/2 h-[1302px] bg-[radial-gradient(62.5%_42.22%_at_30.37%_43.82%,#00B2FF_0%,rgba(0,61,133,0.00)_100%),radial-gradient(48.7%_76.75%_at_3.79%_58.45%,#001AFF_0%,rgba(0,61,133,0.00)_100%)] transition-transform duration-500",
          tweenValues[PLANET_CONTENT_INDEX] > 0.9 &&
            (step === 0 ? "-translate-x-1/2" : "-translate-x-full"),
        )}
      ></div>
      <div
        className={cn(
          "transition-transform duration-500 w-[805px] absolute z-0 -right-[4vw] top-1/2 -translate-y-1/2 h-[1302px] bg-[radial-gradient(65.96%_46.34%_at_73.79%_42.51%,#0038FF_0%,rgba(2,83,178,0.00)_89.69%),radial-gradient(53.33%_43.35%_at_86.02%_56.87%,#001AFF_0%,rgba(0,61,133,0.00)_100%)]",
          tweenValues[PLANET_CONTENT_INDEX] > 0.9 &&
            (step === 0 ? "translate-x-[30%]" : "translate-x-full"),
        )}
      ></div>

      {/*Background stars*/}
      <motion.div
        className={"absolute inset-0 -z-10"}
        animate={{
          transform:
            step === 0
              ? "none"
              : `translateX(${
                  -scrollProgress * 10 + 10 * (step % 2 === 0 ? 1 : -1)
                }%) scale(${140 + step * 10}%)`,
        }}
        transition={figmaSlow}
      >
        <Image
          className={"-z-10"}
          fill
          style={{
            transform:
              step === 0
                ? `translateX(${-scrollProgress * 10}%) scale(140%)`
                : "none",
          }}
          src={STARS_BACKGROUND}
          alt={"Star background"}
        />
      </motion.div>

      {/*Mars*/}
      <Image
        src={Mars}
        alt={"Mars"}
        className={cn(
          "absolute top-1/2 -left-[30%] w-[40%] aspect-square pointer-events-none opacity-0",
          step === 0 ? "z-20" : "z-0",
          isEmblaRendered && "opacity-100 scale-100",
          !isEmblaLoaded &&
            "transition-[opacity,transform] scale-90 duration-500",
        )}
        style={{
          transform: `translateX(${
            scrollProgress * (step === 0 ? 300 : 330)
          }%) translateY(-50%)`,
        }}
        priority={true}
      />

      {/*Title*/}
      {/*<div*/}
      {/*  className={cn(*/}
      {/*    "absolute bottom-28 w-full z-20",*/}
      {/*    step === 0*/}
      {/*      ? "animate-center-gradient-show"*/}
      {/*      : "animate-center-gradient-hide",*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <div className={"flex items-center justify-between gap-12"}>*/}
      {/*    <div*/}
      {/*      className={cn(*/}
      {/*        "w-full h-[1px] bg-[#8BC1FF] transition-all duration-500",*/}
      {/*        (tweenValues[PLANET_CONTENT_INDEX] > 0.9 || step !== 0) && "w-0",*/}
      {/*      )}*/}
      {/*    ></div>*/}
      {/*    <div*/}
      {/*      className={cn(*/}
      {/*        "opacity-100 transition-opacity duration-500",*/}
      {/*        step !== 0 && "opacity-0",*/}
      {/*      )}*/}
      {/*    >*/}
      {/*      <div*/}
      {/*        className={*/}
      {/*          "font-dm z-20 text-center whitespace-nowrap font-bold text-3xl text-white"*/}
      {/*        }*/}
      {/*      >*/}
      {/*        The Future of Scalable*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div*/}
      {/*      className={cn(*/}
      {/*        "w-full h-[1px] bg-[#8BC1FF] transition-all duration-500",*/}
      {/*        (tweenValues[PLANET_CONTENT_INDEX] > 0.9 || step !== 0) && "w-0",*/}
      {/*      )}*/}
      {/*    ></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div
        className={cn(
          "absolute bottom-28 left-32 hidden z-30",
          tweenValues[PLANET_CONTENT_INDEX] > 0.9 && step == 0
            ? "block animate-center-gradient-show"
            : "animate-center-gradient-hide",
        )}
      >
        <SolarNavigate
          className={cn(
            "opacity-0 transition-opacity text-white duration-500 delay-500",
            tweenValues[PLANET_CONTENT_INDEX] > 0.9 &&
              step === 0 &&
              "opacity-100",
          )}
          onClick={() => {
            emblaApi?.scrollTo(PLANET_CONTENT_INDEX - 1);
          }}
          variant={"next"}
        >
          Back
        </SolarNavigate>
      </div>

      {/*Scroll Down*/}
      <div
        className={cn(
          "opacity-0 transition-opacity",
          isEmblaRendered && "opacity-100",
        )}
      >
        <div
          className={cn(
            "transition-opacity duration-500",
            tweenValues[PLANET_CONTENT_INDEX] < 0.9 && step === 0
              ? "animate-center-gradient-show"
              : "animate-center-gradient-hide",
            "absolute bottom-[12px] left-1/2 -translate-x-1/2 ",
          )}
        >
          <div
            className={"flex flex-col space-y-2 items-center justify-center"}
          >
            <Image src={Mouse} alt={"Mouse"} />
            <div className={"text-lg text-neutral-6"}>Scroll down to skip</div>
          </div>
        </div>
      </div>

      {/*Slides*/}
      <div
        className={cn(
          "absolute z-0 top-1/2 -translate-y-1/2 opacity-0 transition-[opacity,transform] duration-500 scale-90",
          isEmblaRendered && "opacity-100 scale-100",
        )}
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {planets.map((image, index) => (
            <div
              className={cn(
                `flex-[0_0_52%]`,
                `min-w-0 pl-4 relative transition-transform duration-1000 select-none ease-in-out`,
                index === PLANET_CONTENT_INDEX && "cursor-pointer",
                index !== PLANET_CONTENT_INDEX
                  ? "cursor-pointer"
                  : step === 0
                  ? "cursor-pointer"
                  : "select-none",
                // STEP 2
                step === 1
                  ? index === 0
                    ? "scale-[30%] -translate-x-1/2"
                    : "scale-[170%] ease-[cubic-bezier(0.31,0.01,0.44,0.99)] duration-1000"
                  : "",
                step === 2 &&
                  index === PLANET_CONTENT_INDEX &&
                  "scale-[190%] -translate-x-[50%]",
                step === 2 &&
                  index === PLANET_CONTENT_INDEX + 1 &&
                  "translate-x-1/2 scale-[90%] ease-[cubic-bezier(0.31,0.01,0.44,0.99)] duration-1000",
                // STEP 3
                step === 3 &&
                  index === PLANET_CONTENT_INDEX &&
                  "translate-x-[72%] translate-y-[75%] scale-[300%] ease-[cubic-bezier(0.31,0.01,0.44,0.99)] duration-1000",
                step === 3 &&
                  index === PLANET_CONTENT_INDEX + 1 &&
                  "translate-x-1/2 scale-[90%]",
                step === 3 &&
                  index === PLANET_CONTENT_INDEX - 1 &&
                  "-translate-x-[50%] scale-[90%]",
                step == 0 && index === 0 ? "z-30" : "z-10",
              )}
              onClick={() => {
                if (index !== PLANET_CONTENT_INDEX) {
                  if (step === 0 && tweenValues[PLANET_CONTENT_INDEX] > 0.9) {
                    emblaApi?.scrollTo(index);
                    return;
                  }
                  emblaApi?.scrollTo(PLANET_CONTENT_INDEX);
                  return;
                }
                if (step === 0 && tweenValues[PLANET_CONTENT_INDEX] < 0.9) {
                  emblaApi?.scrollTo(PLANET_CONTENT_INDEX);
                  return;
                }
                setStep((step) => (step === 3 ? 1 : step + 1));
              }}
              key={index}
            >
              {index == PLANET_CONTENT_INDEX && (
                <Image
                  width={1309}
                  height={1310}
                  priority={true}
                  className={cn(
                    "cursor-pointer transition-all !ease-[cubic-bezier(0.31,0.01,0.44,0.99)] object-center duration-1000 absolute z-20 left-1/2 w-[1309px] h-[1310px] top-1/2 -translate-y-1/2 -translate-x-1/2",
                    tweenValues[PLANET_CONTENT_INDEX] > 0.9 && step === 0
                      ? "animate-center-gradient-show"
                      : "animate-center-gradient-hide",
                  )}
                  src={CENTER_RADIANT}
                  alt={"Center radiant"}
                  onClick={(e) => {
                    setStep(1);
                    e.stopPropagation();
                  }}
                />
              )}
              <div
                style={{
                  ...(step !== 0
                    ? {
                        transition: "transform 0.5s ease-in-out",
                        transform: `scale(${tweenValues[index]})`,
                      }
                    : tweenValues.length && {
                        transition: "transform 0.3s ease-out",
                        transform: `scale(${tweenValues[index]})`,
                      }),
                }}
                className={cn("relative")}
              >
                <Image
                  width={index === 0 ? 1710 : 2434}
                  height={index === 0 ? 1760 : 2434}
                  className={cn(
                    "block object-contain transition-all",
                    index === 0 ? "scale-[60%]" : "scale-[80%]",
                  )}
                  src={image}
                  quality={100}
                  priority
                  alt="Planet"
                />
                <AnimatePresence initial>
                  {step === 1 && index === PLANET_CONTENT_INDEX && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      transition={figmaSlow}
                      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[radial-gradient(69.53%_45.93%_at_49.99%_50.69%,#49A8FF_0%,#000_100%)] bg-fixed opacity-50 mix-blend-hard-light rounded-full scale-[80%]"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Content Step 1*/}
      <div
        className={cn(
          "absolute bottom-28 left-32 hidden",
          step === 1 && "block",
        )}
      >
        <SolarNavigate
          className={cn(
            "opacity-0 transition-opacity text-white duration-500 delay-500",
            step === 1 && "opacity-100",
          )}
          onClick={() => {
            setStep(0);
          }}
          variant={"next"}
        >
          Back
        </SolarNavigate>
      </div>
      <div className={cn("opacity-0", isEmblaRendered && "opacity-100")}>
        <div
          className={cn(
            "",
            step === 1
              ? "animate-center-gradient-show"
              : "animate-center-gradient-hide",
          )}
        >
          <div className={"absolute bottom-28 right-32 space-y-4"}>
            <SolarNavigate
              onClick={() => {
                setStep(2);
              }}
            >
              Explore
            </SolarNavigate>
          </div>
          <InfoCarousel
            content={EXPLORE_ONE}
            className={"absolute bottom-40 left-32"}
          />
        </div>
      </div>

      {/*Content Step 2*/}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-[11%] hidden",
          step === 2 && "block",
        )}
      >
        <Step2Content
          className={cn(
            "max-w-xs opacity-0 transition-opacity duration-500",
            step === 2 && "opacity-100",
          )}
        />
      </div>

      <div
        className={cn(
          "absolute bottom-28 left-32 hidden",
          step === 2 && "block",
        )}
      >
        <SolarNavigate
          className={cn(
            "opacity-0 transition-opacity text-white duration-500 delay-500",
            step === 2 && "opacity-100",
          )}
          onClick={() => {
            setStep(1);
          }}
          variant={"next"}
        >
          Back
        </SolarNavigate>
      </div>
      <div
        className={cn(
          "absolute bottom-28 right-32 hidden",
          step === 2 && "block",
          // step === 2
          //   ? "animate-center-gradient-show"
          //   : "animate-center-gradient-hide",
        )}
      >
        <SolarNavigate
          className={cn(
            "opacity-0 transition-opacity text-white duration-500 delay-500",
            step === 2 && "opacity-100",
          )}
          onClick={() => {
            setStep(3);
          }}
          variant={"back"}
        >
          Explore
        </SolarNavigate>
      </div>

      {/*Content Step 3*/}
      <InfoCarousel
        content={EXPLORE_THREE}
        showNavigation={true}
        className={cn(
          "absolute bottom-[30%] left-1/2 -translate-x-1/2 hidden",
          "opacity-0 transition-opacity duration-500 delay-500",
          step === 3 && "opacity-100 block",
        )}
      />
      <div
        className={cn(
          "absolute bottom-28 left-32 hidden",
          step === 3 && "block",
        )}
      >
        <SolarNavigate
          className={cn(
            "opacity-0 transition-opacity text-white duration-500 delay-500",
            step === 3 && "opacity-100",
          )}
          onClick={() => {
            setStep(2);
          }}
          variant={"next"}
        >
          Back
        </SolarNavigate>
      </div>
      <div
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2 hidden",
          step === 3 && "block",
        )}
      >
        <div
          className={
            "flex flex-col space-y-2 items-center justify-center cursor-pointer"
          }
          onClick={onScrollDown}
        >
          <Image src={MouseWhite} alt={"Mouse"} />
          <div className={"text-lg text-neutral-6 text-center"}>
            Scroll down
          </div>
        </div>
      </div>
    </div>
  );
}
