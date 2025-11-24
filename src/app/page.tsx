import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import FeaturesGrid from './sections/FeaturesGrid'
import PlansPreview from './sections/PlansPreview'
import DownloadCTA from './sections/DownloadCTA'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <HowItWorks />
        <FeaturesGrid />
        <PlansPreview />
        <DownloadCTA />
      </div>
      <Footer />
    </main>
  )
}
