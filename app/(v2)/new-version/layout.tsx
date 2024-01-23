import { Fragment } from "react";
import { Header } from "@/app/(v2)/new-version/_components/header";
import { Footer } from "./_components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
