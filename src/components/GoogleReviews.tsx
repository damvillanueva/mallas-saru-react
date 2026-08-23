import { ArrowUpRight, MessageSquarePlus, Star } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { googleBusinessUrl, googleReviewUrl, habitissimoProfileUrl } from '../data/siteData'

export function GoogleReviews() {
  return (
    <section className="section reviews-section" id="resenas">
      <div className="container">
        <header className="section-intro section-intro--split reviews-heading">
          <div>
            <p className="section-kicker">Opiniones reales</p>
            <h2>La tranquilidad también se nota al final.</h2>
          </div>
          <p className="reviews-heading__lead">Conoce experiencias públicas de clientes y revisa cada opinión directamente en su fuente original.</p>
        </header>

        <article className="review-experience">
          <div className="review-experience__quote">
            <div className="review-stars" aria-label="Cinco de cinco estrellas">
              {[0, 1, 2, 3, 4].map((star) => <Star size={19} fill="currentColor" key={star} />)}
            </div>
            <blockquote>“Servicio de alta calidad y profesionalismo.”</blockquote>
            <div className="review-person">
              <span className="review-person__avatar" aria-hidden="true">AF</span>
              <span>
                <strong>Andrés Fuentes</strong>
                <small>Opinión pública en Habitissimo · 5/5</small>
              </span>
            </div>
            <a className="review-source-link" href={habitissimoProfileUrl} target="_blank" rel="noopener noreferrer">
              Ver opinión en su fuente <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>

          <div className="review-experience__trust">
            <div>
              <p className="review-trust-kicker">Experiencias verificables</p>
              <h3>Lo que viven nuestros clientes también cuenta.</h3>
              <p>Revisa comentarios, fechas y valoraciones en los perfiles públicos de Mallas Saru.</p>
            </div>
            <div className="review-sources" aria-label="Fuentes públicas de opiniones">
              <a className="review-source review-source--google" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                <span><FcGoogle aria-hidden="true" /></span>
                <strong>Google</strong>
                <small>Ficha pública</small>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="review-source review-source--habitissimo" href={habitissimoProfileUrl} target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">h</span>
                <strong>habitissimo</strong>
                <small>4,8/5 · 457 opiniones</small>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <a className="review-leave-link" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquarePlus aria-hidden="true" size={17} /> Cuéntanos tu experiencia
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
