import { Fragment } from "react";
import { Header } from "@/app/(routes)/_components/header";
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
