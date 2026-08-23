import { useState, type FormEvent } from 'react'
import { ArrowRight, Building2, Check, Home, Images, MessageCircle, MessagesSquare } from 'lucide-react'
import { whatsappNumber, whatsappPhotosUrl } from '../data/siteData'

const serviceLabels: Record<string, string> = {
  balcon: 'Balcón o terraza',
  ventana: 'Ventana',
  mascotas: 'Espacio para mascotas',
  multiple: 'Varios departamentos o áreas comunes',
  mantencion: 'Inspección o recambio',
  otro: 'Otro espacio',
}

const workTypeLabels: Record<string, string> = {
  nueva: 'Instalación nueva',
  inspeccion: 'Inspección o mantenimiento',
  recambio: 'Recambio de malla existente',
}

const projectTypeLabels: Record<string, string> = {
  hogar: 'Vivienda particular',
  condominio: 'Condominio o administración',
  proyecto: 'Empresa o proyecto inmobiliario',
}

const detailPlaceholders: Record<string, string> = {
  hogar: 'Ej.: Departamento en La Florida. Necesito proteger dos balcones porque vivimos con niños y una mascota.',
  condominio: 'Ej.: Condominio nuevo en Ñuñoa. Necesitamos cotizar balcones para 40 departamentos y áreas comunes.',
  proyecto: 'Ej.: Proyecto inmobiliario de tres torres. Necesitamos evaluar balcones y ventanas para varios departamentos.',
}

const projectTypes = [
  { value: 'hogar', title: 'Mi hogar', detail: 'Casa o departamento', Icon: Home },
  { value: 'condominio', title: 'Condominio', detail: 'Administración o comunidad', Icon: Building2 },
  { value: 'proyecto', title: 'Empresa o proyecto', detail: 'Varios departamentos', Icon: Images },
]

export function QuoteForm() {
  const [projectType, setProjectType] = useState('hogar')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const commune = String(data.get('commune') ?? '').trim()
    const contactType = String(data.get('projectType') ?? '')
    const service = String(data.get('service') ?? '')
    const workType = String(data.get('workType') ?? '')
    const detail = String(data.get('message') ?? '').trim()
    const message = [
      `Hola, soy ${name}. Quiero solicitar una evaluación de Mallas Saru.`,
      '',
      'Origen: Formulario web',
      `Contacto: ${projectTypeLabels[contactType] ?? 'Por definir'}`,
      `Teléfono: ${phone}`,
      email ? `Correo: ${email}` : null,
      `Comuna: ${commune}`,
      `Tipo de trabajo: ${workTypeLabels[workType] ?? 'Por definir'}`,
      `Espacio: ${serviceLabels[service] ?? 'Por definir'}`,
      `Descripción: ${detail}`,
    ].filter(Boolean).join('\n')

    window.location.assign(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`)
  }

  return (
    <section className="section quote-section" id="contacto">
      <div className="container">
        <div className="quote-layout">
          <div className="quote-intro">
            <p className="section-kicker section-kicker--light">Cotiza con nosotros</p>
            <h2>Cuéntanos sobre tu espacio o proyecto.</h2>
            <p>
              Atendemos hogares, condominios, administraciones y proyectos que necesitan proteger varios
              departamentos. Déjanos los datos principales y continuamos por WhatsApp.
            </p>
            <ul className="quote-points">
              <li><Check aria-hidden="true" size={16} /><span><strong>Indica dónde</strong><small>Comuna y tipo de espacio.</small></span></li>
              <li><Check aria-hidden="true" size={16} /><span><strong>Cuéntanos qué necesitas</strong><small>Instalación, revisión o recambio.</small></span></li>
              <li><Check aria-hidden="true" size={16} /><span><strong>Describe el alcance</strong><small>Incluye cuántos balcones, ventanas o departamentos son.</small></span></li>
            </ul>
            <a className="button button--white" href={whatsappPhotosUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" size={18} /> Enviar fotos por WhatsApp
            </a>
          </div>

          <div className="quote-card">
            <div className="quote-card__header">
              <span aria-hidden="true"><MessagesSquare size={21} /></span>
              <div>
                <h3>Partamos por lo esencial</h3>
                <p>Completa los datos y abriremos WhatsApp con el mensaje listo.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <fieldset className="project-type-group">
                <legend>¿Para quién necesitas cotizar?</legend>
                <div className="project-type-options">
                  {projectTypes.map(({ value, title, detail, Icon }) => (
                    <div className="project-type-option" key={value}>
                      <input
                        id={`quote-project-${value}`}
                        type="radio"
                        name="projectType"
                        value={value}
                        checked={projectType === value}
                        onChange={() => setProjectType(value)}
                      />
                      <label htmlFor={`quote-project-${value}`}>
                        <Icon aria-hidden="true" size={18} />
                        <span><strong>{title}</strong><small>{detail}</small></span>
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="form-grid">
                <div className="field-group">
                  <label htmlFor="quote-name">Nombre</label>
                  <input id="quote-name" type="text" name="name" placeholder="¿Cómo te llamas?" autoComplete="name" minLength={2} maxLength={80} required />
                </div>
                <div className="field-group">
                  <label htmlFor="quote-phone">WhatsApp o teléfono</label>
                  <input id="quote-phone" type="tel" name="phone" placeholder="+56 9 1234 5678" autoComplete="tel" inputMode="tel" pattern="[0-9+()\s-]{8,24}" title="Ingresa un teléfono válido, usando números, espacios, paréntesis, guion o signo +." minLength={8} maxLength={24} required />
                </div>
                <div className="field-group">
                  <label htmlFor="quote-email">Correo <span className="field-optional">(opcional)</span></label>
                  <input id="quote-email" type="email" name="email" placeholder="nombre@correo.cl" autoComplete="email" maxLength={120} />
                </div>
                <div className="field-group">
                  <label htmlFor="quote-commune">Comuna</label>
                  <input id="quote-commune" type="text" name="commune" placeholder="Ej. La Florida" autoComplete="address-level2" minLength={2} maxLength={80} required />
                </div>
                <div className="field-group">
                  <label htmlFor="quote-work-type">¿Qué necesitas?</label>
                  <select id="quote-work-type" name="workType" defaultValue="" required>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="nueva">Instalación nueva</option>
                    <option value="inspeccion">Inspección o mantenimiento</option>
                    <option value="recambio">Recambio de malla existente</option>
                  </select>
                </div>
                <div className="field-group">
                  <label htmlFor="quote-service">Espacio a proteger</label>
                  <select id="quote-service" name="service" defaultValue="" required>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="balcon">Balcón o terraza</option>
                    <option value="ventana">Ventana</option>
                    <option value="mascotas">Espacio para mascotas</option>
                    <option value="multiple">Varios departamentos o áreas comunes</option>
                    <option value="mantencion">Inspección o recambio</option>
                    <option value="otro">Otro espacio</option>
                  </select>
                </div>
                <div className="field-group field-group--wide">
                  <label htmlFor="quote-message">Cuéntanos un poco más</label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    placeholder={detailPlaceholders[projectType]}
                    minLength={15}
                    maxLength={1000}
                    required
                  />
                  <small className="field-hint">Puedes incluir cantidad de departamentos, balcones o ventanas, medidas aproximadas y quién necesita protección.</small>
                </div>
              </div>
              <button type="submit" className="quote-submit">
                Preparar mensaje en WhatsApp <ArrowRight aria-hidden="true" size={17} />
              </button>
            </form>
            <p className="privacy-note" id="privacidad">
              No guardamos estos datos. Tú decides si envías el mensaje cuando se abra WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
