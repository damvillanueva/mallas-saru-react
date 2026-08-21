import { useCallback, useEffect, useRef, useState } from 'react'
import type { PortfolioGroup } from '../data/siteData'

type LightboxProps = {
  group: PortfolioGroup
  onClose: () => void
}

export function Lightbox({ group, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + group.images.length) % group.images.length)
  }, [group.images.length])

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % group.images.length)
  }, [group.images.length])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])')
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
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose, showNext, showPrevious])

  const image = group.images[currentIndex]

  return (
    <div
      ref={modalRef}
      className="lightbox-modal is-open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button ref={closeButtonRef} className="lightbox-close" type="button" aria-label="Cerrar galería" onClick={onClose}>
        &times;
      </button>
      <p className="lightbox-counter">
        {currentIndex + 1} / {group.images.length}
      </p>
      <img className="lightbox-content" src={image.src} alt={image.title} />
      <div className="lightbox-caption">
        <h3 className="h4" id="lightbox-title">{image.title}</h3>
        <span>{image.description}</span>
      </div>
      <button className="lightbox-prev" type="button" aria-label="Imagen anterior" onClick={showPrevious}>
        &#10094;
      </button>
      <button className="lightbox-next" type="button" aria-label="Imagen siguiente" onClick={showNext}>
        &#10095;
      </button>
    </div>
  )
}
