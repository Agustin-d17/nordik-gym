import { MapPin, Facebook, Instagram, MessageCircle } from "lucide-react"
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and description */}
              <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center mb-4">
                  <span className="self-center text-4xl font-semibold whitespace-nowrap text-white logo">NORDIK GYM</span>
                </a>
                <p className="text-sm">Tu camino hacia una vida más saludable y en forma comienza aquí.</p>
              </div>
    
              {/* Quick links */}
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Enlaces rápidos</h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Clases</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Horarios</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Membresías</a>
                  </li>
                </ul>
              </div>
    
              {/* Contact information */}
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contacto</h2>
                <ul className="text-gray-400">
                  <li className="mb-4">
                    <p>Calle Fitness 123, Ciudad Deportiva</p>
                  </li>
                  <li className="mb-4">
                    <p>Teléfono: +54 123 456 789</p>
                  </li>
                  <li className="mb-4">
                    <p>Email: info@nordikgym.com</p>
                  </li>
                </ul>
              </div>
    
              {/* Subscription form */}
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Suscríbete</h2>
                <p className="text-gray-400 mb-4">Suscribete a nuestro newsletter para enterarte de las ultimas noticias y ofertas!</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Tu email" 
                    className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <button type="submit" className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enviar
                  </button>
                </form>
              </div>
            </div>
    
            {/* Social media and copyright */}
            <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 sm:mb-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-4 h-4" />
                    <span className="sr-only">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    <span className="sr-only">WhatsApp</span>
                </a>
              </div>
              <p className="text-sm text-gray-400">© 2024 Nordik Gym. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      )
}

export default Footer