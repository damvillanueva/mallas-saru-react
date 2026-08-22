import { useEffect, useRef, useState } from 'react'
import { ChevronDown, CircleHelp, MessageCircle, X } from 'lucide-react'
import { whatsappFaqUrl } from '../data/siteData'

type FrequentlyAskedQuestionsProps = {
  isOpen: boolean
  onClose: () => void
}

const questions = [
  {
    question: '¿Cuánto demora una instalación?',
    answer: 'Depende de la cantidad de vanos, el tipo de soporte y el acceso al lugar. Después de revisar fotografías o realizar una visita podemos indicar un tiempo estimado para ese proyecto.',
  },
  {
    question: '¿Necesitan visitar el lugar antes de cotizar?',
    answer: 'Podemos preparar una primera orientación con fotografías, medidas aproximadas y la comuna. Si el soporte, el acceso o el diseño requieren una revisión más precisa, coordinamos una evaluación en terreno.',
  },
  {
    question: '¿Qué información debo enviar para cotizar?',
    answer: 'Necesitamos saber la comuna, el tipo de espacio, cuántas ventanas, balcones o vanos deseas proteger y medidas aproximadas. Las fotografías generales y de los bordes ayudan a evaluar las fijaciones.',
  },
  {
    question: '¿Las mallas sirven para niños y mascotas?',
    answer: 'Sí, la solución se define según el espacio y quién necesita protección. Consideramos dimensiones, aperturas, uso cotidiano y, en mascotas, su tamaño y conducta. La malla es preventiva y no reemplaza la supervisión responsable.',
  },
  {
    question: '¿Puedo instalar una malla en un departamento?',
    answer: 'Sí, pero antes conviene revisar el reglamento del edificio y consultar a la administración cuando la instalación pueda intervenir balcones, fachadas o puntos visibles desde el exterior.',
  },
  {
    question: '¿Qué materiales utilizan?',
    answer: 'Seleccionamos mallas y fijaciones aptas para el uso y la exposición de cada espacio. En la cotización informamos la solución propuesta y el respaldo técnico disponible del proveedor cuando corresponda.',
  },
  {
    question: '¿La instalación requiere mantenimiento?',
    answer: 'Sí. Recomendamos observar periódicamente la tensión, las fijaciones, los bordes y cualquier corte, desgaste o intervención posterior. Si existe una alteración visible, debe solicitarse una revisión antes de seguir usando el espacio.',
  },
  {
    question: '¿La instalación tiene garantía?',
    answer: 'Sí. El alcance, plazo y exclusiones se informan en nuestra política de garantía y deben quedar registrados en la documentación del trabajo. Los daños posteriores por cortes, golpes, mordeduras o intervención de terceros no corresponden a una falla de instalación.',
  },
]

export function FrequentlyAskedQuestions({ isOpen, onClose }: FrequentlyAskedQuestionsProps) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)
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
      className="faq-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="faq-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article className="faq-sheet">
        <header className="faq-sheet__header">
          <span aria-hidden="true"><CircleHelp size={25} /></span>
          <div>
            <p>Antes de instalar</p>
            <h2 id="faq-title">Preguntas frecuentes</h2>
          </div>
          <button ref={closeButtonRef} type="button" aria-label="Cerrar preguntas frecuentes" onClick={onClose}>
            <X aria-hidden="true" size={20} />
          </button>
        </header>

        <div className="faq-sheet__intro">
          <strong>Resolvamos las dudas más habituales.</strong>
          <p>Abre una pregunta para conocer la respuesta. Si tu espacio tiene condiciones especiales, podemos orientarte directamente.</p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isQuestionOpen = openQuestion === index
            const answerId = `faq-answer-${index}`
            return (
              <section className={isQuestionOpen ? 'faq-item is-open' : 'faq-item'} key={item.question}>
                <button
                  type="button"
                  aria-expanded={isQuestionOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isQuestionOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" size={19} />
                </button>
                <div id={answerId} className="faq-answer" hidden={!isQuestionOpen}>
                  <p>{item.answer}</p>
                </div>
              </section>
            )
          })}
        </div>

        <footer className="faq-sheet__footer">
          <div>
            <strong>¿Tu duda no aparece aquí?</strong>
            <span>Cuéntanos cómo es el espacio y te orientaremos.</span>
          </div>
          <a href={whatsappFaqUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" size={17} /> Consultar por WhatsApp
          </a>
        </footer>
      </article>
    </div>
  )
}
