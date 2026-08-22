import edificio1 from '../assets/img/trabajos/malla_Edificio/1.webp'
import edificio2 from '../assets/img/trabajos/malla_Edificio/2.webp'
import edificio3 from '../assets/img/trabajos/malla_Edificio/3.webp'
import edificio4 from '../assets/img/trabajos/malla_Edificio/4.webp'
import edificio5 from '../assets/img/trabajos/malla_Edificio/5.webp'
import edificio6 from '../assets/img/trabajos/malla_Edificio/6.webp'
import edificio7 from '../assets/img/trabajos/malla_Edificio/7.webp'
import residencial1 from '../assets/img/trabajos/malla_Residencial/1.webp'
import residencial2 from '../assets/img/trabajos/malla_Residencial/2.webp'
import residencial3 from '../assets/img/trabajos/malla_Residencial/3.webp'
import residencial4 from '../assets/img/trabajos/malla_Residencial/4.webp'
import residencial5 from '../assets/img/trabajos/malla_Residencial/5.webp'
import ventana1 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20251028-WA0054.webp'
import ventana2 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260115-WA0059.webp'
import ventana3 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260115-WA0061.webp'
import ventana4 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260123-WA0062.webp'
import ventana5 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260325-WA0051.webp'
import cliente1 from '../assets/img/trabajos/clientes_Satisfechos/1.webp'
import cliente2 from '../assets/img/trabajos/clientes_Satisfechos/2.webp'
import cliente3 from '../assets/img/trabajos/clientes_Satisfechos/3.webp'
import cliente4 from '../assets/img/trabajos/clientes_Satisfechos/4.webp'
import cliente5 from '../assets/img/trabajos/clientes_Satisfechos/5.webp'

export type GalleryImage = {
  src: string
  title: string
  description: string
}

export type PortfolioGroup = {
  title: string
  description: string
  alt: string
  cover: string
  images: GalleryImage[]
}

