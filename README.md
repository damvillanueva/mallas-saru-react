# Mallas Saru — React

Migración del sitio estático [Percy-182/mallas_Saru](https://github.com/Percy-182/mallas_Saru) a una aplicación moderna construida con React, Vite y TypeScript.

## Tecnologías

- React 19 para la interfaz y el manejo de estado.
- TypeScript para contratos de datos y detección temprana de errores.
- Vite para desarrollo local y compilación optimizada.
- CSS responsivo propio, sin descargar estilos ni depender de un framework visual en producción.
- Lucide React para iconos incluidos en la compilación, sin depender de una CDN en producción.
- Oxlint para validación estática del código.
- GitHub Actions para validar dependencias, código y compilación en cada cambio.

## Funcionalidades migradas

- Navegación responsiva y desplazamiento suave.
- Galerías de proyectos con lightbox, flechas y control por teclado.
- Formulario de cotización que prepara el mensaje localmente y permite al visitante confirmar el envío en WhatsApp.
- Promoción de bienvenida con vigencia, condiciones y frecuencia de aparición controladas.
- Política de garantía accesible, con cobertura, exclusiones y canal de revisión.
- Preguntas frecuentes independientes, presentadas en un diálogo con respuestas desplegables.
- Enlaces oficiales para consultar y publicar reseñas en Google, más acceso al perfil público de Habitissimo.
- Mensajes de WhatsApp diferenciados por sección para reconocer el origen de cada consulta.
- Secciones de servicios, protocolo de instalación, marco de seguridad, experiencia y contacto.
- Fotografías optimizadas en WebP, variantes livianas para las tarjetas, favicon e imagen Open Graph para compartir el sitio.
- Metadatos SEO, URL canónica, datos estructurados, `robots.txt` y `sitemap.xml` preparados para `mallassaru.cl`.

## Seguridad y privacidad del código

- El sitio no incorpora analítica, cookies, cuentas, base de datos ni almacenamiento de formularios.
- El navegador no recibe secretos ni credenciales.
- Los recursos visuales se compilan localmente; no se cargan fuentes o iconos desde una CDN.
- `package-lock.json`, auditoría de dependencias, análisis estático y compilación forman parte de la verificación.
- Dependabot queda preparado para proponer actualizaciones cuando el repositorio se publique.
- Las decisiones, límites y controles pendientes del hosting están descritos en `SECURITY.md`.

## Uso local

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

La dirección local se muestra en la terminal. Para generar la versión de producción:

```bash
npm run lint
npm run build
npm run preview
```

## Estructura

```text
src/
├── assets/       # Imágenes originales de Mallas Saru
├── components/   # Secciones y elementos interactivos de React
├── data/         # Contenido estructurado de servicios y galerías
├── App.tsx       # Composición de la página
├── main.tsx      # Punto de entrada
└── styles.css    # Estilos del sitio
scripts/
├── create_display_images.py # Regenera las variantes livianas usadas dentro de las secciones
└── optimize_images.py       # Regenera WebP, favicon e imagen social desde recursos reales
public/           # Iconos e imagen social listos para la compilación
```

## Activación al conectar el dominio

El código queda preparado para `https://mallassaru.cl/`, pero el cambio de hosting no forma parte de la ejecución local. Cuando se autorice la migración se debe:

1. Publicar la compilación `dist/` con HTTPS.
2. Verificar `robots.txt`, `sitemap.xml`, la URL canónica y la imagen social desde el dominio real.
3. Registrar el dominio en Google Search Console y enviar `https://mallassaru.cl/sitemap.xml`.
4. Añadir el sitio a Microsoft Clarity y colocar únicamente el identificador entregado por la cuenta oficial.
5. Actualizar el sitio web, servicios, cobertura, fotografías y enlace de reseñas en Google Business Profile.
6. Crear un monitor HTTPS en UptimeRobot cuando la nueva versión esté pública.
7. Si se desea mostrar el widget contratado de Habitissimo, copiar su código oficial desde `Tu Negocio → Añade un widget en tu web`; mientras tanto el sitio enlaza la ficha pública sin extraer opiniones automáticamente.

## Diferencia respecto del proyecto original

El proyecto original entrega un único `index.html` y agrega comportamientos desde `assets/js/script.js` mediante búsquedas y cambios directos en el DOM. Esta versión divide la interfaz en componentes, describe el contenido como datos y usa estado de React para menús, modales, galerías y formularios. El resultado visual conserva la identidad del sitio, pero la base queda más fácil de ampliar, probar y mantener.
