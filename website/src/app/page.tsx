import HomeAboutSection from "@/components/website/sections/HomeAboutSection";
import HomeContactSection from "@/components/website/sections/HomeContactSection";
import HomeEventsSection from "@/components/website/sections/HomeEventsSection";
import HomeHeroSection from "@/components/website/sections/HomeHeroSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeEventsSection />
      <HomeContactSection />
    </>
  );
}
