import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";

export const Games = () => {
  const games = [
    {
      title: "SILENT SCREAM",
      url: "https://store.steampowered.com/app/1955750/SILENT_SCREAM/",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1955750/header.jpg",
    },
    {
      title: "Control:Override",
      url: "https://store.steampowered.com/app/1406090/ControlOverride/",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1406090/header.jpg",
    },
    {
      title: "A RollBack Story",
      url: "https://store.steampowered.com/app/886390/A_RollBack_Story/",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/886390/header.jpg",
    },
  ];

  return (
    <section className="bg-retro-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2} className="text-retro-white">MY GAMES</RetroHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game) => (
            <a
              key={game.title}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <RetroContainer className="overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-auto transition-transform group-hover:scale-105"
                />
                <div className="font-pixel text-sm mt-2 p-2 bg-retro-black text-retro-white">
                  {game.title}
                </div>
              </RetroContainer>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};