import { testimonials } from '../data/siteData'

export function Testimonials() {
  return (
    <section className="section bg-light" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="section-heading text-center">
          <p className="section-kicker">Confianza que se comparte</p>
          <h2 className="section-title" id="testimonials-title">Clientes Satisfechos</h2>
          <p className="text-muted">Reseñas de nuestros clientes</p>
        </header>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div className="col-md-4" key={testimonial.name}>
              <figure className="testimonial-card h-100">
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption className="client-info">
                  <img src={testimonial.image} alt="" loading="lazy" referrerPolicy="no-referrer" />
                  <div>
                    <h3 className="h5 mb-0">{testimonial.name}</h3>
                    <small>{testimonial.role}</small>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
