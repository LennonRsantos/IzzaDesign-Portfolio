import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const navItems = [{
  label: "Home",
  href: "#home"
}, {
  label: "Sobre",
  href: "#sobre"
}, {
  label: "Projetos",
  href: "#projetos"
}, {
  label: "Contato",
  href: "#contato"
}];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-heading text-2xl text-gradient tracking-wider">
          IZZA DESIGNER 
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(item => <li key={item.href}>
              <a href={item.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase">
                {item.label}
              </a>
            </li>)}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <ul className="flex flex-col items-center gap-4 py-6">
              {navItems.map(item => <li key={item.href}>
                  <a href={item.href} onClick={() => setMobileOpen(false)} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors uppercase">
                    {item.label}
                  </a>
                </li>)}
            </ul>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};
export default Navbar;