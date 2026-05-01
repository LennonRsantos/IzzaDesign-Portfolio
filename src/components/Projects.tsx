import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Tag } from "lucide-react";

//Img
import kristaImg from "../assets/krista.png";
import draCousinImg from "../assets/Dra.AlexandraCousin.png";
import melyImg from "../assets/mely.png";
import HotelBoutiqueImg from "../assets/hotel-boutique.png";
import williamImg from "../assets/William.png";
import pizzaImg from "../assets/pizza-art.png";

const projects = [
  {
    title: "Krista Digital",
    segment: "Marketing Digital",
    category: "Identidade Visual & branding",
    description: "Criação completa da identidade visual para uma marca/agência, incluindo logo, paleta de cores, tipografia, manual da marca e aplicações.",
    image: kristaImg,
    link: "https://www.behance.net/gallery/231206391/Projeto-ID-Visual-Krista-Digital"
  },
  {
    title: "Dra. Alexandra Cousin",
    segment: "Medicina",
    category: "Identidade Visual & branding",
    description: "Criação da identidade visual para consultório de gastro, com foco em confiança e acolhimento. Inclui logo, cores, tipografia e aplicações.",
    image: draCousinImg,
    link: "https://www.behance.net/gallery/246171391/Identidade-Visual-Gastroenterologista"
  },
  {
    title: "Meli Store",
    segment: "Moda Feminina",
    category: "Identidade Visual & branding",
    description: "Identidade visual completa para loja de moda feminina, desenvolvida para transmitir personalidade e autenticidade, criando uma marca marcante e conectada ao seu público.",
    image: melyImg,
    link: "https://www.behance.net/gallery/197461063/Identidade-Visual-Meli-Store"
  },
  {
    title: "Hotel Boutique",
    segment: "Hotelaria",
    category: "Social Media & Design de Posts",
    description: "Social media e design de posts para hotel boutique em Santa Catarina, com visual sofisticado e conteúdo estratégico para destacar a experiência da hospedagem e atrair novos hóspedes.",
    image: HotelBoutiqueImg,
    link: "https://www.behance.net/gallery/248603881/Social-Media-Hotel-Boutique"
  },
  {
    title: "Corretor de Imôveis",
    segment: "Imobiliário",
    category: "Design de Posts",
    description: "Design de posts para corretor de imóveis, com visual profissional e conteúdo estratégico para valorizar imóveis, fortalecer a presença digital e atrair novos clientes.",
    image: williamImg,
    link: "https://www.behance.net/gallery/248607113/POSTS-PARA-CORRETOR-DE-IMOVEIS"
  },
  {
    title: "PizzArte",
    segment: "Pizzaria",
    category: "Design de Posts",
    description: "Design de posts para pizzaria artesanal, com visual atrativo e conteúdo estratégico para destacar os sabores, fortalecer a marca e atrair mais clientes.",
    image: pizzaImg,
    link: "https://www.behance.net/gallery/248607049/POSTS-PARA-PIZZARIA"
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projetos" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-body mb-2">Portfólio</p>
          <h2 className="text-4xl md:text-5xl font-heading">
            MEUS <span className="text-gradient">PROJETOS</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Aqui você encontra alguns dos projetos que desenvolvi, aplicando criatividade, estratégia e atenção aos detalhes para fortalecer marcas e comunicar ideias de forma visualmente eficaz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cursor-pointer group relative rounded-xl overflow-hidden bg-secondary border border-border hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <ExternalLink className="text-primary" size={28} />
                  </motion.div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-primary text-xs uppercase tracking-wider font-body mb-1">{project.category}</p>
                <h3 className="font-heading text-xl mb-2">{project.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                {project.segment && (
                  <div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-1.5 text-muted-foreground/60 text-xs font-body tracking-wide">
                    <Tag size={10} />
                    {project.segment}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-body text-muted-foreground text-sm mb-4">🔗 Veja mais projetos no Behance:</p>
          <a
            href="https://www.behance.net/izzadesigner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full border border-primary text-primary font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver no Behance
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
