import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HomeIntro />
      </main>
    </>
  );
}
