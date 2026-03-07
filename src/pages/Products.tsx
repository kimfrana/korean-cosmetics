import { motion } from "framer-motion";
import { Search, Filter, Heart, ShoppingBag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import FloatingButtons from "../components/FloatingButtons";
import ProductModal from "../components/ProductModal";
import { getProductsForView } from "../lib/productStore";
import type { ProductView } from "../lib/productStore";

export default function Products() {
  const [allProducts, setAllProducts] = useState<ProductView[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("nome");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductView | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setAllProducts(getProductsForView());
  }, []);

  const categorias = useMemo(
    () => ["Todos", ...new Set(allProducts.map((product) => product.categoria))],
    [allProducts]
  );

  const openProductModal = (produto: ProductView) => {
    setSelectedProduct(produto);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  // Filtrar produtos
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Ordenar produtos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "preco-menor":
        return parseFloat(a.preco.replace("R$ ", "").replace(",", ".")) - 
               parseFloat(b.preco.replace("R$ ", "").replace(",", "."));
      case "preco-maior":
        return parseFloat(b.preco.replace("R$ ", "").replace(",", ".")) - 
               parseFloat(a.preco.replace("R$ ", "").replace(",", "."));
      case "avaliacao":
        return b.avaliacao - a.avaliacao;
      default:
        return a.nome.localeCompare(b.nome);
    }
  });

  return (
    <div className="bg-gradient-soft-vertical w-full min-h-screen pt-16 sm:pt-20">
      {/* Header da página */}
      <section className="py-8 sm:py-12 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4 text-charcoal"
        >
          Nossos Produtos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-slate max-w-2xl mx-auto"
        >
          Descubra nossa coleção completa de produtos K-Beauty premium
        </motion.p>
      </section>

      {/* Barra de pesquisa e filtros */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full">
          {/* Barra de pesquisa */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-mint/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-aqua focus:border-transparent transition"
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            {/* Categorias */}
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setSelectedCategory(categoria)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === categoria
                      ? "bg-ocean text-pearl"
                      : "bg-white/80 text-charcoal hover:bg-mint/20"
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>

            {/* Ordenação */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-charcoal hover:bg-mint/20 transition"
              >
                <Filter className="w-4 h-4" />
                Filtros
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-full border border-mint/30 bg-white/80 text-charcoal focus:outline-none focus:ring-2 focus:ring-aqua"
              >
                <option value="nome">Ordenar por Nome</option>
                <option value="preco-menor">Menor Preço</option>
                <option value="preco-maior">Maior Preço</option>
                <option value="avaliacao">Melhor Avaliado</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full">
          {/* Contador de resultados */}
          <div className="mb-6 text-slate">
            <p>Mostrando {sortedProducts.length} produto{sortedProducts.length !== 1 ? 's' : ''}</p>
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((produto, index) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group relative"
              >
                {/* Badge de destaque */}
                {produto.destaque && (
                  <div className="absolute top-3 left-3 z-10 bg-rose text-white px-2 py-1 rounded-full text-xs font-medium">
                    Destaque
                  </div>
                )}

                {/* Botão de favorito */}
                <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-white hover:text-rose">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Imagem do produto */}
                <div className="relative overflow-hidden">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Informações do produto */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-aqua font-medium">{produto.categoria}</span>
                    <span className="mx-2 text-slate">•</span>
                    <span className="text-xs text-slate">{produto.marca}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-charcoal">
                    {produto.nome}
                  </h3>
                  
                  <p className="text-sm text-slate mb-3 line-clamp-2">
                    {produto.descricao}
                  </p>

                  {/* Avaliação */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xs ${
                          i < Math.floor(produto.avaliacao) ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-slate ml-1">({produto.avaliacao})</span>
                  </div>

                  {/* Preço e botões */}
                  <div className="space-y-3">
                    <span className="text-xl font-bold text-rose block">{produto.preco}</span>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => openProductModal(produto)}
                        className="flex-1 bg-white border-2 border-ocean text-ocean px-3 py-2 rounded-full hover:bg-ocean hover:text-white transition text-sm font-medium"
                      >
                        Ver Detalhes
                      </button>
                      <button className="flex-1 bg-ocean text-pearl px-3 py-2 rounded-full hover:bg-aqua hover:text-charcoal transition flex items-center justify-center gap-1 text-sm">
                        <ShoppingBag className="w-4 h-4" />
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mensagem quando não há produtos */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate text-lg mb-2">Nenhum produto encontrado</div>
              <p className="text-slate">Tente ajustar os filtros ou termos de pesquisa</p>
            </div>
          )}
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