import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
    Shield, 
    Sparkles, 
    Thermometer, 
    Leaf, 
    DollarSign,
    PaintBucket,
    Lock
} from 'lucide-react'

const benefits = [
    {
        icon: Shield,
        title: 'Durabilidade Excepcional',
        description: 'Resistente a intempéries e corrosão, o alumínio mantém suas propriedades por mais de 30 anos sem deterioração.',
        highlight: '30+ anos de vida útil'
    },
    {
        icon: Sparkles,
        title: 'Baixíssima Manutenção',
        description: 'Não necessita pintura ou tratamentos constantes. Simples limpeza com água e sabão neutro mantém o acabamento impecável.',
        highlight: 'Zero necessidade de pintura'
    },
    {
        icon: PaintBucket,
        title: 'Design Versátil',
        description: 'Perfis elegantes e modernos disponíveis em diversas cores, texturas e acabamentos que se adaptam a qualquer estilo arquitetônico.',
        highlight: 'Infinitas possibilidades'
    },
    {
        icon: DollarSign,
        title: 'Valoriza Seu Imóvel',
        description: 'Esquadrias de alumínio agregam valor de mercado ao imóvel, transmitindo qualidade, modernidade e sofisticação.',
        highlight: 'Alto retorno sobre investimento'
    },
    {
        icon: Thermometer,
        title: 'Conforto Térmico e Acústico',
        description: 'Excelente isolamento que proporciona ambiente interno mais confortável, reduzindo ruídos externos e mantendo a temperatura ideal.',
        highlight: 'Até 40% menos ruído'
    },
    {
        icon: Leaf,
        title: 'Sustentável e Ecológico',
        description: '100% reciclável sem perda de qualidade. Escolha consciente que contribui para a preservação do meio ambiente.',
        highlight: '100% reciclável'
    },
    {
        icon: Lock,
        title: 'Segurança Reforçada',
        description: 'Material robusto e resistente que dificulta tentativas de invasão, proporcionando maior proteção para sua família.',
        highlight: 'Máxima proteção'
    },
    {
        icon: Shield,
        title: 'Melhor Custo-Benefício',
        description: 'Investimento inicial que se paga ao longo do tempo com economia em manutenção, reparos e substituições.',
        highlight: 'Economia a longo prazo'
    }
]

function BenefitCard({ benefit, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const Icon = benefit.icon

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="glass rounded-2xl p-7 hover:border-[#c9a84c]/30 transition-all duration-500 group relative overflow-hidden"
        >
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/0 to-[#c9a84c]/0 group-hover:from-[#c9a84c]/5 group-hover:to-transparent transition-all duration-500" />
            
            <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#c9a84c]/50 transition-all duration-300">
                    <Icon size={26} className="text-[#c9a84c]" />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {benefit.description}
                </p>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                    <span className="text-[#c9a84c] text-xs font-semibold">
                        {benefit.highlight}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default function Benefits() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="beneficios" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#c9a84c] rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#c9a84c] rounded-full blur-[150px]" />
            </div>

            {/* Accent lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="w-full flex flex-col items-center text-center mb-16"
                >
                    <span className="section-label">Vantagens do Alumínio</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                        Por Que Escolher <span className="gold-text">Alumínio</span>
                    </h2>
                    <div className="h-6" />
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mb-6" />
                    <p className="text-white/50 text-base max-w-3xl text-center leading-relaxed">
                        Descubra os benefícios que fazem das esquadrias de alumínio a escolha mais inteligente para sua obra. 
                        Qualidade, economia e sofisticação em um único material.
                    </p>
                    <div className="h-6" />
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            benefit={benefit}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
