import { useState } from 'react'
import { About } from './components/About'
import { AccessibilityMenu } from './components/AccessibilityMenu'
import { Convenios } from './components/Convenios'
import { Footer } from './components/Footer'
import { GoogleReviews } from './components/GoogleReviews'
import { GuaranteePolicy } from './components/GuaranteePolicy'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Portfolio } from './components/Portfolio'
import { PromotionCard } from './components/PromotionCard'
import { QualityProtocol } from './components/QualityProtocol'
import { QuoteForm } from './components/QuoteForm'
import { SafetyFramework } from './components/SafetyFramework'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'
import type { PortfolioGroup } from './data/siteData'

function App() {
  const [openGallery, setOpenGallery] = useState<PortfolioGroup | null>(null)
  const [isGuaranteeOpen, setIsGuaranteeOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <AccessibilityMenu />
      <WhatsAppButton />
      <PromotionCard />
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <QualityProtocol />
        <SafetyFramework />
        <Portfolio onOpen={setOpenGallery} />
        <GoogleReviews />
        <Convenios />
        <About />
        <QuoteForm />
      </main>
      <Footer onOpenGuarantee={() => setIsGuaranteeOpen(true)} />
      {openGallery && <Lightbox group={openGallery} onClose={() => setOpenGallery(null)} />}
      <GuaranteePolicy isOpen={isGuaranteeOpen} onClose={() => setIsGuaranteeOpen(false)} />
    </>
  )
}

export default App
