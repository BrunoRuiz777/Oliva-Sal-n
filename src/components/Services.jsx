import { servicesData } from '../data/services';
import { Sparkles, Droplets, Wind, Star, ArrowRight } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Droplets: Droplets,
  Wind: Wind,
  Star: Star
};

export default function Services() {
  return (
        <section id="servicios" className="py-24 px-6 bg-[#f7f3f9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#861c71] text-sm tracking-[0.2em] font-semibold mb-4 uppercase">Nuestros Servicios</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#241f26]">
            Todo lo que tu cabello<br />necesita en un lugar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              // Tarjetas en lila pastel mate: sin deslumbrar, pero con personalidad
              <div key={index} className="bg-[#e9daef] rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border border-[#861c71]/10 group">
                <div>
                  {/* Ícono magenta para que contraste bonito con el lila */}
                  <div className="text-[#861c71] bg-[#861c71]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-[#241f26] mb-4 pr-4">{service.title}</h3>
                  <p className="text-[#241f26]/80 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4">
                  <a href="#" className="text-[#241f26] font-medium text-sm flex items-center gap-1 hover:text-[#861c71] hover:gap-2 transition-all">
                    Reservar <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}