import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-pearl py-8 sm:py-12 mt-12 sm:mt-20 w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
        {/* Sobre */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-display text-xl sm:text-2xl mb-3 text-aqua">Koreaquamarine</h3>
          <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
            Inspirada nas rotinas de beleza coreanas, a Koreaquamarine oferece uma
            curadoria de cosméticos premium que realçam sua beleza natural com
            elegância e cuidado.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg sm:text-xl mb-3 text-mint">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-aqua transition">
                Início
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-aqua transition">
                Produtos
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-aqua transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-aqua transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Contato e redes */}
        <div>
          <h4 className="font-display text-xl mb-3 text-lavender">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-aqua" />
              <span>Natal, Rio Grande do Norte</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-aqua" />
              <span>contato@koreaquamarine.com</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/koreaquamarine/" className="hover:text-mint transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-mint transition">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-pearl/70">
        © {new Date().getFullYear()} Koreaquamarine — Todos os direitos reservados.
        <a
          href="/admin/login"
          className="ml-3 text-pearl/30 hover:text-pearl/60 transition"
          aria-label="Acesso administrativo"
        >
          Admin
        </a>
      </div>
    </footer>
  );
}
