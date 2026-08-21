import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { whatsappQuoteUrl } from '../data/siteData'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span /> Instalación e inspección en Santiago
          </p>
          <h1>Protección en altura, instalada con criterio.</h1>
          <p className="hero-lead">
            Mallas de seguridad para balcones, ventanas y espacios de riesgo. Conservamos la vista y añadimos un
            proceso claro de evaluación, instalación y postventa.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" size={19} />
              Cotizar por WhatsApp
            </a>
            <a className="button button--ghost" href="#protocolo">
              Conocer el protocolo
            </a>
          </div>
          <ul className="hero-facts" aria-label="Características del servicio">
            <li><strong>+10 años</strong><span>de experiencia declarada</span></li>
            <li><strong>RM</strong><span>atención en Santiago</span></li>
            <li><strong>Postventa</strong><span>orientación y seguimiento</span></li>
          </ul>
        </div>

        <aside className="hero-assurance" aria-label="Compromiso de información responsable">
          <span className="assurance-icon" aria-hidden="true"><ShieldCheck size={23} /></span>
          <p className="assurance-kicker">Compromiso Saru</p>
          <h2>Seguridad que se puede explicar.</h2>
          <p>
            No prometemos resistencias ni certificaciones sin respaldo. Cada propuesta debe identificar material,
            soporte, fijaciones, alcance de garantía y mantenimiento recomendado.
          </p>
          <a href="#seguridad">Ver marco de seguridad <ArrowRight aria-hidden="true" size={17} /></a>
        </aside>
      </div>
    </section>
  )
}
