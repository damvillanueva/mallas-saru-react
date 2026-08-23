import { useRef, useState, type TouchEvent } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, MessageSquarePlus, Star } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { googleBusinessUrl, googleReviewUrl, habitissimoProfileUrl } from '../data/siteData'

const customerReviews = [
  {
    name: 'Gonzalo',
    initials: 'G',
    text: 'Muy buen trabajo a un precio muy atractivo. El trato es excelente y su líder cuida cada detalle.',
  },
  {
    name: 'Katherine',
    initials: 'K',
    text: 'Muy preocupada y profesional! quede muy contenta con el trabajo. Gracias!',
  },
  {
    name: 'Andrés Fuentes',
    initials: 'AF',
    text: 'Servicio de alta calidad y profesionalismo.',
  },
]

export function GoogleReviews() {
  const [activeReview, setActiveReview] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const review = customerReviews[activeReview]

  const showReview = (index: number) => {
    setActiveReview((index + customerReviews.length) % customerReviews.length)
  }

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.changedTouches[0].clientX
  }

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(distance) < 45) return
    showReview(activeReview + (distance < 0 ? 1 : -1))
  }

  return (
    <section className="section reviews-section" id="resenas">
      <div className="container">
        <header className="section-intro section-intro--split reviews-heading">
          <div>
            <p className="section-kicker">Opiniones de clientes</p>
            <h2>Lo que opinan sobre nuestro trabajo.</h2>
          </div>
          <p className="reviews-heading__lead">Revisa más comentarios en Google y Habitissimo.</p>
        </header>

        <article className="review-experience" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="review-experience__quote">
            <div className="review-slide" key={activeReview} aria-live="polite">
              <div className="review-slide__meta">
                <div className="review-stars" aria-label="Cinco de cinco estrellas">
                  {[0, 1, 2, 3, 4].map((star) => <Star size={17} fill="currentColor" key={star} />)}
                </div>
                <span>{activeReview + 1} de {customerReviews.length}</span>
              </div>

              <blockquote>“{review.text}”</blockquote>

              <div className="review-slide__footer">
                <div className="review-person">
                  <span className="review-person__avatar" aria-hidden="true">{review.initials}</span>
                  <span>
                    <strong>{review.name}</strong>
                    <small>Opinión pública en Habitissimo</small>
                  </span>
                </div>

                <div className="review-controls" aria-label="Navegar por las reseñas">
                  <button type="button" onClick={() => showReview(activeReview - 1)} aria-label="Mostrar reseña anterior">
                    <ChevronLeft aria-hidden="true" size={18} />
                  </button>
                  <div className="review-dots" aria-label={`Reseña ${activeReview + 1} de ${customerReviews.length}`}>
                    {customerReviews.map((item, index) => (
                      <button
                        type="button"
                        className={index === activeReview ? 'is-active' : ''}
                        onClick={() => showReview(index)}
                        aria-label={`Mostrar reseña de ${item.name}`}
                        aria-current={index === activeReview ? 'true' : undefined}
                        key={item.name}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={() => showReview(activeReview + 1)} aria-label="Mostrar reseña siguiente">
                    <ChevronRight aria-hidden="true" size={18} />
                  </button>
                </div>
              </div>

              <a className="review-source-link" href={habitissimoProfileUrl} target="_blank" rel="noopener noreferrer">
                Ver en Habitissimo <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>

          <aside className="review-experience__trust" aria-label="Más opiniones de Mallas Saru">
            <p className="review-trust-kicker">Opiniones públicas</p>
            <div className="review-rating-summary">
              <strong>4,8/5</strong>
              <span>457 opiniones en Habitissimo</span>
            </div>
            <div className="review-sources">
              <a className="review-source review-source--google" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                <span><FcGoogle aria-hidden="true" /></span>
                <strong>Google</strong>
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a className="review-source review-source--habitissimo" href={habitissimoProfileUrl} target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">h</span>
                <strong>habitissimo</strong>
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
            <a className="review-leave-link" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquarePlus aria-hidden="true" size={16} /> Déjanos tu reseña
            </a>
          </aside>
        </article>
      </div>
    </section>
  )
}
