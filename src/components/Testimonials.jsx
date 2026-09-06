import { Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#d4bcf2]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm tracking-[0.2em] font-semibold mb-4 uppercase">Testimonios</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">
            Lo que dicen<br />nuestras clientas
          </h2>
        </div>

        <div className="space-y-6">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-[#dfccf5] p-8 rounded-3xl">
              <div className="flex gap-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>
              
              <p className="text-brand-dark/80 text-lg mb-8 font-light italic">
                {testimonial.text}
              </p>
              
              <div className="w-full h-px bg-brand-dark/10 mb-6"></div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f0e6fc] text-brand-gold flex items-center justify-center font-serif text-lg">
                  {testimonial.initial}
                </div>
                <span className="font-semibold text-brand-dark">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}