import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";

interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  duration: string;
}

export const ExperienceTimeline = () => {
  const experiences: Experience[] = [
    {
      company: "Brain Station 23 PLC",
      companyUrl: "https://brainstation-23.com/",
      role: "Business Unit Head",
      period: "Jan 2021 - Present",
      duration: "4 years 1 month"
    },
    {
      company: "Brain Station 23 PLC",
      companyUrl: "https://brainstation-23.com/",
      role: "Software Engineer",
      period: "Aug 2019 - Jan 2021",
      duration: "1 year 6 months"
    },
    {
      company: "Brain Station 23 PLC",
      companyUrl: "https://brainstation-23.com/",
      role: "Associate Software Engineer",
      period: "Dec 2018 - Aug 2019",
      duration: "9 months"
    },
    {
      company: "iQuantile",
      companyUrl: "https://www.iquantile.com/",
      role: "Manager",
      period: "Jan 2018 - Dec 2018",
      duration: "1 year"
    },
    {
      company: "iQuantile",
      companyUrl: "https://www.iquantile.com/",
      role: "Game Developer",
      period: "Mar 2017 - Jan 2018",
      duration: "11 months"
    }
  ];

  return (
    <section className="bg-retro-purple py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2} className="text-retro-white mb-12">QUEST LOG</RetroHeading>
        <div className="relative">
          {/* Pixel character */}
          <div className="absolute left-0 top-0 w-16 h-16 bg-retro-white animate-float">
            <div className="pixel-character w-full h-full bg-[url('/pixel-character.png')] bg-contain bg-no-repeat" />
          </div>
          
          {/* Timeline */}
          <div className="ml-24 space-y-8">
            {experiences.map((exp, index) => (
              <div key={`${exp.company}-${exp.role}`} className="relative">
                <RetroContainer className="transform transition-transform hover:scale-105">
                  <div className="absolute -left-24 top-1/2 w-16 h-0.5 bg-retro-white" />
                  <div className="p-4">
                    <a 
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-pixel text-lg text-retro-blue hover:text-retro-red"
                    >
                      {exp.company}
                    </a>
                    <h3 className="font-pixel text-md mt-2 text-retro-black">{exp.role}</h3>
                    <p className="font-pixel text-sm mt-1 text-retro-gray">{exp.period}</p>
                    <p className="font-pixel text-xs mt-1 text-retro-gray">{exp.duration}</p>
                  </div>
                </RetroContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};