import {HeadingSection} from "@/app/(routes)/components/heading-section";

export function EnterUniverse({
  className,
  ...props
}: React.ComponentProps<"section">): React.JSX.Element {
  return (
    <section className="container relative flex max-lg:flex-col justify-between gap-12 py-16 sm:py-28">
      <HeadingSection
        prefix="Best of Both Worlds:"
        // classNames{{title: "max-w-none"}}
          classNames={{
            title: "!max-w-md",
          }}
        title="Hybrid Interoperable Layer 0 & Layer 1 Blockchain"
        description="Scalar protocol combines the strengths of layer 0 and layer 1, offering instant finality, fast throughput and a paradigm shift in lightning speed interoperable asset and data exchange."
      />
      {/*<div className="flex lg:flex-col justify-between gap-3 sm:gap-4">*/}
      {/*  <EnterUniverseItem*/}
      {/*    title="248+"*/}
      {/*    description="App & services, and growing"*/}
      {/*  />*/}
      {/*  <EnterUniverseItem*/}
      {/*    title="$48B+"*/}
      {/*    description="Digital assets under management."*/}
      {/*  />*/}
      {/*</div>*/}
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
