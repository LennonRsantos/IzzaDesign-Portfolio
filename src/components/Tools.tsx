import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "Illustrator", iconClass: "devicon-illustrator-plain" },
  { name: "Photoshop", iconClass: "devicon-photoshop-plain" },
  { name: "Canva Pro", iconClass: "devicon-canva-original" }, 
  { name: "CapCut", iconClass: "hgi hgi-stroke hgi-rounded hgi-capcut" },
  { name: "Figma", iconClass: "devicon-figma-plain" },
];

const Tools = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ferramentas" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-body mb-2">Softwares</p>
          <h2 className="text-4xl md:text-5xl font-heading">
            FERRAMENTAS <span className="text-gradient">DOMINADAS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 hover:glow transition-all duration-300"
            >
              <i className={`${tool.iconClass} text-5xl`}></i>
              
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;