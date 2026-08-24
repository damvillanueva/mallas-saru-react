import { ArrowUpRight, BadgePercent, Check, MessageCircle } from 'lucide-react'
import convenioImage from '../assets/img/display/convenio.webp'
import { sanMiguelConvenioUrl, whatsappConvenioUrl } from '../data/siteData'

export function Convenios() {
  return (
    <section className="section convenio-section" id="convenios">
      <div className="container">
        <div className="convenio-layout">
          <div className="convenio-media">
            <img src={convenioImage} alt="Convenio de Mallas Saru con Tarjeta Vecino Vive La Florida" loading="lazy" />
            <span><BadgePercent aria-hidden="true" size={19} /> Convenio vigente</span>
          </div>

          <div className="convenio-copy">
            <p className="section-kicker">Beneficios para vecinos</p>
            <h2>Tu Tarjeta Vecino también puede proteger tu hogar.</h2>
            <p className="convenio-lead">
              Mallas Saru participa en convenios comunales para facilitar la instalación y el recambio de mallas de
              seguridad. Indica tu comuna y presenta tu tarjeta vigente al solicitar la cotización.
            </p>

            <div className="convenio-benefits">
              <article>
                <span aria-hidden="true"><Check size={17} /></span>
                <div><strong>Vive La Florida</strong><small>Consulta el beneficio y sus condiciones vigentes al cotizar.</small></div>
              </article>
              <article>
                <span aria-hidden="true"><Check size={17} /></span>
                <div><strong>Tarjeta Vecino San Miguel</strong><small>Beneficio municipal publicado para instalación y recambio.</small></div>
              </article>
            </div>

            <div className="convenio-actions">
              <a className="button button--primary" href={whatsappConvenioUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" size={18} /> Consultar mi descuento
              </a>
              <a className="convenio-secondary" href={sanMiguelConvenioUrl} target="_blank" rel="noopener noreferrer">
                Ver convenio San Miguel <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
            <p className="convenio-note">Beneficios sujetos a acreditación, cobertura y condiciones informadas al momento de cotizar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
