import Hero from "../components/pageComponents/home/Hero";
import Philosophy from "../components/pageComponents/home/Philosophy";
import Cuisine from "../components/pageComponents/home/Cusine";
import SignatureDishes from "../components/pageComponents/home/SignatureDishes";
import AboutTeaser from "../components/pageComponents/home/AboutTeaser";
import Ambience from "../components/pageComponents/home/Ambience";
import WelcomeBoard from "../components/pageComponents/home/WelcomeBoard";
import CuisineTransition from "../components/pageComponents/home/CuisineTransition";

export default function Home() {
  return (
    <main className="relative bg-[url('/images/clean-gray-paper.png')] min-h-screen">
      <Hero />
      <Philosophy />
      <Cuisine />
      <SignatureDishes />
      <AboutTeaser />
      <Ambience />
      <WelcomeBoard />
      {/* <CuisineTransition /> */}
    </main>
  );
}
