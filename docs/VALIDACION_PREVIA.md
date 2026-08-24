# Validación previa a publicación

Esta lista separa lo que ya puede comprobarse gratis y localmente de lo que depende del dominio, del hosting o de decisiones comerciales de Mallas Saru.

## Completado en el proyecto

- Compilación estática prerenderizada para que el contenido exista aunque JavaScript tarde en cargar.
- Diseño responsivo propio para escritorio, tablet y teléfono, sin Bootstrap.
- Navegación, formularios, modales, galería, promoción, preguntas frecuentes y accesibilidad operativos con teclado.
- Formulario sin almacenamiento de datos: prepara el mensaje y la persona decide si continúa en WhatsApp.
- Fotografías de las secciones en WebP liviano; originales conservados para la galería ampliada.
- Favicon, icono para teléfono e imagen social de 1200 × 630 px.
- Título, descripción, URL canónica, Open Graph, datos estructurados, `robots.txt` y `sitemap.xml` preparados para `mallassaru.cl`.
- Dependencias sin vulnerabilidades conocidas al ejecutar `npm audit --omit=dev`.
- Análisis estático y compilación de producción sin errores.

## Confirmar con la empresa antes de publicar

- Que la garantía comercial sea efectivamente de 12 meses y que su cobertura y exclusiones coincidan con la operación real.
- Que las afirmaciones de materiales certificados, resistencia UV y profesionales certificados tengan documentos vigentes disponibles.
- Que Webpay sea un medio de pago habilitado y que los demás medios aceptados se comuniquen al cotizar.
- Que el beneficio del 10 % se mantenga hasta el 31 de octubre de 2026, sea para nuevos clientes, no acumulable y limitado a una primera instalación por cliente.
- Que los convenios de La Florida y San Miguel, las zonas de cobertura, el teléfono y el correo sigan vigentes.
- Que las reseñas seleccionadas y las cifras visibles coincidan con sus fuentes públicas al momento del lanzamiento.

## Hacer cuando se autorice el dominio

1. Respaldar el sitio actual y registrar sus URL antes de reemplazarlo.
2. Publicar el contenido de `dist/` mediante HTTPS y probar el dominio definitivo.
3. Verificar redirecciones, URL canónica, `robots.txt`, `sitemap.xml`, imagen social y datos estructurados desde internet.
4. Configurar cabeceras de seguridad en el hosting y comprobar que no bloqueen los recursos del sitio.
5. Conectar gratuitamente Google Search Console, Microsoft Clarity y UptimeRobot.
6. Actualizar la dirección del sitio y las fotografías en Google Business Profile.
7. Probar llamadas, correo, WhatsApp, formulario y enlaces externos con iPhone, Android, tablet y computador reales.

No se requiere pagar una API para mantener los enlaces a Google y Habitissimo. La extracción automática de opiniones se deja fuera hasta contar con una integración oficial y condiciones claras de uso.
