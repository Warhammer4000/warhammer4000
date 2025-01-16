import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";

export const Clients = () => {
  const clients = [
    { name: "Nissan", description: "Automotive Industry" },
    { name: "Syngenta", description: "Agriculture Technology" },
    { name: "CEMS Global", description: "Exhibition & Event Management" },
    { name: "Grameenphone", description: "Telecommunications" },
    { name: "Robi", description: "Telecommunications" },
    { name: "JTI", description: "Tobacco Industry" },
    { name: "Pran RFL", description: "Consumer Goods" },
  ];

  return (
    <section className="bg-retro-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2}>QUEST GIVERS</RetroHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <RetroContainer
              key={client.name}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="p-4">
                <h3 className="font-pixel text-xl text-retro-blue mb-2">
                  {client.name}
                </h3>
                <p className="font-pixel text-xs text-retro-gray">
                  {client.description}
                </p>
                <div className="mt-4">
                  <div className="w-full h-1 bg-retro-blue animate-pulse" />
                </div>
              </div>
            </RetroContainer>
          ))}
        </div>
      </div>
    </section>
  );
};