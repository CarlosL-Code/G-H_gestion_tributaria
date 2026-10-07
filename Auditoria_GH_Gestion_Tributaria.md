# Auditoría y contenido para la nueva web de G&H Gestión Tributaria

**Sitio:** https://www.gyhgestiontributaria.cl/  
**Fecha de revisión:** 7 de octubre de 2026  
**Objetivo:** recuperar la información pública y convertirla en una base de implementación para una nueva web orientada a consultas comerciales.

## 1. Resultado principal y alcance

El negocio cuenta con una oferta definida: contabilidad, asesoría tributaria y gestión de remuneraciones. Su principal incentivo comercial es una primera reunión o asesoría sin costo. La nueva web debería organizar estos tres servicios, presentar a sus profesionales y facilitar que un visitante solicite esa reunión.

Se recuperó el HTML público actual de Inicio y el contenido textual de Servicios, Nosotros, Contacto y Blog. Se revisaron enlaces, encabezados, metadatos y referencias a imágenes. El buscador devolvió una versión antigua de Inicio; para esa página se priorizó el HTML obtenido directamente el día de la revisión.

**Límites:** esta es una auditoría de contenido, estructura, conversión y elementos técnicos públicos. No incluye una inspección visual completa en escritorio/móvil, mediciones Lighthouse/Core Web Vitals, envío de formularios, acceso a Wix, analítica privada, pruebas de seguridad ni respaldo integral del servidor. Las imágenes se inventariaron por URL; no se descargaron ni se verificó su licencia. No se pudo recuperar robots.txt ni sitemap.xml por tiempos de espera; esto no demuestra que falten en el sitio.

Los apartados distinguen información publicada, observaciones y propuestas. Los datos de la empresa necesitan validación de sus responsables antes del lanzamiento.

## 2. Inventario de páginas y navegación

| URL actual | Contenido recuperado | Tratamiento recomendado |
|---|---|---|
| `/` | Presentación, experiencia, beneficios, reunión gratuita, botones y enlaces sociales | Nueva portada con propuesta clara y contacto directo |
| `/nosotros` | Perfil del equipo, trayectoria, misión y compromiso | Conservar URL y agregar perfiles individuales |
| `/servicios` | 27 prestaciones distribuidas en tres áreas | Conservar URL y organizar por necesidad del cliente |
| `/contacto` | Formulario de asesoría gratuita y dos contactos profesionales | Conservar URL y añadir accesos de contacto visibles |
| `/blog` | Menú; sin artículos recuperados en la extracción | Confirmar en Wix si hay entradas; publicar solo con contenido |

El menú principal incluye Inicio, Nosotros, Servicios, Contacto y Blog. Inicio también contiene una navegación por anclas denominada Inicio, Contacto, Equipo y Clientes. Estas anclas apuntan a la propia portada con identificadores internos de Wix; no son evidencia de páginas independientes ni de enlaces rotos. La duplicidad de nombres sí complica la arquitectura del contenido.

No se recuperaron nombres, testimonios o casos de clientes. La palabra Clientes aparece como etiqueta de navegación, pero no basta para construir una sección con referencias reales. No se encontraron otras páginas enlazadas en el material revisado; la exhaustividad del mapa queda pendiente del sitemap o del acceso al editor.

## 3. Información comercial recuperada

### Identidad y propuesta

- Marca publicada: G&H Gestión Tributaria; el título de Inicio usa la variante “G & H”.
- Áreas: tributación, contabilidad y asesoría laboral/remuneraciones.
- Público descrito: empresas de distintos rubros. No se especifican segmentos prioritarios, comunas ni cobertura territorial.
- Beneficios comunicados: orden financiero, acompañamiento personalizado, cumplimiento de obligaciones y apoyo al desarrollo del negocio.
- Trayectoria: Inicio indica más de 20 años; Nosotros indica más de 25; la descripción SEO de Inicio menciona 25. Las cifras no son incompatibles matemáticamente, pero falta una formulación uniforme y aclarar si corresponden a la empresa o a la experiencia de sus profesionales.
- Oferta de entrada: reunión/asesoría inicial gratuita para revisar la situación del negocio y orientar al cliente.
- No se recuperaron precios, planes, duración de esa reunión, condiciones de gratuidad ni plazos de respuesta.

### Nosotros

