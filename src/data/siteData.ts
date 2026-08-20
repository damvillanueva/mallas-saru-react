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
import convenio1 from '../assets/img/trabajos/convenios/tarjeta_Vecino_viveLaForida_Mallas_Saru_1.jpg'
import convenio2 from '../assets/img/trabajos/convenios/tarjeta_Vecino_viveLaForida_Mallas_Saru_2.jpg'
import convenio3 from '../assets/img/trabajos/convenios/tarjeta_Vecino_viveLaForida_Mallas_Saru_3.jpg'
import convenio4 from '../assets/img/trabajos/convenios/tarjeta_Vecino_viveLaForida_Mallas_Saru_4.jpg'
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
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export const services = [
  {
    id: 'mallas-para-edificios',
    icon: 'fa-building',
    title: 'Mallas para Edificios',
    description:
      'Instalación profesional de mallas de seguridad en balcones, ventanas y áreas comunes de edificios y departamentos.',
  },
  {
    id: 'mallas-residenciales',
    icon: 'fa-home',
    title: 'Mallas Residenciales',
    description:
      'Protección para casas, terrazas, jardines y piscinas con materiales resistentes y duraderos.',
  },
  {
    id: 'convenios',
    icon: 'fa-tags',
    title: 'Convenios',
    description:
      'Si tienes tu tarjeta Vecino, obtienes descuentos especiales en nuestros servicios.',
  },
  {
    id: 'clientes-satisfechos',
    icon: 'fa-paw',
    title: 'Seguridad para Mascotas',
    description:
      'Mallas y protecciones para que tus mascotas disfruten balcones y ventanas de forma segura.',
  },
]

const buildingImages = [edificio1, edificio2, edificio3, edificio4, edificio5, edificio6, edificio7]
const residentialImages = [residencial1, residencial2, residencial3, residencial4, residencial5]
const agreementImages = [convenio1, convenio2, convenio3, convenio4]
const customerImages = [cliente1, cliente2, cliente3, cliente4, cliente5]

export const portfolioGroups: PortfolioGroup[] = [
  {
    title: 'Mallas para Balcones',
    description: 'Mallas de seguridad en balcones y terrazas',
    alt: 'Malla de seguridad instalada en un balcón',
    cover: edificio1,
    images: buildingImages.map((src, index) => ({
      src,
      title: index < 3 ? 'Balcón Mallas Saru Chile' : 'Balcones seguros, vistas intactas',
      description: [
        'Tu balcón, seguro y libre.',
        'Protección sin perder la vista.',
        'Disfruta la altura con tranquilidad.',
      ][index] ?? 'Seguridad discreta para disfrutar la altura.',
    })),
  },
  {
    title: 'Mallas para Ventanas',
    description: 'Protección para departamentos y casas',
    alt: 'Ventana protegida con una malla de seguridad',
    cover: residencial1,
    images: residentialImages.map((src, index) => ({
      src,
      title: [
        'Tu ventana segura y libre',
        'Disfruta la vista con tranquilidad',
        'Ventanas protegidas, vistas intactas',
        'Seguridad discreta para cada ventana',
        'Protección de confianza para tu hogar',
      ][index],
      description: 'Instalación residencial de Mallas Saru.',
    })),
  },
  {
    title: 'Convenios',
    description: 'Descuentos con la Tarjeta Vecino Vive La Florida',
    alt: 'Convenio de Mallas Saru con Tarjeta Vecino Vive La Florida',
    cover: convenio4,
    images: agreementImages.map((src) => ({
      src,
      title: 'Convenio Tarjeta Vecino Vive La Florida',
      description: 'Descuentos especiales en nuestros servicios para vecinos adheridos.',
    })),
  },
  {
    title: 'Clientes Satisfechos',
    description: 'Protección para quienes más quieres',
    alt: 'Mascota disfrutando un espacio protegido por Mallas Saru',
    cover: cliente1,
    images: customerImages.map((src, index) => ({
      src,
      title: [
        'Seguridad para tus seres queridos',
        'Protección para gatos curiosos',
        'Evita caídas, gana tranquilidad',
        'Tranquilidad garantizada',
        'Protege lo que más importa',
      ][index],
      description: 'Espacios más seguros gracias a Mallas Saru.',
    })),
  },
]

export const features = [
  {
    icon: 'fa-check-circle',
    title: 'Profesionales Certificados',
    description: 'Equipo técnico altamente capacitado',
  },
  {
    icon: 'fa-award',
    title: 'Materiales Premium',
    description: 'Resistentes a la intemperie y los rayos UV',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Garantía Extendida',
    description: 'Respaldo en todas nuestras instalaciones',
  },
  {
    icon: 'fa-truck',
    title: 'Instalación Rápida',
    description: 'Sin molestias y en tiempo récord',
  },
]

export const testimonials = [
  {
    quote:
      'Excelente servicio y profesionalismo. Instalaron las mallas en mi edificio con rapidez y limpieza. La calidad del material es superior.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Carlos Rodríguez',
    role: 'Propietario en edificio',
  },
  {
    quote:
      'Contraté a Mallas Saru para proteger a mis niños en la terraza. Quedé impresionada con la atención personalizada y el resultado final.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'María González',
    role: 'Madre de familia',
  },
  {
    quote:
      'Como administrador de condominio, necesitaba una solución segura y estética. Mallas Saru superó todas nuestras expectativas.',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    name: 'Roberto Sánchez',
    role: 'Administrador de condominio',
  },
]

export const whatsappQuoteUrl =
  'https://wa.me/56972022406?text=Hola%2C%20quiero%20cotizar%20una%20malla%20de%20seguridad'

export const whatsappDiscountUrl =
  'https://wa.me/56972022406?text=Hola%2C%20me%20interesa%20el%20descuento%20del%2010%25%20en%20mi%20primer%20servicio.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%3F'
