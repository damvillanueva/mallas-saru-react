import type { FormEvent } from 'react'
import { ArrowRight, ClipboardCheck, MessageCircle } from 'lucide-react'
import { whatsappQuoteUrl } from '../data/siteData'

const whatsappNumber = '56972022406'

const serviceLabels: Record<string, string> = {
  balcon: 'Balcón o terraza',
  ventana: 'Ventana',
  mascotas: 'Espacio para mascotas',
  mantencion: 'Inspección o recambio',
  otro: 'Otro espacio',
}

export function QuoteForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const commune = String(data.get('commune') ?? '').trim()
    const service = String(data.get('service') ?? '')
    const detail = String(data.get('message') ?? '').trim()
    const message = [
      `Hola, soy ${name}. Quiero solicitar una evaluación de Mallas Saru.`,
      `Comuna: ${commune}`,
      `Espacio: ${serviceLabels[service] ?? 'Por definir'}`,
      `Detalle: ${detail}`,
    ].join('\n')

    window.location.assign(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`)
  }

  return (
    <section className="section quote-section" id="contacto">
      <div className="container">
        <div className="quote-layout">
          <div className="quote-intro">
            <p className="section-kicker section-kicker--light">Cotización orientada al riesgo</p>
            <h2>Cuéntanos qué necesitas proteger.</h2>
            <p>
              Con unos pocos datos podemos preparar una primera evaluación. Para afinarla, envíanos fotografías y
              medidas aproximadas por WhatsApp.
            </p>
            <ol className="quote-steps">
              <li><span>1</span><div><strong>Indica el espacio</strong><small>Balcón, ventana, terraza u otro punto de riesgo.</small></div></li>
              <li><span>2</span><div><strong>Cuéntanos para quién</strong><small>Niños, mascotas, personas mayores o uso institucional.</small></div></li>
              <li><span>3</span><div><strong>Envía fotos y comuna</strong><small>Te orientaremos sobre visita, alcance y siguientes pasos.</small></div></li>
            </ol>
            <a className="button button--white" href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" size={18} /> Enviar fotos por WhatsApp
            </a>
          </div>

          <div className="quote-card">
            <div className="quote-card__header">
              <span aria-hidden="true"><ClipboardCheck size={21} /></span>
              <div><p>Solicitud inicial</p><small>Respondemos con información clara y sin compromiso.</small></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field-group">
                  <label htmlFor="quote-name">Nombre</label>
                  <input id="quote-name" type="text" name="name" placeholder="Tu nombre" autoComplete="name" minLength={2} maxLength={80} required />
                </div>
                <div className="field-group">
                  <label htmlFor="quote-commune">Comuna</label>
                  <input id="quote-commune" type="text" name="commune" placeholder="Ej. La Florida" autoComplete="address-level2" minLength={2} maxLength={80} required />
                </div>
                <div className="field-group field-group--wide">
                  <label htmlFor="quote-service">Espacio a proteger</label>
                  <select id="quote-service" name="service" defaultValue="" required>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="balcon">Balcón o terraza</option>
                    <option value="ventana">Ventana</option>
                    <option value="mascotas">Espacio para mascotas</option>
                    <option value="mantencion">Inspección o recambio</option>
                    <option value="otro">Otro espacio</option>
                  </select>
                </div>
                <div className="field-group field-group--wide">
                  <label htmlFor="quote-message">¿Qué riesgo necesitas controlar?</label>
                  <textarea id="quote-message" name="message" rows={4} placeholder="Describe brevemente el lugar y quién necesita protección." minLength={10} maxLength={700} required />
                </div>
              </div>
              <button type="submit" className="quote-submit">
                Continuar en WhatsApp <ArrowRight aria-hidden="true" size={17} />
              </button>
            </form>
            <p className="privacy-note" id="privacidad">
              Este sitio no almacena lo que escribes. Al continuar, WhatsApp abrirá un mensaje preparado para que tú decidas si lo envías.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
