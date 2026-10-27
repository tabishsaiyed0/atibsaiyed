import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { RollButton, ease } from './Reveal';

const links = [['Home', '#home'], ['Services', '#services'], ['Projects', '#projects'], ['Contact', '#contact']];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="font-display text-xl font-extrabold">Atib Saiyed<span className="text-primary">.</span></a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="link-underline">{l}</a>)}
        </nav>
        <div className="hidden md:block"><RollButton href="#contact" className="px-5 py-2.5">Let's Talk</RollButton></div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-5 py-5 font-medium">
              {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
