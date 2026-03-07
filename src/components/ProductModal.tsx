import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Heart } from "lucide-react";

interface Product {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  categoria?: string;
  descricao?: string;
  beneficios?: string[];
  ingredientes?: string[];
  modoUso?: string;
  avaliacoes?: number;
  estrelas?: number;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header com botão fechar */}
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition"
                >
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>

              <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                {/* Header com imagem e nome */}
                <div className="flex flex-col lg:flex-row p-6 lg:p-8 bg-gradient-to-br from-mint/10 to-aqua/10">
                  {/* Badge da categoria */}
                  {product.categoria && (
                    <div className="absolute top-4 left-4 bg-ocean text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      {product.categoria}
                    </div>
                  )}
                  
                  {/* Imagem do produto */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start mb-6 lg:mb-0 lg:mr-8">
                    <img
                      src={product.imagem}
                      alt={product.nome}
                      className="w-48 h-48 lg:w-56 lg:h-56 object-contain rounded-xl"
                    />
                  </div>

                  {/* Nome e informações básicas */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-3xl font-display font-semibold text-charcoal mb-4 text-center lg:text-left">
                      {product.nome}
                    </h2>
                    
                    {/* Avaliações */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                      <div className="flex gap-1">
                        {[...Array(product.estrelas || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-slate">
                        ({product.avaliacoes || 127} avaliações)
                      </span>
                    </div>

                    {/* Preço */}
                    <div className="text-3xl font-bold text-rose text-center lg:text-left">
                      {product.preco}
                    </div>
                  </div>
                </div>

                {/* Informações detalhadas do produto */}
                <div className="p-6 lg:p-8 flex flex-col">

                  {/* Descrição */}
                  {product.descricao && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-charcoal mb-2">
                        Descrição
                      </h3>
                      <p className="text-slate leading-relaxed">
                        {product.descricao}
                      </p>
                    </div>
                  )}

                  {/* Benefícios */}
                  {product.beneficios && product.beneficios.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-charcoal mb-3">
                        Principais Benefícios
                      </h3>
                      <ul className="space-y-2">
                        {product.beneficios.map((beneficio, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-ocean rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate text-sm">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Ingredientes principais */}
                  {product.ingredientes && product.ingredientes.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-charcoal mb-3">
                        Ingredientes Principais
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.ingredientes.map((ingrediente, index) => (
                          <span
                            key={index}
                            className="bg-mint/20 text-ocean px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {ingrediente}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Modo de uso */}
                  {product.modoUso && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-charcoal mb-2">
                        Como Usar
                      </h3>
                      <p className="text-slate text-sm leading-relaxed bg-mint/10 p-4 rounded-lg">
                        {product.modoUso}
                      </p>
                    </div>
                  )}

                  {/* Botões de ação */}
                  <div className="mt-auto space-y-3">
                    {/* <button className="w-full bg-gradient-ocean-aqua text-white font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Adicionar ao Carrinho
                    </button> */}
                    
                    <button className="w-full border-2 border-rose text-rose font-semibold py-3 rounded-full hover:bg-rose hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Adicionar aos Favoritos
                    </button>
                  </div>

                  {/* Informações adicionais */}
                  <div className="mt-6 pt-4 border-t border-mint/20">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate">Entrega:</span>
                        <p className="font-medium text-charcoal">2-3 dias úteis</p>
                      </div>
                      <div>
                        <span className="text-slate">Garantia:</span>
                        <p className="font-medium text-charcoal">30 dias</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}