import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  duration: string;
  isCurrent?: boolean;
}

export const ExperienceTimeline = () => {
  const experiences: Experience[] = [
    {
      company: "Brain Station 23 PLC",
      companyUrl: "https://brainstation-23.com/",
      role: "Business Unit Head",
      period: "Jan 2021 - Present",
      duration: "4 years 1 month",
      isCurrent: true
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
        <RetroHeading level={2} className="text-retro-white mb-12">CAREER TOWER</RetroHeading>
        
        <div className="relative flex justify-center">
          {/* Tower structure */}
          <div className="relative w-32 bg-retro-black bg-opacity-50 rounded-t-lg">
            {experiences.map((exp, index) => (
              <HoverCard key={`${exp.company}-${exp.role}`}>
                <HoverCardTrigger>
                  <div 
                    className={`
                      relative h-24 border-b-4 border-retro-black 
                      ${exp.isCurrent ? 'bg-retro-yellow animate-pulse' : 'bg-retro-white hover:bg-retro-blue hover:bg-opacity-20'}
                      transition-all duration-300
                    `}
                  >
                    {/* Current position marker */}
                    {exp.isCurrent && (
                      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                        <div className="w-12 h-12 bg-[url('/pixel-character.png')] bg-contain bg-no-repeat animate-bounce" />
                      </div>
                    )}
                    
                    {/* Floor number */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                      <span className="font-pixel text-retro-white text-sm">F{experiences.length - index}</span>
                    </div>
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent className="w-80 p-4 bg-retro-black text-retro-white border-2 border-retro-white">
                  <RetroContainer className="p-2">
                    <a 
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-pixel text-lg text-retro-yellow hover:text-retro-red"
                    >
                      {exp.company}
                    </a>
                    <h3 className="font-pixel text-md mt-2 text-retro-white">{exp.role}</h3>
                    <p className="font-pixel text-sm mt-1 text-retro-gray">{exp.period}</p>
                    <p className="font-pixel text-xs mt-1 text-retro-gray">{exp.duration}</p>
                  </RetroContainer>
                </HoverCardContent>
              </HoverCard>
            ))}
            
            {/* Tower base */}
            <div className="h-8 bg-retro-black rounded-b-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};