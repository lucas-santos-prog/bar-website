"use client"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";


export default function HomeHeroSection() {
    const scrollToEvents = () => {
    const element = document.querySelector("#events");
    element?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/images/hero-bar.jpg"}
          alt="Interior do bar Veludo com iluminação âmbar e atmosfera sofisticada"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-3xl mx-auto">
          <p 
            className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            Bar & Lounge
          </p>
          
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
          >
            <span className="text-gradient-gold">Veludo</span>
          </h1>
          
          <p 
            className="text-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8 font-body animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
          >
            Onde a música encontra os melhores coquetéis. Uma experiência única para suas noites.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}
          >
            <Button className="bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-300" onClick={scrollToEvents}>
              Ver Programação
            </Button>
            <Button className="border border-gold/30 bg-card/50 text-foreground hover:border-gold hover:bg-card backdrop-blur-sm" onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}>
              Fazer Reserva
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  )
}
