import { Card, CardContent } from "@/components/ui/card";

interface ArtType {
  name: string;
  description: string;
  image: string;
  examples: string;
}

const artTypes: ArtType[] = [
  {
    name: "Портретная съёмка",
    description:
      "Постановочные и неформальные портреты учёных, преподавателей и студентов. Лица, которые вписали свои имена в историю университета.",
    image: "/fine-art-portrait-photography.jpg",
    examples: "Постановочный портрет, Репортажный портрет",
  },
  {
    name: "Документальная съёмка",
    description:
      "Репортажные кадры событий, лекций, экзаменов и повседневной жизни вуза. Живая история без постановки.",
    image: "/fine-art-black-white-photography.jpg",
    examples: "Событийная, Репортаж, Хроника",
  },
  {
    name: "Архитектурная съёмка",
    description:
      "Снимки корпусов, аудиторий, лабораторий и пространств университета — от исторических фасадов до интерьеров.",
    image: "/classical-museum-grand-architecture-paintings.jpg",
    examples: "Фасады, Интерьеры, Панорамы",
  },
  {
    name: "Экспедиционная съёмка",
    description:
      "Фотографии из научных поездок, полевых исследований и экспедиций кафедр. Наука в действии.",
    image: "/outdoor-sculpture-garden-with-modern-art.jpg",
    examples: "Полевые работы, Экспедиции, Исследования",
  },
  {
    name: "Торжественные события",
    description:
      "Выпускные церемонии, юбилейные торжества, награждения и визиты почётных гостей.",
    image: "/contemporary-exhibition-space-art-show.jpg",
    examples: "Выпускной, Юбилей, Конференции",
  },
  {
    name: "Студенческий быт",
    description:
      "Неофициальные снимки: общежития, студенческие клубы, спортивные соревнования и культурные мероприятия.",
    image: "/art-gallery-interior-contemporary.jpg",
    examples: "Клубы, Спорт, Культура, Общежития",
  },
  {
    name: "Лабораторная съёмка",
    description:
      "Снимки научных экспериментов, лабораторного оборудования и исследовательского процесса разных десятилетий.",
    image: "/luxury-private-art-collection-room.jpg",
    examples: "Эксперименты, Оборудование, Открытия",
  },
  {
    name: "Аэро- и панорамная съёмка",
    description:
      "Вид с высоты на университетский кампус, исторические панорамы и виды городской среды вокруг вуза.",
    image: "/modern-contemporary-art-gallery-white-walls.jpg",
    examples: "Кампус, Панорамы, Аэрофото",
  },
  {
    name: "Чёрно-белая хроника",
    description:
      "Исторические снимки из ранних десятилетий университета — от первых фотографий до середины XX века.",
    image: "/charcoal-drawing-portrait-sketch.jpg",
    examples: "1920-е, 1940-е, 1960-е, Реставрация",
  },
];

export function ArtTypes() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Жанры и техники съёмки</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Фотоархив университета включает снимки в самых разных жанрах и техниках — от постановочных портретов до репортажных кадров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artTypes.map((type) => (
            <Card key={type.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <img
                  src={type.image}
                  alt={`Пример: ${type.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-3">{type.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-1">Виды:</p>
                  <p className="text-sm text-muted-foreground">{type.examples}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}