'use client';
import Link from 'next/link';

export default function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  trackingEvent = null,
  href = null,
  target = null,
  rel = null
}) {
  const handleClick = (e) => {
    // Si pasamos un evento para Analytics/GTM, lo registramos aquí
    if (trackingEvent && typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: trackingEvent.eventName,
        ...trackingEvent.data,
      });
      console.log('Evento disparado (Analytics):', trackingEvent.eventName);
    }

    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles = 'px-6 py-2 rounded-lg font-semibold transition duration-200 ease-in-out inline-block text-center';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    // Si es un enlace externo
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return (
        <a 
          href={href} 
          target={target} 
          rel={rel} 
          onClick={handleClick} 
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    // Si es un enlace interno de Next.js
    return (
      <Link href={href} onClick={handleClick} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
