import Image from "next/image";
import Scalar from "@/public/scalar.svg";
import { HEADER_NAVIGATION } from "@/lib/constants/navigation";
import Link from "next/link";

export function Header({
  className,
  ...props
}: React.ComponentProps<"header">): React.JSX.Element {
  return (
    <header className="absolute w-full p-5">
      <div className="container">
        <Image src={Scalar} alt="Scalar" />
        <nav className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-md:hidden">
          <ul className="flex space-x-16">
            {HEADER_NAVIGATION.map(({ label, href }, index) => {
              return (
                <Link
                  href={href}
                  key={index}
                  className="text-neutral-0 text-sm font-bold hover:text-neutral-300 transition-colors"
                >
                  {label}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
