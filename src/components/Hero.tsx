import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { whatsappHeroUrl } from '../data/siteData'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span /> RM · VI Región · litoral central de la V Región
          </p>
          <h1>Protección en altura, instalada con criterio.</h1>
          <p className="hero-lead">
            Mallas de seguridad para balcones, ventanas y espacios de riesgo. Conservamos la vista y añadimos un
            proceso claro de evaluación, instalación y postventa.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href={whatsappHeroUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" size={19} />
              Cotizar por WhatsApp
            </a>
            <a className="button button--ghost" href="#trabajos">
              Ver trabajos reales
            </a>
          </div>
          <ul className="hero-facts" aria-label="Características del servicio">
            <li><strong>+10 años</strong><span>de experiencia en terreno</span></li>
            <li><strong>3 zonas</strong><span>cobertura regional</span></li>
            <li><strong>Postventa</strong><span>orientación y seguimiento</span></li>
          </ul>
        </div>

        <aside className="hero-assurance" aria-label="Compromiso de información responsable">
          <span className="assurance-icon" aria-hidden="true"><ShieldCheck size={23} /></span>
          <p className="assurance-kicker">Compromiso Saru</p>
          <h2>Materiales certificados y trabajo bien informado.</h2>
          <p>
            Trabajamos con materiales certificados y respaldo técnico. Cada propuesta identifica la solución,
            el soporte, las fijaciones, la garantía y el mantenimiento recomendado para el espacio.
          </p>
          <a href="#seguridad">Ver marco de seguridad <ArrowRight aria-hidden="true" size={17} /></a>
        </aside>
      </div>
    </section>
  )
}
