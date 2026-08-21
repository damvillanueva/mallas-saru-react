import { ArrowUpRight, Star } from 'lucide-react'
import { googleBusinessUrl } from '../data/siteData'

export function GoogleReviews() {
  return (
    <section className="section reviews-section" id="resenas">
      <div className="container">
        <header className="section-intro section-intro--split reviews-heading">
          <div>
            <p className="section-kicker">Opiniones reales</p>
            <h2>Conoce la experiencia de nuestros clientes.</h2>
          </div>
          <div className="google-rating-summary" aria-label="Reseñas disponibles en Google">
            <span className="google-source">Google</span>
            <span className="google-stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((star) => <Star size={17} fill="currentColor" key={star} />)}
            </span>
            <small>Opiniones en la ficha oficial</small>
          </div>
        </header>

        <div className="reviews-direct">
          <span className="reviews-direct__icon" aria-hidden="true"><Star size={25} fill="currentColor" /></span>
          <div>
            <p className="reviews-direct__label">Fuente pública y verificable</p>
            <h3>Lee las reseñas directamente en Google.</h3>
            <p>Revisa los comentarios, las fechas de publicación y la valoración general en la ficha oficial de Mallas Saru.</p>
          </div>
          <a className="button button--primary" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
            Ver reseñas en Google <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>

        <p className="reviews-disclosure">El enlace abre la fuente original para que puedas consultar todas las opiniones publicadas.</p>
      </div>
    </section>
  )
}
