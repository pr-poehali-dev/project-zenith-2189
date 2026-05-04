interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "1908",
    title: "Открытие Ярославского учительского института",
    description: "7 декабря по резолюции императора Николая II «Быть по сему» на Духовской улице (ныне Республиканская, 40) открыт учительский институт. За первые 10 лет подготовлено 200 учителей.",
  },
  {
    year: "1918",
    title: "Преобразование в педагогический институт",
    description: "Решением Наркомпроса учительский институт преобразован в педагогический институт с 4-летним курсом обучения и тремя отделениями: словесно-историческим, физико-математическим и естественно-географическим.",
  },
  {
    year: "1922",
    title: "Слияние с Ярославским университетом",
    description: "Педагогический институт присоединён к Ярославскому университету в качестве педагогического факультета. Деканом стал Павел Никодимович Груздев.",
  },
  {
    year: "1924",
    title: "Восстановление самостоятельности",
    description: "Декретом СНК РСФСР педагогический факультет Ярославского университета преобразован обратно в самостоятельный Ярославский государственный педагогический институт.",
  },
  {
    year: "1941–1945",
    title: "Институт в годы Великой Отечественной войны",
    description: "ЯГПИ — единственный вуз Ярославля в военные годы. Главный корпус отдан под военный госпиталь. 800 студентов и 136 преподавателей участвовали в строительстве оборонительных сооружений.",
  },
  {
    year: "1946",
    title: "Имя К. Д. Ушинского",
    description: "Институту присвоено имя выдающегося педагога Константина Дмитриевича Ушинского — основоположника научной педагогики в России, некогда преподававшего в Ярославле.",
  },
  {
    year: "1971",
    title: "Орден Трудового Красного Знамени",
    description: "За успехи в подготовке педагогических кадров институт награждён орденом Трудового Красного Знамени — высшей государственной наградой для учебных заведений того времени.",
  },
  {
    year: "1993",
    title: "Преобразование в университет",
    description: "По результатам государственной аттестации ЯГПИ преобразован в Ярославский государственный педагогический университет им. К. Д. Ушинского — начинается новейший этап в истории вуза.",
  },
  {
    year: "2008",
    title: "100-летие университета",
    description: "ЯГПУ отметил вековой юбилей. За 100 лет подготовлено более 100 000 специалистов. 85% учителей Ярославского региона — выпускники университета.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">История ЯГПУ</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ярославский государственный педагогический университет им. К. Д. Ушинского — более 115 лет служения педагогической науке и образованию России
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