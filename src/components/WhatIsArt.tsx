export function WhatIsArt() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/classical-art-museum-painting.jpg"
                alt="Классическое искусство в музее"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-balance">
                Фотография как история
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Фотография — это не просто изображение. Это документ эпохи, свидетель событий и
                  хранитель памяти. Снимки из университетского архива рассказывают о людях, идеях
                  и открытиях, которые формировали облик науки и образования.
                </p>

                <p>
                  Каждая фотография из нашего фонда — это окно в прошлое: лекционные аудитории
                  прошлого века, портреты учёных, ставших легендами, торжественные церемонии
                  и повседневная студенческая жизнь.
                </p>

                <p>
                  Фотоархив музея — живая летопись университета. Здесь история не просто
                  хранится, она открыта для изучения, вдохновения и осмысления каждым,
                  кто причастен к этому месту.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Университетский музей — это место, где прошлое и настоящее встречаются. Наши фонды
              хранят тысячи снимков, каждый из которых — частица общей памяти: студентов, преподавателей
              и всех, кто когда-либо был связан с университетом.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">О музее университета</h3>
              <p>
                Музей университета хранит документальное и культурное наследие вуза, накопленное
                за десятилетия. Наша миссия — сохранить и открыть широкой аудитории фотографический
                архив, отражающий научный, образовательный и общественный путь университета. Мы
                приглашаем студентов, выпускников, исследователей и всех неравнодушных к истории
                познакомиться с этим уникальным собранием.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}