interface Artwork {
  title: string;
  artist: string;
  year: string;
  image: string;
}

const artworks: Artwork[] = [
  {
    title: "Торжественное открытие главного корпуса",
    artist: "Архив музея",
    year: "1953",
    image: "/classical-museum-grand-architecture-paintings.jpg",
  },
  {
    title: "Научная экспедиция кафедры географии",
    artist: "Фотолаборатория университета",
    year: "1968",
    image: "/fine-art-black-white-photography.jpg",
  },
  {
    title: "Портрет основателя кафедры физики",
    artist: "Архив музея",
    year: "1947",
    image: "/fine-art-portrait-photography.jpg",
  },
  {
    title: "Студенческий театральный фестиваль",
    artist: "Фотолаборатория университета",
    year: "1975",
    image: "/contemporary-exhibition-space-art-show.jpg",
  },
  {
    title: "Библиотека. Читальный зал",
    artist: "Архив музея",
    year: "1960",
    image: "/art-gallery-interior-contemporary.jpg",
  },
  {
    title: "Выпускной церемониал. Актовый зал",
    artist: "Фотолаборатория университета",
    year: "1982",
    image: "/luxury-private-art-collection-room.jpg",
  },
];

export function ArtworkGrid() {
  return (
    <section id="works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Фотогалерея</h2>
          <p className="text-muted-foreground text-lg">Избранные снимки из фондов университетского музея</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {artworks.map((artwork, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-light mb-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {artwork.artist}, {artwork.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}