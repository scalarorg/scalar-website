'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangleIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FadeIn } from '@/components/motion/fade-in';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

type FormValues = {
  email: string;
};

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type SchemaSubscribeForm = z.infer<typeof schema>;

export function FooterSubscription() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit(async ({ email }) => {
    const result = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (result.status === 200) {
      toast({
        variant: 'success',
        title: 'Subscribe successfully!',
        description: 'Thank you for subscribing to our newsletter!',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Subscribe failed!',
        description: 'Please try again later.',
      });
    }
  });
  return (
    <div className="flex flex-col gap-[44px] bg-transparent border-none w-full xl:w-[450px] 2xl:w-[550px] lg:px-0">
      {/* Form */}
      <FadeIn
        options={{
          direction: 'up',
          duration: 0.65,
          type: 'tween',
          delay: 0.15,
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className={cn('flex flex-col gap-[10px]')} onSubmit={onSubmit}>
          <div className={cn('relative')}>
            <input
              className={cn(
                `placeholder-neutral-7 max-sm:placeholder:text-xs w-full bg-transparent h-[48px] lg:h-[75px] 2xl:h-[93px] outline-none text-neutral-5 text-[18px] leading-[27px] px-[16px] lg:py-[16px] border-none rounded-xl select:hidden hover:transition focus:border-2
                ${errors.email && 'border-accent-warning-500'}
                `,
              )}
              placeholder="Subscribe to our newsletter"
              type="email"
              {...register('email')}
            />
            <hr className="border-t-1 border-[#96979C]" />
            <button
              type="submit"
              className={cn(
                `absolute top-1/2 -translate-y-1/2 right-2.5 md:right-[16px] py-[6px] px-[20px] md:py-[10px] md:px-[24px] 2xl:py-[14px] 2xl:px-[32px] bg-primary-cyan-500 text-white rounded-xl border border-primary-cyan-500 hover:text-white hover:bg-black font-bold hover:transition-all duration-500 lg:text-neutral-10 lg:hover:text-primary-cyan-500 hover:shadow-button-hover
                ${
                  errors.email &&
                  'bg-accent-warning-50 border-accent-warning-50 hover:bg-accent-warning-50 lg:hover:text-neutral-10 hover:shadow-none'
                }                
                `,
              )}
              disabled={(errors.email && true) || isSubmitting}
            >
              <span
                className={`md:text-[18px] md:leading-[22px] 2xl:text-[22px] 2xl:leading-[33px] ${
                  errors.email && 'text-neutral-10'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </span>
            </button>
          </div>

          {errors?.email && (
            <p
              className={cn(
                'flex gap-2 2xl:gap-[10px] font-normal text-base 2xl:text-[18px] leading-[27px] text-accent-warning-500',
              )}
            >
              <AlertTriangleIcon className={'w-4'} />
              {errors.email.message}
            </p>
          )}
        </form>
      </FadeIn>
    </div>
  );
}
