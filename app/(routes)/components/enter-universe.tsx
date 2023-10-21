import { HeadingSection } from "@/app/(routes)/components/heading-section";

export function EnterUniverse({
  className,
  ...props
}: React.ComponentProps<"section">): React.JSX.Element {
  return (
    <section className="container relative flex max-lg:flex-col justify-between gap-12 py-16 sm:py-28">
      <div className="gradient-1 max-sm:-translate-x-1/4 -z-10" />
      <HeadingSection
        prefix="COMMUNITY-OWNED AND OPERATED"
        title="Enter a new universe of connected services"
        description="Scalar protocol apps and services connect using IBC, the
          Inter-Blockchain Communication protocol. This innovation enables you
          to freely exchange assets and data across sovereign, decentralized
          blockchains"
        ctas={[
          { label: "Learn", href: "#" },
          { label: "Explore tokens", href: "#" },
        ]}
      />
      <div className="flex lg:flex-col justify-between gap-3 sm:gap-4">
        <EnterUniverseItem
          title="248+"
          description="App & services, and growing"
        />
        <EnterUniverseItem
          title="$48B+"
          description="Digital assets under management."
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: EnterUniverseItem
 * ------------------------------------------------------------------------------------------------------------------ */

export function EnterUniverseItem({
  ...props
}: {
  title: string;
  description: string;
}): React.JSX.Element {
  return (
    <div className="space-y-2.5">
      <h3 className="font-baumans text-3xl sm:text-4xl lg:text-6xl text-neutral-0">
        {props.title}
      </h3>
      <p className="sm:text-base text-sm text-neutral-500 font-medium">
        {props.description}
      </p>
    </div>
  );
}
