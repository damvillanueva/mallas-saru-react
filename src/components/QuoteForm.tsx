import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const formAction = 'https://formspree.io/f/maqdyyak'

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('submitting')

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error(`Formspree respondió con estado ${response.status}`)

      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('No fue posible enviar la cotización:', error)
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <header className="section-heading text-center">
          <p className="section-kicker">Conversemos sobre tu proyecto</p>
          <h2 className="section-title">Solicita tu Cotización</h2>
          <p className="text-muted">Completa el formulario y nos pondremos en contacto a la brevedad</p>
        </header>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form-container">
              <form onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
                <div className="row">
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="quote-name">Nombre completo</label>
                    <input id="quote-name" type="text" name="name" className="form-control" placeholder="Nombre completo" autoComplete="name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="quote-email">Correo electrónico</label>
                    <input id="quote-email" type="email" name="email" className="form-control" placeholder="Correo electrónico" autoComplete="email" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="quote-phone">Teléfono</label>
                    <input id="quote-phone" type="tel" name="phone" className="form-control" placeholder="Teléfono" autoComplete="tel" required />
                  </div>
                  <div className="col-md-6">
                    <label className="visually-hidden" htmlFor="quote-service">Servicio de interés</label>
                    <select id="quote-service" name="service" className="form-select form-control" defaultValue="">
                      <option value="">Servicio de interés</option>
                      <option value="mallas_edificios">Mallas para Edificios</option>
                      <option value="mallas_residenciales">Mallas Residenciales</option>
                      <option value="mallas_institucionales">Mallas Institucionales</option>
                      <option value="convenios">Convenios</option>
                      <option value="mantenimiento">Mantenimiento</option>
                    </select>
                  </div>
                </div>
                <label className="visually-hidden" htmlFor="quote-message">Describe tu proyecto</label>
                <textarea id="quote-message" className="form-control" name="message" rows={5} placeholder="Describe tu proyecto o necesidades" required />
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                    {status === 'submitting' && <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />}
                    {status === 'submitting' ? 'Enviando…' : 'Enviar solicitud'}
                  </button>
                </div>
              </form>
              <div className="form-status" aria-live="polite">
                {status === 'success' && (
                  <p className="alert alert-success mb-0 mt-4">¡Gracias! Tu solicitud fue enviada correctamente.</p>
                )}
                {status === 'error' && (
                  <p className="alert alert-danger mb-0 mt-4">
                    No pudimos enviar la solicitud. Intenta nuevamente o contáctanos por WhatsApp.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
