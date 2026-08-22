import { ArrowUpRight, MessageSquarePlus, MessagesSquare, Star } from 'lucide-react'
import { googleBusinessUrl, googleReviewUrl, habitissimoProfileUrl } from '../data/siteData'

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
          <div className="reviews-direct__actions">
            <a className="button button--primary" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
              Ver reseñas <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a className="reviews-review-link" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquarePlus aria-hidden="true" size={17} /> Déjanos una reseña
            </a>
          </div>
        </div>

        <a className="habitissimo-reviews" href={habitissimoProfileUrl} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true"><MessagesSquare size={20} /></span>
          <div>
            <small>Otra fuente pública</small>
            <strong>Consulta también las opiniones de Mallas Saru en Habitissimo.</strong>
          </div>
          <span>Ver opiniones <ArrowUpRight aria-hidden="true" size={16} /></span>
        </a>

        <p className="reviews-disclosure">Los enlaces abren las fuentes originales. No entregamos beneficios a cambio de publicar una opinión.</p>
      </div>
    </section>
  )
}
