import Image from 'next/image';
import Link from 'next/link';

import { FooterSubscription } from '@/app/(routes)/_components/cta/components/footer-subscription';
import { FooterContent, FooterSocialLink } from '@/lib/constants/footer';
import { cn } from '@/lib/utils';
import Logo from '@/public/icon/logo.svg?url';

export function Footer() {
  return (
    <footer>
      <div
        className={cn(
          'container flex flex-col gap-3 h-full py-8',
          'xl:pt-[90px] xl:gap-[24px]',
          '2xl:pt-[117px]',
        )}
      >
        <div className="flex flex-col gap-6 xl:flex-row xl:gap-[161px] xl:justify-between">
          {/* Footer column with Logo */}
          <div className="flex flex-col gap-3 xl:gap-[28px] xl:w-[394px] w-full border-b pb-3 xl:pb-0 xl:border-none">
            <div className="w-full flex flex-col font-normal gap-3 lg:gap-[18px] 2xl:gap-[22px]">
              <Link href="/">
                <Image
                  sizes="100vw"
                  className="w-[188px] aspect-[280/31] lg:w-[232px] 2xl:w-[280px] hover:cursor-pointer"
                  src={Logo}
                  alt={'Scalar logo'}
                />
              </Link>

              <p className="text-sm leading-4 lg:!leading-[23px] lg:min-w-[310px] w-full 2xl:w-[394px] lg:text-base 2xl:text-lg 2xl:!leading-[27px]">
                Scalar - The most performant EVM and Move compatible, high
                throughput, interoperable smart contract platform in the space
                ever seen to date
              </p>
            </div>

            <div className="w-[188px] xl:w-[280px] flex gap-x-[24px] 2xl:gap-x-[38px] items-center justify-between xl:justify-start">
              {FooterSocialLink.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  target={'_blank'}
                  className={cn(
                    'hover:opacity-90 hover:scale-110 transition-all ease-in',
                  )}
                >
                  <Image
                    src={item.icon}
                    sizes="100vw"
                    className="w-[20px] h-[19px] 2xl:w-[33px] 2xl:h-[33px]"
                    alt="icon"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer column */}
          <div
            className={cn(
              'w-full grid grid-cols-2 md:grid-cols-4 pb-3 xl:pb-0 border-b border-neutral-8 xl:border-none xl:flex gap-x-2 gap-y-3 xl:justify-between',
            )}
          >
            {FooterContent.map((column) => (
              <div
                className="flex flex-col gap-2 xl:gap-2.5 2xl:gap-4"
                key={column.title}
              >
                <p
                  className={cn(
                    'capitalize text-sm lg:text-base 2xl:text-lg leading-6 xl:leading-[33px] font-bold hover:text-primary-blue-500',
                  )}
                >
                  {column.title}
                </p>

                <ul className="flex flex-col gap-2">
                  {column.links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      target="blank"
                      className={cn(
                        'capitalize text-sm lg:text-base 2xl:text-lg leading-5 xl:leading-[24px] 2xl:leading-[33px] text-black hover:text-primary-blue-500 ease-linear transition-all',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full">
            <FooterSubscription />
          </div>
        </div>

        {/* Footer copyright */}
        <div
          className='w-full flex gap-1 text-sm md:text-base'
        >
          Copyright ©<span className="text-primary-blue-500">Scalar</span>|
          Designed by Scalar
        </div>
      </div>
    </footer>
  );
}
