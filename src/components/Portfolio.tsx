import { portfolioGroups, type PortfolioGroup } from '../data/siteData'

type PortfolioProps = {
  onOpen: (group: PortfolioGroup) => void
}

export function Portfolio({ onOpen }: PortfolioProps) {
  return (
    <section className="section" id="trabajos">
      <div className="container">
        <header className="section-heading text-center">
          <p className="section-kicker">Experiencia comprobable</p>
          <h2 className="section-title">Trabajos Realizados</h2>
          <p className="text-muted">Selecciona un proyecto para recorrer su galería</p>
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
                <span className="portfolio-action" aria-hidden="true">
                  <i className="fas fa-expand-alt" /> Ver galería
                </span>
                <span className="h4">{group.title}</span>
                <span>{group.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
