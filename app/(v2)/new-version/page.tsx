import { HeroSolarSystem } from "./_components/hero-solar-system";
import { BuildingValue } from "./_components/building-value";
import { Dag } from "./_components/dag";
import Image from "next/image";
import MilkyWay from "@/public/milky-way-1.webp";
import { Cta } from "./_components/cta";
import { Permissionless } from "./_components/permisstionless";

export default function HomePage() {
  return (
    <div className={"bg-black relative overflow-hidden"}>
      <HeroSolarSystem />
      <div className={"relative"}>
        <BuildingValue />
        <Image
          src={MilkyWay}
          alt={"Milky way"}
          className={
            "absolute bottom-0 translate-y-1/2 -rotate-[10deg] left-1/2 -translate-x-1/2"
          }
        />
      </div>
      <Dag />
      <Permissionless />
      <Cta />
    </div>
  );
}
