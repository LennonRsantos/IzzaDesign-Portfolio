import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import herocel from "@/assets/hero-cel-bg.png";
import SocialButton, { InstagramIcon, LinkedInIcon, BehanceIcon } from "./SocialButton";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Imagem Mobile */}
        <img src={herocel} alt="Imagem da Izza" className="block md:hidden w-full h-full object-cover opacity-45" />
        {/* Imagem Desktop */}
        <img src={heroBg} alt="Imagem da Izza" className="hidden md:block w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="font-body text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Design &amp; Social Media
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.15
        }} className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[0.95] mb-6">
            ELEVANDO<br />
            MARCAS ATRAVÉS<br />
            DO <span className="text-gradient">VISUAL</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.35
        }} className="font-body text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Crio identidades visuais estratégicas, designs modernos e soluções criativas que fortalecem marcas e geram impacto visual.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="flex flex-wrap items-center gap-4">
            <a href="#projetos" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider hover:glow transition-all duration-300 hover:scale-105">
              Ver Projetos
            </a>
            <a href="#contato" className="inline-flex items-center px-8 py-4 rounded-full border border-border text-foreground font-body font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300">
              Fale Comigo
            </a>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.7
        }} className="flex gap-3 mt-10 justify-center md:justify-start">
            <SocialButton href="https://www.instagram.com/izzadesigner/" label="Instagram" icon={<InstagramIcon />} />
            <SocialButton href="https://www.linkedin.com/in/isadoralmsg/" label="LinkedIn" icon={<LinkedInIcon />} />
            <SocialButton href="https://www.behance.net/izzadesigner" label="Behance" icon={<BehanceIcon />} />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;