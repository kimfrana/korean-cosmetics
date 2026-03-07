import { motion } from "framer-motion";
import { Heart, Sparkles, Leaf, Award, Users, Globe } from "lucide-react";
import heroImage from "../images/image.png";
import FloatingButtons from "../components/FloatingButtons";

export default function About() {
  return (
    <div className="bg-gradient-soft-vertical w-full min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden w-full">
        <img
          src={heroImage}
          alt="Korean Beauty Culture"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-mint/30"
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4 text-charcoal drop-shadow-sm"
          >
            Nossa História
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate drop-shadow-sm"
          >
            A paixão pela beleza coreana que transformou sonho em realidade
          </motion.p>
        </div>
      </section>

      {/* História da Fundadora */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-rose" />
                <h2 className="text-3xl sm:text-4xl font-display text-charcoal">
                  A Fundadora
                </h2>
              </div>
              
              <div className="space-y-6 text-slate text-lg leading-relaxed">
                <p>
                  <strong className="text-charcoal">Marina Kim</strong> descobriu a magia dos cosméticos coreanos durante uma viagem transformadora a Seul em 2019. Fascinada pela filosofia K-Beauty de cuidado preventivo e ingredientes naturais, ela mergulhou no mundo dos skincare coreanos.
                </p>
                
                <p>
                  Formada em Cosmetologia pela Universidade Federal do Rio Grande do Norte, Marina percebeu que os produtos coreanos ofereciam uma abordagem única: <em className="text-ocean">"não apenas tratar, mas prevenir e nutrir a pele com suavidade"</em>.
                </p>
                
                <p>
                  Em 2022, nasceu a <strong className="text-aqua">Koreaquamarine</strong> - uma curadoria cuidadosa dos melhores produtos K-Beauty, trazendo para o Brasil a excelência e inovação que Marina experimentou na Coreia do Sul.
                </p>
                
                <blockquote className="border-l-4 border-mint pl-6 py-2 bg-white/50 rounded-r-lg">
                  <p className="text-charcoal italic">
                    "Minha missão é democratizar o acesso aos segredos da beleza coreana, oferecendo produtos que realmente transformam a pele e elevam a autoestima de cada cliente."
                  </p>
                  <footer className="text-sm text-slate mt-2">— Marina Kim, Fundadora</footer>
                </blockquote>
              </div>
            </motion.div>

            {/* Imagem placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-mint to-aqua rounded-3xl p-8 text-center aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-white font-display text-2xl mb-2">Marina Kim</h3>
                    <p className="text-white/90">Fundadora & CEO</p>
                    <p className="text-white/80 text-sm mt-2">Cosmetóloga Especialista em K-Beauty</p>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-lavender rounded-full opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre os Produtos Coreanos */}
      <section className="py-16 sm:py-20 bg-white/30 w-full">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-aqua" />
              <h2 className="text-3xl sm:text-4xl font-display text-charcoal">
                Excelência K-Beauty
              </h2>
              <Sparkles className="w-8 h-8 text-aqua" />
            </div>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Descubra por que os cosméticos coreanos são reconhecidos mundialmente como os mais inovadores e eficazes do mercado
            </p>
          </motion.div>

          {/* Grid de características */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Ingredientes Naturais",
                description: "Extratos de plantas asiáticas milenares como ginseng, chá verde e arroz, conhecidos por suas propriedades regenerativas e anti-aging.",
                color: "text-mint"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Inovação Científica",
                description: "Tecnologia de ponta em laboratórios coreanos, desenvolvendo fórmulas exclusivas que combinam tradição e ciência moderna.",
                color: "text-ocean"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Cuidado Preventivo",
                description: "Filosofia de skincare baseada na prevenção e manutenção, não apenas no tratamento de problemas existentes.",
                color: "text-rose"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Texturas Únicas",
                description: "Fórmulas leves, de rápida absorção e múltiplas camadas que nutrem profundamente sem oleosidade excessiva.",
                color: "text-aqua"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Para Todos os Tipos",
                description: "Produtos desenvolvidos para atender desde peles sensíveis até as mais exigentes, respeitando as características individuais.",
                color: "text-lavender"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Reconhecimento Mundial",
                description: "A indústria K-Beauty conquistou o mundo com sua eficácia comprovada e resultados visíveis em todas as idades.",
                color: "text-mint"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition group"
              >
                <div className={`${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Diferencial da Koreaquamarine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-aqua/10 to-mint/10 rounded-3xl p-8 sm:p-12 text-center"
          >
            <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-6">
              O Diferencial Koreaquamarine
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-ocean text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-charcoal text-lg mb-2">Curadoria Especializada</h4>
                <p className="text-slate">Seleção criteriosa dos melhores produtos K-Beauty disponíveis no mercado mundial</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-rose text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-charcoal text-lg mb-2">Atendimento Personalizado</h4>
                <p className="text-slate">Consultoria especializada para encontrar os produtos ideais para cada tipo de pele</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-mint text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-charcoal text-lg mb-2">Qualidade Garantida</h4>
                <p className="text-slate">Produtos originais importados diretamente da Coreia do Sul com certificação de qualidade</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 text-center px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display text-charcoal mb-6">
            Pronta para descobrir seu melhor eu?
          </h2>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de mulheres que já transformaram suas rotinas de cuidados com os segredos da beleza coreana
          </p>
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gradient-border-mint text-ocean font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gradient-mint-ocean-hover hover:text-pearl transition-all duration-300 text-lg"
          >
            Explorar Produtos
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* Botões Flutuantes */}
      <FloatingButtons />
    </div>
  );
}