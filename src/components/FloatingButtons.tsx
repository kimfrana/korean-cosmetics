import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function FloatingButtons() {
  const handleWhatsApp = () => {
    const whatsappNumber = "5511999999999";
    const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre os produtos da Koreaquamarine.");
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  const handleInstagram = () => {
    // Substitua pelo perfil do Instagram da empresa
    window.open("https://instagram.com/koreaquamarine", "_blank");
  };

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50 flex flex-col gap-4 bg-transparent">
      {/* Botão WhatsApp - Formato de frasco de essência */}
      <motion.button
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="floating-button relative group"
      >
        {/* Corpo do frasco */}
        <div className="w-14 h-16 sm:w-16 sm:h-18 bg-gradient-to-b from-pearl to-mint rounded-2xl rounded-t-full shadow-lg backdrop-blur-sm relative overflow-hidden">
          {/* Tampa do frasco */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-aqua rounded-full"></div>
          
          {/* Brilho no frasco */}
          <div className="absolute top-2 left-2 w-3 h-8 bg-white/50 rounded-full"></div>
          
          {/* Ícone WhatsApp */}
          <div className="absolute inset-0 flex items-center justify-center pt-2">
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 text-ocean drop-shadow-sm" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488z"/>
            </svg>
          </div>
          
          {/* Efeito de líquido */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-aqua/30 to-transparent rounded-b-2xl"
          ></motion.div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white text-ocean px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg border border-mint">
            Fale conosco no WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-white"></div>
          </div>
        </div>
      </motion.button>

      {/* Botão Instagram - Formato de pote de creme */}
      <motion.button
        onClick={handleInstagram}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="floating-button relative group"
      >
        {/* Corpo do pote */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose via-lavender to-rose rounded-full shadow-lg backdrop-blur-sm relative overflow-hidden">
          {/* Tampa do pote */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-5 bg-rose rounded-full shadow-sm"></div>
          
          {/* Brilho no pote */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-white/50 rounded-full"></div>
          
          {/* Ícone Instagram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" />
          </div>
          
          {/* Efeito de textura do creme */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          ></motion.div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white text-rose px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg border border-lavender">
            Siga no Instagram
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-white"></div>
          </div>
        </div>
      </motion.button>

      {/* Efeito de partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-mint rounded-full"
            animate={{
              y: [-20, -40, -20],
              x: [0, 10, -5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${20 + i * 20}%`,
              bottom: `${60 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}