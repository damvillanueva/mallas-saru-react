import { useEffect, useState } from 'react'
import { MessageCircle, ShieldCheck, X } from 'lucide-react'
import familyImage from '../assets/img/trabajos/clientes_Satisfechos/1.webp'

const storageKey = 'mallas-saru-promotion-seen-at'
const displayInterval = 7 * 24 * 60 * 60 * 1000
const promotionEndsAt = new Date('2026-11-01T00:00:00-03:00').getTime()
const promotionalWhatsappUrl =
  'https://wa.me/56972022406?text=Hola%2C%20soy%20nuevo%2Fa%20cliente%20y%20quiero%20cotizar%20mi%20primera%20instalaci%C3%B3n%20con%20el%2010%25%20de%20bienvenida.'

function wasRecentlySeen() {
  try {
    const savedAt = Number(window.localStorage.getItem(storageKey))
    return Number.isFinite(savedAt) && savedAt > 0 && Date.now() - savedAt < displayInterval
  } catch {
    return false
  }
}

export function PromotionCard() {
  const [isVisible, setIsVisible] = useState(false)

  const dismissPromotion = () => {
    try {
      window.localStorage.setItem(storageKey, String(Date.now()))
    } catch {
      // El cierre sigue funcionando aunque el navegador no permita guardar preferencias.
    }
    setIsVisible(false)
  }

  useEffect(() => {
    if (Date.now() >= promotionEndsAt || wasRecentlySeen()) return

    let hasOpened = false
    let timerId = 0

    const showPromotion = () => {
      if (hasOpened) return
      hasOpened = true
      window.clearTimeout(timerId)
      window.removeEventListener('scroll', showAfterScroll)
      setIsVisible(true)
    }

    const showAfterScroll = () => {
      const pageHeight = document.documentElement.scrollHeight
      const currentProgress = (window.scrollY + window.innerHeight) / pageHeight
      if (currentProgress >= 0.4) showPromotion()
    }

    timerId = window.setTimeout(showPromotion, 7000)
    window.addEventListener('scroll', showAfterScroll, { passive: true })
    showAfterScroll()

    return () => {
      window.clearTimeout(timerId)
      window.removeEventListener('scroll', showAfterScroll)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('promotion-is-open', isVisible)

    if (!isVisible) return
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismissPromotion()
    }
    document.addEventListener('keydown', closeWithEscape)
    return () => {
      document.documentElement.classList.remove('promotion-is-open')
      document.removeEventListener('keydown', closeWithEscape)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <aside
      className="promotion-card"
      role="dialog"
      aria-modal="false"
      aria-labelledby="promotion-title"
      aria-describedby="promotion-description promotion-conditions"
    >
      <div className="promotion-card__media" aria-hidden="true">
        <img src={familyImage} alt="" />
        <span><ShieldCheck size={17} /> Mallas Saru</span>
      </div>
      <div className="promotion-card__body">
        <button className="promotion-card__close" type="button" aria-label="Cerrar promoción" onClick={dismissPromotion}>
          <X aria-hidden="true" size={19} />
        </button>
        <p className="promotion-card__badge">10% de bienvenida</p>
        <h2 id="promotion-title">Protege ese espacio que tanto te preocupa.</h2>
        <p id="promotion-description">
          Nuevos clientes obtienen un <strong>10% de descuento</strong> en su primera instalación de mallas de seguridad.
        </p>
        <a
          className="promotion-card__action"
          href={promotionalWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismissPromotion}
        >
          <MessageCircle aria-hidden="true" size={18} /> Solicitar cotización
        </a>
        <small id="promotion-conditions">
          Válido hasta el 31 de octubre de 2026. Un beneficio por cliente. No acumulable con convenios u otras promociones.
        </small>
      </div>
    </aside>
  )
}
