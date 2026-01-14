import { Wine, Music, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Wine,
    title: "Drinks Artesanais",
    description: "Coquetéis exclusivos preparados por bartenders premiados",
  },
  {
    icon: Music,
    title: "Música ao Vivo",
    description: "As melhores bandas e DJs toda semana",
  },
  {
    icon: Users,
    title: "Ambiente Único",
    description: "Decoração sofisticada com atmosfera acolhedora",
  },
  {
    icon: Clock,
    title: "Happy Hour",
    description: "Promoções especiais das 18h às 21h",
  },
];

export default function HomeAboutSection () {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">
            Nossa História
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Mais que um bar, uma <span className="text-gradient-gold">experiência</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fundado em 2020, o Veludo nasceu da paixão por criar momentos únicos. 
            Nosso espaço combina a elegância de um speakeasy clássico com a energia 
            da vida noturna contemporânea. Aqui, cada drink conta uma história e 
            cada noite é uma celebração.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-lg border border-border/50 bg-background/50 hover:border-primary/50 hover:shadow-gold transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
