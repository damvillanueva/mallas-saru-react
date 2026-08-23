import { useCallback, useEffect, useRef, useState } from 'react'
import { MessageCircle, ShieldCheck, X } from 'lucide-react'
import familyImage from '../assets/img/trabajos/clientes_Satisfechos/1.webp'
import { whatsappPromotionUrl } from '../data/siteData'

const storageKey = 'mallas-saru-promotion-v2-seen-at'
const displayInterval = 7 * 24 * 60 * 60 * 1000
const promotionEndsAt = new Date('2026-11-01T00:00:00-03:00').getTime()

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
  const modalRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const dismissPromotion = useCallback(() => {
    try {
      window.localStorage.setItem(storageKey, String(Date.now()))
    } catch {
      // El cierre sigue funcionando aunque el navegador no permita guardar preferencias.
    }
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (Date.now() >= promotionEndsAt || wasRecentlySeen()) return

    const timerId = window.setTimeout(() => setIsVisible(true), 2200)
    return () => window.clearTimeout(timerId)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dismissPromotion()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [dismissPromotion, isVisible])

  if (!isVisible) return null

  return (
    <div className="promotion-modal">
      <aside
        ref={modalRef}
        className="promotion-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promotion-title"
        aria-describedby="promotion-description promotion-conditions"
      >
        <div className="promotion-card__media" aria-hidden="true">
          <img src={familyImage} alt="" />
          <div className="promotion-card__media-copy">
            <span><ShieldCheck size={18} /> Mallas Saru</span>
            <strong>Tu seguridad,<br />en nuestras manos.</strong>
          </div>
        </div>
        <div className="promotion-card__body">
          <button
            ref={closeButtonRef}
            className="promotion-card__close"
            type="button"
            aria-label="Cerrar promoción"
            onClick={dismissPromotion}
          >
            <X aria-hidden="true" size={21} />
          </button>
          <p className="promotion-card__eyebrow">Beneficio exclusivo para nuevos clientes</p>
          <p className="promotion-card__badge"><strong>10%</strong> de descuento</p>
          <h2 id="promotion-title">Protege tu balcón o ventanas con un 10% de descuento.</h2>
          <p id="promotion-description">
            Obtén un <strong>10% de descuento</strong> en tu primera instalación de mallas de seguridad.
          </p>
          <a
            className="promotion-card__action"
            href={whatsappPromotionUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismissPromotion}
          >
            <MessageCircle aria-hidden="true" size={20} /> Quiero cotizar con descuento
          </a>
          <div className="promotion-card__reassurance">
            <ShieldCheck aria-hidden="true" size={20} />
            <span><strong>Primero revisamos tu espacio</strong>Te explicamos las fijaciones, el alcance y la garantía antes de instalar.</span>
          </div>
          <small id="promotion-conditions">
            Válido hasta el 31 de octubre de 2026. Un beneficio por cliente. No acumulable con convenios u otras promociones.
          </small>
        </div>
      </aside>
    </div>
  )
}
