'use client'

import { cn } from "../../../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/section-title";
import { CarouselLogo } from "./components/carousel";
import { Hackathon } from "./components/hackathon";
import { HackathonMobile } from "@/app/(routes)/_components/cta/components/hackathon-mobile";
import { Resolver, useForm } from "react-hook-form";

const ctaVariants = cva(
  "relative z-0 py-[117px]  gap-[60px] w-full overflow-hidden bg-star bg-center bg-no-repeat bg-cover flex flex-col items-center justify-around",
);

type CtaVariantProps = VariantProps<typeof ctaVariants>;

type CtaProps = CtaVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CtaVariantProps>;

type FormValues = {
  email: string
}

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
  }
}

export function Cta({ className }: CtaProps) {
  const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>({ resolver })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className={ctaVariants({ className })}>
      {/* Hackathons & Grants Won Section */}
      <div
        className={cn(
          "w-full flex flex-col gap-[24px] items-center px-5 md:px-0",
        )}
      >
        <SectionTitle>Hackathons & Grants Won</SectionTitle>

        {/* Card Section */}
        <Hackathon className={"max-lg:hidden"} />
        <HackathonMobile className={"lg:hidden"} />
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
      <div className="flex flex-col px-[20px] gap-[44px] bg-transparent border-none md:w-[750px]">
        <div className={cn("flex flex-col gap-[28px]")}>
          <label
            className={cn(
              "font-bold text-[31px] md:[text-34px] leading-[46.5px] md:leading-[47.6px] text-neutral-1",
            )}
          >
            Don't Miss Out,{" "}
            <span className={cn("text-primary-cyan-500")}>Subscribe</span> Today!
          </label>
          <label
            className={cn("text-lg leading-[27px] text-neutral-4 text-left")}
          >
            Stay updated and be among the first to receive exciting
            announcements, exclusive updates, and special offers from our
            project. Join us at the forefront of new discoveries!
          </label>
        </div>

        {/* Form */}
        <form
          className={cn("flex flex-col gap-[10px]")}
          onSubmit={onSubmit}
        >
          <div className={cn("relative")} >
            <Input
              className={cn(
                `bg-transparent h-[48px] md:h-[93px] text-neutral-5 text-[18px] leading-[27px] flex justify-between items-center rounded-xl border border-primary-cyan-500 px-[16px] lg:py-[16px] focus:border-2 focus:border-primary-cyan-500 hover:border-primary-cyan-800 focus:shadow-primary-cyan-500
                ${errors.email && 'border-accent-warning-500'}
                `
              )}
              placeholder="Your email"
              type="email"
              {...register('email')}
            />

            <Button
              itemType="submit"
              className={cn(
                `absolute top-1/2 -translate-y-1/2 right-[20px] py-[6px] px-[20px] lg:py-[14px] lg:px-[32px] bg-primary-cyan-500 text-white rounded-lg border-none
                ${errors.email && 'bg-accent-warning-50'}                
                `,
              )}
            >
              <span className="lg:text-[22px] lg:leading-[33px] lg:text-neutral-10">
                Subscribe
              </span>
            </Button>
          </div>

          {errors?.email && <p className={cn("font-normal text-[18px] leading-[27px] text-accent-warning-500")}>{errors.email.message}</p>}
        </form>
      </div>
    </div>
  );
}
