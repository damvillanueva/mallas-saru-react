import { useState } from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Portfolio } from './components/Portfolio'
import { PromoModal } from './components/PromoModal'
import { QuoteForm } from './components/QuoteForm'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhatsAppButton } from './components/WhatsAppButton'
import type { PortfolioGroup } from './data/siteData'

function App() {
  const [openGallery, setOpenGallery] = useState<PortfolioGroup | null>(null)

  return (
    <>
      <WhatsAppButton />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio onOpen={setOpenGallery} />
        <About />
        <QuoteForm />
        <Testimonials />
      </main>
      <Footer />
      <PromoModal />
      {openGallery && <Lightbox group={openGallery} onClose={() => setOpenGallery(null)} />}
    </>
  )
}

export default App
