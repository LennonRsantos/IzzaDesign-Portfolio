import { motion } from "framer-motion";

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialButton = ({ href, label, icon }: SocialButtonProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 rounded-full border border-border bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow transition-all duration-300"
  >
    {icon}
  </motion.a>
);

export const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedInIcon = () => <i className="devicon-linkedin-plain"></i>;

export const BehanceIcon = () => <i className="devicon-behance-plain"></i>;

export default SocialButton;
