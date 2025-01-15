import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";

export const About = () => {
  const stats = [
    { label: "EXP", value: "7 YRS" },
    { label: "CLASS", value: "DEV" },
    { label: "GAMES", value: "3" },
    { label: "TEAM", value: "10" },
  ];

  return (
    <section className="bg-retro-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2}>ABOUT</RetroHeading>
        <div className="grid md:grid-cols-2 gap-8">
          <RetroContainer>
            <p className="font-pixel text-sm leading-relaxed mb-4">
              Greetings! I'm a Game Developer with over 7 years of Unity experience.
              Founded GDCBD and published three games on Steam and Xbox.
            </p>
            <p className="font-pixel text-sm leading-relaxed">
              My mission: Building a thriving game development industry in my country
              through open source, community building, and knowledge sharing.
            </p>
          </RetroContainer>
          <RetroContainer className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-pixel text-retro-blue mb-2">{stat.label}</div>
                <div className="font-pixel text-2xl text-retro-red">{stat.value}</div>
              </div>
            ))}
          </RetroContainer>
        </div>
      </div>
    </section>
  );
};