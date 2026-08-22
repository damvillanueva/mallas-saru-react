import { useEffect, useRef } from 'react'
import { Check, Mail, MessageCircle, ShieldCheck, X } from 'lucide-react'
import { whatsappQuoteUrl } from '../data/siteData'

type GuaranteePolicyProps = {
  isOpen: boolean
  onClose: () => void
}

const coverage = [
  'Desprendimiento de anclajes o fijaciones instaladas por Mallas Saru atribuible a una falla de ejecución.',
  'Fallas de continuidad, tensión o terminaciones atribuibles al servicio de instalación.',
  'Defectos del material cuando correspondan al respaldo técnico o garantía documentada del proveedor.',
]

const exclusions = [
  'Cortes, perforaciones, quemaduras, mordeduras o daños provocados después de la entrega.',
  'Golpes, sobrecarga, objetos colgados de la malla, uso inadecuado o intervención de terceros.',
  'Obras, modificaciones, movimientos o deterioro posterior del muro, marco o superficie de fijación.',
  'Daños por eventos extraordinarios y desgaste normal asociado al uso y la exposición del lugar.',
]

export function GuaranteePolicy({ isOpen, onClose }: GuaranteePolicyProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      className="guarantee-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guarantee-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article className="guarantee-sheet">
        <header className="guarantee-sheet__header">
          <span aria-hidden="true"><ShieldCheck size={25} /></span>
          <div>
            <p>Respaldo de postventa</p>
            <h2 id="guarantee-title">Política de garantía de instalación</h2>
          </div>
          <button ref={closeButtonRef} type="button" aria-label="Cerrar política de garantía" onClick={onClose}>
            <X aria-hidden="true" size={20} />
          </button>
        </header>

        <div className="guarantee-sheet__intro">
          <strong>12 meses desde la entrega del trabajo</strong>
          <p>La fecha, el alcance contratado y las condiciones particulares deben quedar registrados en la cotización, boleta, factura o documento de entrega.</p>
        </div>

        <div className="guarantee-sheet__columns">
          <section>
            <h3>Qué cubre</h3>
            <ul>
              {coverage.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}
            </ul>
          </section>
          <section>
            <h3>Qué no cubre</h3>
            <ul>
              {exclusions.map((item) => <li key={item}><X aria-hidden="true" size={15} />{item}</li>)}
            </ul>
          </section>
        </div>

        <section className="guarantee-claim">
          <div>
            <h3>Cómo solicitar una revisión</h3>
            <p>Envíanos el comprobante o datos del trabajo, dirección, descripción del problema y fotografías. Revisaremos los antecedentes y coordinaremos la inspección correspondiente.</p>
          </div>
          <div className="guarantee-claim__actions">
            <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" size={17} />WhatsApp</a>
            <a href="mailto:mallas.saru.spa@gmail.com"><Mail aria-hidden="true" size={17} />Correo</a>
          </div>
        </section>

        <p className="guarantee-legal">
          Esta garantía comercial no limita los derechos irrenunciables establecidos por la Ley N.º 19.496. La malla es una medida preventiva y no reemplaza la supervisión responsable ni autoriza a apoyarse, trepar o colgar objetos de ella.
        </p>
      </article>
    </div>
  )
}
