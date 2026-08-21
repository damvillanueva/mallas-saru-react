import { useEffect, useRef, useState } from 'react'
import { Accessibility, Contrast, Link2, Move, RotateCcw, Type, X } from 'lucide-react'

type ReadingPreferences = {
  largeText: boolean
  highContrast: boolean
  underlineLinks: boolean
  reduceMotion: boolean
}

const defaultPreferences: ReadingPreferences = {
  largeText: false,
  highContrast: false,
  underlineLinks: false,
  reduceMotion: false,
}

const storageKey = 'mallas-saru-reading-preferences'

function loadPreferences(): ReadingPreferences {
  try {
    const saved = window.localStorage.getItem(storageKey)
    if (!saved) return defaultPreferences

    const parsed = JSON.parse(saved) as Partial<ReadingPreferences>
    return {
      largeText: parsed.largeText === true,
      highContrast: parsed.highContrast === true,
      underlineLinks: parsed.underlineLinks === true,
      reduceMotion: parsed.reduceMotion === true,
    }
  } catch {
    return defaultPreferences
  }
}

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [preferences, setPreferences] = useState<ReadingPreferences>(loadPreferences)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('a11y-large-text', preferences.largeText)
    root.classList.toggle('a11y-high-contrast', preferences.highContrast)
    root.classList.toggle('a11y-links', preferences.underlineLinks)
    root.classList.toggle('a11y-reduce-motion', preferences.reduceMotion)

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(preferences))
    } catch {
      // Las preferencias siguen funcionando durante la sesión si el navegador bloquea el almacenamiento local.
    }
  }, [preferences])

  useEffect(() => {
    if (!isOpen) return

    const closeMenu = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const closeWhenFocusLeaves = (event: FocusEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', closeMenu)
    document.addEventListener('focusin', closeWhenFocusLeaves)
    document.addEventListener('keydown', closeWithEscape)
    return () => {
      document.removeEventListener('mousedown', closeMenu)
      document.removeEventListener('focusin', closeWhenFocusLeaves)
      document.removeEventListener('keydown', closeWithEscape)
    }
  }, [isOpen])

  const togglePreference = (key: keyof ReadingPreferences) => {
    setPreferences((current) => ({ ...current, [key]: !current[key] }))
  }

  const options = [
    { key: 'largeText' as const, label: 'Texto más grande', icon: Type },
    { key: 'highContrast' as const, label: 'Alto contraste', icon: Contrast },
    { key: 'underlineLinks' as const, label: 'Destacar enlaces', icon: Link2 },
    { key: 'reduceMotion' as const, label: 'Reducir movimiento', icon: Move },
  ]

  return (
    <div className="accessibility-control" ref={wrapperRef}>
      <button
        ref={triggerRef}
        className="accessibility-trigger"
        type="button"
        aria-label="Abrir preferencias de accesibilidad"
        title="Accesibilidad"
        aria-controls="accessibility-panel"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Accessibility aria-hidden="true" size={21} />
        <span>Accesibilidad</span>
      </button>

      {isOpen && (
        <div className="accessibility-panel" id="accessibility-panel" role="dialog" aria-labelledby="accessibility-title">
          <div className="accessibility-panel__header">
            <div>
              <small>Preferencias de lectura</small>
              <h2 id="accessibility-title">Accesibilidad</h2>
            </div>
            <button
              type="button"
              aria-label="Cerrar preferencias"
              onClick={() => {
                setIsOpen(false)
                triggerRef.current?.focus()
              }}
            >
              <X aria-hidden="true" size={18} />
            </button>
          </div>

          <div className="accessibility-options">
            {options.map((option) => {
              const OptionIcon = option.icon
              const isActive = preferences[option.key]
              return (
                <button
                  type="button"
                  className={isActive ? 'is-active' : ''}
                  aria-pressed={isActive}
                  key={option.key}
                  onClick={() => togglePreference(option.key)}
                >
                  <OptionIcon aria-hidden="true" size={19} />
                  <span>{option.label}</span>
                  <small>{isActive ? 'Activado' : 'Desactivado'}</small>
                </button>
              )
            })}
          </div>

          <button className="accessibility-reset" type="button" onClick={() => setPreferences(defaultPreferences)}>
            <RotateCcw aria-hidden="true" size={16} /> Restablecer
          </button>
          <p className="accessibility-note">Estas preferencias complementan la accesibilidad del sitio y quedan guardadas solo en este dispositivo.</p>
        </div>
      )}
    </div>
  )
}
