import { MessageCircle } from 'lucide-react'
import { whatsappQuoteUrl } from '../data/siteData'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappQuoteUrl}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span className="whatsapp-text">Cotizar</span>
    </a>
  )
}
