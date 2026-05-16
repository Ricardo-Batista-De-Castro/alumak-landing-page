import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Home, Building2, Package, FolderOpen, Mail, Sparkles } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home', icon: Home, description: 'Página inicial' },
  { label: 'Empresa', href: '#empresa', icon: Building2, description: 'Sobre nós' },
  { label: 'Produtos', href: '#produtos', icon: Package, description: 'Nossos produtos' },
  { label: 'Projetos', href: '#projetos', icon: FolderOpen, description: 'Portfólio' },
  { label: 'Contato', href: '#contato', icon: Mail, description: 'Fale conosco' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#c9a84c] to-[#e2c36b] rounded-sm flex items-center justify-center">
                <span className="text-black font-black text-sm">A</span>
              </div>
              <span className="text-white font-bold text-xl tracking-widest uppercase">
                Alu<span className="text-[#c9a84c]">mak</span>
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-white/70 hover:text-[#c9a84c] text-sm font-medium tracking-wide transition-colors duration-300 relative group cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button (desktop only) */}
          <motion.a
            href="#contato"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contato') }}
            className="hidden md:inline-flex btn-gold text-sm font-semibold cursor-pointer items-center gap-2 header-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar Orçamento
            <ChevronRight size={14} />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu - Drawer Lateral */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay escuro clicável */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Drawer lateral */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] md:hidden shadow-2xl overflow-y-auto"
            >
              {/* Header do Drawer */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#c9a84c] to-[#e2c36b] rounded-sm flex items-center justify-center">
                    <span className="text-black font-black text-sm">A</span>
                  </div>
                  <span className="text-white font-bold text-lg tracking-widest uppercase">
                    Alu<span className="text-[#c9a84c]">mak</span>
                  </span>
                </div>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Lista de navegação */}
              <nav className="px-4 py-8">
                {/* Spacer antes do primeiro card */}
                <div className="h-2" />
                
                {navLinks.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <div key={link.label}>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                        className="group cursor-pointer"
                      >
                        <div className="flex items-center gap-4 px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#c9a84c]/30 transition-all duration-300">
                          {/* Ícone à esquerda */}
                          <div className="w-12 h-12 bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon size={22} className="text-[#c9a84c]" />
                          </div>
                          
                          {/* Texto */}
                          <div className="flex-1">
                            <h3 className="text-white font-semibold text-base mb-0.5">{link.label}</h3>
                            <p className="text-white/50 text-xs">{link.description}</p>
                          </div>
                          
                          {/* Seta à direita */}
                          <ChevronRight size={20} className="text-white/30 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all" />
                        </div>
                      </motion.div>
                      
                      {/* Spacer */}
                      {i < navLinks.length - 1 && <div className="h-2" />}
                    </div>
                  )
                })}
              </nav>

              {/* Botão de Orçamento em Destaque */}
              <div className="px-4 pb-6 mt-8">
                {/* Spacer antes do botão */}
                <div className="h-2" />
                
                <div className="border-t border-white/10 mb-6"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contato') }}
                  className="cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-[#c9a84c] to-[#e2c36b] rounded-xl p-5 shadow-xl hover:shadow-2xl hover:shadow-[#c9a84c]/30 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-black font-bold text-base mb-0.5">Solicitar Orçamento</h3>
                        <p className="text-black/70 text-xs">Proposta personalizada</p>
                      </div>
                      <ChevronRight size={20} className="text-black/60" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
