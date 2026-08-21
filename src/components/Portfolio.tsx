import { ExternalLink } from 'lucide-react'
import { portfolioGroups, type PortfolioGroup } from '../data/siteData'

type PortfolioProps = {
  onOpen: (group: PortfolioGroup) => void
}

export function Portfolio({ onOpen }: PortfolioProps) {
  return (
    <section className="section" id="trabajos">
      <div className="container">
        <header className="section-intro section-intro--split">
          <div>
            <p className="section-kicker">Portafolio real</p>
            <h2>Instalaciones realizadas por Mallas Saru.</h2>
          </div>
          <p>Revisa balcones, ventanas y espacios residenciales. Selecciona una categoría para abrir la galería.</p>
        </header>
        <div className="portfolio-grid">
          {portfolioGroups.map((group) => (
            <button
              className="portfolio-item"
              type="button"
              key={group.title}
              onClick={() => onOpen(group)}
              aria-label={`Abrir galería: ${group.title}`}
            >
              <img src={group.cover} alt={group.alt} loading="lazy" className="portfolio-img" />
              <span className="portfolio-overlay">
                <span className="portfolio-copy">
                  <span className="portfolio-action" aria-hidden="true">Proyecto real</span>
                  <strong>{group.title}</strong>
                  <small>{group.description}</small>
                </span>
                <span className="portfolio-open" aria-hidden="true"><ExternalLink size={18} /></span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
