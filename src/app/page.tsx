import Hero from './sections/Hero'
import Problem from './sections/Problem'
import FeaturesGrid from './sections/FeaturesGrid'
import HowItWorks from './sections/HowItWorks'
import Benefits from './sections/Benefits'
import EarlyAccess from './sections/EarlyAccess'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <div className="max-w-6xl mx-auto px-6">
        <FeaturesGrid />
        <HowItWorks />
      </div>
      <Benefits />
      <EarlyAccess />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
