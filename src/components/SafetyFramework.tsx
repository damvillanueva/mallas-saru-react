import { ArrowUpRight, Building2, ClipboardCheck, Info, Landmark, ShieldCheck } from 'lucide-react'
import { officialSources } from '../data/siteData'

const leyValentinUrl =
  'https://www.senado.cl/comunicaciones/noticias/comision-mixta-debera-buscar-acuerdo-sobre-medidas-para-prevenir-caidas'

const principles = [
  {
    number: '01',
    title: 'Protección recomendada en Chile',
    text: 'MINVU recomienda incorporar mallas en balcones y ventanas cuando viven niños o personas que requieren mayor cuidado, manteniendo siempre la supervisión responsable.',
  },
  {
    number: '02',
    title: 'Reglas del edificio primero',
    text: 'En departamentos conviene revisar el reglamento y consultar a la administración antes de intervenir balcones, fachadas o puntos visibles desde el exterior.',
  },
  {
    number: '03',
    title: 'Evaluación del espacio real',
    text: 'El soporte, el contorno, la apertura de ventanas y el uso cotidiano determinan la fijación y el alcance del trabajo. Eso debe quedar claro antes de instalar.',
  },
]

const principleIcons = [ShieldCheck, Building2, ClipboardCheck]

export function SafetyFramework() {
  return (
    <section className="section safety-section" id="seguridad">
      <div className="container">
        <div className="safety-layout">
          <div className="safety-intro">
            <p className="section-kicker">Seguridad en Chile</p>
            <h2>Proteger primero. Instalar con criterio.</h2>
            <p>
              Para una familia importa entender qué se protegerá, cómo se usa el espacio y qué condiciones tiene
              el edificio. Traducimos esas preguntas en una recomendación clara y una cotización comprensible.
            </p>
            <div className="safety-status">
              <span className="status-mark" aria-hidden="true"><Info size={18} /></span>
              <div>
                <strong>Antes de cotizar</strong>
                <span>Cuéntanos si es casa o departamento, quién necesita protección y si la administración tiene reglas para balcones o fachadas.</span>
              </div>
            </div>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => {
              const PrincipleIcon = principleIcons[index]
              return (
              <article className="principle-card" key={principle.title}>
                <div className="principle-card__meta">
                  <span className="principle-icon" aria-hidden="true"><PrincipleIcon size={21} strokeWidth={1.8} /></span>
                  <small>{principle.number}</small>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
              )
            })}
          </div>
        </div>

        <div className="safety-proof-grid">
          <article className="law-project-card">
            <span className="law-project-card__icon" aria-hidden="true"><Landmark size={23} /></span>
            <div>
              <p className="law-project-card__kicker">Proyecto en tramitación</p>
              <h3>Proyecto “Ley Valentín”</h3>
              <p>Busca reforzar la prevención de caídas desde edificios. Su estado oficial consultado en julio de 2026 es Comisión Mixta; todavía no corresponde presentarlo como ley vigente.</p>
            </div>
            <a href={leyValentinUrl} target="_blank" rel="noopener noreferrer">
              Revisar avance oficial <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </article>

          <div className="sources-panel">
            <div>
              <p className="sources-panel__label">Información útil en Chile</p>
              <p>Lecturas oficiales para familias y comunidades.</p>
            </div>
            <ul>
              {officialSources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer">
                    {source.label}<span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
