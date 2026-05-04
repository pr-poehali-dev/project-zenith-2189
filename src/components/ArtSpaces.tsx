export function ArtSpaces() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Разделы архива</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Фотографии университетского музея охватывают все стороны жизни вуза — от науки до студенческого быта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/modern-contemporary-art-gallery-white-walls.jpg"
                alt="Современная галерея"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Портреты учёных</h3>
              <p className="text-muted-foreground leading-relaxed">
                Фотографии профессоров, основателей кафедр и выдающихся деятелей университета разных лет
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/classical-museum-grand-architecture-paintings.jpg"
                alt="Архитектура университета"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Архитектура и корпуса</h3>
              <p className="text-muted-foreground leading-relaxed">
                Исторические снимки университетских зданий, аудиторий, лабораторий и библиотек
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/fine-art-black-white-photography.jpg"
                alt="Научные экспедиции"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Научные экспедиции</h3>
              <p className="text-muted-foreground leading-relaxed">
                Документальные снимки полевых исследований и научных поездок кафедр университета
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/contemporary-exhibition-space-art-show.jpg"
                alt="Студенческая жизнь"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Студенческая жизнь</h3>
              <p className="text-muted-foreground leading-relaxed">
                Фестивали, спортивные мероприятия, капустники и повседневный быт студентов разных эпох
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/luxury-private-art-collection-room.jpg"
                alt="Торжественные события"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Торжественные события</h3>
              <p className="text-muted-foreground leading-relaxed">
                Выпускные церемонии, юбилеи университета, визиты почётных гостей и государственных деятелей
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/art-gallery-interior-contemporary.jpg"
                alt="Лаборатории и исследования"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Лаборатории и наука</h3>
              <p className="text-muted-foreground leading-relaxed">
                Снимки научных лабораторий, оборудования и процесса исследований в разные десятилетия
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}