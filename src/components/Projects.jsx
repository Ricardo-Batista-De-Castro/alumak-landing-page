import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, MapPin } from 'lucide-react'

// Project Images
import projetoResidencial1 from '../assets/projeto_residencial_1.jpg'
import projetoComercial1 from '../assets/projeto_comercial_1.jpg'
import projetoResidencial2 from '../assets/projeto_residencial_2.jpg'
import projetoResidencial3 from '../assets/projeto_residencial_3.jpg'
import projetoComercial3 from '../assets/projeto_comercial_3.jpg'
import projetoComercial2 from '../assets/projeto_comercial_2.jpg'

const projects = [
  {
    id: 1,
    title: 'Residência Alto Padrão',
    location: 'São Paulo, SP',
    type: 'Residencial',
    desc: 'Fachada em pele de vidro com caixilhos em alumínio natural e portas pivotantes de 3m.',
    image: projetoResidencial1,
  },
  {
    id: 2,
    title: 'Edifício Corporativo',
    location: 'Campinas, SP',
    type: 'Comercial',
    desc: 'Fechamento total em vidro estrutural com esquadrias de correr para 12 andares.',
    image: projetoComercial1,
  },
  {
    id: 3,
    title: 'Cobertura Duplex',
    location: 'Santos, SP',
    type: 'Residencial',
    desc: 'Sacadas envidraçadas com guarda-corpo em vidro laminado e sistema de correr slim.',
    image: projetoResidencial2,
  },
  {
    id: 4,
    title: 'Loft Moderno',
    location: 'Ribeirão Preto, SP',
    type: 'Residencial',
    desc: 'Janelas maxim-ar de piso ao teto com persianas elétricas integradas.',
    image: projetoResidencial3,
  },
  {
    id: 5,
    title: 'Hotel Boutique',
    location: 'Gramado, RS',
    type: 'Hoteleiro',
    desc: 'Esquadrias em alumínio escuro anodizado em todas as 48 unidades habitacionais.',
    image: projetoComercial3,
  },
  {
    id: 6,
    title: 'Clínica Médica',
    location: 'São Paulo, SP',
    type: 'Comercial',
    desc: 'Divisórias em vidro temperado, portas de correr automáticas e controle solar.',
    image: projetoComercial2,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="projetos" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center mb-16"
        >
          <span className="section-label">Portfólio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Nossos <span className="gold-text">Projetos</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mb-6" />
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Conheça alguns dos projetos que entregamos com qualidade e excelência.
          </p>
          {/* Spacer */}
          <div className="h-2"/>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${i === 0 || i === 4 ? 'sm:row-span-1' : ''
                }`}
              onClick={() => setSelected(project)}
            >
              <div className={`overflow-hidden ${i === 0 ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <ZoomIn size={14} className="text-white" />
              </div>
              {/* Type badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-black/40 border border-white/20 text-white/80 backdrop-blur-sm">
                  {project.type}
                </span>
              </div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1 text-[#c9a84c]/70 text-xs mb-2">
                  <MapPin size={11} /> {project.location}
                </div>
                <h3 className="text-white font-bold text-base group-hover:text-[#c9a84c] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/50 text-xs mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-[#111] rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-72 md:h-96 object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-[#c9a84c] transition-colors"
              >
                <X size={16} />
              </button>
              <div className="p-7">
                <div className="flex items-center gap-2 text-[#c9a84c]/70 text-xs mb-3">
                  <span className="px-2 py-0.5 rounded border border-[#c9a84c]/30 text-[#c9a84c] text-[10px] uppercase tracking-widest">{selected.type}</span>
                  <MapPin size={12} /> {selected.location}
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">{selected.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
