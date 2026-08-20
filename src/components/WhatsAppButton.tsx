import { whatsappQuoteUrl } from '../data/siteData'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappQuoteUrl}
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
      aria-label="Cotizar por WhatsApp"
    >
      <span className="whatsapp-text">Cotiza aquí</span>
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  )
}
