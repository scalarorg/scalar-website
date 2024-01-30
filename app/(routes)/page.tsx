import { HeroSolarSystem } from "./_components/hero-solar-system";
import { BuildingValue } from "./_components/building-value";
import { Dag } from "./_components/dag";
import Image from "next/image";
import MilkyWay from "@/public/milky-way-1.webp";
import { Cta } from "./_components/cta";
import { Permissionless } from "./_components/permisstionless";
import HighlightRight from "@/public/icon/highlight-right.svg";
import HighlightLeft from "@/public/icon/highlight-left.svg";
import Revealed from "./_components/revealed";

export default function HomePage() {
  return (
    <div className={"bg-black relative overflow-hidden"}>
      <HeroSolarSystem className={"max-xl:hidden"} />
      <div className={"relative"}>
        <Image
          src={HighlightRight}
          alt={"Highlight right"}
          className={"absolute top-0 -right-[10%] z-50 pointer-events-none"}
        />
        <Image
          src={HighlightLeft}
          alt={"Highlight left"}
          className={"absolute top-0 -left-[10%] z-50 pointer-events-none"}
        />
        <BuildingValue />
      </div>

      <div className="bg-star_dark bg-cover bg-no-repeat">
        <Revealed />
        <Dag />
      </div>

      <Permissionless />

      <Cta />
    </div>
  );
}
