"use client"

import { GlobalContext } from '@/contexts/GlobalContext';
import React, { useContext } from 'react'
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook, Music } from "lucide-react";
import { instagramLink, navLinks } from '@/data/staticInformations';
import Image from 'next/image';
export default function Header() {
  const {isActiveMobileButton, setIsActiveMobileButton} = useContext(GlobalContext)
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsActiveMobileButton(false);
  };
  return (
  <nav className="px-4 xl:px-12 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="h-full relative aspect-square font-display text-2xl md:text-3xl text-gradient-gold font-bold">
          <Image fill alt='Logo do bar brahma' src={"/images/assets/bar-logo.png"} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-body"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <Music size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsActiveMobileButton(!isActiveMobileButton)}
        >
          {isActiveMobileButton ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isActiveMobileButton && (
        <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-body text-lg py-2"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/60 hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground/60 hover:text-primary transition-colors"
              >
                <Music size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
  )
}
