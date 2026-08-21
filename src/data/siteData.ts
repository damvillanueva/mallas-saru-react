import edificio1 from '../assets/img/trabajos/malla_Edificio/1.jpg'
import edificio2 from '../assets/img/trabajos/malla_Edificio/2.jpg'
import edificio3 from '../assets/img/trabajos/malla_Edificio/3.jpg'
import edificio4 from '../assets/img/trabajos/malla_Edificio/4.jpg'
import edificio5 from '../assets/img/trabajos/malla_Edificio/5.jpg'
import edificio6 from '../assets/img/trabajos/malla_Edificio/6.jpg'
import edificio7 from '../assets/img/trabajos/malla_Edificio/7.jpg'
import residencial1 from '../assets/img/trabajos/malla_Residencial/1.jpg'
import residencial2 from '../assets/img/trabajos/malla_Residencial/2.jpg'
import residencial3 from '../assets/img/trabajos/malla_Residencial/3.jpg'
import residencial4 from '../assets/img/trabajos/malla_Residencial/4.jpg'
import residencial5 from '../assets/img/trabajos/malla_Residencial/5.jpg'
import ventana1 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20251028-WA0054.jpg'
import ventana2 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260115-WA0059.jpg'
import ventana3 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260115-WA0061.jpg'
import ventana4 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260123-WA0062.jpg'
import ventana5 from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260325-WA0051.jpg'
import cliente1 from '../assets/img/trabajos/clientes_Satisfechos/1.jpg'
import cliente2 from '../assets/img/trabajos/clientes_Satisfechos/2.jpg'
import cliente3 from '../assets/img/trabajos/clientes_Satisfechos/3.jpg'
import cliente4 from '../assets/img/trabajos/clientes_Satisfechos/4.jpg'
import cliente5 from '../assets/img/trabajos/clientes_Satisfechos/5.jpg'

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
  { href: '#convenios', label: 'Convenios' },
  { href: '#protocolo', label: 'Cómo trabajamos' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#seguridad', label: 'Seguridad' },
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

export const whatsappQuoteUrl =
  'https://wa.me/56972022406?text=Hola%2C%20quiero%20evaluar%20un%20espacio%20para%20instalar%20mallas%20de%20seguridad.'

export const whatsappConvenioUrl =
  'https://wa.me/56972022406?text=Hola%2C%20quiero%20consultar%20por%20el%20beneficio%20de%20Tarjeta%20Vecino%20para%20instalar%20o%20recambiar%20mallas.'

export const googleBusinessUrl =
  'https://www.google.com/maps/place/Mallas+Saru/@-33.5200935,-70.5849707,17z/data=!4m15!1m8!3m7!1s0x9662d0579347472d:0x50de4253d46ac35!2sSta.+Adriana+1627,+8242115+La+Florida,+Regi%C3%B3n+Metropolitana!3b1!8m2!3d-33.5200935!4d-70.5849707!16s%2Fg%2F11hjk2_hnx!3m5!1s0x81e9fe3f18530c63:0xa88c42c8661cf282!8m2!3d-33.5200935!4d-70.5849707!16s%2Fg%2F11xcslw04f?entry=ttu'

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
