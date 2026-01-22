import Hero from "../components/pageComponents/home/Hero";
import Philosophy from "../components/pageComponents/home/Philosophy";
import Cuisine from "../components/pageComponents/home/Cusine";
import SignatureDishes from "../components/pageComponents/home/SignatureDishes";
import AboutTeaser from "../components/pageComponents/home/AboutTeaser";
import Ambience from "../components/pageComponents/home/Ambience";
import WelcomeBoard from "../components/pageComponents/home/WelcomeBoard";
import TestimonialReel from "@/components/pageComponents/home/TestimonialReel";
import CelebrateWithUs from "@/components/pageComponents/home/CelebrateWithUs";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/clean-gray-paper.png')]" />
      </div>
      <Hero />
      <Philosophy />
      <Cuisine />
      <SignatureDishes />
      <AboutTeaser />
      <Ambience />
      <CelebrateWithUs />
      <TestimonialReel />
      <WelcomeBoard />
    </main>
  );
}
