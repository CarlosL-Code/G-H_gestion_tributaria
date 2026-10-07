import ContactForm from '@/components/ui/ContactForm';
import Button from '@/components/ui/Button';
import { contacts } from '@/lib/data';

export const metadata = {
  title: 'Contacto | G&H Gestión Tributaria',
  description: 'Solicita tu asesoría inicial gratuita. Contáctanos para revisar la situación de tu negocio.',
};

export default function ContactoPage() {
  return (
    <main className="container mx-auto px-4 pt-[120px] pb-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contacto</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
        Solicita una reunión inicial gratuita para revisar la situación de tu negocio. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Formulario */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
          <ContactForm />
        </div>

        {/* Datos de contacto directos */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nuestros Profesionales</h2>
          <div className="space-y-8">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold">{contact.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{contact.role}</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition">{contact.email}</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <a href={`tel:${contact.phone.replace(/ /g, '')}`} className="hover:text-blue-600 transition">{contact.phone}</a>
                  </li>
                </ul>
                <div className="mt-6 flex items-center">
                  <Button 
                    href={`https://wa.me/${contact.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    className="flex items-center justify-center gap-2 text-sm w-full md:w-auto"
                    trackingEvent={{ eventName: 'whatsapp_click', data: { contact: contact.name } }}
                  >
                    Contactar por WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
