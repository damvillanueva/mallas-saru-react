import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'
import { navLinks, whatsappHeaderUrl } from '../data/siteData'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 32)
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeWithEscape)
    return () => document.removeEventListener('keydown', closeWithEscape)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}${isOpen ? ' site-header--menu-open' : ''}`}>
      <nav className="navbar navbar-expand-xl" aria-label="Navegación principal">
        <div className="container d-flex align-items-center">
          <a className="navbar-brand d-flex align-items-center gap-3" href="#inicio" onClick={() => setIsOpen(false)}>
            <img className="navbar-logo" src={logo} alt="Logotipo de Mallas Saru" />
            <span className="brand-copy">
              <strong className="brand-name">
                <span>Mallas</span>
                <span className="brand-name__accent">Saru</span>
              </strong>
              <small>Tu seguridad, en nuestras manos.</small>
            </span>
          </a>

          <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-xl-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a className="nav-link" href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="header-cta" href={whatsappHeaderUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" size={17} />
              Cotizar
            </a>
          </div>

          <div className="header-tools">
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsOpen((current) => !current)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
