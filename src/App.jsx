import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Products from './components/Products'
import Differentials from './components/Differentials'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Products />
        <Differentials />
        <Projects />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
