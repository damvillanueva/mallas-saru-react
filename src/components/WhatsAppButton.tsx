import { MessageCircle } from 'lucide-react'
import { whatsappFloatingUrl } from '../data/siteData'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappFloatingUrl}
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
