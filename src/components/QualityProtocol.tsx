import { useState } from 'react'
import { Check, ChevronDown, ClipboardCheck, FileCheck2, Ruler, Wrench } from 'lucide-react'

const stages = [
  {
    number: '01',
    title: 'Evaluar',
    text: 'Medimos el espacio, revisamos el soporte y detectamos bordes, accesos y puntos que requieren atención.',
  },
  {
    number: '02',
    title: 'Especificar',
    text: 'Definimos la solución, las fijaciones adecuadas y el alcance exacto que quedará indicado en la cotización.',
  },
  {
    number: '03',
    title: 'Instalar',
    text: 'Instalamos la malla y comprobamos continuidad, tensión y terminaciones compatibles con cada superficie.',
  },
  {
    number: '04',
    title: 'Entregar y mantener',
    text: 'Revisamos el resultado contigo y explicamos la garantía, los cuidados y cuándo conviene volver a inspeccionarla.',
  },
]

const stageIcons = [Ruler, FileCheck2, Wrench, ClipboardCheck]

const checks = [
  {
    title: 'La superficie permite una fijación firme',
    detail: 'Revisamos si es hormigón, ladrillo, metal, madera u otro material y comprobamos que esté en buen estado.',
  },
  {
    title: 'No quedan espacios abiertos en los bordes',
    detail: 'La malla debe cubrir de forma continua todo el contorno definido para la instalación.',
  },
  {
    title: 'Anclajes y bordes quedan bien terminados',
    detail: 'Comprobamos fijaciones, tensión y terminaciones para evitar piezas sueltas, puntas o bordes peligrosos.',
  },
  {
    title: 'Ventanas y puertas siguen funcionando',
    detail: 'Probamos que puedan abrirse, cerrarse y usar sus manillas normalmente después de instalar la malla.',
  },
  {
    title: 'Entregamos fotografías del trabajo',
    detail: 'Registramos el espacio y el resultado final como respaldo de lo realizado.',
  },
  {
    title: 'Explicamos garantía, cuidados y revisiones',
    detail: 'Indicamos qué cubre la garantía, cómo cuidar la malla y cuándo conviene inspeccionarla o reemplazarla.',
  },
]

export function QualityProtocol() {
  const [activeStage, setActiveStage] = useState(0)
  const [activeCheck, setActiveCheck] = useState(0)
  const ActiveStageIcon = stageIcons[activeStage]
  const currentStage = stages[activeStage]

  return (
    <section className="section protocol-section" id="protocolo">
      <div className="container">
        <div className="protocol-heading">
          <div>
            <p className="section-kicker">Cómo trabajamos</p>
            <h2>Una instalación cuidada, de principio a fin.</h2>
          </div>
          <p>
            Cuatro etapas simples para que sepas qué revisamos, qué instalamos y qué información recibes al finalizar.
          </p>
        </div>

        <div className="protocol-grid">
          <div className="protocol-flow">
            <div className="protocol-tabs" role="tablist" aria-label="Etapas de trabajo">
            {stages.map((stage, index) => {
              const StageIcon = stageIcons[index]
              return (
                  <button
                    aria-controls="protocol-stage-detail"
                    aria-selected={activeStage === index}
                    className={`protocol-tab${activeStage === index ? ' is-active' : ''}`}
                    key={stage.number}
                    onClick={() => setActiveStage(index)}
                    role="tab"
                    type="button"
                  >
                    <span>{stage.number}</span>
                    <StageIcon aria-hidden="true" size={18} strokeWidth={1.7} />
                    <strong>{stage.title}</strong>
                  </button>
              )
            })}
            </div>

            <article
              aria-live="polite"
              className={`protocol-focus protocol-focus--${activeStage + 1}`}
              id="protocol-stage-detail"
              role="tabpanel"
            >
              <span className="protocol-focus__icon"><ActiveStageIcon aria-hidden="true" size={27} /></span>
              <div>
                <small>Paso {activeStage + 1} de {stages.length}</small>
                <h3>{currentStage.title}</h3>
                <p>{currentStage.text}</p>
              </div>
              <span className="protocol-progress" aria-hidden="true">
                <span style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }} />
              </span>
            </article>
          </div>

          <aside className="control-sheet">
            <p className="control-sheet__tag">Antes de entregar</p>
            <h3>¿Qué comprobamos?</h3>
            <ul className="control-list">
              {checks.map((check, index) => (
                <li className={activeCheck === index ? 'is-active' : ''} key={check.title}>
                  <button
                    aria-expanded={activeCheck === index}
                    onClick={() => setActiveCheck(index)}
                    type="button"
                  >
                    <Check aria-hidden="true" size={16} />
                    <strong>{check.title}</strong>
                    <ChevronDown aria-hidden="true" className="control-chevron" size={16} />
                  </button>
                  {activeCheck === index && <p>{check.detail}</p>}
                </li>
              ))}
            </ul>
            <p className="control-sheet__note">
              La cotización indicará qué controles corresponden al espacio y qué incluye el servicio.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
