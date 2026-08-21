# Seguridad, privacidad y calidad del proyecto

Este documento describe la base técnica de la versión React de Mallas Saru. No es una certificación ni reemplaza una auditoría de seguridad, accesibilidad o cumplimiento jurídico.

## Alcance actual

La aplicación es un sitio informativo estático. No incluye autenticación, panel administrativo, API propia, base de datos, cookies de medición ni rastreadores publicitarios. Los datos escritos en la cotización permanecen en el navegador hasta que la persona decide continuar a WhatsApp; el sitio no los almacena ni los envía automáticamente.

Los enlaces a WhatsApp, mapas, redes sociales y fuentes técnicas son destinos externos activados por el visitante y están identificados como tales.

## Base de diseño

- Ley N.º 19.628: finalidad, proporcionalidad y tratamiento responsable de datos personales en Chile.
- Ley N.º 21.719: preparación para el nuevo régimen que entra en vigor el 1 de diciembre de 2026. Antes de esa fecha se debe revisar cualquier cambio en formularios, analítica, proveedores o conservación de datos.
- Ley N.º 21.663: se usa como referencia de seguridad y privacidad desde el diseño. No se presume que Mallas Saru sea un servicio esencial u operador de importancia vital.
- OWASP Top 10:2025 y ASVS 5.0.0: referencia para diseño, configuración, validación y cadena de suministro.
- NIST SP 800-218 SSDF: referencia para el ciclo de desarrollo seguro.
- WCAG 2.2: objetivo de accesibilidad; una declaración de conformidad requiere evaluación completa, incluida revisión humana.
- ISO/IEC 25010:2023: modelo de referencia para calidad, mantenibilidad, seguridad y usabilidad. El proyecto no declara certificación ISO.

## Controles aplicados

- React y TypeScript con reglas de código sin variables o parámetros sin uso.
- React escapa el contenido renderizado y el proyecto no usa `dangerouslySetInnerHTML`.
- Entradas limitadas por longitud y formulario sin transmisión silenciosa a terceros.
- Recursos e iconos incluidos en la compilación, sin dependencias de CDN en tiempo de ejecución.
- Dependencias reproducibles mediante `package-lock.json`.
- Verificación con `npm ci`, `npm audit --audit-level=high`, `npm run lint` y `npm run build`.
- Actualizaciones automatizables mediante Dependabot para npm y GitHub Actions.
- Navegación por teclado, foco visible, enlace para saltar al contenido, reducción de movimiento y control de foco en la galería.

## Controles obligatorios antes de publicar

1. Elegir el hosting y configurar HTTPS y cabeceras HTTP: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy y Permissions-Policy. HSTS debe habilitarse solo después de comprobar HTTPS en el dominio y sus subdominios.
2. Probar la política CSP con la compilación definitiva y el dominio real. No copiar una política genérica sin verificar imágenes, scripts, estilos y conexiones necesarias.
3. Confirmar responsable, finalidad, canal para derechos y plazo de conservación si se agrega un backend, CRM, correo transaccional, analítica o publicidad.
4. Validar en servidor todo dato que llegue a una API futura; la validación del navegador nunca sustituye la validación del servidor.
5. Ejecutar pruebas manuales de teclado, lectores de pantalla, contraste, zoom al 200 % y vista móvil antes de declarar conformidad WCAG.
6. Revisar metadatos, dominio, políticas de proveedores externos y textos legales con información operacional real.

## Cambios que requieren una nueva revisión

La incorporación de pagos en línea, cuentas de usuario, panel administrativo, agenda, almacenamiento de cotizaciones, analítica, píxeles publicitarios, carga de archivos o una API cambia el riesgo y el alcance legal. Ninguna de esas funciones debe añadirse copiando solo los controles de esta versión estática.

## Reporte responsable

Las vulnerabilidades pueden informarse de forma privada a `mallas.saru.spa@gmail.com`. No se deben publicar datos personales, credenciales ni instrucciones de explotación en un issue público.
