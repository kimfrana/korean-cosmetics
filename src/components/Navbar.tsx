import { Link, NavLink } from "react-router-dom";
import { Heart, User, Menu, X, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-sm z-50 w-full">
      <nav className="w-full flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-display font-semibold text-aqua"
          style={{ color: '#0284C7' }}
        >
          <span className="text-rose">Korea</span>quamarine
        </Link>

        {/* Links de navegação */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-slate">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-ocean" : "hover:text-ocean transition"
              }
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-ocean" : "hover:text-ocean transition"
              }
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-ocean" : "hover:text-ocean transition"
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-ocean" : "hover:text-ocean transition"
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>

        {/* Ícones de ação - Desktop */}
        {/* <div className="hidden md:flex items-center gap-5 text-slate">
          <button className="hover:text-ocean transition">
            <Heart className="w-5 h-5" />
          </button>
          <button className="hover:text-ocean transition">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="hover:text-ocean transition">
            <User className="w-5 h-5" />
          </button>
        </div> */}

        {/* Ícones de redes sociais */}
        <div className="hidden md:flex items-center gap-5 text-slate">
            <a href="https://www.instagram.com/koreaquamarine/" className="hover:text-mint transition" target="_blank">
                <Instagram className="w-5 h-5" />
            </a>
          <a href="https://wa.me/5511999999999" className="hover:text-mint transition" target="_blank" rel="noreferrer">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>  
        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-3">
          {/* <button className="hover:text-aqua transition">
            <ShoppingBag className="w-5 h-5" />
          </button> */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:text-aqua transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="py-4 px-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition ${
                  isActive ? "text-ocean bg-ocean/10" : "text-slate hover:text-ocean hover:bg-ocean/5"
                }`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition ${
                  isActive ? "text-ocean bg-ocean/10" : "text-slate hover:text-ocean hover:bg-ocean/5"
                }`
              }
            >
              Produtos
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition ${
                  isActive ? "text-aqua bg-aqua/10" : "text-slate hover:text-aqua hover:bg-aqua/5"
                }`
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition ${
                  isActive ? "text-aqua bg-aqua/10" : "text-slate hover:text-aqua hover:bg-aqua/5"
                }`
              }
            >
              Contato
            </NavLink>
            <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
              <button className="flex items-center gap-2 py-2 px-3 text-slate hover:text-aqua transition">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Favoritos</span>
              </button>
              <button className="flex items-center gap-2 py-2 px-3 text-slate hover:text-aqua transition">
                <User className="w-4 h-4" />
                <span className="text-sm">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