El equipo se presenta como profesionales con experiencia en contabilidad, tributación y remuneraciones. Describe un acompañamiento integral para empresas y conocimientos en materias fiscales y laborales. Su misión combina mejora de la gestión financiera, cumplimiento tributario y administración de remuneraciones. Su compromiso es apoyar los objetivos comerciales y la salud financiera del cliente.

La página recuperada no desarrolla biografías individuales, especializaciones, acreditaciones, años de cada profesional ni fotos identificadas por nombre. Los nombres y cargos sí están en Contacto.

### Catálogo completo de prestaciones recuperadas

La siguiente lista reorganiza y normaliza las denominaciones publicadas; no agrega prestaciones ni constituye asesoría tributaria o laboral.

| Área | Prestaciones publicadas, normalizadas |
|---|---|
| Contabilidad — 7 | Revisión de compras/ventas; preparación de IVA mediante F29; conciliación de bancos; contabilidad mensual; registro en software contable; elaboración de balance general; informes financieros. |
| Tributación — 11 | Constitución de sociedades; formalización en SII; inicio de actividades; orientación sobre régimen tributario; habilitación de facturación electrónica; cálculo de capital propio tributario/simplificado; registros empresariales; declaraciones juradas anuales; declaración de renta para empresa/socios; resolución de observaciones del SII; acompañamiento tributario permanente. |
| Remuneraciones — 9 | Contratos laborales; cálculo de liquidaciones salariales; procesamiento en Previred; libro de remuneraciones; finiquitos; certificados anuales de sueldos/honorarios; declaraciones juradas 1887/1879; acompañamiento laboral permanente; envío mensual de información laboral a la Dirección del Trabajo. |

El catálogo contiene **27 prestaciones: 7 + 11 + 9**. Se deben conservar las 27 en la migración, aunque después se agrupen visualmente. Los alcances concretos, obligaciones aplicables y denominaciones técnicas deben validarse con las profesionales.

### Contactos

| Profesional | Cargo publicado | Correo | Teléfono normalizado |
|---|---|---|---|
| Marcia Gutiérrez España | Contadora Tributaria | marciag.asesorias@gmail.com | +56 9 7863 3011 |
| Julia Hugeat Ponce | Contador Auditor | jhugeat@gmail.com | +56 9 9078 2893 |

Los nombres y cargos se conservaron como aparecen publicados. Confirmar ortografía, cargo preferido y vigencia de los datos. No se verificó que los números tengan WhatsApp activo.

Enlaces de implementación:

- Marcia: `mailto:marciag.asesorias@gmail.com` y `tel:+56978633011`.
- Julia: `mailto:jhugeat@gmail.com` y `tel:+56990782893`.
- WhatsApp propuesto, sujeto a confirmar canal y responsable: `https://wa.me/56978633011` o `https://wa.me/56990782893`.

No se recuperó una dirección física, horario, mapa, correo corporativo ni enlace social propio verificado. Esto es un límite de la información extraída; no demuestra que esos datos no existan fuera de las páginas revisadas.

### Formulario actual

La página de Contacto solicita nombre, correo, teléfono, empresa y descripción del negocio. Tiene una acción de envío y un texto de agradecimiento. La extracción no permite comprobar qué campos son obligatorios, dónde llegan las solicitudes, si hay protección contra spam o si el mensaje de confirmación depende de un envío exitoso.

También contiene un botón introductorio que vuelve a la URL de Contacto. No se comprobó su comportamiento con JavaScript; conviene reemplazarlo por una acción que enfoque o desplace al formulario.

## 4. Hallazgos de auditoría y acciones

