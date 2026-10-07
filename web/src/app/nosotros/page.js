import { contacts } from '@/lib/data';
import Link from 'next/link';

export const metadata = {
  title: 'Nosotros | G&H Gestión Tributaria',
  description: 'Conoce a nuestro equipo de profesionales en contabilidad, tributación y remuneraciones.',
};

export default function NosotrosPage() {
  return (
    <main className="container mx-auto px-4 pt-[120px] pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Nuestro Compromiso</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Somos un equipo de profesionales con amplia experiencia y sólidos conocimientos en contabilidad, tributación y remuneraciones. 
              En <strong>G&H Gestión Tributaria</strong>, ofrecemos un acompañamiento integral diseñado específicamente para empresas de distintos rubros.
            </p>
            <p>
              Nuestra misión combina la mejora continua de la gestión financiera, el estricto cumplimiento tributario y la correcta administración laboral. 
              Nuestro compromiso principal es apoyar los objetivos comerciales de nuestros clientes, protegiendo y fortaleciendo su salud financiera a largo plazo.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">Conoce a Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400">
                  {/* Placeholder para foto real */}
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-1">{contact.name}</h3>
                <p className="text-blue-600 font-medium text-center mb-4">{contact.role}</p>
                <div className="text-gray-600 text-sm mb-6 space-y-2 text-center">
                  <p>
                    [Aquí se debe incluir una breve biografía sobre su experiencia, especializaciones, y años de trayectoria en el rubro.]
                  </p>
                </div>
                <div className="flex justify-center border-t pt-4">
                  <Link 
                    href="/contacto" 
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">¿Buscas orientación para tu empresa?</h3>
          <p className="text-gray-700 mb-6">
            Conoce cómo nuestra experiencia puede aportar al orden financiero de tu negocio.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Solicitar asesoría gratuita
          </Link>
        </div>
      </div>
    </main>
  );
}
