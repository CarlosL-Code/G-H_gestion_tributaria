import Link from 'next/link';
import { contacts } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Columna 1: Marca y descripción */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold text-white mb-4 block">
              G&H <span className="font-light text-gray-400">Tributaria</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Acompañamiento integral en gestión financiera, tributaria y de remuneraciones para proteger y potenciar tu negocio.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4 text-lg">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition">Sobre Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition">Servicios</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition">Agendar Reunión</Link></li>
            </ul>
          </div>

          {/* Columna 3 y 4: Contactos */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-lg">Nuestros Profesionales</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              {contacts.map((contact, index) => (
                <div key={index} className="text-sm">
                  <p className="font-semibold text-white mb-1">{contact.name}</p>
                  <p className="text-gray-500 text-xs mb-3">{contact.role}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      <a href={`mailto:${contact.email}`} className="hover:text-white transition">{contact.email}</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <a href={`tel:${contact.phone.replace(/ /g, '')}`} className="hover:text-white transition">{contact.phone}</a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 G&H Gestión Tributaria. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacidad</Link>
            <Link href="#" className="hover:text-white transition">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