| Prioridad | Hallazgo comprobado o limitado | Implicación | Acción para la nueva web |
|---|---|---|---|
| Alta | Facebook enlaza a `facebook.com/WixEspanol` | Lleva a una marca ajena | Usar perfil real confirmado o retirar enlace |
| Alta | Enlace etiquetado Instagram lleva a `twitter.com/MundoWix` | Canal y destino no coinciden | Sustituir por Instagram real o retirar |
| Alta | “Saber más”, junto a la oferta gratuita, conduce a Nosotros | Paso adicional antes de consultar | CTA directo a formulario o canal confirmado |
| Alta | En el HTML de Inicio no se encontró `wa.me`, `api.whatsapp` ni formulario | La consulta depende de ir a otra página | Reunión gratuita visible con contacto directo |
| Alta | Se anuncian garantías generales de cumplimiento | Mensaje muy amplio y poco delimitado | Describir proceso, responsabilidades y alcance con aprobación de la empresa |
| Media | Dos esquemas de navegación con etiquetas distintas | Estructura menos clara | Un solo menú coherente |
| Media | Blog recuperado sin artículos | Puede ofrecer una experiencia sin contenido | Revisar publicaciones; ocultar menú si está vacío |
| Media | H1 de Inicio: “gestióntributaria”; el servicio principal está en H3 | Jerarquía semántica poco descriptiva | H1 claro sobre el servicio y H2/H3 por sección |
| Media | Grandes bloques comerciales usan H5; servicios y contactos aparecen en H6 | Los niveles no reflejan bien la estructura | Usar párrafos para texto y encabezados jerárquicos |
| Media | Trayectoria descrita con 20/25/más de 25 años | Mensaje de experiencia sin criterio uniforme | Confirmar cifra, origen y redacción única |
| Media | Textos con tildes omitidas y errata “asisitirte” en Inicio | Reduce cuidado editorial | Revisar acentos, ortografía y mayúsculas |
| Media | Logo con alt de nombre de archivo; varias imágenes sin descripción | El logo carece de un nombre accesible limpio | Alt “G&H Gestión Tributaria”; alt descriptivo para imágenes informativas |
| Media | Datos de profesionales concentrados en Contacto | La confianza no acompaña la exploración | Perfiles en Nosotros y resumen en portada |
| Pendiente | Sin medición móvil, contraste ni rendimiento | No permite calificar el diseño o la velocidad | QA visual y mediciones sobre la nueva implementación |

**Matiz de accesibilidad:** las imágenes con `alt=""` pueden ser correctas si son decorativas. Solo deben recibir descripción cuando aporten información. No se concluye un fallo únicamente por tener alt vacío.

**Lo que funciona y debe conservarse:** oferta inicial gratuita, catálogo específico, nombres reales, dos vías de contacto por profesional, formulario con contexto del negocio, descripciones SEO y rutas sencillas.

## 5. Revisión técnica pública

| Elemento | Evidencia | Lectura práctica |
|---|---|---|
| Plataforma | Meta generator de Wix y recursos de Wix | Exportar contenido y sustituir dependencias al migrar |
| Inicio HTTPS | Respuesta HTTP 200 el día de la revisión | La portada respondió; no implica disponibilidad permanente |
| Idioma | HTML `lang="es"`; cabecera HTTP `content-language: en-US` | Alinear señales de idioma en el nuevo sitio |
| Título | Marca y término genérico de asesoría | Mejorar descripción del servicio; ubicación solo si se confirma |
| Descripción | Servicios y experiencia presentes | Conservar intención, unificar trayectoria y revisar longitud |
| Canonical | Apunta a la portada con www | Definir dominio canónico y redirecciones consistentes |
| Open Graph | Título, descripción, URL e imagen definidos | Preparar una imagen social clara para la nueva marca |
| Datos estructurados | Se detectó JSON-LD de tipo WebSite en Inicio | Evaluar Organization/servicio con datos reales validados |
| Viewport | Meta de adaptación presente | No confirma que el diseño móvil funcione bien |
| HTML Inicio | Aproximadamente 461 KB sin comprimir | Es un dato de tamaño, no una medición de velocidad |
| Robots/sitemap | Recuperación directa agotó el tiempo de espera | Verificar en otra conexión o desde la plataforma |
| Analítica | No auditada completamente | Revisar configuración con acceso y definir conversiones |

No se asigna una nota de SEO, velocidad o seguridad sin las pruebas correspondientes. La ausencia de un dato en la extracción no equivale a su ausencia en todo el sitio.

## 6. Inventario de recursos gráficos

Referencias originales localizadas. Su descarga, calidad, contenido visual y permiso de uso quedan pendientes. No se deben copiar iconos sociales de la plantilla como si fueran activos propios.

