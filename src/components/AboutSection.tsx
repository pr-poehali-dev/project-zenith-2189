export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Хранитель университетской памяти
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Музей университета собирает, хранит и представляет фотографические свидетельства
                жизни вуза на протяжении десятилетий. Каждый снимок — это живая страница истории
                науки, образования и студенческого сообщества.
              </p>
              <p>
                Наша фотогалерея открывает доступ к уникальным архивным материалам: портреты
                учёных, документальные снимки экспедиций, события студенческой жизни и облик
                университетских корпусов в разные эпохи.
              </p>
              <p className="text-muted-foreground">
                Каждая фотография тщательно атрибутирована и сохранена — чтобы история
                университета была доступна всем: студентам, исследователям и выпускникам.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/classical-museum-grand-architecture-paintings.jpg"
              alt="Университетский музей"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}