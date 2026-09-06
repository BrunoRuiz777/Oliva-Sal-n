import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { salonConfig } from '../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#110817] text-white pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-medium mb-1">{salonConfig.name} {salonConfig.subtitle}</h2>
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">Especialistas en alaciados</p>
        </div>

        <div className="flex gap-6 mb-12 text-gray-400">
          <a href={salonConfig.instagramUrl} className="hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href={salonConfig.facebookUrl} className="hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href={salonConfig.whatsappUrl} className="hover:text-white transition-colors">
            <MessageCircle size={24} />
          </a>
        </div>

        <p className="text-gray-500 text-xs">
          {currentYear} {salonConfig.name} {salonConfig.subtitle}
        </p>
      </div>
    </footer>
  );
}