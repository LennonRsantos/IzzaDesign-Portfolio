import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import SocialButton, { InstagramIcon, LinkedInIcon, BehanceIcon } from "./SocialButton";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  // Mudamos 'email' para 'subject'
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name.trim() || !form.subject.trim() || !form.message.trim()) return;
  
    const phoneNumber = "5547991030871"; 

    const text = `*Contato via portfólio*
*Nome:* ${form.name}
*Assunto:* ${form.subject}
*Mensagem:* ${form.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setForm({ name: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-body mb-2">Contato</p>
          <h2 className="text-4xl md:text-5xl font-heading">
            VAMOS <span className="text-gradient">CONVERSAR</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                required
              />
            </div>

            
            <div>
              <input
                type="text"
                placeholder="Assunto da mensagem"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Sua mensagem"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-green-600 text-white font-body font-semibold text-sm uppercase tracking-wider hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              <MessageCircle size={18} />
              Enviar para o WhatsApp
            </motion.button>
            
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-sm font-body text-center"
              >
                Abrindo WhatsApp...
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-heading text-2xl mb-4">Entre em contato</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
              Me siga nas redes sociais para acompanhar meus projetos ou me chame diretamente no WhatsApp para falar sobre um novo projeto.
            </p>
            <div className="flex gap-4">
              <SocialButton href="https://www.instagram.com/izzadesigner/" label="Instagram" icon={<InstagramIcon />} />
              <SocialButton href="https://www.linkedin.com/in/isadoralmsg/" label="LinkedIn" icon={<LinkedInIcon />} />
              <SocialButton href="https://www.behance.net/izzadesigner" label="Behance" icon={<BehanceIcon />} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;