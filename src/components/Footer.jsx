import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Empresa', href: '#empresa' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

const products = [
  'Janelas de Alumínio',
  'Portas e Portões',
  'Fachadas em Vidro',
  'Divisórias',
  'Coberturas',
  'Automação',
]

export default function Footer() {
  function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-black tracking-tight text-white mb-1">
              ALU<span className="gold-text">MAK</span>
            </div>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-5">Esquadrias de Alumínio</div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Fabricamos e instalamos esquadrias de alumínio de alto padrão para projetos residenciais e comerciais em todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5519996796149"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-white/40 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/alumak.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-white/40 hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-white/40 hover:text-[#c9a84c] text-sm transition-colors duration-300 group"
                  >
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Produtos</h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}>
                  <span className="flex items-center gap-2 text-white/40 text-sm group cursor-default">
                    <ChevronRight size={12} className="text-[#c9a84c]/50" />
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Contato</h4>
            <div className="space-y-4">
              <a href="https://wa.me/5519996796149" className="flex items-start gap-3 text-white/40 hover:text-[#c9a84c] text-sm transition-colors group">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#c9a84c]/60 group-hover:text-[#c9a84c]" />
                (19) 99679-6149
              </a>
              <a href="mailto:contatoalum.mak@hotmail.com" className="flex items-start gap-3 text-white/40 hover:text-[#c9a84c] text-sm transition-colors group">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-[#c9a84c]/60 group-hover:text-[#c9a84c]" />
                contatoalum.mak@hotmail.com
              </a>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#c9a84c]/60" />
                Rua das Esquadrias, 123<br />São Paulo, SP – CEP 01000-000
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Alumak Esquadrias. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Desenvolvido por Ricardo Castro
          </p>
        </div>
      </div>
    </footer>
  )
}
