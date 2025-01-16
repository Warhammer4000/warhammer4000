import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  duration: string;
  isCurrent?: boolean;
  coordinates: {
    x: number;
    y: number;
  };
  connections: number[];
}

export const ExperienceTimeline = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Brain Station 23 PLC",
      companyUrl: "https://brainstation-23.com/",
      role: "Business Unit Head",
      period: "Jan 2021 - Present",
      duration: "4 years 1 month",
      isCurrent: true,
      coordinates: { x: 70, y: 20 },
      connections: [2]
    },
    {
      id: 2,
      company: "Brain Station 23 PLC",
      companyUrl: "https://brainstation-23.com/",
      role: "Software Engineer",
      period: "Aug 2019 - Jan 2021",
      duration: "1 year 6 months",
      coordinates: { x: 40, y: 40 },
      connections: [1, 3]
    },
    {
      id: 3,
      company: "Brain Station 23 PLC",
      companyUrl: "https://brainstation-23.com/",
      role: "Associate Software Engineer",
      period: "Dec 2018 - Aug 2019",
      duration: "9 months",
      coordinates: { x: 20, y: 60 },
      connections: [2, 4]
    },
    {
      id: 4,
      company: "iQuantile",
      companyUrl: "https://www.iquantile.com/",
      role: "Manager",
      period: "Jan 2018 - Dec 2018",
      duration: "1 year",
      coordinates: { x: 50, y: 70 },
      connections: [3, 5]
    },
    {
      id: 5,
      company: "iQuantile",
      companyUrl: "https://www.iquantile.com/",
      role: "Game Developer",
      period: "Mar 2017 - Jan 2018",
      duration: "11 months",
      coordinates: { x: 80, y: 80 },
      connections: [4]
    }
  ];

  return (
    <section className="bg-retro-blue py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2} className="text-retro-white mb-12">CAREER MAP</RetroHeading>
        
        <RetroContainer className="relative aspect-square w-full max-w-2xl mx-auto bg-retro-black p-4">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {experiences.map(exp => 
              exp.connections.map(connectionId => {
                const connectedExp = experiences.find(e => e.id === connectionId);
                if (!connectedExp) return null;
                
                return (
                  <line
                    key={`${exp.id}-${connectionId}`}
                    x1={`${exp.coordinates.x}%`}
                    y1={`${exp.coordinates.y}%`}
                    x2={`${connectedExp.coordinates.x}%`}
                    y2={`${connectedExp.coordinates.y}%`}
                    stroke="#fbf5ef"
                    strokeWidth="2"
                    strokeDasharray="4"
                    className="animate-pulse"
                  />
                );
              })
            )}
          </svg>

          {/* Experience nodes */}
          {experiences.map((exp) => (
            <HoverCard key={`${exp.company}-${exp.role}`}>
              <HoverCardTrigger>
                <div 
                  className={cn(
                    "absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2",
                    "border-2 border-retro-white rounded-full transition-all duration-300",
                    exp.isCurrent ? "bg-retro-yellow animate-pulse" : "bg-retro-purple hover:bg-retro-red"
                  )}
                  style={{
                    left: `${exp.coordinates.x}%`,
                    top: `${exp.coordinates.y}%`
                  }}
                >
                  {exp.isCurrent && (
                    <div className="absolute -right-8 -top-8">
                      <div className="w-12 h-12 bg-[url('/pixel-character.png')] bg-contain bg-no-repeat" />
                    </div>
                  )}
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

          {/* Grid overlay for retro effect */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-retro-white/10"
              />
            ))}
          </div>
        </RetroContainer>
      </div>
    </section>
  );
};