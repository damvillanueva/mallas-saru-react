import { useState } from 'react'
import { About } from './components/About'
import { AccessibilityMenu } from './components/AccessibilityMenu'
import { Convenios } from './components/Convenios'
import { Footer } from './components/Footer'
import { GoogleReviews } from './components/GoogleReviews'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Portfolio } from './components/Portfolio'
import { QualityProtocol } from './components/QualityProtocol'
import { QuoteForm } from './components/QuoteForm'
import { SafetyFramework } from './components/SafetyFramework'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'
import type { PortfolioGroup } from './data/siteData'

function App() {
  const [openGallery, setOpenGallery] = useState<PortfolioGroup | null>(null)

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <AccessibilityMenu />
      <WhatsAppButton />
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <Convenios />
        <QualityProtocol />
        <Portfolio onOpen={setOpenGallery} />
        <GoogleReviews />
        <SafetyFramework />
        <About />
        <QuoteForm />
      </main>
      <Footer />
      {openGallery && <Lightbox group={openGallery} onClose={() => setOpenGallery(null)} />}
    </>
  )
}

export default App
