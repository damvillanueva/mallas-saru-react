import { useEffect, useRef, useState } from 'react'
import { ChevronDown, CircleHelp, MessageCircle, X } from 'lucide-react'
import { whatsappFaqUrl } from '../data/siteData'

type FrequentlyAskedQuestionsProps = {
  isOpen: boolean
  onClose: () => void
}

const questions = [
  {
    question: '¿Pueden cotizar con fotografías?',
    answer: 'Sí. Para preparar una primera cotización necesitamos la comuna, medidas aproximadas y fotografías donde se vea el espacio completo y las superficies de fijación. Indícanos también cuántas ventanas, balcones o espacios deseas proteger. Si hace falta revisar el lugar con más detalle, coordinamos una visita.',
  },
  {
    question: '¿Cuánto demora la instalación?',
    answer: 'Depende de la cantidad de ventanas o balcones, la superficie donde se fijará la malla y el acceso al lugar. Cuando revisemos las fotografías o visitemos el espacio podremos darte un tiempo estimado.',
  },
  {
    question: '¿Instalan mallas para niños y mascotas?',
    answer: 'Sí. Revisamos quién necesita protección, cómo se usa el lugar y, en el caso de mascotas, su tamaño y comportamiento. La malla ayuda a prevenir caídas y escapes, pero no reemplaza la supervisión responsable.',
  },
  {
    question: '¿Podré seguir abriendo la ventana o la puerta?',
    answer: 'Sí, siempre que el espacio permita una solución compatible. Antes de instalar revisamos la apertura, las manillas y el acceso para que ventanas y puertas puedan seguir utilizándose con normalidad.',
  },
  {
    question: '¿Puedo instalar una malla en un departamento?',
    answer: 'Sí. Si la instalación afecta un balcón, la fachada o un punto visible desde el exterior, te recomendamos revisar el reglamento del edificio y consultar previamente a la administración.',
  },
  {
    question: '¿Cotizan condominios o varios departamentos?',
    answer: 'Sí. Atendemos administraciones, comunidades y proyectos que necesitan proteger varios departamentos o áreas comunes. Indícanos la ubicación, la cantidad aproximada de espacios y si existe una especificación técnica o fecha de entrega.',
  },
  {
    question: '¿Qué materiales utilizan?',
    answer: 'Trabajamos con materiales de primera calidad, certificados por su resistencia y preparados para la exposición a la intemperie y a los rayos UV. La cotización indica la malla y las fijaciones recomendadas para el espacio.',
  },
  {
    question: '¿Cómo sé si la malla necesita revisión o recambio?',
    answer: 'Revisa periódicamente la tensión, las fijaciones y los bordes. Si observas cortes, piezas sueltas, desgaste, pérdida de tensión o daños provocados por obras, golpes o mordeduras, no manipules la malla y solicita una revisión.',
  },
  {
    question: '¿La instalación tiene garantía?',
    answer: 'Sí. La garantía de instalación es de 12 meses y cubre fallas atribuibles al trabajo realizado por Mallas Saru. No cubre cortes, golpes, mordeduras, modificaciones ni daños posteriores causados por terceros. El detalle completo queda disponible en nuestra política de garantía.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'Atendemos la Región Metropolitana, la VI Región y el litoral central de la V Región. Confírmanos la comuna al cotizar para revisar la cobertura y coordinar la visita.',
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
          <strong>Lo que más nos preguntan antes de cotizar.</strong>
          <p>Si tu espacio tiene una condición distinta, escríbenos y lo revisamos contigo.</p>
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
