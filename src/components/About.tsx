import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Sun, Venus } from 'lucide-react'
import companyImage from '../assets/img/mallas_Saru.webp'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'

const strengths = [
  {
    icon: BadgeCheck,
    title: 'Profesionales certificados',
    text: 'Equipo técnico capacitado y certificado para realizar cada instalación.',
  },
  {
    icon: Sun,
    title: 'Materiales premium',
    text: 'Mallas resistentes a la intemperie y a la exposición a rayos UV.',
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
              En Mallas Saru llevamos más de 10 años instalando soluciones de seguridad en altura para familias,
              mascotas, comunidades, trabajadores y patrimonio. Utilizamos materiales de primera calidad que
              cumplen estándares internacionales de seguridad y cuentan con certificación de resistencia. Todas
              nuestras instalaciones tienen garantía.
            </p>
            <div className="women-led-note">
              <span aria-hidden="true"><Venus size={20} /></span>
              <p><strong>Empresa liderada por una mujer</strong><small>Presente en la gestión y también en terreno cuando el proyecto lo requiere.</small></p>
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
                <p>Nuestra historia</p>
                <h3>Un oficio que creció junto a sus clientes.</h3>
              </div>
              <p>
                Mallas Saru nació de la necesidad de salir adelante, trabajando primero en aluminio, ventanas y
                espejos. Las recomendaciones trajeron más proyectos y se sumaron personas de plena confianza. Los
                llamamos colaboradores porque han sido parte esencial de nuestro crecimiento. Hoy ese equipo se
                especializa en mallas de seguridad y mantiene una idea sencilla: cliente satisfecho, trabajo bien hecho.
              </p>
            </div>

            <a className="text-link" href="#contacto">Conversemos sobre tu espacio <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
