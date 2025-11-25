import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-900">
      {/* Diagonal stripe background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.1) 35px,
            rgba(255, 255, 255, 0.1) 70px
          )`
        }} />
      </div>

      {/* Glowing accent orbs for depth */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
