import { useState } from 'react'
import { About } from './components/About'
import { AccessibilityMenu } from './components/AccessibilityMenu'
import { Convenios } from './components/Convenios'
import { Footer } from './components/Footer'
import { FaqCallout } from './components/FaqCallout'
import { FrequentlyAskedQuestions } from './components/FrequentlyAskedQuestions'
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
  const [isFaqOpen, setIsFaqOpen] = useState(false)

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
        <Portfolio onOpen={setOpenGallery} />
        <GoogleReviews />
        <QualityProtocol />
        <SafetyFramework />
        <Convenios />
        <About />
        <FaqCallout onOpen={() => setIsFaqOpen(true)} />
        <QuoteForm />
      </main>
      <Footer
        onOpenFaq={() => setIsFaqOpen(true)}
        onOpenGuarantee={() => setIsGuaranteeOpen(true)}
      />
      {openGallery && <Lightbox group={openGallery} onClose={() => setOpenGallery(null)} />}
      <GuaranteePolicy isOpen={isGuaranteeOpen} onClose={() => setIsGuaranteeOpen(false)} />
      <FrequentlyAskedQuestions isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </>
  )
}

export default App
