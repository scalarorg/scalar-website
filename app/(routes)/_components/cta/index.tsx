"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import SectionTitle from "@/components/ui/section-title";
import { CarouselLogo } from "./components/carousel";
import { Hackathon } from "./components/hackathon";
import { HackathonMobile } from "@/app/(routes)/_components/cta/components/hackathon-mobile";
import { Resolver, useForm } from "react-hook-form";
import { AlertTriangleIcon } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const ctaVariants = cva(
  "relative z-0 py-[117px] gap-[60px] w-full overflow-hidden bg-star bg-center bg-no-repeat bg-cover flex flex-col items-center justify-around",
);

type CtaVariantProps = VariantProps<typeof ctaVariants>;

type CtaProps = CtaVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CtaVariantProps>;

type FormValues = {
  email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
        email: {
          type: "required",
          message: "This is required.",
        },
      }
      : {},
  };
};

export function Cta({ className }: CtaProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className={ctaVariants({ className })}>
      {/* Hackathons & Grants Won Section */}
      <div className={cn("w-full flex flex-col gap-[24px] items-center")}>
        <SectionTitle className={"max-sm:text-center"}>
          Hackathons & <br className={"sm:hidden"} />
          Grants Won
        </SectionTitle>

        {/* Card Section */}
        <FadeIn
          options={{
            direction: "up",
            duration: 0.65,
            type: "tween",
            delay: 0.1,
          }}
          className={"w-full"}
        >
          <Hackathon className={"max-lg:hidden container"} />
          <HackathonMobile className={"lg:hidden container"} />
        </FadeIn>
      </div>

      {/* Team Background */}
      <div
        className={cn(
          "w-full flex flex-col gap-[24px] lg:gap-[20px] items-center",
        )}
      >
        <SectionTitle>Team Background</SectionTitle>

        {/* Carousel Brand*/}
        <CarouselLogo />
      </div>

      {/* Form Submit Email */}
      <div className="flex flex-col container gap-[44px] bg-transparent border-none md:w-[750px] md:px-0">
        <div className={cn("flex flex-col gap-[28px]")}>
          <FadeIn
            options={{
              direction: "right",
              duration: 0.65,
              type: "tween",
              delay: 0,
            }}
          >
            <label
              className={cn(
                "font-bold text-[31px] md:[text-34px] leading-[46.5px] md:leading-[47.6px] text-neutral-1",
              )}
            >
              Don't Miss Out,{" "}
              <span className={cn("text-primary-cyan-500")}>Subscribe</span>{" "}
              Today!
            </label>
          </FadeIn>
          <FadeIn
            options={{
              direction: "right",
              duration: 0.65,
              type: "tween",
              delay: 0.1,
            }}
          >
            <label
              className={cn("text-lg leading-[27px] text-neutral-4 text-left")}
            >
              Stay updated and be among the first to receive exciting
              announcements, exclusive updates, and special offers from our
              project. Join us at the forefront of new discoveries!
            </label>
          </FadeIn>
        </div>

        {/* Form */}
        <FadeIn
          options={{
            direction: "up",
            duration: 0.65,
            type: "tween",
            delay: 0.15,
          }}
        >
          <form className={cn("flex flex-col gap-[10px]")} onSubmit={onSubmit}>
            <div className={cn("relative")}>
              <input
                className={cn(
                  `w-full bg-transparent h-[48px] md:h-[93px] outline-none text-neutral-5 text-[18px] leading-[27px] px-[16px] lg:py-[16px] border border-primary-cyan-500 hover:border-primary-cyan-800 rounded-xl select:hidden hover:transition focus:border-2 fo focus:shadow-button-active focus:border-primary-cyan-500
                ${errors.email && "border-accent-warning-500"}
                `,
                )}
                placeholder="Your email"
                type="email"
                {...register("email")}
              />

              <button
                type="submit"
                className={cn(
                  `absolute top-1/2 -translate-y-1/2 right-2.5 lg:right-[16px] py-[6px] px-[20px] lg:py-[14px] lg:px-[32px] bg-primary-cyan-500 text-white rounded-lg border border-primary-cyan-500 hover:text-white hover:bg-black font-bold hover:transition-all duration-500 lg:text-neutral-10 lg:hover:text-primary-cyan-500 hover:shadow-button-hover
                ${errors.email &&
                  "bg-accent-warning-50 border-accent-warning-50 hover:bg-accent-warning-50 lg:hover:text-neutral-10"
                  }                
                `,
                )}
                disabled={errors.email && true}
              >
                <span
                  className={`lg:text-[22px] lg:leading-[33px
                ${errors.email && "hover:text-neutral-10"} 
                `}
                >
                  Subscribe
                </span>
              </button>
            </div>

            {errors?.email && (
              <p
                className={cn(
                  "flex gap-[10px] font-normal text-[18px] leading-[27px] text-accent-warning-500",
                )}
              >
                <AlertTriangleIcon />
                {errors.email.message}
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
