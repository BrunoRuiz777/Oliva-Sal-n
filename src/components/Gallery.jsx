import { Instagram } from 'lucide-react';
import { salonConfig } from '../data/config';

import imgAlaciado from '../assets/Alaciado23.jpeg';
import imgAntesYDespues from '../assets/antesydespues.jpg';
import imgColagen1 from '../assets/juanaC.jpeg';
import imgColagenAv from '../assets/colagen-av.jpg';

export default function Gallery() {
  const galleryImages = [
    { src: imgColagenAv, alt: "Beneficios Colágen AV" },
    { src: imgColagen1, alt: "Promoción Colágeno" },
    { src: imgAlaciado, alt: "Alaciado Permanente" },
    { src: imgAntesYDespues, alt: "Antes y Después Alaciado" }
  ];

  return (
    <section id="galeria" className="py-24 px-6 bg-[#f7f3f9]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#861c71] text-sm tracking-[0.2em] font-semibold mb-4 uppercase">Galería</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#241f26]">Nuestros trabajos</h2>
        </div>

        {/* Cambiamos 'grid' por 'columns' (Estilo Pinterest / Masonry) */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6 mb-16">
          {galleryImages.map((image, index) => (
            // break-inside-avoid evita que una imagen se parta a la mitad entre columnas
            <div key={index} className="break-inside-avoid overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-shadow bg-white p-2 group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={salonConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#241f26]/20 text-[#241f26] px-8 py-3 rounded-full font-medium hover:bg-[#241f26] hover:text-white transition-all text-sm"
          >
            <Instagram size={18} />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}