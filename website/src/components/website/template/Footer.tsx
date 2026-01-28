import React from 'react'

export default function Footer() {
  return (
   <footer className="px-4 xl:px-12 py-8 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Bar Brahma. Todos os direitos reservados.
          </p>

          <div className="">
            <p className="font-display text-2xl text-gradient-gold font-bold">Bar Brahma</p>        
          </div>
          
          <div className='space-y-2'>
          <p className="text-muted-foreground text-xs">
            Beba com moderação. Proibida a venda para menores de 18 anos.
          </p>
          <p className="text-sm text-muted-foreground/20">desenvolvido pela agência inove</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
