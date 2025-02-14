import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SocialLinks } from "@/components/SocialLinks";
import { Games } from "@/components/Games";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { BookShowcase } from "@/components/BookShowcase";
import { Education } from "@/components/Education";
import { Clients } from "@/components/Clients";

const Index = () => {
  return (
    <main className="bg-retro-black min-h-screen">
      <Hero />
      <About />
      <SocialLinks />
      <Games />
      <ExperienceTimeline />
      <Clients />
      <Education />
      <BookShowcase />
    </main>
  );
};

export default Index;