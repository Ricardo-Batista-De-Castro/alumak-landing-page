import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: 'Ana Paula Ferreira',
        role: 'Arquiteta',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        text: 'A Alumak transformou completamente meu projeto residencial. As esquadrias são de altíssima qualidade, com acabamento impecável. O atendimento foi excepcional do início ao fim, e a instalação superou todas as expectativas.',
    },
    {
        id: 2,
        name: 'Carlos Eduardo Santos',
        role: 'Empresário',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5,
        text: 'Renovamos toda a fachada do nosso escritório com as soluções da Alumak. O resultado foi incrível! Além da estética moderna, melhoramos muito o conforto térmico e acústico. Recomendo sem ressalvas.',
    },
    {
        id: 3,
        name: 'Marina Costa',
        role: 'Proprietária de Imóvel',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5,
        text: 'Instalei janelas de correr e portas de vidro no meu apartamento. A diferença foi impressionante! A qualidade dos materiais e a precisão no acabamento fazem toda a diferença. Valeu cada centavo investido.',
    },
]

function TestimonialCard({ testimonial, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative glass rounded-2xl p-8 hover:border-[#c9a84c]/30 transition-all duration-500 group"
        >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-[#c9a84c]/20 group-hover:text-[#c9a84c]/40 transition-colors duration-300">
                <Quote size={48} fill="currentColor" />
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className="text-[#c9a84c] fill-[#c9a84c]"
                    />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-white/70 text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#c9a84c]/30 group-hover:border-[#c9a84c] transition-colors duration-300">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-white/40 text-xs">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="depoimentos" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a84c] rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#c9a84c] rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <span className="section-label">Depoimentos</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                        O Que Nossos <span className="gold-text">Clientes Dizem</span>
                    </h2>
                    <div className="h-6" />
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mb-6" />
                    <p className="text-white/50 text-base max-w-2xl mx-auto text-center leading-relaxed">
                        A satisfação dos nossos clientes é nossa maior conquista. Veja o que dizem sobre nossos produtos e serviços.
                    </p>
                    <div className="h-6" />
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                ><div className="h-6" />
                    <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
                        <div className="flex -space-x-2">
                            {testimonials.map((t) => (
                                <img
                                    key={t.id}
                                    src={t.avatar}
                                    alt=""
                                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0a]"
                                />
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-white text-sm font-semibold">+200 clientes satisfeitos</p>
                            <p className="text-white/40 text-xs">Avaliação média de 5 estrelas</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
