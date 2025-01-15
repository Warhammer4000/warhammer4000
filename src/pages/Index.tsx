import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SocialLinks } from "@/components/SocialLinks";
import { Games } from "@/components/Games";

const Index = () => {
  return (
    <main className="bg-retro-black min-h-screen">
      <Hero />
      <About />
      <SocialLinks />
      <Games />
    </main>
  );
};

export default Index;