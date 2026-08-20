import { useEffect, useState } from 'react'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'
import { navLinks } from '../data/siteData'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 50)
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-top${isScrolled ? ' navbar--scrolled' : ''}`}
      aria-label="Navegación principal"
    >
      <div className="container d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio" onClick={() => setIsOpen(false)}>
          <img className="navbar-logo" src={logo} alt="Logotipo de Mallas Saru" />
          <span>
            <span className="mallas-navbar">Mallas</span>
            <span className="brand-saru"> Saru</span>
          </span>
        </a>
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
        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link${index === 0 ? ' active' : ''}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
