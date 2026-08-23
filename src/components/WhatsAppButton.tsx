import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappFloatingUrl } from '../data/siteData'

export function WhatsAppButton() {
  const [isNearContact, setIsNearContact] = useState(false)

  useEffect(() => {
    const sections = ['contacto', 'pie-de-pagina']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
    if (!sections.length) return

    const visibleSections = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target)
        else visibleSections.delete(entry.target)
      })
      setIsNearContact(visibleSections.size > 0)
    }, { threshold: 0.08 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={whatsappFloatingUrl}
      className={`whatsapp-btn${isNearContact ? ' whatsapp-btn--hidden' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      aria-hidden={isNearContact}
      tabIndex={isNearContact ? -1 : undefined}
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span className="whatsapp-text">Cotizar</span>
    </a>
  )
}
