import { ArrowUpRight, BadgePercent, CircleHelp, CreditCard, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Star } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import webpayLogo from '../assets/img/1.Webpay_FN_300px.svg'
import logo from '../assets/img/logotipo_MallasSaru_Chile.jpg'
import { googleBusinessUrl, navLinks, services, whatsappConvenioUrl, whatsappFooterUrl } from '../data/siteData'

const mapUrl = googleBusinessUrl

type FooterProps = {
  onOpenFaq: () => void
  onOpenGuarantee: () => void
}

export function Footer({ onOpenFaq, onOpenGuarantee }: FooterProps) {
  return (
    <footer className="site-footer" id="pie-de-pagina">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p>Conversemos sobre tu espacio</p>
            <h2>Cuéntanos qué necesitas proteger y te ayudamos a cotizar.</h2>
          </div>
          <a className="button button--primary" href={whatsappFooterUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" size={18} /> Cotizar por WhatsApp
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-company">
            <div className="footer-brand">
              <img src={logo} alt="Logotipo de Mallas Saru" loading="lazy" />
              <div><strong>Mallas Saru</strong><span>Tu seguridad, en nuestras manos.</span></div>
            </div>
            <p>Instalación, inspección y recambio de mallas para balcones, ventanas y espacios de riesgo en la zona central.</p>
            <div className="social-links" aria-label="Redes sociales">
              <a className="social-link social-link--facebook" href="https://www.facebook.com/Mallassaru" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></a>
              <a className="social-link social-link--instagram" href="https://www.instagram.com/mallas.saru/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram aria-hidden="true" /></a>
              <span className="social-link social-link--linkedin social-link--disabled" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" /></span>
            </div>
            <div className="footer-payment">
              <span><CreditCard aria-hidden="true" size={16} /> Medios de pago</span>
              <img src={webpayLogo} className="webpay-logo" alt="Aceptamos pagos con Webpay" loading="lazy" />
            </div>
          </div>

          <div>
            <h2>Explora</h2>
            <nav className="footer-links" aria-label="Enlaces del pie de página">
              {navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div>
            <h2>Soluciones</h2>
            <nav className="footer-links" aria-label="Servicios">
              {services.map((service) => <a href={`#${service.id}`} key={service.id}>{service.title}</a>)}
            </nav>
          </div>

          <div>
            <h2>Contacto</h2>
            <address className="footer-contact">
              <a href="tel:+56972022406"><Phone aria-hidden="true" size={15} />+56 9 7202 2406</a>
              <a href="mailto:mallas.saru.spa@gmail.com"><Mail aria-hidden="true" size={15} />mallas.saru.spa@gmail.com</a>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" size={15} />La Florida, Región Metropolitana</a>
            </address>

            <div className="footer-trust-links">
              <a href="#resenas">
                <Star aria-hidden="true" size={17} fill="currentColor" />
                <span><strong>Opiniones reales</strong><small>Ver reseñas de Google</small></span>
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a href={whatsappConvenioUrl} target="_blank" rel="noopener noreferrer">
                <BadgePercent aria-hidden="true" size={18} />
                <span><strong>Tarjeta Vecino</strong><small>Consultar beneficio</small></span>
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <button type="button" onClick={onOpenGuarantee}>
                <ShieldCheck aria-hidden="true" size={18} />
                <span><strong>Garantía de instalación</strong><small>Revisar cobertura</small></span>
                <ArrowUpRight aria-hidden="true" size={15} />
              </button>
              <button type="button" onClick={onOpenFaq}>
                <CircleHelp aria-hidden="true" size={18} />
                <span><strong>Preguntas frecuentes</strong><small>Resolver dudas habituales</small></span>
                <ArrowUpRight aria-hidden="true" size={15} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mallas Saru SpA. Todos los derechos reservados.</p>
          <p>Cobertura: RM, VI Región y litoral central de la V Región.</p>
        </div>
      </div>
    </footer>
  )
}
