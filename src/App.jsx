import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Differentials from './components/Differentials'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Differentials />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
