import { Fragment } from "react";

import { Footer } from "./(v2)/_components/footer";
import { Header } from "./(v2)/_components/header";

// import { Footer } from "./_components/footer";
// import { Header } from "@/app/(routes)/_components/header";
// import { ScrollUpButton } from "@/app/(routes)/_components/scroll-up-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
      {/* <ScrollUpButton /> */}
    </Fragment>
  );
}
