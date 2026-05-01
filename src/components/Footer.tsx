import SocialButton, { InstagramIcon, LinkedInIcon, BehanceIcon } from "./SocialButton";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-heading text-xl text-gradient tracking-wider">IZZA DESIGNER</p>
      <p className="font-body text-muted-foreground text-xs">
        © 2026 • IZZA DESIGNER • Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
