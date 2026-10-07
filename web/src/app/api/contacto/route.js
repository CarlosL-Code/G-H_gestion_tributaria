import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Aquí implementaremos la validación de los datos (ej: con Zod)
    // y el envío del correo electrónico (ej: con Resend, SendGrid o Nodemailer)
    
    console.log('Datos recibidos:', body);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
