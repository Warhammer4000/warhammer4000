import { Github, Linkedin, Gamepad2, Newspaper, BookOpen } from "lucide-react";
import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";

export const SocialLinks = () => {
  const links = [
    { icon: <Github className="w-8 h-8" />, url: "https://github.com/Warhammer4000", label: "GitHub" },
    { icon: <Linkedin className="w-8 h-8" />, url: "https://www.linkedin.com/in/tanimulhaquekhan/", label: "LinkedIn" },
    { icon: <Newspaper className="w-8 h-8" />, url: "https://2takardeveloper.medium.com/", label: "Blog" },
    { icon: <Gamepad2 className="w-8 h-8" />, url: "https://www.backloggd.com/u/Warhammer4000/games/", label: "Games" },
    { icon: <BookOpen className="w-8 h-8" />, url: "https://myanimelist.net/profile/2TakarDeveloper", label: "Anime" },
  ];

  return (
    <section className="bg-retro-blue py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2} className="text-retro-white">POWER UPS</RetroHeading>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <RetroContainer className="flex flex-col items-center p-4 transition-transform hover:scale-105">
                <div className="text-retro-blue group-hover:text-retro-red transition-colors">
                  {link.icon}
                </div>
                <span className="font-pixel text-xs mt-2">{link.label}</span>
              </RetroContainer>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};