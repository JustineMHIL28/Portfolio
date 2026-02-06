// src/components/Footer.tsx

import { motion } from 'framer-motion';
import { Mail, Facebook, Github, Linkedin, FileText } from 'lucide-react';
import { footerData } from '../data/portfolio-data';

const socialIcons: Record<string, React.ComponentType<any>> = {
  Gmail: Mail,
  Facebook: Facebook,
  GitHub: Github,
  LinkedIn: Linkedin,
  Indeed: FileText,
};

export const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-2">Let's Connect</h3>
            <p className="text-muted-foreground">
              Ready to build something amazing together?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3"
          >
            {footerData.map((social) => {
              const Icon = socialIcons[social.name] || Mail;
              return (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-card border-none shadow-none hover:border-green-500/50 flex items-center justify-center transition-all duration-300 group"
                  title={social.description}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-green-400 transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground font-mono">
            © 2024 Justine M. Hilario. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-green-400">React</span>,{' '}
            <span className="text-green-400">TypeScript</span> &{' '}
            <span className="text-green-400">shadcn/ui</span>
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </footer>
  );
};
