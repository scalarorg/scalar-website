import Image from "next/image";
import HeartBackground from "@/public/heart-section.webp";
import {HeadingSection} from "@/app/(routes)/components/heading-section";
import {cx} from "class-variance-authority";
import {HEART_ITEMS} from "@/lib/constants/heart";

export function Heart({
  className,
  ...props
}: React.ComponentProps<"section">): React.JSX.Element {
  return (
    <section className="relative py-16 sm:py-24 space-y-12 sm:space-y-20">
      <Image
        fill
        src={HeartBackground}
        className="object-left sm:object-center object-cover -z-10"
        alt="Heart"
      />
      <div className="w-full flex justify-center">
        <HeadingSection
          classNames={{
            title: "max-w-none",
            description: "max-w-md",
          }}
          className="mx-auto"
          variant="centered"
          prefix="The Most Innovative Architecture"
          title="Novel DAG Structure & Ultra-Light Client"
          description="Our blockchain boasts a novel Directed Acyclic Graph (DAG) structure supporting parallel transactions, ensuring lightning-fast transactions. With an ultra-light client, resource efficiency is maximized, ensuring seamless operation across devices."
        />
      </div>

      <div className="container grid sm:grid-cols-2 gap-4 sm:gap-10 lg:gap-16">
        {HEART_ITEMS.map((item, index) => (
          <HeartItem
            key={index}
            className="max-sm:justify-self-center sm:even:justify-self-end"
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: HeartItem
 * ------------------------------------------------------------------------------------------------------------------ */

export function HeartItem({
  className,
  title,
  description,
  ...props
}: React.ComponentProps<"div"> & {
  title: string;
  description: string;
}): React.JSX.Element {
  return (
    <div {...props} className={cx("space-y-2 sm:space-y-4", className)}>
      <h3 className="font-baumans text-2xl sm:text-3xl text-neutral-0">
        {title}
      </h3>
      <p className="text-neutral-400 sm:text-base text-sm font-medium max-w-md">
        {description}
      </p>
    </div>
  );
}
