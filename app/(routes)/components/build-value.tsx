import { HeadingSection } from "@/app/(routes)/components/heading-section";
import { twMerge } from "tailwind-merge";

export function BuildValue({
  className,
  ...props
}: React.ComponentProps<"section">): React.JSX.Element {
  return (
    <section
      {...props}
      className={twMerge(
        "container flex max-lg:flex-col lg:flex-row-reverse justify-between gap-12 py-16 sm:py-28",
        className,
      )}
    >
      <HeadingSection
        prefix="TECHNOLOGY"
        classNames={{
          description: "max-w-md",
        }}
        title="The most trusted way to build value"
        description="Scalar - a state-of-the-art blockchain framework that powers the Scalar Hub and its rapidly expanding orbit of sovereign chains.
With Scalar SDK, you're ready to build innovative applications and create value in the internet of blockchains."
      />
      {/*<div className="flex lg:flex-col justify-between gap-3 sm:gap-4">*/}
      {/*  /!*<EnterUniverseItem title="$48B" description="PROOF-OF-STAKE" />*!/*/}
      {/*  <EnterUniverseItem*/}
      {/*    title="7 sec"*/}
      {/*    description="Digital assets under management."*/}
      {/*  />*/}
      {/*</div>*/}
    </section>
  );
}
