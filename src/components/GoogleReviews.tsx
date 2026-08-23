import { ArrowUpRight, MessageSquarePlus, ShieldCheck, Star } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { googleBusinessUrl, googleReviewUrl, habitissimoProfileUrl } from '../data/siteData'

export function GoogleReviews() {
  return (
    <section className="section reviews-section" id="resenas">
      <div className="container">
        <header className="section-intro section-intro--split reviews-heading">
          <div>
            <p className="section-kicker">Opiniones reales</p>
            <h2>Dos lugares para conocer experiencias reales.</h2>
          </div>
          <p className="reviews-heading__lead">Consulta siempre la fuente original, sus fechas y la experiencia completa publicada por cada cliente.</p>
        </header>

        <div className="review-platforms">
          <article className="review-platform review-platform--google">
            <div className="review-platform__topline">
              <a className="review-brand review-brand--google" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir ficha de Mallas Saru en Google">
                <span><FcGoogle aria-hidden="true" /></span>
                <strong>Google</strong>
              </a>
              <span className="review-source-badge"><ShieldCheck aria-hidden="true" size={14} /> Fuente oficial</span>
            </div>
            <div className="review-platform__rating" aria-label="Calificación máxima visible en Google">
              <strong>Experiencias en Google</strong>
              <span aria-hidden="true">{[0, 1, 2, 3, 4].map((star) => <Star size={20} fill="currentColor" key={star} />)}</span>
              <small>Consulta comentarios, fechas y valoración directamente en la ficha.</small>
            </div>
            <div className="review-platform__actions">
              <a className="review-action review-action--primary" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                Ver reseñas <ArrowUpRight aria-hidden="true" size={17} />
              </a>
              <a className="review-action review-action--secondary" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquarePlus aria-hidden="true" size={17} /> Déjanos una reseña
              </a>
            </div>
          </article>

          <article className="review-platform review-platform--habitissimo">
            <div className="review-platform__topline">
              <a className="review-brand review-brand--habitissimo" href={habitissimoProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil público de Mallas Saru en Habitissimo">
                <span aria-hidden="true">h</span>
                <strong>habitissimo</strong>
              </a>
              <span className="review-source-badge"><ShieldCheck aria-hidden="true" size={14} /> Perfil público</span>
            </div>
            <div className="review-platform__rating">
              <strong>Más opiniones sobre nuestro trabajo</strong>
              <p>Revisa en Habitissimo las experiencias publicadas y el perfil comercial de Mallas Saru.</p>
              <small>El contenido se consulta en su plataforma para mantener visible la fuente original.</small>
            </div>
            <a className="review-action review-action--habitissimo" href={habitissimoProfileUrl} target="_blank" rel="noopener noreferrer">
              Ver opiniones en Habitissimo <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </article>
        </div>

        <p className="reviews-disclosure"><ShieldCheck aria-hidden="true" size={14} /> Los enlaces abren las fuentes originales. No entregamos beneficios a cambio de publicar una opinión.</p>
      </div>
    </section>
  )
}
