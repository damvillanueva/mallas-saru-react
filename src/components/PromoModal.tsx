import { useEffect, useState } from 'react'
import { whatsappDiscountUrl } from '../data/siteData'

export function PromoModal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsVisible(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="modal d-block descuento-modal promo-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="discount-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsVisible(false)
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header justify-content-end">
            <button className="btn-close m-3" type="button" aria-label="Cerrar promoción" onClick={() => setIsVisible(false)} />
          </div>
          <div className="modal-body text-center p-4">
            <div className="descuento-badge">10% DE DESCUENTO</div>
            <h2 className="h3 mb-3" id="discount-title">¡Bienvenido!</h2>
            <p className="mb-4">Aprovecha nuestro descuento especial en tu primer servicio.</p>
            <a className="btn btn-whatsapp mb-3" href={whatsappDiscountUrl} target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp" aria-hidden="true" />
              Contactar por WhatsApp
            </a>
            <p className="small text-muted mb-0">Válido solo para nuevos clientes | Oferta por tiempo limitado</p>
          </div>
        </div>
      </div>
    </div>
  )
}
