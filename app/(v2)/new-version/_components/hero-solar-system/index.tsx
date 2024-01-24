"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import STARS_BACKGROUND from "@/public/stars.webp";
import Image from "next/image";
import { SolarNavigate } from "@/app/(v2)/new-version/_components/hero-solar-system/solar-navigate";
import { InfoCarousel } from "@/app/(v2)/new-version/_components/hero-solar-system/info-carousel";
import { cn } from "@/lib/utils";
import { Step2Content } from "@/app/(v2)/new-version/_components/hero-solar-system/step-2-content";
import CENTER_RADIANT from "@/public/center-gradient.webp";
import Link from "next/link";
import Mars from "@/public/mars.webp";
import Mouse from "@/public/icon/mouse.svg";
import VisualCue from "@/public/gif/visual-cue.gif";

const planets = [
  // "/mars.webp",
  "/moon.webp",
  "/earth-left.webp",
  // "/earth-right.webp",
];

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const TWEEN_FACTOR = 0.15;
const PLANET_CONTENT_INDEX = 1;

export function HeroSolarSystem() {
  const [step, setStep] = useState<number>(0);
  const [prevStep, setPrevStep] = useState<number>(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
  });

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
        setPrevStep(step);
        setStep(0);
      }
    }
    setScrollProgress(scrollProgress);
  }, [emblaApi, setTweenValues, step]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  // useEffect(() => {
  //   if (step === 1 && prevStep === 0) {
  //     // set tween values of PLANET_CONTENT increase 70% of their current values, and the rest decrease 70% of their current values
  //     setTimeout(() => {
  //       setTweenValues([
  //         ...tweenValues.map((value, index) => {
  //           if (index !== PLANET_CONTENT_INDEX) {
  //             return value * 0.3;
  //           } else {
  //             return value * 1.7;
  //           }
  //         }),
  //       ]);
  //     }, 0);
  //   }

  // if (step === 2 && prevStep === 1) {
  //   // set tween values of PLANET_CONTENT increase 10% of their current values, the left one decrease 90%, and the rest decrease 70% of their current values
  //   setTimeout(() => {
  //     setTweenValues([
  //       ...tweenValues.map((value, index) => {
  //         if (index !== PLANET_CONTENT_INDEX) {
  //           return value;
  //         } else if (index === PLANET_CONTENT_INDEX + 1) {
  //           return value * 0.8;
  //         } else {
  //           return value;
  //         }
  //       }),
  //     ]);
  //   }, 500);
  // }
  // }, [step, prevStep]);

  return (
    <div className={"relative z-0 h-screen overflow-hidden"}>
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

      {/*Center radiant*/}
      <Image
        width={1309}
        height={1310}
        className={cn(
          "cursor-pointer transition-all object-center duration-500 absolute z-20 left-1/2 w-[1309px] h-[1310px] top-1/2 -translate-y-1/2 -translate-x-1/2",
          tweenValues[PLANET_CONTENT_INDEX] > 0.9 && step === 0
            ? "animate-center-gradient-show"
            : "animate-center-gradient-hide",
        )}
        src={CENTER_RADIANT}
        alt={"Center radiant"}
        onClick={() => {
          setStep(1);
          setPrevStep(0);
        }}
      />

      {/*Background stars*/}
      <Image
        className={"-z-10"}
        style={{
          transform: `translateX(${-scrollProgress * 10}%)`,
        }}
        fill
        src={STARS_BACKGROUND}
        alt={"Star background"}
      />

      {/*Mars*/}
      <Image
        src={Mars}
        alt={"Mars"}
        className={cn(
          "absolute top-1/2 -left-[30%] w-[40%] aspect-square pointer-events-none",
          step === 0 ? "z-20" : "z-0  transition-transform duration-500",
        )}
        style={{
          transform: `translateX(${
            scrollProgress * (step === 0 ? 300 : 330)
          }%) translateY(-50%)`,
        }}
      />

      {/*Title*/}
      <div
        className={
          "absolute bottom-28 w-full flex items-center justify-between gap-12 z-20"
        }
      >
        <div
          className={cn(
            "w-full h-[1px] bg-[#8BC1FF] transition-all duration-500",
            step !== 0 && "w-0",
          )}
        ></div>
        <div
          className={cn(
            "opacity-100 transition-opacity duration-500",
            step !== 0 && "opacity-0",
          )}
        >
          <div
            className={
              "font-dm z-20 text-center whitespace-nowrap font-bold text-3xl text-white"
            }
          >
            The Future of Scalable
          </div>
        </div>
        <div
          className={cn(
            "w-full h-[1px] bg-[#8BC1FF] transition-all duration-500",
            step !== 0 && "w-0",
          )}
        ></div>
      </div>

      {/*Scroll Down*/}
      <div
        className={cn(
          "transition-opacity duration-500",
          tweenValues[PLANET_CONTENT_INDEX] < 0.9 && step === 0
            ? "animate-center-gradient-show"
            : "animate-center-gradient-hide",
          "absolute bottom-[12px] left-1/2 -translate-x-1/2 ",
        )}
      >
        <div className={"flex flex-col space-y-2 items-center justify-center"}>
          <Image src={Mouse} alt={"Mouse"} />
          <div className={"text-lg text-neutral-6"}>Scroll down to skip</div>
        </div>
      </div>

      {/*Visual Cue*/}
      <Image
        src={VisualCue}
        alt={"Visual cue"}
        className={cn(
          "absolute right-[1%] top-1/2 z-20",
          step === 0
            ? "animate-center-gradient-show"
            : "animate-center-gradient-hide",
        )}
        style={{
          transform: `translateX(${
            scrollProgress * -87
          }vw) translateY(-50%) scale(55%)`,
        }}
      />

      {/*Slides*/}
      <div className="absolute z-0 top-1/2 -translate-y-1/2" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {planets.map((image, index) => (
            <div
              className={cn(
                `flex-[0_0_52%]`,
                `min-w-0 pl-4 relative transition-transform duration-700 select-none ease-in-out`,
                index !== PLANET_CONTENT_INDEX
                  ? "cursor-grab"
                  : step === 0
                  ? "cursor-pointer"
                  : "select-none",
                // STEP 2
                step === 1
                  ? index === 0
                    ? "scale-[30%] -translate-x-1/2"
                    : "scale-[170%] ease-[cubic-bezier(0.61,0.02,0.3,1)]"
                  : "",
                step === 2 &&
                  index === PLANET_CONTENT_INDEX &&
                  "scale-[190%] -translate-x-[50%]",
                step === 2 &&
                  index === PLANET_CONTENT_INDEX + 1 &&
                  "translate-x-1/2 scale-[90%] ease-[cubic-bezier(0.61,0.02,0.3,1)] duration-[10000ms]",
                // STEP 3
                step === 3 &&
                  index === PLANET_CONTENT_INDEX &&
                  "translate-x-[72%] translate-y-[75%] scale-[300%]",
                step === 3 &&
                  index === PLANET_CONTENT_INDEX + 1 &&
                  "translate-x-1/2 scale-[90%]",
                step === 3 &&
                  index === PLANET_CONTENT_INDEX - 1 &&
                  "-translate-x-[50%] scale-[90%]",
                step == 0 && index === 0 ? "z-30" : "z-10",
              )}
              onClick={() => {
                if (index !== PLANET_CONTENT_INDEX) return;
                setStep(1);
                setPrevStep(0);
              }}
              key={index}
            >
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
                <img
                  className={cn(
                    "block object-contain transition-all",
                    index === 0 ? "scale-[60%]" : "scale-[80%]",
                  )}
                  src={image}
                  alt="Your alt text"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Content Step 1*/}
      <div
        className={cn(
          "opacity-0 transition-opacity duration-500",
          step === 1 && "opacity-100  delay-500",
        )}
      >
        <div className={"absolute bottom-32 right-32 space-y-4"}>
          <div className={"font-semibold max-w-[150px] text-white text-3xl"}>
            Scalar's milestones
          </div>
          <SolarNavigate
            onClick={() => {
              setStep(2);
              setPrevStep(1);
            }}
          >
            Title 02
          </SolarNavigate>
        </div>
        <InfoCarousel className={"absolute bottom-32 left-32"} />
      </div>
      <div
        className={cn(
          "absolute opacity-0 top-[15%] left-[5%] text-xl text-white select-none transition-opacity duration-500 delay-500",
          step === 1 && "opacity-100",
        )}
      >
        Title 1
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
          "absolute opacity-0 top-[15%] left-[5%] text-xl text-white select-none transition-opacity duration-500 delay-500",
          step === 2 && "opacity-100",
        )}
      >
        Title 2
      </div>
      <div
        className={cn(
          "absolute bottom-24 left-[5%] hidden",
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
            setPrevStep(2);
          }}
          variant={"back"}
        >
          Title 1
        </SolarNavigate>
      </div>
      <div
        className={cn(
          "absolute bottom-24 right-[5%] hidden",
          step === 2 && "block",
        )}
      >
        <SolarNavigate
          className={cn(
            "opacity-0 transition-opacity text-white duration-500 delay-500",
            step === 2 && "opacity-100",
          )}
          onClick={() => {
            setStep(3);
            setPrevStep(2);
          }}
          variant={"next"}
        >
          Title 3
        </SolarNavigate>
      </div>

      {/*Content Step 3*/}
      <InfoCarousel
        className={cn(
          "absolute bottom-[30%] left-1/2 -translate-x-1/2 hidden",
          "opacity-0 transition-opacity duration-500 delay-500",
          step === 3 && "opacity-100 block",
        )}
      />
      <div
        className={cn(
          "absolute bottom-24 left-[5%] hidden",
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
            setPrevStep(3);
          }}
        >
          Title 2
        </SolarNavigate>
      </div>
      <div
        className={cn(
          "absolute bottom-24 left-1/2 -translate-x-1/2 hidden",
          step === 3 && "block",
        )}
      >
        <SolarNavigate
          className={cn(
            "w-fit opacity-0 transition-opacity text-white duration-500 delay-500",
            step === 3 && "opacity-100",
          )}
          onClick={() => {
            setStep(0);
            setPrevStep(3);
          }}
        >
          Explore Scalar
        </SolarNavigate>
      </div>
      <Link href={"/new-version#intro"} passHref scroll>
        <div
          className={cn(
            "absolute bottom-24 right-[5%] hidden",
            step === 3 && "block",
          )}
        >
          <SolarNavigate
            className={cn(
              "opacity-0 transition-opacity text-white duration-500 delay-500",
              step === 3 && "opacity-100",
            )}
          >
            Explore more
          </SolarNavigate>
        </div>
      </Link>
      <div
        className={cn(
          "absolute opacity-0 top-[15%] left-[5%] text-xl text-white select-none transition-opacity duration-500 delay-500",
          step === 3 && "opacity-100",
        )}
      >
        Title 3
      </div>
    </div>
  );
}
