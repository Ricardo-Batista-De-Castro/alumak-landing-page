import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { ChevronRight, MessageCircle, ArrowDown } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// Hero Images
import hero1 from '../assets/hero_carrossel_1.jpg'
import hero2 from '../assets/hero_carrossel_2.png'
import hero3 from '../assets/hero_carrossel_3.jpg'

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'Esquadrias modernas para transformar seu projeto',
    subtitle: 'Sofisticação, durabilidade e acabamento premium em alumínio e vidro.',
    btn: 'Solicitar orçamento',
    btnHref: '#contato',
    btnIcon: <ChevronRight size={16} />,
  },
  {
    id: 2,
    image: hero2,
    title: 'Tecnologia e elegância em cada detalhe',
    subtitle: 'Janelas, portas e fachadas desenvolvidas para alto padrão.',
    btn: 'Conheça nossos projetos',
    btnHref: '#projetos',
    btnIcon: <ChevronRight size={16} />,
  },
  {
    id: 3,
    image: hero3,
    title: 'Persianas elétricas e soluções modernas',
    subtitle: 'Automação, conforto e design contemporâneo para sua residência.',
    btn: 'Falar no WhatsApp',
    btnHref: 'https://wa.me/5519996796149',
    btnIcon: <MessageCircle size={16} />,
    external: true,
  },
]

export default function Hero() {
  const handleClick = (href, external) => {
    if (external) {
      window.open(href, '_blank')
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="max-w-2xl"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="section-label"
                  >
                    Alumak — Esquadrias Premium
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
                  >
                    {slide.title.split(' ').map((word, i) =>
                      i === 0 || i === 1 ? (
                        <span key={i} className="gold-text">{word} </span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    )}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button
                      onClick={() => handleClick(slide.btnHref, slide.external)}
                      className="btn-gold"
                    >
                      {slide.btn}
                      {slide.btnIcon}
                    </button>
                    <button
                      onClick={() => handleClick('#produtos', false)}
                      className="btn-outline"
                    >
                      Ver produtos
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={18} className="text-[#c9a84c]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
