import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2, Clock, User, Phone, MessageSquare } from 'lucide-react'

const WA = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const IG = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const CARDS = [
  { icon: <WA />, bg: 'bg-green-500/15', color: 'text-green-400', border: 'border-green-500/20', hover: 'hover:border-green-500/50', label: 'WhatsApp', value: 'Conversar pelo WhatsApp', sub: 'Resposta rápida', href: 'https://wa.me/5519996796149' },
  { icon: <Phone size={20} />, bg: 'bg-amber-500/15', color: 'text-amber-400', border: 'border-amber-500/20', hover: 'hover:border-amber-500/50', label: 'Telefone', value: '(19) 99679-6149', sub: 'Ligue agora', href: 'tel:+5519996796149' },
  { icon: <IG />, bg: 'bg-pink-500/15', color: 'text-pink-400', border: 'border-pink-500/20', hover: 'hover:border-pink-500/50', label: 'Instagram', value: '@alumak.oficial', sub: 'Siga nossas novidades', href: 'https://www.instagram.com/alum_mak/' },
  { icon: <Mail size={20} />, bg: 'bg-purple-500/15', color: 'text-purple-400', border: 'border-purple-500/20', hover: 'hover:border-purple-500/50', label: 'E-mail', value: 'contatoalum.mak@hotmail.com', sub: 'Enviar e-mail', href: 'mailto:contatoalum.mak@hotmail.com' },
  { icon: <MapPin size={20} />, bg: 'bg-blue-500/15', color: 'text-blue-400', border: 'border-blue-500/20', hover: 'hover:border-blue-500/50', label: 'Endereço', value: 'Rua das Esquadrias, 123', sub: 'Vinhedo, SP', href: 'https://maps.google.com' },
  { icon: <Clock size={20} />, bg: 'bg-amber-400/15', color: 'text-amber-400', border: 'border-amber-400/20', hover: 'hover:border-amber-400/40', label: 'Horário de Atendimento', value: 'Segunda a Sexta', sub: '08h – 18h', href: null },
]

const inp = 'w-full bg-white/[0.05] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.08] transition-all duration-200'
const inpFull = 'w-full bg-white/[0.05] border border-white/10 rounded-xl py-3.5 px-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.08] transition-all duration-200'

function Field({ label, required, icon, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/60 text-xs font-medium tracking-wide">
        {label}{required && <span className="text-amber-400 ml-0.5">*</span>}
      </label>
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3.5 text-white/30 pointer-events-none flex items-center">{icon}</span>}
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  return (
    <section id="contato" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="container mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="section-label">Fale Conosco</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Entre em <span className="gold-text">Contato</span>
          </h2>
          {/* Spacer */}
          <div className="h-2" />

          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6" />
          <p className="text-white/50 text-base max-w-xl">
            Nossa equipe está pronta para atendê-lo. Solicite seu orçamento ou tire suas dúvidas.
          </p>
          {/* Spacer */}
          <div className="h-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">

          {/* Left: Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {CARDS.map((c, i) => {
              const Tag = c.href ? 'a' : 'div'
              const extra = c.href ? { href: c.href, target: '_blank', rel: 'noreferrer' } : {}
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <Tag
                    {...extra}
                    className={`flex items-center gap-4 p-5 rounded-2xl border bg-white/[0.03] ${c.border} ${c.href ? c.hover + ' hover:bg-white/[0.06] cursor-pointer' : ''} transition-all duration-300 group block`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${c.bg} ${c.color} ${c.href ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
                      {c.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-white/40 text-xs mb-0.5 font-medium tracking-wide">{c.label}</span>
                      <span className="block text-white font-semibold text-sm truncate transition-colors duration-300">{c.value}</span>
                      <span className="block text-white/30 text-xs mt-0.5">{c.sub}</span>
                    </div>
                  </Tag>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Mensagem enviada!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Obrigado pelo contato. Nossa equipe retornará em breve.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Nome" required>
                      <input name="name" value={form.name} onChange={onChange} required placeholder="Seu nome" className={inpFull} />
                    </Field>
                    <Field label="Telefone" required>
                      <input name="phone" value={form.phone} onChange={onChange} required placeholder="(11) 99999-9999" className={inpFull} />
                    </Field>
                  </div>
                  <Field label="E-mail" required>
                    <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="seu@email.com" className={inpFull} />
                  </Field>
                  <Field label="Mensagem" required>
                    <textarea name="message" value={form.message} onChange={onChange} required placeholder="Conte um pouco sobre seu projeto e como podemos ajudar..." rows={11} className={`${inpFull} resize-none`} />
                  </Field>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        Enviar mensagem
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
