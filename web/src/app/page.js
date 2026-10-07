import Link from 'next/link';
import { companyInfo, services } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen -mt-24 md:-mt-0"> {/* Neutralizar cualquier margen si existiera */}
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-[120px] pb-24 px-4 overflow-hidden bg-white">
        {/* Elementos decorativos de fondo que ocupan todo el tope */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-3xl"></div>
          {/* Fondo sutil tipo malla o gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center flex-grow flex flex-col justify-center mt-8">
          <div className="inline-block bg-white border border-blue-100 text-blue-800 px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-sm mx-auto">
            {companyInfo.experience} de respaldo
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
            Tu contabilidad al día, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              con apoyo para tus decisiones
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            En G&H te acompañamos en la gestión contable, tributaria y de remuneraciones. Revisamos las necesidades de tu negocio y definimos el apoyo exacto que requieres.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contacto" 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 text-lg flex items-center justify-center gap-2"
            >
              Solicitar asesoría inicial gratuita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link 
              href="/servicios" 
              className="bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition shadow-sm text-lg flex items-center justify-center"
            >
              Conocer los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Quiénes Somos / Confianza (Texto centrado con 4 imágenes) */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative flex items-center justify-center min-h-[500px]">
            
            {/* Texto Central */}
            <div className="text-center max-w-2xl relative z-10 bg-gray-50/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(249,250,251,1)]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expertas en la tranquilidad de tu negocio</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Somos un equipo de profesionales liderado por Marcia Gutiérrez y Julia Hugeat. 
                Nuestra misión es apoyar tus objetivos comerciales entregándote un servicio contable impecable, 
                para que tú puedas enfocarte al 100% en hacer crecer tu empresa.
              </p>
              <Link href="/nosotros" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition group">
                Conoce más sobre nuestra trayectoria
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>

            {/* Imágenes Placeholder en las 4 esquinas */}
            {/* Esquina Superior Izquierda */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 hidden sm:block border-4 border-white">
              <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                 <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 <span className="text-xs font-semibold">Imagen Cliente / Reunión 1</span>
              </div>
            </div>
            
            {/* Esquina Superior Derecha */}
            <div className="absolute top-8 right-0 w-28 h-28 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500 hidden sm:block border-4 border-white">
              <div className="w-full h-full bg-blue-100 flex flex-col items-center justify-center text-blue-400 p-4 text-center">
                 <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 <span className="text-xs font-semibold">Imagen Trabajo 2</span>
              </div>
            </div>
            
            {/* Esquina Inferior Izquierda */}
            <div className="absolute bottom-4 left-8 w-24 h-24 md:w-44 md:h-44 rounded-3xl overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-500 hidden sm:block border-4 border-white">
              <div className="w-full h-full bg-blue-50 flex flex-col items-center justify-center text-blue-300 p-4 text-center">
                 <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 <span className="text-xs font-semibold">Imagen Equipo 3</span>
              </div>
            </div>
            
            {/* Esquina Inferior Derecha */}
            <div className="absolute bottom-0 right-12 w-32 h-32 md:w-52 md:h-52 rounded-3xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 hidden sm:block border-4 border-white">
              <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                 <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 <span className="text-xs font-semibold">Imagen Oficina / Empresa 4</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid Rápido de Servicios en Inicio */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿En qué podemos ayudarte?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Soluciones integrales para mantener el cumplimiento y potenciar el crecimiento de tu empresa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((area, index) => (
              <Link href="/servicios" key={index} className="group block">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">{area.category}</h3>
                  <ul className="space-y-3 mb-6">
                    {area.items.slice(0, 4).map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start text-sm">
                        <svg className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver las {area.items.length} prestaciones
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
