import { motion } from "framer-motion";
import { MapPin, MessageCircle, Instagram } from "lucide-react";
import FloatingButtons from "../components/FloatingButtons";

export default function Contact() {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre os produtos da Koreaquamarine.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-gradient-soft-vertical w-full min-h-screen pt-16 sm:pt-20">
      <section className="py-12 sm:py-16 text-center px-4 sm:px-6 lg:px-8 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4 text-charcoal"
        >
          Fale Conosco
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl text-slate max-w-2xl mx-auto"
        >
          Atendimento personalizado para ajudar você a escolher os melhores produtos K-Beauty
        </motion.p>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-display text-charcoal mb-4">
              Fale com a gente no WhatsApp
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Esse é o principal canal de vendas da Koreaquamarine. Envie sua dúvida e receba sugestões personalizadas para a sua rotina.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-mint-ocean text-white px-6 py-4 rounded-full font-medium shadow-md hover:scale-[1.02] transition"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar no WhatsApp
            </a>

            <p className="text-sm text-slate mt-4">
              Número para atendimento: +55 11 99999-9999
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl text-charcoal mb-3">Outros contatos</h3>
              <ul className="space-y-3 text-slate">
                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-ocean" />
                  <a
                    href="https://instagram.com/koreaquamarine"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ocean transition"
                  >
                    @koreaquamarine
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-ocean" />
                  <span>Natal, Rio Grande do Norte</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl text-charcoal mb-3">Atendimento rápido</h3>
              <p className="text-slate leading-relaxed">
                Para comprar e tirar dúvidas, fale direto no WhatsApp. O retorno costuma ser mais rápido por lá.
              </p>
              <div className="mt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ocean hover:text-charcoal transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">Abrir conversa agora</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-display text-charcoal mb-3">
              FAQ Rápido
            </h2>
            <p className="text-slate">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                pergunta: "Como faço um pedido?",
                resposta: "Envie mensagem no WhatsApp e ajudamos você a escolher e finalizar a compra."
              },
              {
                pergunta: "Os produtos são originais?",
                resposta: "Sim, trabalhamos com produtos originais e selecionados de K-Beauty."
              },
              {
                pergunta: "Vocês entregam para todo o Brasil?",
                resposta: "Sim, enviamos para todo o Brasil. O prazo varia conforme a região."
              },
              {
                pergunta: "Posso receber indicação para meu tipo de pele?",
                resposta: "Sim, o atendimento no WhatsApp inclui orientação personalizada."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.pergunta}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <h3 className="font-semibold text-charcoal mb-2">{faq.pergunta}</h3>
                <p className="text-slate leading-relaxed">{faq.resposta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
}