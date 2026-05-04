interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "1888",
    title: "Основание университета",
    description: "По указу императора открыт университет. Первые четыре факультета приняли 312 студентов.",
  },
  {
    year: "1905",
    title: "Строительство главного корпуса",
    description: "Завершено строительство парадного здания университета, ставшего символом города.",
  },
  {
    year: "1921",
    title: "Открытие научной библиотеки",
    description: "Основана крупнейшая в регионе научная библиотека с фондом более 100 000 томов.",
  },
  {
    year: "1943",
    title: "Университет в годы войны",
    description: "Несмотря на военное время, учебный процесс не прерывался. Учёные университета работали над оборонными проектами.",
  },
  {
    year: "1957",
    title: "Открытие физического факультета",
    description: "Создан факультет физики и математики, ставший одним из ведущих научных центров страны.",
  },
  {
    year: "1975",
    title: "Первый студенческий фестиваль",
    description: "Проведён первый ежегодный студенческий фестиваль искусств, традиция которого жива по сей день.",
  },
  {
    year: "1991",
    title: "Международное сотрудничество",
    description: "Подписаны первые соглашения об академическом обмене с зарубежными университетами.",
  },
  {
    year: "2005",
    title: "Открытие нового кампуса",
    description: "Открыт современный студенческий кампус с общежитиями, спортивным комплексом и лабораториями.",
  },
  {
    year: "2024",
    title: "Цифровой архив музея",
    description: "Запущена онлайн-галерея университетского музея — тысячи исторических фотографий стали доступны всем.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">История университета</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более века научных открытий, студенческой жизни и культурного наследия
          </p>
        </div>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Контент */}
                  <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="bg-background border border-border p-6 rounded-sm hover:shadow-md transition-shadow">
                      <span className="font-serif text-3xl font-light text-muted-foreground block mb-2">
                        {event.year}
                      </span>
                      <h3 className="font-serif text-xl font-light mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Точка на линии */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-2 border-background ring-2 ring-foreground z-10" />

                  {/* Пустая сторона */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