| Recurso | URL de referencia |
|---|---|
| Logo publicado | https://static.wixstatic.com/media/efb7d9_8138f891dce146c88596872a7e273f91~mv2.jpg |
| Fondo de oficina en Inicio | https://static.wixstatic.com/media/dc8702379d2144d6bd16b91480d1dbdc.jpg |
| Imagen en galería de Inicio, repetida dos veces | https://static.wixstatic.com/media/efb7d9_c7dfc0b822574133b4767fdd73e9678a~mv2.jpeg |
| Otra imagen de galería de Inicio | https://static.wixstatic.com/media/05e3dc_e9b3cf2b4a524cc79656820d547a68fc.png |
| Imagen social de Inicio | https://static.wixstatic.com/media/efb7d9_09c25b91d06945d8a9958216b51125cc~mv2.jpg |
| Imagen “Consulta fiscal”, Servicios | https://static.wixstatic.com/media/11062b_c624af7aa6ee41fb8a9f19bb0144211f~mv2.jpg |
| Icono contabilidad | https://static.wixstatic.com/media/84770f_763250740ebf4b78a38a42104750e91b.png |
| Icono tributación | https://static.wixstatic.com/media/84770f_6656122a8d0a431cb443636be026671e.png |
| Icono remuneraciones | https://static.wixstatic.com/media/84770f_db66ff03ccbc4f46b35b1e498fcdba04.png |
| Imagen “Tableta”, Nosotros | https://static.wixstatic.com/media/11062b_1aa3e7b8d4064746a15ed64180f1cc1c~mv2.jpg |

Servicios también contiene otras tres referencias a imágenes sin descripción en la extracción. No se han identificado sus archivos originales, por lo que el inventario gráfico no es un respaldo completo.

Solicitar el logo original en SVG o PNG de buena resolución y fotografías reales identificadas. Los recursos originales sin `/v1/` se dedujeron de las rutas de transformación de Wix y no se verificó su descarga.

## 7. Arquitectura propuesta

La propuesta mantiene las rutas existentes para simplificar la migración. Es una recomendación, no contenido ya publicado.

### Inicio

1. Encabezado con logo, menú simple y CTA para asesoría gratuita.
2. Presentación del servicio y destinatario, con botón principal de consulta y secundario de servicios.
3. Tres áreas de servicio con ejemplos concretos y enlaces a sus detalles.
4. Equipo y experiencia validada; sin cifras o acreditaciones inventadas.
5. Proceso de atención, que la empresa debe aprobar: solicitud, revisión inicial, propuesta y acompañamiento.
6. Respaldo real: testimonios o casos solo cuando se entreguen y se autorice su publicación.
7. Preguntas frecuentes aprobadas por las profesionales.
8. Formulario breve y pie con contactos, horarios y cobertura confirmados.

### Servicios

Tres secciones claras: Contabilidad, Asesoría tributaria y Remuneraciones. Cada una debe explicar para quién es, qué incluye, qué información inicial requiere y cómo solicitar atención. Conservar las 27 prestaciones; agruparlas sin ocultar su alcance.

Si el contenido y la estrategia lo justifican, agregar páginas específicas como `/servicios/contabilidad`, `/servicios/asesoria-tributaria` y `/servicios/remuneraciones`, manteniendo `/servicios` como índice.

### Nosotros

Presentación del equipo, perfiles de Marcia y Julia, credenciales confirmadas, experiencia y forma de trabajo. Diferenciar trayectoria personal de antigüedad de la empresa.

### Contacto

Formulario, profesionales, teléfono y correo accionables, WhatsApp confirmado, horarios y ubicación/cobertura. Explicar qué ocurre tras enviar y establecer un plazo real de respuesta aprobado.

### Blog

Mantener solo si hay contenido real y responsable de actualización. Antes de retirarlo, revisar si tiene artículos no recuperados, tráfico o enlaces externos. Evitar redirigir contenidos distintos a Inicio sin una equivalencia útil.

## 8. Texto de partida para el rediseño

**Borrador original para aprobación; no es una transcripción del sitio.**

**Título principal:** Tu contabilidad al día, con apoyo para las decisiones de tu empresa.

**Descripción:** En G&H te acompañamos en la gestión contable, tributaria y de remuneraciones. Revisamos las necesidades de tu negocio y definimos contigo el apoyo que requiere.

**CTA principal:** Solicitar asesoría inicial gratuita.

**CTA secundario:** Conocer los servicios.

**Bloque de reunión inicial:** Cuéntanos qué necesitas resolver. En una primera reunión revisaremos tu situación y te orientaremos sobre los siguientes pasos.

