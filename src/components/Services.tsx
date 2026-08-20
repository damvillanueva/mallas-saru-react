import { services } from '../data/siteData'

export function Services() {
  return (
    <section className="section bg-light" id="servicios">
      <div className="container">
        <header className="section-heading text-center">
          <p className="section-kicker">Soluciones a tu medida</p>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="text-muted">Seguridad para todo tipo de espacios</p>
        </header>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-3 col-md-6" key={service.id} id={service.id}>
              <article className="service-card p-4 text-center">
                <div className="service-icon" aria-hidden="true">
                  <i className={`fas ${service.icon}`} />
                </div>
                <h3 className="h4">{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
