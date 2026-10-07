'use client';

import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    empresa: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', correo: '', telefono: '', empresa: '', descripcion: '' });
        
        // Disparar evento de conversión exitosa para Analytics/Tag Manager
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submission_success',
            formId: 'contacto_principal'
          });
          console.log('Conversión registrada (Analytics): form_submission_success');
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">¡Mensaje enviado con éxito!</h3>
        <p className="text-green-600">Hemos recibido tu solicitud. Nos pondremos en contacto contigo a la brevedad para agendar tu asesoría inicial gratuita.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="mt-4">
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico *</label>
          <input
            type="email"
            id="correo"
            name="correo"
            required
            value={formData.correo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">Descripción del Negocio / Consulta *</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="4"
          required
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {status === 'error' && (
        <div className="text-red-600 text-sm">Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.</div>
      )}

      <div>
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          trackingEvent={{ eventName: 'form_submission_attempt', data: { formId: 'contacto_principal' } }}
        >
          {status === 'loading' ? 'Enviando...' : 'Solicitar Asesoría Gratuita'}
        </Button>
      </div>
    </form>
  );
}
