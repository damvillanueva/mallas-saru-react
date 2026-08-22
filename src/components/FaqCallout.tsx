import { ArrowRight, CircleHelp } from 'lucide-react'

type FaqCalloutProps = {
  onOpen: () => void
}

export function FaqCallout({ onOpen }: FaqCalloutProps) {
  return (
    <section className="faq-callout-section" id="preguntas-frecuentes">
      <div className="container">
        <div className="faq-callout">
          <span className="faq-callout__icon" aria-hidden="true"><CircleHelp size={28} /></span>
          <div className="faq-callout__copy">
            <p>Respuestas claras antes de instalar</p>
            <h2>¿Tienes dudas sobre la cotización, los materiales o el mantenimiento?</h2>
            <span>Reunimos las preguntas que más nos hacen las familias y comunidades.</span>
          </div>
          <button type="button" onClick={onOpen}>
            Ver preguntas frecuentes <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
