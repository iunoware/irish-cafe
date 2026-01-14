import Hero from "../components/pageComponents/home/Hero";
import Philosophy from "../components/pageComponents/home/Philosophy";
import Cusine from "../components/pageComponents/home/Cusine";
import CuisineTransition from "../components/pageComponents/home/CuisineTransition";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Philosophy />
      <Cusine />
      <CuisineTransition />
    </main>
  );
}
