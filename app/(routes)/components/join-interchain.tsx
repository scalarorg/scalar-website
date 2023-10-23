import {HeadingSection} from "@/app/(routes)/components/heading-section";
import {cva, VariantProps} from "class-variance-authority";
import {HTMLAttributes} from "react";
import Link from "next/link";
import Image from "next/image";
import {JOIN_INTERCHAIN_ITEMS} from "@/lib/constants/join-interchain";
import {twMerge} from "tailwind-merge";
import JoinBackground from "@/public/join-background.webp";
import {ArrowRightIcon} from "@/components/icon/arrow-right";

export function JoinInterchain({
  className,
  ...props
}: React.ComponentProps<"section">): React.JSX.Element {
  return (
    <section className="relative z-0">
      <div className="container py-16 sm:py-24">
        <HeadingSection
          classNames={{
            title: "max-w-none",
            description: "max-w-md",
          }}
          className="mx-auto"
          variant="centered"
          title="Pioneering Dapps in Progress"
          description="Serving as the economic center of the Interchain, the Scalar Hub is a blockchain that provides vital ecosystem services."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-20">
          {JOIN_INTERCHAIN_ITEMS.map((item, index) => (
            <JoinInterchainItem
              key={index}
              className={twMerge(
                "first:row-span-2 first:col-span-2",
                index === 1 && "col-span-2 max-xl:row-span-2",
                index > 1 && "max-xl:col-span-2 max-xl:row-span-2",
              )}
              description={item.description}
              shape={index === 1 ? "default" : "square"}
              title={item.title}
              href={item.href}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <Image
        fill
        src={JoinBackground}
        className="-z-10 object-bottom object-cover"
        alt="Join interchain background"
      />
    </section>
  );
}

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: JoinInterchainItem
 * ------------------------------------------------------------------------------------------------------------------ */

const joinInterchainItemVariants = cva(
  "rounded-2xl linear-1 flex justify-between group/join relative p-5 z-0 overflow-hidden",
  {
    variants: {
      shape: {
        default: "xl:aspect-[2] max-xl:aspect-square",
        square: "aspect-square",
      },
      direction: {
        default: "flex-col",
        reverse: "flex-col-reverse",
      },
    },
    defaultVariants: {
      shape: "default",
      direction: "default",
    },
  },
);

type JoinInterchainItemVariantProps = VariantProps<
  typeof joinInterchainItemVariants
> & {
  title: string;
  href: string;
  image?: string;
  first?: boolean;
  description?: string;
};

type JoinInterchainItemProps = JoinInterchainItemVariantProps &
  Omit<HTMLAttributes<HTMLAnchorElement>, keyof JoinInterchainItemVariantProps>;

export function JoinInterchainItem({
  className,
  children,
  image,
  title,
  shape,
  direction,
  first,
                                     description,
  ...props
}: JoinInterchainItemProps): React.JSX.Element {
  return (
    <Link
      {...props}
      className={joinInterchainItemVariants({ className, shape, direction })}
    >
      {image && (
        <Image
          fill
          src={image}
          alt={title}
          className="-z-10 object-bottom transition-transform ease-in group-hover/join:scale-105 object-cover"
        />
      )}
      <div className="text-neutral-0 text-xl lg:text-3xl font-baumans">
        {title}
      </div>
      <div className="flex gap-1 items-center">
        <div className="text-neutral-400 line-clamp-3 font-medium text-sm">{description || "Coming soon"}</div>
        {first && (
          <ArrowRightIcon className="ease-in text-neutral-400 group-hover/join:translate-x-1 transition-transform" />
        )}
      </div>
    </Link>
  );
}
