import { useEffect, useRef, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'
import { navLinks, whatsappHeaderUrl } from '../data/siteData'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 32)
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', closeWithEscape)
    return () => document.removeEventListener('keydown', closeWithEscape)
  }, [isOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1200px)')
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false)
    }

    desktopQuery.addEventListener('change', closeMenuOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeMenuOnDesktop)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}${isOpen ? ' site-header--menu-open' : ''}`}>
      <nav className="navbar" aria-label="Navegación principal">
        <div className="container">
          <a className="navbar-brand" href="#inicio" onClick={() => setIsOpen(false)}>
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
            <ul className="navbar-nav">
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
              ref={menuButtonRef}
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
