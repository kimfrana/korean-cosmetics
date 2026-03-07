import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "../images/image.png";
import FloatingButtons from "../components/FloatingButtons";
import ProductModal from "../components/ProductModal";
import { getProductsForView } from "../lib/productStore";
import type { ProductView } from "../lib/productStore";

const depoimentos = [
  {
    id: 1,
    nome: "Ana Carolina",
    idade: 28,
    cidade: "Natal, RN",
    produto: "Foam Cleanser Coreano",
    avaliacao: 5,
    depoimento: "Minha pele nunca esteve tão limpa e suave! O foam cleanser é incrível, remove toda maquiagem sem ressecar. Já é o terceiro que compro!",
    tempo: "3 meses usando"
  },
  {
    id: 2,
    nome: "Mariana Santos",
    idade: 35,
    cidade: "Fortaleza, CE",
    produto: "Moisture Up Pad",
    avaliacao: 5,
    depoimento: "Os pads são revolucionários! Minha rotina de skincare ficou muito mais prática e os resultados apareceram logo na primeira semana.",
    tempo: "6 meses usando"
  },
  {
    id: 3,
    nome: "Juliana Lima",
    idade: 24,
    cidade: "João Pessoa, PB",
    produto: "Colorgram Makeup Base",
    avaliacao: 5,
    depoimento: "A base tem uma cobertura perfeita e dura o dia todo! Minha pele fica com aspecto natural, como se fosse a famosa 'pele de vidro' coreana.",
    tempo: "1 ano usando"
  },
  {
    id: 4,
    nome: "Rafaela Oliveira",
    idade: 31,
    cidade: "Recife, PE",
    produto: "Foam Cleansing Premium",
    avaliacao: 5,
    depoimento: "O atendimento da Koreaquamarine é excepcional! Marina me ajudou a escolher os produtos ideais para minha pele mista. Estou apaixonada pelos resultados!",
    tempo: "8 meses usando"
  },
  {
    id: 5,
    nome: "Camila Ferreira",
    idade: 26,
    cidade: "Natal, RN",
    produto: "Vários produtos",
    avaliacao: 5,
    depoimento: "Descobri a Koreaquamarine pelo Instagram e foi amor à primeira compra! Os produtos são originais, chegam super rápido e minha pele transformou completamente.",
    tempo: "2 anos cliente"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductView | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtos, setProdutos] = useState<ProductView[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProductsForView();
      setProdutos(data);
    };

    void loadProducts();
  }, []);

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % depoimentos.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  const openProductModal = (produto: ProductView) => {
    setSelectedProduct(produto);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  return (
    <div className="bg-gradient-soft-vertical w-full min-h-screen">
      {/* HERO */}
    <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden w-full">
        <img
            src={heroImage}
            alt="Korean Skincare Products"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Gradient overlay to smooth transition between image and background */}
        <div
            className="absolute bottom-0 left-0 w-full h-40 sm:h-56 lg:h-64 pointer-events-none z-5"
            style={{
                background: "linear-gradient(to top, rgba(167, 243, 208, 0.3) 0%, rgba(125, 211, 252, 0.2) 50%, transparent 100%)"
            }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 text-charcoal w-full">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-2xl text-5xl lg:text-6xl font-display font-semibold mb-4 drop-shadow-sm leading-tight"
            >
                O segredo da beleza coreana
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl font-light mb-6 text-slate drop-shadow-sm"
            >
                Skincare premium inspirado nas rotinas mais luxuosas de Seul.
            </motion.p>
            <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-gradient-border-mint text-ocean font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-gradient-mint-ocean-hover hover:text-pearl transition-all duration-300 text-sm sm:text-base"
            >
                Explorar Coleção
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
        </div>
    </section>

      {/* CATEGORIAS */}
      <section className="py-12 sm:py-16 text-center px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl sm:text-3xl font-display mb-8 sm:mb-10 text-charcoal">Categorias</h2>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 w-full">
          {["Rosto", "Corpo", "Cabelos", "K-Beauty"].map((categoria, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 cursor-pointer hover:shadow-lg transition"
            >
              <p className="font-medium text-sm sm:text-base lg:text-lg">{categoria}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS DE CLIENTES */}
      <section className="py-16 sm:py-20 bg-white/30 w-full">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-display mb-4 text-charcoal">
              O que nossas clientes dizem
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Histórias reais de transformação com os produtos K-Beauty da Koreaquamarine
            </p>
          </motion.div>

          {/* Carrossel de Depoimentos */}
          <div className="relative max-w-4xl mx-auto">
            {/* Container do carrossel */}
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {depoimentos.map((depoimento) => (
                  <div key={depoimento.id} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="bg-white rounded-2xl p-8 shadow-lg mx-auto max-w-3xl"
                    >
                      {/* Avaliação em estrelas */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(depoimento.avaliacao)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Depoimento */}
                      <blockquote className="text-lg sm:text-xl text-charcoal text-center mb-8 leading-relaxed font-light italic">
                        "{depoimento.depoimento}"
                      </blockquote>

                      {/* Informações da cliente */}
                      <div className="text-center border-t border-mint/20 pt-6">
                        <div className="flex items-center justify-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-mint to-aqua rounded-full flex items-center justify-center text-white font-semibold text-lg">
                            {depoimento.nome.charAt(0)}
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-charcoal text-lg">
                              {depoimento.nome}
                            </h4>
                            <p className="text-slate text-sm">
                              {depoimento.idade} anos • {depoimento.cidade}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
                          <span className="bg-ocean/10 text-ocean px-3 py-1 rounded-full font-medium">
                            {depoimento.produto}
                          </span>
                          <span className="text-slate">
                            {depoimento.tempo}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Botões de navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-mint/10 transition z-10"
            >
              <ChevronLeft className="w-6 h-6 text-charcoal" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-mint/10 transition z-10"
            >
              <ChevronRight className="w-6 h-6 text-charcoal" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-8">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide
                      ? "bg-ocean"
                      : "bg-slate/30 hover:bg-slate/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            {[
              { numero: "500+", label: "Clientes Satisfeitas" },
              { numero: "4.9", label: "Avaliação Média" },
              { numero: "98%", label: "Recomendariam" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-ocean mb-2">
                  {stat.numero}
                </div>
                <div className="text-slate font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="py-12 sm:py-16 lg:py-20 w-full">
        <h2 className="text-2xl sm:text-3xl font-display mb-8 sm:mb-10 text-center text-charcoal px-4">
          Destaques da Semana
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
          {produtos.map((produto) => (
            <motion.div
              key={produto.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden w-full"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-medium text-sm sm:text-base lg:text-lg mb-1 line-clamp-2">{produto.nome}</h3>
                <p className="text-rose font-semibold mb-3 text-sm sm:text-base">{produto.preco}</p>
                <button 
                  onClick={() => openProductModal(produto)}
                  className="bg-ocean text-pearl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-aqua hover:text-charcoal transition text-xs sm:text-sm w-full sm:w-auto"
                >
                  Ver Detalhes
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Botões Flutuantes */}
      <FloatingButtons />

      {/* Modal de Produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
      />
    </div>
  );
}
