import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Phone } from 'lucide-react'

// CTA Background Image
import ctaBackground from '../assets/cta_background.jpg'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d]" style={{ padding: '130px 0' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="w-full flex flex-col items-center text-center"
        >
          <span className="section-label">Pronto para começar?</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Transforme seu projeto em
            <span className="gold-text block">realidade agora</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Entre em contato com nossa equipe e receba um orçamento personalizado sem compromisso. Atendemos projetos residenciais, comerciais e industriais.
          </p>
          {/* Spacer */}
          <div className="h-2" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-gold"
            >
              Solicitar orçamento grátis
              <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
