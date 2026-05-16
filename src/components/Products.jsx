import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

// Product Images
import produtoPortaVidroTemperado from '../assets/produto_porta_vidro_temperado.png'
import produtoJanelaMaximAr from '../assets/produto_janela_maxim_ar.png'
import produtoFachadaVidro from '../assets/produto_fachada_vidro.png'
import produtoGuardaCorpo from '../assets/produto_guarda_corpo.png'
import produtoBoxBanheiro from '../assets/produto_box_banheiro.png'
import produtoEspelhoDecorativo from '../assets/produto_espelho_decorativo.jpg'
import produtoJanelaCorrer from '../assets/produto_janela_correr.png'
import produtoDivisoriaEscritorio from '../assets/produto_divisoria_escritorio.jpg'

const categories = ['Todos', 'Portas', 'Janelas', 'Fachadas', 'Sacadas', 'Persianas']

const products = [
  {
    id: 1,
    category: 'Portas',
    name: 'Porta em Alumínio',
    desc: 'Design moderno com fechamento de alta precisão e vidro temperado.',
    image: produtoPortaVidroTemperado,
  },
  {
    id: 2,
    category: 'Janelas',
    name: 'Janela Maxim-Ar',
    desc: 'Ventilação eficiente com estrutura em alumínio anodizado.',
    image: produtoJanelaMaximAr,
  },
  {
    id: 3,
    category: 'Janelas',
    name: 'Janela em Vidro Temperado',
    desc: 'Janelas amplas com vidro estrutural de alto desempenho.',
    image: produtoFachadaVidro,
  },
  {
    id: 4,
    category: 'Sacadas',
    name: 'Sacada com Guarda-Corpo',
    desc: 'Elegância e segurança com vidro laminado e perfis slim.',
    image: produtoGuardaCorpo,
  },
  {
    id: 5,
    category: 'Persianas',
    name: 'Fechamento em área externa',
    desc: 'Sob medida com vidro temperado e acabamento premium.',
    image: produtoBoxBanheiro,
  },
  {
    id: 6,
    category: 'Portas',
    name: 'Ripado em alumínio',
    desc: 'Ripado em alumínio para ambientes internos e externos, com design moderno e funcionalidade.',
    image: produtoEspelhoDecorativo,
  },
  {
    id: 7,
    category: 'Janelas',
    name: 'Ripado em alumínio',
    desc: 'Praticidade e estética para ambientes residenciais e comerciais.',
    image: produtoJanelaCorrer,
  },
  {
    id: 8,
    category: 'Fachadas',
    name: 'Divisória de Escritório',
    desc: 'Sistema de divisórias com vidro temperado para ambientes corporativos.',
    image: produtoDivisoriaEscritorio,
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#c9a84c] backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#c9a84c] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {product.desc}
        </p>
        <div className="flex items-center gap-1 text-[#c9a84c] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          Solicitar orçamento <ChevronRight size={12} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="produtos" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto px-6 flex flex-col">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center mb-10"
        >
          <span className="section-label">Linha Completa</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Nossos <span className="gold-text">Produtos</span>
          </h2>
          {/* Spacer */}
          <div className="h-2" />
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mb-6" />
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Linha completa de esquadrias em alumínio para projetos residenciais e corporativos.
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="h-2" />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 py-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                  ? 'bg-[#c9a84c] text-black'
                  : 'glass text-white/60 hover:text-white border border-white/10 hover:border-[#c9a84c]/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Spacer */}
        <div className="h-6 md:h-8" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Spacer */}
        <div className="h-20" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-gold"
          >
            Solicitar orçamento personalizado
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
