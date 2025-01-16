import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

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
  const [isMuted, setIsMuted] = useState(true);
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

  const toggleAudio = () => {
    const audio = document.getElementById('retroBGM') as HTMLAudioElement;
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsMuted(!isMuted);
  };

  return (
    <section className="bg-retro-blue py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2} className="text-retro-white mb-12">CAREER MAP</RetroHeading>
        
        <div className="relative">
          {/* Audio Control */}
          <button 
            onClick={toggleAudio}
            className="absolute -top-12 right-0 text-retro-white hover:text-retro-yellow transition-colors"
          >
            {isMuted ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>

          {/* Background Music */}
          <audio id="retroBGM" loop>
            <source src="/retro-bgm.mp3" type="audio/mp3" />
          </audio>

          <RetroContainer className="relative aspect-square w-full max-w-2xl mx-auto bg-retro-black p-4 z-[1]
            before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]
            after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.4)_100%)]
            [&>*]:relative [&>*]:z-[2]">
            
            {/* CRT curve and flicker effect */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)] animate-[flicker_0.15s_infinite]"></div>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,_rgba(0,0,0,0.1)_1px,_transparent_2px)] bg-[length:100%_4px]"></div>
            </div>

            {/* Noise effect */}
            <div 
              className="absolute inset-0 z-[1] mix-blend-overlay pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                animation: 'noise .2s infinite'
              }}
            ></div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full z-[2] pointer-events-none">
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
                      stroke="#6e6a86"
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
                      "absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 z-[3]",
                      "cursor-pointer transition-all duration-300",
                      exp.isCurrent ? "bg-retro-yellow animate-pulse" : "bg-retro-purple hover:bg-retro-red"
                    )}
                    style={{
                      left: `${exp.coordinates.x}%`,
                      top: `${exp.coordinates.y}%`,
                      borderRadius: '50%',
                      border: '2px solid #fbf5ef'
                    }}
                  >
                    {exp.isCurrent && (
                      <div className="absolute -right-8 -top-8">
                        <div className="w-12 h-12 bg-[url('/pixel-character.png')] bg-contain bg-no-repeat animate-bounce" />
                      </div>
                    )}
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent className="w-80 p-4 bg-retro-black text-retro-white border-2 border-retro-white z-[4]">
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

            {/* Grid overlay */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 z-[2]">
              {Array.from({ length: 144 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border border-retro-gray/30"
                />
              ))}
            </div>

            {/* Additional decorative elements */}
            <div className="absolute inset-0 border-4 border-retro-gray/40 z-[2]"></div>
            <div className="absolute inset-4 border border-retro-gray/20 z-[2]"></div>
            
            {/* Scanlines effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-retro-white/5 to-transparent opacity-35 pointer-events-none z-[2]"
              style={{
                backgroundSize: '100% 4px',
                backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)'
              }}
            ></div>
          </RetroContainer>
        </div>
      </div>
    </section>
  );
};