Confirmar alcance y condiciones antes de publicar este bloque. Evitar anunciar respuesta inmediata, atención nacional, resultados garantizados, precios o experiencia exacta sin respaldo.

## 9. Base de implementación y migración

- Modelar la información con entidades para empresa, profesionales, áreas de servicio, prestaciones, canales y preguntas frecuentes.
- Usar una sola fuente de datos para que nombres, teléfonos, cargos y experiencia no difieran entre páginas.
- Mantener las rutas actuales que tengan contenido equivalente; registrar y probar redirecciones para las que cambien.
- Confirmar acceso al dominio/DNS y a Wix antes del cambio. Mantener operativo el sitio actual hasta probar la nueva versión.
- Implementar formulario con validación en cliente y servidor, protección contra spam, destinatario confirmado y estados de éxito/error reales.
- No pedir contraseñas del SII, información bancaria o documentación sensible en el formulario público inicial.
- Preparar textos sobre tratamiento de datos y autorizaciones de contacto con el responsable del negocio; la revisión legal queda fuera de esta auditoría.
- Definir eventos de medición: envío exitoso, clic en WhatsApp, correo y teléfono. Un clic no equivale a un lead confirmado.
- Cargar imágenes optimizadas y con permisos; preservar proporciones del logo y evitar depender innecesariamente de enlaces de Wix.
- Mantener títulos, descripciones, canonical, sitemap y metadatos sociales coherentes con el nuevo dominio y páginas.

No se prescribe un framework: la arquitectura puede implementarse en tu stack habitual. Un panel administrativo solo se justifica si el cliente necesita actualizar contenido por su cuenta.

## 10. Información por solicitar al cliente

| Dato | Por qué se necesita |
|---|---|
| Experiencia exacta y origen de la cifra | Unificar portada, perfiles y SEO |
| Nombre comercial y razón social, si corresponde mostrarla | Identidad y pie del sitio |
| Nombres/cargos y biografías aprobadas | Presentar al equipo correctamente |
| Logo original, fotos y permisos | Calidad visual y uso autorizado |
| WhatsApp principal y persona responsable | Evitar dividir o perder consultas |
| Vigencia de correos/teléfonos | Contactos funcionales |
| Dirección, cobertura, modalidad y horarios | Información local y expectativas |
| Alcance y duración de la reunión gratuita | Oferta comercial precisa |
| Alcance de cada prestación y clientes prioritarios | Contenido útil y cotización |
| Destinatario del formulario y plazo de respuesta | Operación del canal comercial |
| Clientes/testimonios autorizados | Evidencia de confianza |
| Contenido del blog y accesos a Wix/dominio/analítica | Migración y medición sin pérdidas |

## 11. Criterios de aceptación antes de publicar

1. Las 27 prestaciones están representadas y aprobadas.
2. Nombres, cargos, experiencia, contactos y oferta gratuita están confirmados.
3. Los botones tienen destinos correctos y no conducen a cuentas de Wix.
4. El formulario funciona de extremo a extremo con el destinatario previsto y muestra errores cuando falla.
5. La web es usable con teclado y en móvil; encabezados, etiquetas de campos y contraste se revisaron.
6. Las rutas anteriores, redirecciones, canonical, sitemap y vista social se comprobaron.
7. Las imágenes están autorizadas, optimizadas y con alternativas textuales adecuadas.
8. La medición distingue clics de consultas efectivamente recibidas.
9. El cambio de DNS se realiza después de la validación, con posibilidad de revertirlo.

## 12. Fuentes y trazabilidad

- Inicio: https://www.gyhgestiontributaria.cl/ — HTML directo recuperado el 07-10-2026; autoritativo para esta revisión de portada.
- Servicios: https://www.gyhgestiontributaria.cl/servicios — extracción textual pública recuperada durante la revisión.
- Nosotros: https://www.gyhgestiontributaria.cl/nosotros — extracción textual pública recuperada durante la revisión.
- Contacto: https://www.gyhgestiontributaria.cl/contacto — extracción textual pública recuperada durante la revisión.
- Blog: https://www.gyhgestiontributaria.cl/blog — extracción textual sin artículos; comprobar en editor antes de eliminar contenido.

El inventario recupera información pública y la normaliza para migración. No es una copia integral ni garantiza haber descubierto contenido no enlazado, privado o cargado dinámicamente.
