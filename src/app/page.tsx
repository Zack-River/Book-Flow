import dynamic from "next/dynamic";
import { TopNavBar } from "@/components/landing/TopNavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { Footer } from "@/components/landing/Footer";

const CategoriesSection = dynamic(() => import("@/components/landing/CategoriesSection").then(mod => mod.CategoriesSection), { ssr: true });
const StatsBar = dynamic(() => import("@/components/landing/StatsBar").then(mod => mod.StatsBar), { ssr: true });

export default function LandingPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        <StatsBar />
      </main>
      <Footer />
    </>
  );
}
