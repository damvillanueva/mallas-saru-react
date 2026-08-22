# Mallas Saru — React

Migración del sitio estático [Percy-182/mallas_Saru](https://github.com/Percy-182/mallas_Saru) a una aplicación moderna construida con React, Vite y TypeScript.

## Tecnologías

- React 19 para la interfaz y el manejo de estado.
- TypeScript para contratos de datos y detección temprana de errores.
- Vite para desarrollo local y compilación optimizada.
- Bootstrap 5 para la grilla y utilidades visuales del diseño original.
- Lucide React para iconos incluidos en la compilación, sin depender de una CDN en producción.
- Oxlint para validación estática del código.
- GitHub Actions para validar dependencias, código y compilación en cada cambio.

## Funcionalidades migradas

- Navegación responsiva y desplazamiento suave.
- Galerías de proyectos con lightbox, flechas y control por teclado.
- Formulario de cotización que prepara el mensaje localmente y permite al visitante confirmar el envío en WhatsApp.
- Promoción de bienvenida con vigencia, condiciones y frecuencia de aparición controladas.
- Política de garantía accesible, con cobertura, exclusiones y canal de revisión.
- Secciones de servicios, protocolo de instalación, marco de seguridad, experiencia y contacto.
- Fotografías optimizadas en WebP, favicon e imagen Open Graph para compartir el sitio.
- Metadatos SEO y Open Graph preparados para el dominio definitivo.

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
└── optimize_images.py # Regenera WebP, favicon e imagen social desde recursos reales
public/           # Iconos e imagen social listos para la compilación
```

## Diferencia respecto del proyecto original

El proyecto original entrega un único `index.html` y agrega comportamientos desde `assets/js/script.js` mediante búsquedas y cambios directos en el DOM. Esta versión divide la interfaz en componentes, describe el contenido como datos y usa estado de React para menús, modales, galerías y formularios. El resultado visual conserva la identidad del sitio, pero la base queda más fácil de ampliar, probar y mantener.
