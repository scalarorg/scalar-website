import {Header} from "./components/header";
import {Hero} from "./components/hero";
import {EnterUniverse} from "./components/enter-universe";
import {Heart} from "./components/heart";
import {Secured} from "./components/secured";
import {JoinInterchain} from "./components/join-interchain";
import {BuildValue} from "@/app/(routes)/components/build-value";

export default function Home() {
  return (
    <main className={'overflow-hidden'}>
      <div className="relative z-0">
        <Header />
        <Hero />
      </div>
      <div className="relative z-0">
        <div className="gradient-1 max-sm:-translate-x-1/4 -z-10" />
        <div className="gradient-2 z-0 max-sm:translate-x-1/2 max-sm:-translate-y-3/4 max-sm:scale-50" />
        <EnterUniverse />
        <Heart />
      </div>
      <Secured />
      <JoinInterchain />
      <BuildValue />
    </main>
  );
}
