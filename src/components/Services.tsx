import { ArrowUpRight, Building2, PanelsTopLeft, PawPrint, Wrench } from 'lucide-react'
import edificio from '../assets/img/trabajos/malla_Edificio/1.jpg'
import residencial from '../assets/img/trabajos/malla_Residencial/2.jpg'
import mascota from '../assets/img/trabajos/clientes_Satisfechos/2.jpg'
import ventana from '../assets/img/trabajos/Ventanas/Ventanas/IMG-20260325-WA0051.jpg'
import { services } from '../data/siteData'

const serviceIcons = [Building2, PanelsTopLeft, PawPrint, Wrench]
const serviceImages = [
  { src: edificio, alt: 'Malla de seguridad instalada en un balcón en altura' },
  { src: ventana, alt: 'Ventana de vivienda protegida con una malla de seguridad' },
  { src: mascota, alt: 'Mascota en un espacio protegido con una malla de seguridad' },
  { src: residencial, alt: 'Instalación de malla de seguridad en un espacio residencial' },
]

export function Services() {
  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <div className="section-intro section-intro--split">
          <div>
            <p className="section-kicker">Soluciones según el riesgo</p>
            <h2>Una instalación distinta <span>para cada espacio.</span></h2>
          </div>
          <p>
            Antes de cotizar se debe entender quién necesita protección, cómo se usa el lugar y sobre qué material
            se realizará la fijación.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id} id={service.id}>
              <div className="service-card__media">
                <img src={serviceImages[index].src} alt={serviceImages[index].alt} loading="lazy" />
                <div className="service-card__top">
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon" aria-hidden="true">
                    {(() => {
                      const ServiceIcon = serviceIcons[index]
                      return <ServiceIcon size={22} strokeWidth={1.8} />
                    })()}
                  </span>
                </div>
              </div>
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <small>{service.detail}</small>
                <a href="#trabajos">Ver trabajos <ArrowUpRight aria-hidden="true" size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
