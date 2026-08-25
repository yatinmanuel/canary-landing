import { BasicHero } from "@/components/basic/hero";
import { Statement } from "@/components/basic/statement";
import { Platform } from "@/components/basic/platform";
import { BuiltFor } from "@/components/basic/built-for";
import { Brands } from "@/components/basic/brands";
import { Security } from "@/components/basic/security";
import { Faq } from "@/components/basic/faq";
import { BasicCTA } from "@/components/basic/cta";

export default function Home() {
  return (
    <>
      <BasicHero />
      <Statement />
      <Platform />
      <BuiltFor />
      <Brands />
      <Security />
      <Faq />
      <BasicCTA />
    </>
  );
}
