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
import edificioCover from '../assets/img/display/building.webp'
import residencialCover from '../assets/img/display/residential-one.webp'
import ventanaCover from '../assets/img/display/window.webp'
import clienteCover from '../assets/img/display/client-one.webp'

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
      'Protegemos balcones, terrazas, logias y espacios comunes, cuidando las terminaciones y las reglas del condominio.',
    detail: 'Familias · administradores · comunidades',
  },
  {
    id: 'ventanas',
    title: 'Ventanas',
    description:
      'Instalamos en ventanas correderas, abatibles y otros puntos de riesgo, respetando el marco y su forma de apertura.',
    detail: 'Niños · personas mayores · cuidados especiales',
  },
  {
    id: 'mascotas',
    title: 'Seguridad para mascotas',
    description:
      'Revisamos el espacio y las necesidades de tu mascota para reducir puntos de fuga y caídas.',
    detail: 'Gatos · perros pequeños · espacios protegidos',
  },
  {
    id: 'mantencion-recambio',
    title: 'Inspección y recambio',
    description:
      'Revisamos tensión, fijaciones y desgaste para indicarte si la malla necesita mantención o recambio.',
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
    cover: edificioCover,
    images: makeImages(
      [edificio1, edificio2, edificio3, edificio4, edificio5, edificio6, edificio7],
      'Protección de balcón',
      'Trabajo real de Mallas Saru en un espacio residencial en altura.',
    ),
  },
  {
    title: 'Ventanas protegidas',
    description: 'Soluciones ajustadas a cada tipo de ventana',
    alt: 'Ventana protegida con malla de seguridad',
    cover: ventanaCover,
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
    cover: residencialCover,
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
    cover: clienteCover,
    images: makeImages(
      [cliente1, cliente2, cliente3, cliente4, cliente5],
      'Espacio protegido',
      'Entorno preparado para el bienestar cotidiano de la familia y sus mascotas.',
    ),
  },
]

export const whatsappNumber = '56972022406'

export const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

export const whatsappQuoteUrl = createWhatsAppUrl(
  'Hola, quisiera cotizar una instalación de mallas de seguridad. ¿Me pueden orientar?',
)

export const whatsappHeaderUrl = createWhatsAppUrl(
  'Hola, quisiera cotizar una instalación de mallas de seguridad. ¿Qué información necesitan?',
)

export const whatsappHeroUrl = createWhatsAppUrl(
  'Hola, vi sus trabajos y me gustaría cotizar mallas de seguridad para mi espacio.',
)

export const whatsappFloatingUrl = createWhatsAppUrl(
  'Hola, me gustaría cotizar una instalación de mallas de seguridad. ¿Me pueden ayudar?',
)

export const whatsappFooterUrl = createWhatsAppUrl(
  'Hola, quisiera cotizar mallas de seguridad para mi espacio. ¿Qué datos necesitan?',
)

export const whatsappPhotosUrl = createWhatsAppUrl(
  'Hola, quisiera enviarles fotografías y medidas aproximadas para cotizar una instalación de mallas de seguridad.',
)

export const whatsappFaqUrl = createWhatsAppUrl(
  'Hola, tengo una consulta sobre la instalación de mallas de seguridad. ¿Me pueden orientar?',
)

export const whatsappGuaranteeUrl = createWhatsAppUrl(
  'Hola, necesito orientación sobre la garantía de una instalación de Mallas Saru.',
)

export const whatsappPromotionUrl = createWhatsAppUrl(
  'Hola, soy cliente nuevo y quisiera cotizar mi primera instalación con el 10% de descuento.',
)

export const whatsappConvenioUrl = createWhatsAppUrl(
  'Hola, quisiera consultar por el beneficio de Tarjeta Vecino para instalar o recambiar mallas de seguridad.',
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
