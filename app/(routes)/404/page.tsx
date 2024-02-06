import Image from "next/image";
import HighlightRight from "@/public/icon/highlight-right.svg";
import HighlightLeft from "@/public/icon/highlight-left.svg";
import { HeroNotFound } from "./_components/hero-not-found";

export default function NotFound() {
  return (
    <div className={"bg-black relative overflow-hidden"}>
      <div className={"relative"}>
        <Image
          src={HighlightRight}
          alt={"Highlight right"}
          className={
            "absolute top-0 -right-[10%] z-10 max-sm:w-[75%] max-2xl:w-[60%] pointer-events-none"
          }
        />
        <Image
          src={HighlightLeft}
          alt={"Highlight left"}
          className={
            "absolute top-0 -left-[10%] z-10 max-sm:w-[75%] max-2xl:w-[60%] pointer-events-none"
          }
        />
        <HeroNotFound />
      </div>
    </div>
  );
}
