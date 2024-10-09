import { AppContentWrapper } from "@/components/common/Global.style";
import Hero from "@/components/Home/Hero/Hero";
import Stats from "../../components/Home/Stats/Stats";

export default function Home() {
  return (
    <>
      <Hero />

      <AppContentWrapper>
        <Stats />
      </AppContentWrapper>
    </>
  );
}