export const navLinks = [
  { href: '#servicios', label: 'Soluciones' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#protocolo', label: 'Cómo trabajamos' },
  { href: '#seguridad', label: 'Seguridad' },
  { href: '#convenios', label: 'Convenios' },
  { href: '#nosotros', label: 'Nosotros' },
]

export const services = [
  {
    id: 'balcones-edificios',
    title: 'Balcones y edificios',
    description:
      'Protección discreta para departamentos, terrazas, logias y espacios comunes, considerando el soporte y las reglas del condominio.',
    detail: 'Familias · administradores · comunidades',
  },
  {
    id: 'ventanas',
    title: 'Ventanas y vanos',
    description:
      'Soluciones para ventanas correderas, abatibles y otros puntos de riesgo, con revisión previa del marco y su forma de apertura.',
    detail: 'Niños · personas mayores · cuidados especiales',
  },
  {
    id: 'mascotas',
    title: 'Seguridad para mascotas',
    description:
      'Evaluación del espacio según tamaño, conducta y exposición de la mascota para reducir puntos de fuga y caída.',
    detail: 'Gatos · perros pequeños · espacios protegidos',
  },
  {
    id: 'mantencion-recambio',
    title: 'Inspección y recambio',
    description:
      'Revisión de tensión, fijaciones, desgaste visible y daños por uso, obras o intemperie, con recomendación documentada.',
    detail: 'Diagnóstico · mantención · renovación',
  },
]

const makeImages = (images: string[], title: string, description: string): GalleryImage[] =>
  images.map((src, index) => ({
    src,
    title: `${title} · proyecto ${index + 1}`,
    description,
  }))

export const portfolioGroups: PortfolioGroup[] = [
  {
    title: 'Balcones en altura',
    description: 'Instalaciones en departamentos y terrazas',
    alt: 'Malla de seguridad instalada en un balcón de edificio',
    cover: edificio1,
    images: makeImages(
      [edificio1, edificio2, edificio3, edificio4, edificio5, edificio6, edificio7],
      'Protección de balcón',
      'Trabajo real de Mallas Saru en un espacio residencial en altura.',
    ),
  },
  {
    title: 'Ventanas protegidas',
    description: 'Soluciones ajustadas a cada tipo de vano',
    alt: 'Ventana protegida con malla de seguridad',
    cover: ventana5,
    images: makeImages(
      [ventana1, ventana2, ventana3, ventana4, ventana5],
      'Protección de ventana',
      'Instalación adaptada al marco y al sistema de apertura existente.',
    ),
  },
  {
    title: 'Espacios residenciales',
    description: 'Casas, terrazas y zonas de uso familiar',
    alt: 'Malla de seguridad instalada en una residencia',
    cover: residencial1,
    images: makeImages(
      [residencial1, residencial2, residencial3, residencial4, residencial5],
      'Protección residencial',
      'Solución para un punto de riesgo en vivienda particular.',
    ),
  },
  {
    title: 'Familias y mascotas',
    description: 'Protección para quienes más quieres',
    alt: 'Mascota en un espacio protegido por Mallas Saru',
    cover: cliente1,
    images: makeImages(
      [cliente1, cliente2, cliente3, cliente4, cliente5],
      'Espacio protegido',
      'Entorno preparado para el bienestar cotidiano de la familia y sus mascotas.',
    ),
  },
]

export const whatsappNumber = '56972022406'

export const createWhatsAppUrl = (origin: string, request: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, ${request}\n\nOrigen: ${origin}`)}`

export const whatsappQuoteUrl = createWhatsAppUrl(
  'Sitio web',
  'quiero evaluar un espacio para instalar mallas de seguridad.',
)

export const whatsappHeaderUrl = createWhatsAppUrl(
  'Encabezado del sitio',
  'quiero cotizar una instalación de mallas de seguridad.',
)

export const whatsappHeroUrl = createWhatsAppUrl(
  'Inicio',
  'vi la presentación de Mallas Saru y quiero cotizar un espacio.',
)

export const whatsappFloatingUrl = createWhatsAppUrl(
  'Botón flotante',
  'quiero cotizar una instalación de mallas de seguridad.',
)

export const whatsappFooterUrl = createWhatsAppUrl(
  'Pie de página',
  'quiero solicitar una evaluación para mi espacio.',
)

export const whatsappPhotosUrl = createWhatsAppUrl(
  'Formulario web · envío de fotografías',
  'quiero enviar fotografías y medidas aproximadas para solicitar una cotización.',
)

export const whatsappFaqUrl = createWhatsAppUrl(
  'Preguntas frecuentes',
  'revisé las preguntas frecuentes y necesito orientación sobre mi espacio.',
)

export const whatsappGuaranteeUrl = createWhatsAppUrl(
  'Política de garantía',
  'quiero solicitar orientación o una revisión relacionada con la garantía de instalación.',
)

export const whatsappPromotionUrl = createWhatsAppUrl(
  'Promoción 10% para nuevos clientes',
  'soy nuevo/a cliente y quiero cotizar mi primera instalación con el 10% de bienvenida.',
)

export const whatsappConvenioUrl = createWhatsAppUrl(
  'Convenios',
  'quiero consultar por el beneficio de Tarjeta Vecino para instalar o recambiar mallas.',
)

export const googleBusinessUrl = 'https://share.google/WlhdQ9PblRoudbSTp'

export const googleReviewUrl = 'https://g.page/r/CYLyHGbIQoyoEAI/review'

export const habitissimoProfileUrl = 'https://empresas.habitissimo.cl/pro/construcciones-saru'

export const sanMiguelConvenioUrl =
  'https://tarjetavecino.sanmiguel.cl/social/project/mallassaruspa/'

export const officialSources = [
  {
    label: 'Ley N.º 21.442 de Copropiedad Inmobiliaria',
    href: 'https://www.bcn.cl/leychile/navegar?idNorma=1174663',
  },
  {
    label: 'MINVU: protección y cuidado en condominios',
    href: 'https://www.minvu.gob.cl/wp-content/uploads/2025/06/ninez2.pdf',
  },
]
