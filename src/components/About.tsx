import { ArrowRight, Check } from 'lucide-react'
import companyImage from '../assets/img/mallas_Saru.jpg'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'

const commitments = [
  'Cotización con alcance definido',
  'Imágenes de trabajos reales',
  'Comunicación directa por WhatsApp',
  'Orientación de cuidado y postventa',
]

export function About() {
  return (
    <section className="section about-section" id="nosotros">
      <div className="container">
        <div className="about-layout">
          <div className="about-media">
            <img src={companyImage} alt="Instalación residencial realizada por Mallas Saru" loading="lazy" />
            <div className="about-logo-card">
              <img src={logo} alt="Mallas Saru" />
              <p><strong>Empresa chilena</strong><span>Gestionada y dirigida por una mujer</span></p>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-kicker">La cercanía de siempre, con un estándar más claro</p>
            <h2>Protegemos hogares sin perder el trato humano.</h2>
            <p className="about-lead">
              Mallas Saru nació como un servicio cercano para familias, mascotas y comunidades. Esta nueva etapa
              mantiene esa identidad y suma más orden en la evaluación, la instalación y la postventa.
            </p>
            <p>
              Cada proyecto cambia según el espacio. Por eso evitamos promesas genéricas y recomendamos revisar
              soporte, exposición, uso, material, fijaciones y mantenimiento antes de tomar una decisión.
            </p>
            <ul className="commitment-list">
              {commitments.map((commitment) => (
                <li key={commitment}><Check aria-hidden="true" size={16} />{commitment}</li>
              ))}
            </ul>
            <a className="text-link" href="#contacto">Conversemos sobre tu espacio <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
