import { useEffect, useState } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import { googleBusinessUrl } from '../data/siteData'

type ReviewItem = {
  authorName: string
  authorPhoto: string | null
  authorUrl: string | null
  relativeTime: string | null
  reviewUrl: string | null
  text: string
}

type ReviewsState =
  | { status: 'unconfigured' }
  | { status: 'loading' }
  | { status: 'ready'; rating: number | null; ratingCount: number | null; reviews: ReviewItem[] }
  | { status: 'error' }

let mapsLoader: Promise<void> | null = null

function loadGoogleMaps(apiKey: string) {
  if (typeof google !== 'undefined') return Promise.resolve()
  if (mapsLoader) return mapsLoader

  mapsLoader = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-mallas-saru-maps]')
    const script = existingScript ?? document.createElement('script')

    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('No fue posible cargar Google Maps.')), { once: true })

    if (!existingScript) {
      script.async = true
      script.dataset.mallasSaruMaps = 'true'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&loading=async`
      document.head.appendChild(script)
    }
  })

  return mapsLoader
}

export function GoogleReviews() {
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim()
  const [state, setState] = useState<ReviewsState>(apiKey ? { status: 'loading' } : { status: 'unconfigured' })

  useEffect(() => {
    if (!apiKey) return
    const mapsApiKey = apiKey
    let isCurrent = true

    async function fetchReviews() {
      try {
        await loadGoogleMaps(mapsApiKey)
        const { Place } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary
        const { places } = await Place.searchByText({
          fields: ['displayName', 'googleMapsURI', 'rating', 'reviews', 'userRatingCount'],
          language: 'es',
          locationBias: { center: { lat: -33.5200935, lng: -70.5849707 }, radius: 1200 },
          maxResultCount: 1,
          region: 'CL',
          textQuery: 'Mallas Saru, Santa Adriana 1627, La Florida, Chile',
        })
        const place = places[0]
        if (!place) throw new Error('Google no encontró la ficha de Mallas Saru.')

        const reviews = (place.reviews ?? [])
          .filter((review) => review.rating === 5 && Boolean(review.text?.trim()))
          .slice(0, 3)
          .map((review) => ({
            authorName: review.authorAttribution?.displayName ?? 'Cliente de Mallas Saru',
            authorPhoto: review.authorAttribution?.photoURI ?? null,
            authorUrl: review.authorAttribution?.uri ?? null,
            relativeTime: review.relativePublishTimeDescription,
            reviewUrl: review.googleMapsURI,
            text: review.text?.trim() ?? '',
          }))

        if (isCurrent) {
          setState({
            status: 'ready',
            rating: place.rating ?? null,
            ratingCount: place.userRatingCount ?? null,
            reviews,
          })
        }
      } catch {
        if (isCurrent) setState({ status: 'error' })
      }
    }

    void fetchReviews()
    return () => { isCurrent = false }
  }, [apiKey])

  return (
    <section className="section reviews-section" id="resenas">
      <div className="container">
        <header className="section-intro section-intro--split reviews-heading">
          <div>
            <p className="section-kicker">Opiniones verificables</p>
            <h2>Experiencias compartidas por nuestros clientes.</h2>
          </div>
          <div className="google-rating-summary">
            <span className="google-source">Google</span>
            {state.status === 'ready' && state.rating !== null ? (
              <strong>{state.rating.toFixed(1)} <Star aria-hidden="true" size={16} fill="currentColor" /></strong>
            ) : (
              <strong>Reseñas reales</strong>
            )}
            {state.status === 'ready' && state.ratingCount !== null && <small>{state.ratingCount} opiniones publicadas</small>}
          </div>
        </header>

        {state.status === 'loading' && (
          <div className="reviews-grid" aria-live="polite" aria-label="Cargando reseñas de Google">
            {[0, 1, 2].map((item) => <div className="review-card review-card--loading" key={item} />)}
          </div>
        )}

        {state.status === 'ready' && state.reviews.length > 0 && (
          <div className="reviews-grid">
            {state.reviews.map((review) => (
              <article className="review-card" key={`${review.authorName}-${review.text}`}>
                <header className="review-author">
                  {review.authorPhoto ? (
                    <img src={review.authorPhoto} alt="" loading="lazy" referrerPolicy="no-referrer" />
                  ) : (
                    <span aria-hidden="true">{review.authorName.charAt(0).toUpperCase()}</span>
                  )}
                  <div>
                    {review.authorUrl ? (
                      <a href={review.authorUrl} target="_blank" rel="noopener noreferrer">{review.authorName}</a>
                    ) : (
                      <strong>{review.authorName}</strong>
                    )}
                    {review.relativeTime && <small>{review.relativeTime}</small>}
                  </div>
                </header>
                <div className="review-stars" aria-label="5 de 5 estrellas">
                  {[0, 1, 2, 3, 4].map((star) => <Star aria-hidden="true" size={16} fill="currentColor" key={star} />)}
                </div>
                <p>“{review.text}”</p>
                <a className="review-source-link" href={review.reviewUrl ?? googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                  Publicada en Google <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              </article>
            ))}
          </div>
        )}

        {(state.status === 'unconfigured' || state.status === 'error' || (state.status === 'ready' && state.reviews.length === 0)) && (
          <div className="reviews-fallback">
            <div>
              <span className="google-source">Google</span>
              <h3>Consulta las opiniones directamente en la ficha oficial.</h3>
              <p>Esta página mostrará aquí las reseñas verificadas cuando la conexión de Google Places esté activa.</p>
            </div>
            <a className="button button--primary" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
              Ver reseñas en Google <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        )}

        <p className="reviews-disclosure">Se muestran únicamente reseñas de 5 estrellas con texto. La valoración general enlaza a todas las opiniones publicadas en Google.</p>
      </div>
    </section>
  )
}
