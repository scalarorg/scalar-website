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
        title="Scalability Meets the Future"
        description="Join us on this transformative journey towards a blockchain that transcends boundaries and serves the global community."
        ctas={[
          { label: "Join Scalar", href: "#" },
          { label: "Learn more", href: "#" },
        ]}
      />
    </section>
  );
}
