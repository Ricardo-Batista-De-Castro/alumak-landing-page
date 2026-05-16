import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Zap, Users, Clock, Ruler, Shield } from 'lucide-react'

// About Image
import sobreEquipe from '../assets/sobre_equipe.jpg'

const highlights = [
  { icon: Award, label: 'Qualidade Premium', desc: 'Materiais de alta durabilidade' },
  { icon: Zap, label: 'Tecnologia Avançada', desc: 'Processos modernos e eficientes' },
  { icon: Users, label: 'Atendimento Personalizado', desc: 'Foco total no cliente' },
  { icon: Clock, label: 'Experiência', desc: 'Anos de atuação no mercado' },
  { icon: Ruler, label: 'Projetos sob medida', desc: 'Cada projeto é único' },
  { icon: Shield, label: 'Garantia total', desc: 'Segurança e confiança' },
]

function Card({ icon: Icon, label, desc, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-lg p-5 flex items-start gap-4 card-hover group"
    >
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/20 transition-all duration-300">
        <Icon size={18} className="text-[#c9a84c]" />
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1">{label}</h4>
        <p className="text-white/50 text-xs">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="empresa" className="section-padding bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={sobreEquipe}
                alt="Alumak - Esquadrias Premium"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 glass rounded-xl p-6 border border-[#c9a84c]/20"
            >
              <div className="text-4xl font-black gold-text leading-none">15+</div>
              <div className="text-white/60 text-sm mt-1">Anos de experiência</div>
            </motion.div>
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c9a84c] via-[#e2c36b] to-transparent rounded-l-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Sobre a <span className="gold-text">Alumak</span>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent mb-6" />
            <p className="text-white/60 text-base leading-relaxed mb-10">
              A Alumak atua no segmento de esquadrias de alumínio oferecendo soluções modernas, sofisticadas e de alta qualidade para projetos residenciais e comerciais. Trabalhamos com foco em excelência, acabamento premium e inovação, proporcionando beleza, segurança e durabilidade em cada projeto.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Nossa equipe especializada está pronta para transformar sua ideia em realidade, com projetos personalizados que unem funcionalidade, estética e tecnologia de ponta.
            </p>

            {/* Spacer */}
            <div className="h-8 md:h-16" />

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <Card key={item.label} {...item} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
