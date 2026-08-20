import { useCallback, useEffect, useState } from 'react'
import type { PortfolioGroup } from '../data/siteData'

type LightboxProps = {
  group: PortfolioGroup
  onClose: () => void
}

export function Lightbox({ group, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + group.images.length) % group.images.length)
  }, [group.images.length])

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % group.images.length)
  }, [group.images.length])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, showNext, showPrevious])

  const image = group.images[currentIndex]

  return (
    <div
      className="lightbox-modal is-open"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería ${group.title}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button className="lightbox-close" type="button" aria-label="Cerrar galería" onClick={onClose}>
        &times;
      </button>
      <p className="lightbox-counter">
        {currentIndex + 1} / {group.images.length}
      </p>
      <img className="lightbox-content" src={image.src} alt={image.title} />
      <div className="lightbox-caption">
        <h3 className="h4">{image.title}</h3>
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
