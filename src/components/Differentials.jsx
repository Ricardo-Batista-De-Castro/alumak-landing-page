import { motion } from 'framer-motion'
import { CheckCircle2, Wrench, Truck, HeadphonesIcon, Star, Layers } from 'lucide-react'

const items = [
  {
    icon: CheckCircle2,
    title: 'Fabricação Própria',
    desc: 'Produzimos nossas esquadrias com controle total de qualidade, do corte ao acabamento final.',
  },
  {
    icon: Wrench,
    title: 'Instalação Especializada',
    desc: 'Equipe técnica treinada para instalação segura e precisa em qualquer tipo de projeto.',
  },
  {
    icon: Truck,
    title: 'Entrega Programada',
    desc: 'Logística eficiente com prazos cumpridos e produtos protegidos até o canteiro de obras.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Pós-venda Ativo',
    desc: 'Suporte contínuo após a instalação, garantindo sua satisfação a longo prazo.',
  },
  {
    icon: Star,
    title: 'Alto Padrão',
    desc: 'Projetos que atendem exigências de obras de luxo, com perfis importados e vidros especiais.',
  },
  {
    icon: Layers,
    title: 'Soluções Integradas',
    desc: 'Fornecemos esquadrias, persianas, fechamentos e automação em um único atendimento.',
  },
]

const stats = [
  { value: '1.200+', label: 'Projetos entregues' },
  { value: '15+', label: 'Anos de mercado' },
  { value: '98%', label: 'Clientes satisfeitos' },
  { value: '50+', label: 'Cidades atendidas' },
]
export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding relative overflow-hidden bg-[#0d0d0d]">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#c9a84c]/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center mb-16"
        >
          <span className="section-label">Por que escolher a Alumak</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Nossos <span className="gold-text">Diferenciais</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mb-6" />
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Mais do que produtos — oferecemos uma experiência completa desde o projeto até a instalação.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-40"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-[#0d0d0d] py-8 px-6 text-center">
              <div className="text-3xl md:text-4xl font-black gold-text mb-2">{s.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Espaço forçado */}
        <div className="h-4" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass rounded-xl p-7 card-hover group border border-white/5 hover:border-[#c9a84c]/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c]/15 to-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
