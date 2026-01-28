import { Button } from '@/components/ui/button'
import { weeklyEvents } from '@/data/database'
import { Calendar, Clock, Music } from 'lucide-react'
export default function HomeEventsSection() {
  return (
    <section id="events" className="px-4 xl:px-12 py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">
            Programação
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Agenda da <span className="text-gradient-gold">Semana</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira as atrações que preparamos para você
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weeklyEvents.map((event) => (
            <div
              key={event.day}
              className={`relative overflow-hidden rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                event.highlight
                  ? "border-primary/50 bg-linear-to-br from-primary/10 to-card shadow-gold"
                  : "border-border/50 bg-card hover:border-primary/30"
              }`}
            >
              {event.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg font-medium">
                  Destaque
                </div>
              )}
              
              <div className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar size={14} />
                  <span>{event.day}</span>
                  <span className="text-primary font-medium">{event.date}</span>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2">
                  {event.title}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {event.artist}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Music size={14} />
                    <span>{event.genre}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver Programação Completa
          </Button>
        </div>
      </div>
    </section>
  )
}
