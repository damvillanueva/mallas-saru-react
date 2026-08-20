import companyImage from '../assets/img/mallas_Saru.jpg'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'
import { features } from '../data/siteData'

export function About() {
  return (
    <section className="section bg-light" id="nosotros">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="section-kicker">Más de 10 años de experiencia</p>
            <h2 className="section-title section-title--left">Sobre Nosotros</h2>
            <p className="mb-4">
              En <strong>Mallas Saru</strong> nos especializamos en soluciones de seguridad en altura. Nuestra
              misión es proteger lo que más importa: tu familia, tus mascotas y tu patrimonio.
            </p>
            <p>
              Utilizamos materiales de primera calidad que cumplen altos estándares de seguridad. Todas nuestras
              instalaciones cuentan con garantía y certificación de resistencia.
            </p>
            <div className="women-led-card">
              <div className="women-led-icon" aria-hidden="true">
                <i className="fas fa-user-tie" />
              </div>
              <div>
                <strong>Empresa gestionada y dirigida por una mujer.</strong>
                <span>Comprometida con el liderazgo femenino y la excelencia en cada proyecto.</span>
              </div>
            </div>
            <div className="row mt-4">
              {features.map((feature) => (
                <div className="col-md-6 mb-3" key={feature.title}>
                  <div className="feature-item">
                    <i className={`fas ${feature.icon} fa-2x`} aria-hidden="true" />
                    <div>
                      <h3 className="h5">{feature.title}</h3>
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <article className="about-card p-4 bg-white rounded shadow-sm">
              <div className="ratio ratio-16x9 position-relative img-container">
                <img src={companyImage} alt="Trabajo de instalación de Mallas Saru" loading="lazy" className="rounded main-img" />
                <img src={logo} alt="" className="about-logo" />
              </div>
              <div className="mt-4">
                <h3 className="h4">Nuestro Compromiso</h3>
                <p>
                  Cada proyecto es único. Por eso ofrecemos soluciones personalizadas que se adaptan a tus
                  necesidades de seguridad y presupuesto.
                </p>
                <p className="mb-0">
                  Trabajamos con responsabilidad, puntualidad y transparencia para asegurar tu satisfacción.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
