import { ArrowUpRight, Building2, ClipboardCheck, Landmark, ShieldCheck } from 'lucide-react'
import familyImage from '../assets/img/trabajos/clientes_Satisfechos/1.webp'
import petImage from '../assets/img/trabajos/clientes_Satisfechos/2.webp'
import { officialSources } from '../data/siteData'

const leyValentinUrl =
  'https://www.camara.cl/legislacion/sala_sesiones/votacion_detalle.aspx?prmIdVotacion=89745'

const principles = [
  {
    number: '01',
    title: 'Pensada para cada familia',
    text: 'Consideramos quién usa el espacio —niños, mascotas o personas que necesitan mayor cuidado— para orientar una solución adecuada.',
  },
  {
    number: '02',
    title: 'Coordinada con tu edificio',
    text: 'Antes de intervenir balcones o fachadas, revisamos contigo las condiciones del lugar y los requisitos de la administración.',
  },
  {
    number: '03',
    title: 'Evaluada en el espacio real',
    text: 'El soporte, el contorno y el uso cotidiano definen las fijaciones, las terminaciones y el alcance que quedará indicado en la cotización.',
  },
]

const principleIcons = [ShieldCheck, Building2, ClipboardCheck]

export function SafetyFramework() {
  return (
    <section className="section safety-section" id="seguridad">
      <div className="container">
        <div className="safety-layout">
          <div className="safety-intro">
            <div className="safety-photo safety-photo--family">
              <img src={familyImage} alt="Balcón familiar protegido con malla de seguridad" loading="lazy" />
              <span>Protección para niños</span>
            </div>
            <div className="safety-photo safety-photo--pet">
              <img src={petImage} alt="Gato en una ventana protegida con malla de seguridad" loading="lazy" />
              <span>Espacios para mascotas</span>
            </div>
            <div className="safety-photo-note">
              <strong>Trabajos reales de Mallas Saru</strong>
              <span>Soluciones integradas al uso cotidiano del hogar.</span>
            </div>
          </div>

          <div className="safety-content">
            <p className="section-kicker">Seguridad para la vida en casa</p>
            <h2>Una protección cercana, pensada para quienes más quieres.</h2>
            <p className="safety-content__lead">
              Cada hogar y cada comunidad tienen necesidades distintas. Por eso unimos evaluación técnica,
              materiales certificados y una conversación clara antes de instalar.
            </p>
            <div className="principles-grid">
              {principles.map((principle, index) => {
                const PrincipleIcon = principleIcons[index]
                return (
                <article className="principle-card" key={principle.title}>
                  <div className="principle-card__meta">
                    <span className="principle-icon" aria-hidden="true"><PrincipleIcon size={21} strokeWidth={1.8} /></span>
                    <small>{principle.number}</small>
                  </div>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </article>
                )
              })}
            </div>
            <a className="text-link safety-quote-link" href="#contacto">Cuéntanos qué necesitas proteger <ArrowUpRight aria-hidden="true" size={17} /></a>
          </div>
        </div>

        <div className="safety-proof-grid">
          <article className="law-project-card">
            <span className="law-project-card__icon" aria-hidden="true"><Landmark size={23} /></span>
            <div>
              <p className="law-project-card__kicker">Proyecto en tramitación</p>
              <h3>Proyecto “Ley Valentín”</h3>
              <p>Busca reforzar la prevención de caídas desde edificios. Su tramitación continúa en Comisión Mixta; el 12 de agosto de 2026 la Cámara aprobó su integración. Todavía no corresponde presentarlo como ley vigente.</p>
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
