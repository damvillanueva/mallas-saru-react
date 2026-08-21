import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Sun, Venus } from 'lucide-react'
import companyImage from '../assets/img/mallas_Saru.jpg'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'

const strengths = [
  {
    icon: BadgeCheck,
    title: 'Profesionales certificados',
    text: 'Equipo técnico capacitado para ejecutar instalaciones cuidadas y consistentes.',
  },
  {
    icon: Sun,
    title: 'Materiales premium',
    text: 'Materiales con respaldo técnico, preparados para exposición a intemperie y rayos UV.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía en instalaciones',
    text: 'Informamos el alcance de la garantía y las recomendaciones de cuidado de cada trabajo.',
  },
  {
    icon: Clock3,
    title: 'Instalación coordinada',
    text: 'Planificamos cada visita para trabajar con orden y reducir las molestias en el espacio.',
  },
]

export function About() {
  return (
    <section className="section about-section" id="nosotros">
      <div className="container">
        <div className="about-layout">
          <div className="about-media">
            <img src={companyImage} alt="Malla de seguridad instalada por Mallas Saru en un balcón residencial" loading="lazy" />
            <div className="about-years" aria-label="Más de diez años de experiencia">
              <strong>+10</strong><span>años protegiendo espacios</span>
            </div>
            <div className="about-logo-card">
              <img src={logo} alt="Mallas Saru" />
              <p><strong>Empresa chilena</strong><span>Tu seguridad, en nuestras manos.</span></p>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-kicker">Sobre Mallas Saru</p>
            <h2>Más de 10 años cuidando lo que más importa.</h2>
            <p className="about-lead">
              Nos especializamos en soluciones de seguridad en altura para proteger familias, mascotas,
              comunidades, equipos de trabajo y patrimonio.
            </p>
            <div className="women-led-note">
              <span aria-hidden="true"><Venus size={20} /></span>
              <p><strong>Empresa gestionada y dirigida por una mujer</strong><small>Liderazgo femenino, cercanía y excelencia en cada proyecto.</small></p>
            </div>

            <div className="about-strengths">
              {strengths.map(({ icon: StrengthIcon, title, text }) => (
                <article className="about-strength" key={title}>
                  <span aria-hidden="true"><StrengthIcon size={20} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>

            <div className="about-commitment">
              <div>
                <p>Nuestro compromiso</p>
                <h3>Una solución responsable para cada proyecto.</h3>
              </div>
              <p>
                Escuchamos tus necesidades y proponemos una alternativa acorde con el espacio y el presupuesto,
                trabajando con responsabilidad, puntualidad y transparencia.
              </p>
            </div>

            <a className="text-link" href="#contacto">Conversemos sobre tu espacio <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
