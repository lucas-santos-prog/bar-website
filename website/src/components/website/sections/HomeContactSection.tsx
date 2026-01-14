import { Button } from '@/components/ui/button'
import { Clock, Facebook, Instagram, MapPin, Music, Phone } from 'lucide-react'
import React from 'react'

export default function HomeContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">
            Visite-nos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Encontre o <span className="text-gradient-gold">Veludo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua das Flores, 123 - Centro<br />
                  São Paulo, SP - 01310-100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Reservas</h3>
                <p className="text-muted-foreground">
                  (11) 99999-9999<br />
                  reservas@veludo.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Terça a Quinta: 18h - 01h<br />
                  Sexta e Sábado: 18h - 04h<br />
                  Domingo: 16h - 23h<br />
                  Segunda: Fechado
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="font-display text-lg font-semibold mb-4">Siga-nos</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Music size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-background rounded-lg border border-border/50 p-8">
            <h3 className="font-display text-2xl font-semibold mb-6">Faça sua Reserva</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Data
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium mb-2">
                    Pessoas
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="2">2 pessoas</option>
                    <option value="4">4 pessoas</option>
                    <option value="6">6 pessoas</option>
                    <option value="8">8+ pessoas</option>
                  </select>
                </div>
              </div>
              <Button variant="hero" className="w-full" size="lg">
                Enviar Reserva
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
