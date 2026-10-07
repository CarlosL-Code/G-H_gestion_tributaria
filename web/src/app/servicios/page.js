import { services } from '@/lib/data';
import Link from 'next/link';

export const metadata = {
  title: 'Servicios | G&H Gestión Tributaria',
  description: 'Conoce nuestras áreas de servicio: Contabilidad, Asesoría Tributaria y Gestión de Remuneraciones.',
};

// Iconos SVG simples para cada área
const getCategoryIcon = (slug) => {
  switch (slug) {
    case 'contabilidad':
      return (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
      );
    case 'tributacion':
      return (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      );
    case 'remuneraciones':
      return (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      );
    default:
      return null;
  }
};

export default function ServiciosPage() {
  return (
    <main className="container mx-auto px-4 pt-[120px] pb-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
        <p className="text-lg text-gray-600">
          Ofrecemos un catálogo completo de soluciones para mantener a tu empresa al día con sus obligaciones. 
          Revisa nuestras tres áreas principales de especialización.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((area) => (
          <div key={area.slug} className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
            {/* Cabecera de la tarjeta */}
            <div className="bg-blue-50 p-8 text-center border-b border-blue-100">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                {getCategoryIcon(area.slug)}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{area.category}</h2>
            </div>
            
            {/* Lista de prestaciones */}
            <div className="p-8 flex-grow">
              <p className="text-sm text-gray-500 mb-6 font-semibold uppercase tracking-wider">
                Incluye {area.items.length} prestaciones:
              </p>
              <ul className="space-y-4">
                {area.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer de la tarjeta con CTA */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
              <Link 
                href="/contacto" 
                className="block w-full text-center bg-white border-2 border-blue-600 text-blue-600 font-semibold py-2.5 rounded-lg hover:bg-blue-50 transition"
              >
                Consultar por {area.category}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sección final de refuerzo */}
      <div className="mt-20 bg-gray-900 text-white rounded-2xl p-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">¿No estás seguro de qué servicio necesitas?</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Cada empresa es un mundo diferente. Solicita una revisión inicial de tu situación sin costo 
          y te recomendaremos el plan de acción adecuado para tu negocio.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition shadow-lg"
        >
          Agendar reunión gratuita
        </Link>
      </div>
    </main>
  );
}
