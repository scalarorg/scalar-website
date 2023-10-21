import { HeadingSection } from "@/app/(routes)/components/heading-section";

export function Secured({
  className,
  ...props
}: React.ComponentProps<"section">): React.JSX.Element {
  return (
    <section className="container py-12 sm:py-16">
      <HeadingSection
        classNames={{
          title: "max-w-none",
          description: "max-w-md",
        }}
        title="Secured by the SCALAR"
        description="In return for securing the services on the Scalar Hub, transaction fees and staking rewards are distributed to Scalar stakers."
        ctas={[
          { label: "Start starking", href: "#" },
          { label: "Learn more", href: "#" },
        ]}
      />
    </section>
  );
}
