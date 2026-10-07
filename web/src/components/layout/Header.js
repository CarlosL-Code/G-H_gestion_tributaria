'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <header 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-0 w-full max-w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 py-3 rounded-none px-6 md:px-12' 
            : 'top-6 w-[95%] max-w-5xl bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 py-4 rounded-2xl px-6 md:px-8'
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 mx-auto ${isScrolled ? 'max-w-7xl' : 'w-full'}`}>
          
          {/* Logo */}
          <Link 
            href="/" 
            className={`font-extrabold text-blue-900 transition-all duration-500 ${
              isScrolled ? 'text-xl' : 'text-xl md:text-2xl tracking-tight'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            G&H <span className="font-light text-gray-600">Tributaria</span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`relative group font-medium text-sm transition-colors duration-300 ${
                    isActive ? 'text-blue-700' : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button en el Header */}
          <div className="hidden md:block">
            <Link 
              href="/contacto"
              className={`font-semibold rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white px-5 py-2 text-sm hover:bg-blue-700' 
                  : 'bg-white text-blue-900 border border-blue-100 shadow-sm px-6 py-2.5 hover:shadow-md hover:border-blue-200 text-sm'
              }`}
            >
              Agendar Reunión
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button 
            className="md:hidden text-gray-700 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </header>

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col pt-32 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-xl font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`border-b border-gray-100 pb-4 ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/contacto"
              className="mt-4 bg-blue-600 text-white text-center py-4 rounded-xl font-bold shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Reunión
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
