import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="bg-retro-blue py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2} className="text-retro-white mb-12">EDUCATION QUEST</RetroHeading>
        
        <RetroContainer className="p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-12 h-12 text-retro-purple animate-bounce" />
          </div>
          
          <h3 className="font-pixel text-xl text-retro-purple mb-4">
            American International University-Bangladesh
          </h3>
          
          <div className="space-y-2">
            <p className="font-pixel text-md text-retro-black">
              Bachelor's Degree Computer Software Engineering
            </p>
            <p className="font-pixel text-md text-retro-green">
              CGPA 3.98
            </p>
            <p className="font-pixel text-sm text-retro-gray">
              2014 - 2018
            </p>
          </div>
        </RetroContainer>
      </div>
    </section>
  );
};