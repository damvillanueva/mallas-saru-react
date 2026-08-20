import webpayLogo from '../assets/img/1.Webpay_FN_300px.svg'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'
import { navLinks, services, whatsappQuoteUrl } from '../data/siteData'

const mapUrl = 'https://www.google.com/maps/place/Mallas+Saru/@-33.5200935,-70.5849707,17z/'

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3 gap-2">
              <img src={logo} alt="Logotipo de Mallas Saru" className="footer-logo" />
              <h2 className="footer-title h4 mb-0">Mallas Saru</h2>
            </div>
            <p>
              Expertos en protección de altura. Instalación y recambio profesional de mallas de seguridad para
              balcones, ventanas y áreas de riesgo.
            </p>
            <div className="social-links mt-4" aria-label="Redes sociales">
              <a href="https://www.facebook.com/Mallassaru" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/mallas.saru/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </div>
            <img src={webpayLogo} className="webpay-logo mt-4" alt="Aceptamos pagos con Webpay" />
          </div>
          <div className="col-lg-2 col-md-6">
            <h2 className="footer-title h4">Enlaces</h2>
            <nav className="footer-links" aria-label="Enlaces del pie de página">
              {navLinks.map((link) => (
                <a href={link.href} key={link.href}>{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="col-lg-3 col-md-6">
            <h2 className="footer-title h4">Servicios</h2>
            <nav className="footer-links" aria-label="Servicios">
              {services.map((service) => (
                <a href={`#${service.id}`} key={service.id}>{service.title}</a>
              ))}
            </nav>
          </div>
          <div className="col-lg-3">
            <h2 className="footer-title h4">Contacto</h2>
            <address className="footer-contact">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2" aria-hidden="true" />
                <a href={mapUrl} target="_blank" rel="noreferrer">Sta. Adriana 1627, La Florida, Región Metropolitana</a>
              </p>
              <p className="mb-2">
                <i className="fas fa-phone-alt me-2" aria-hidden="true" />
                <a href="tel:+56972022406">+56 9 7202 2406</a>
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope me-2" aria-hidden="true" />
                <a href="mailto:mallas.saru.spa@gmail.com">mallas.saru.spa@gmail.com</a>
              </p>
              <p className="mb-0">
                <i className="fab fa-whatsapp me-2" aria-hidden="true" />
                <a href={whatsappQuoteUrl} target="_blank" rel="noreferrer">WhatsApp</a>
              </p>
            </address>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-12 text-center">
            <p className="mb-0">© {new Date().getFullYear()} Mallas Saru. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
