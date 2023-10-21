import Image from "next/image";
import HeroBackground from "@/public/hero-section.webp";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero({
  className,
  ...props
}: React.ComponentProps<"section">): React.JSX.Element {
  return (
    <section className="max-h-screen md:min-h-screen min-h-[70dvh] flex items-center justify-center -z-10 w-full h-full relative">
      <Image
        fill
        className="object-center -z-10 object-cover"
        src={HeroBackground}
        alt="Hero"
      />
      <div className="text-center space-y-3 lg:space-y-4 flex flex-col items-center">
        <div className="overflow-hidden">
          <FadeIn
            options={{
              direction: "up",
              type: "tween",
              delay: 0.1,
              duration: 0.4,
            }}
          >
            <h1 className="text-4xl gradient-text-reverse sm:text-5xl lg:text-7xl 2xl:text-8xl font-bold text-neutral-0 leading-none">
              The Future of
              <br />
              <span className="gradient-text">Scalable</span> Blockchain
            </h1>
          </FadeIn>
        </div>

        <FadeIn
          options={{
            direction: "right",
            type: "tween",
            delay: 0.7,
            duration: 0.6,
          }}
        >
          <p className="text-sm lg:text-base text-neutral-0 max-w-sm lg:max-w-md leading-[22px]">
            Redefine what’s possible with limitless scalability,
            interconnectivity and unrivaled throughput.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
