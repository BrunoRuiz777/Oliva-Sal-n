import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MessageCircle, Facebook, Instagram } from 'lucide-react'
import { salonConfig } from './data/config'

function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* CONTENEDOR DE BOTONES FLOTANTES */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        
        {/* Botón Flotante de WhatsApp (Ahora es el primero de la lista) */}
        <a 
          href={salonConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce hover:animate-none mb-1"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={32} />
        </a>

        {/* Botón Flotante de Facebook */}
        <a 
          href={salonConfig.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#1877F2] text-white p-3 rounded-full shadow-lg hover:bg-[#166fe5] hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Síguenos en Facebook"
        >
          <Facebook size={24} />
        </a>

        {/* Botón Flotante de Instagram */}
        <a 
          href={salonConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Síguenos en Instagram"
        >
          <Instagram size={24} />
        </a>
        
      </div>
    </div>
  )
}

export default App