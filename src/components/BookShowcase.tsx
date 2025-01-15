import { RetroContainer } from "./RetroContainer";
import { RetroHeading } from "./RetroHeading";

export const BookShowcase = () => {
  const bookInfo = {
    title: "Game Development with Unity for .NET Developers",
    url: "https://link.springer.com/book/10.1007/978-1-4842-6917-6",
    coverUrl: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-1-4842-6917-6"
  };

  return (
    <section className="bg-retro-yellow py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroHeading level={2} className="text-retro-black">SPELL BOOK</RetroHeading>
        <div className="mt-8">
          <a
            href={bookInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-sm mx-auto"
          >
            <RetroContainer className="transform transition-transform hover:scale-105">
              <img
                src={bookInfo.coverUrl}
                alt={bookInfo.title}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-pixel text-sm text-center text-retro-black">
                  {bookInfo.title}
                </h3>
              </div>
            </RetroContainer>
          </a>
        </div>
      </div>
    </section>
  );
};