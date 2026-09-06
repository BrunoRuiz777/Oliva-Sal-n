import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { salonConfig } from '../data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-brand-purple-light shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex flex-col">
          <span className="text-brand-dark font-serif text-3xl font-medium leading-none">
            {salonConfig.name}
          </span>
          <span className="text-brand-dark text-xs tracking-[0.2em] mt-1">
            {salonConfig.subtitle}
          </span>
        </div>
        
        {/* MENÚ DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#servicios" className="text-brand-dark font-medium hover:text-[#c19c5c] transition-colors">Servicios</a>
          <a href="#nosotros" className="text-brand-dark font-medium hover:text-[#c19c5c] transition-colors">Nosotras</a>
          <a href="#galeria" className="text-brand-dark font-medium hover:text-[#c19c5c] transition-colors">Galería</a>
          <a href="#contacto" className="text-brand-dark font-medium hover:text-[#c19c5c] transition-colors">Contacto</a>
        </div>

        {/* BOTÓN WHATSAPP DESKTOP */}
        <a 
          href={salonConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold items-center gap-2 hover:bg-[#1ebe5d] transition-transform hover:scale-105 shadow-md"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

        {/* BOTÓN MENÚ MÓVIL */}
        <button 
          className="lg:hidden text-brand-dark hover:text-[#c19c5c] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* DROPDOWN MENÚ MÓVIL */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#d4bcf2] shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-brand-dark/10">
          <a href="#servicios" className="text-brand-dark text-lg font-medium" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#nosotros" className="text-brand-dark text-lg font-medium" onClick={() => setIsOpen(false)}>Nosotras</a>
          <a href="#galeria" className="text-brand-dark text-lg font-medium" onClick={() => setIsOpen(false)}>Galería</a>
          <a href="#contacto" className="text-brand-dark text-lg font-medium" onClick={() => setIsOpen(false)}>Contacto</a>
        </div>
      )}
    </nav>
  );
}