import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SocialLinks } from "@/components/SocialLinks";
import { Games } from "@/components/Games";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { BookShowcase } from "@/components/BookShowcase";

const Index = () => {
  return (
    <main className="bg-retro-black min-h-screen">
      <Hero />
      <About />
      <SocialLinks />
      <Games />
      <ExperienceTimeline />
      <BookShowcase />
    </main>
  );
};

export default Index;