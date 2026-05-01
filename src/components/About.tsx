import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const specialties = [
    "Identidade Visual",
    "Branding",
    "Social Media",
    "Marketing Digital",
    "Design Gráfico",
    "Inteligência Artificial",
    "Edição de Vídeo",
  ];

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-body mb-2">Sobre mim</p>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">
              DESIGNER COM<br />
              <span className="text-gradient">PROPÓSITO</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Sou formada em Marketing, especialista em Design e Social Media. Crio conteúdos estratégicos, visuais fortes e copys que posicionam marcas e fazem sentido no digital. Criatividade com propósito, sempre focada em resultado.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl mb-6">ESPECIALIDADES</h3>
            <div className="flex flex-wrap gap-3">
              {specialties.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="px-5 py-2.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm font-body hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "20+", label: "Projetos" },
                { value: "30+", label: "Clientes" },
                { value: "3+", label: "Anos" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-heading text-3xl text-gradient">{stat.value}</p>
                  <p className="font-body text-muted-foreground text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
