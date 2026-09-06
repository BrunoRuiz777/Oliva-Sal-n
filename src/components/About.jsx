import { CheckCircle2, MessageCircle } from 'lucide-react';
import { salonConfig } from '../data/config';

export default function About() {
  const benefits = [
    "Diagnóstico capilar gratuito",
    "Productos premium sin daño",
    "Resultados que duran meses",
    "Atención personalizada y exclusiva"
  ];

  return (
    <section id="nosotros" className="py-24 px-6 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Imagen con Badge */}
        <div className="w-full lg:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80" 
            alt="Interior del salón" 
            className="rounded-2xl w-full h-[600px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-dark p-6 rounded-xl text-center shadow-xl">
            <div className="text-4xl font-serif mb-1">{salonConfig.yearsOfExperience} años</div>
            <div className="text-xs font-bold tracking-widest uppercase">De Experiencia</div>
          </div>
        </div>

        {/* Contenido de Texto */}
        <div className="w-full lg:w-1/2">
          <p className="text-brand-gold text-sm tracking-[0.2em] font-semibold mb-4 uppercase">Quiénes somos</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Pasión por el<br />cabello perfecto
          </h2>
          
          <div className="space-y-6 text-gray-300 font-light text-lg mb-10">
            <p>
              Somos un equipo de estilistas especializadas en tratamientos alisantes y capilares, 
              con más de {salonConfig.yearsOfExperience} años transformando el cabello de nuestras clientas.
            </p>
            <p>
              Trabajamos exclusivamente con productos de alta calidad, sin formol y certificados, 
              para garantizar resultados duraderos sin dañar tu cabello. Cada tratamiento es 
              personalizado según el tipo y necesidad de tu cabello.
            </p>
          </div>

          <ul className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="text-brand-gold/70" size={20} />
                {benefit}
              </li>
            ))}
          </ul>

          <a 
            href={salonConfig.whatsappUrl}
            className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-medium hover:bg-yellow-600 transition-colors"
          >
            <MessageCircle size={20} />
            Consultanos por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}