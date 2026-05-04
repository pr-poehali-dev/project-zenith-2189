import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Collection {
  name: string;
  period: string;
  category: string;
  portrait: string;
  image: string;
  description: string;
  highlights: string;
}

const collections: Collection[] = [
  {
    name: "Основатели университета",
    period: "1880–1920",
    category: "Портреты",
    portrait: "/fine-art-portrait-photography.jpg",
    image: "/classical-museum-grand-architecture-paintings.jpg",
    description: "Коллекция парадных и документальных портретов первых ректоров, профессоров и меценатов, стоявших у истоков университета. Снимки выполнены в студийной технике той эпохи.",
    highlights: "Портреты первого ректора, Основатели физического факультета, Почётные члены совета",
  },
  {
    name: "Наука в действии",
    period: "1930–1970",
    category: "Документальная",
    portrait: "/fine-art-black-white-photography.jpg",
    image: "/fine-art-black-white-photography.jpg",
    description: "Уникальные репортажные снимки из лабораторий, мастерских и полевых экспедиций. Живые свидетельства научного поиска — от химических опытов до геологических экспедиций.",
    highlights: "Лаборатории 1940-х, Полевые экспедиции, Первые ЭВМ в университете",
  },
  {
    name: "Студенческая жизнь",
    period: "1950–1990",
    category: "Репортаж",
    portrait: "/contemporary-exhibition-space-art-show.jpg",
    image: "/contemporary-exhibition-space-art-show.jpg",
    description: "Беззаботные и трогательные снимки студенческого быта: общежития, праздники, спортивные команды, театральные постановки и капустники разных десятилетий.",
    highlights: "Студенческий театр, Спортивные команды, КВН и фестивали",
  },
  {
    name: "Архитектура кампуса",
    period: "1890–2000",
    category: "Архитектурная",
    portrait: "/classical-museum-grand-architecture-paintings.jpg",
    image: "/art-gallery-interior-contemporary.jpg",
    description: "Эволюция облика университета: от первых зданий до современного кампуса. Интерьеры аудиторий, читальных залов и парадных лестниц в разные эпохи.",
    highlights: "Главное здание 1898 г., Строительство новых корпусов, Библиотека",
  },
];

export function FeaturedArtists() {
  return (
    <section id="artists" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Коллекции музея</h2>
          <p className="text-muted-foreground text-lg">Тематические архивные собрания из фондов университетского музея</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((col) => (
            <Dialog key={col.name}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={col.portrait}
                      alt={col.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-light mb-1">{col.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {col.period}
                    </p>
                    <p className="text-sm font-medium text-foreground">{col.category}</p>
                    <p className="text-xs text-muted-foreground mt-3">Нажмите, чтобы узнать больше</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl font-light">{col.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={col.portrait}
                      alt={col.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{col.period}</p>
                      <p className="text-base font-medium text-foreground mb-4">{col.category}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">О коллекции</h4>
                      <p className="text-sm leading-relaxed">{col.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Знаковые экспонаты</h4>
                      <p className="text-sm leading-relaxed">{col.highlights}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
