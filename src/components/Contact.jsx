import { Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { salonConfig } from '../data/config';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-brand-purple-light">
      <div className="max-w-4xl mx-auto bg-brand-dark rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative z-10 translate-y-12">
        <p className="text-brand-gold text-sm tracking-[0.2em] font-semibold mb-6 uppercase">Contacto</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
          ¿Lista para<br />transformar tu<br />cabello?
        </h2>
        
        <p className="text-gray-300 mb-10 text-lg font-light max-w-lg">
          Escribinos por WhatsApp para agendar tu turno o consultar sobre nuestros servicios. 
          Respondemos rápido!
        </p>

        <div className="space-y-4 mb-10 text-gray-300 text-sm">
          <div className="flex items-center gap-4">
            <Phone size={20} className="text-brand-gold" />
            <span>{salonConfig.phone}</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={20} className="text-brand-gold" />
            <span>{salonConfig.address}</span>
          </div>
        </div>

        <a 
          href={salonConfig.whatsappUrl}
          className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1ebe5d] transition-colors mb-4"
        >
          <MessageCircle size={24} />
          Escribirnos por WhatsApp
        </a>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <a href={salonConfig.instagramUrl} className="border border-white/20 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
            <Instagram size={20} /> <span className="font-medium text-sm">Instagram</span>
          </a>
          <a href={salonConfig.facebookUrl} className="border border-white/20 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
            <Facebook size={20} /> <span className="font-medium text-sm">Facebook</span>
          </a>
        </div>

        <div className="text-center text-gray-400 text-xs tracking-wide">
          {salonConfig.schedule}
        </div>
      </div>
    </section>
  );
}