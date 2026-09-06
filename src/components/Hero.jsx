import { ArrowRight, ArrowDown, MessageCircle } from 'lucide-react';
import { salonConfig } from '../data/config';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-pattern flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-start relative z-10">
        
        <div className="max-w-xl text-white">
          <div className="text-brand-gold text-sm tracking-[0.2em] font-semibold mb-6 uppercase flex items-center gap-2">
            <span className="text-brand-gold">✦</span> Tratamientos Premium
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
            Tu cabello,<br />
            <span className="text-brand-gold italic">perfecto</span><br />
            cada día.
          </h1>
          
          <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
            Especialistas en alaciados a base de colágeno y tratamientos capilares. 
            Transformamos tu cabello con las mejores técnicas y 
            productos del mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={salonConfig.whatsappUrl}
              className="bg-brand-gold text-brand-dark px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors"
            >
              <MessageCircle size={20} />
              Reservar turno
            </a>
            <a 
              href="#servicios"
              className="border border-white/30 text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Ver servicios <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 text-xs tracking-widest">
        EXPLORAR
        <ArrowDown size={16} className="mt-2 animate-bounce" />
      </div>
    </section>
  );
}