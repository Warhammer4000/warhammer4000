import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";
import { Gamepad } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-retro-blue p-4">
      <RetroContainer className="max-w-4xl mx-auto text-center">
        <div className="animate-float">
          <Gamepad className="w-24 h-24 mx-auto mb-8 text-retro-yellow" />
        </div>
        <RetroHeading>Tanimul Haque Khan</RetroHeading>
        <p className="font-pixel text-lg mb-8 text-retro-gray">Game Developer & Community Builder</p>
        <div className="inline-block font-pixel text-retro-yellow bg-retro-black px-6 py-3 animate-blink">
          PRESS START
        </div>
      </RetroContainer>
    </section>
  );
};