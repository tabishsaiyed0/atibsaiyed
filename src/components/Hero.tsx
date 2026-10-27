import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { RollButton, ease } from './Reveal';
import ProfileCard from './ProfileCard';

const words = ['websites', 'landing pages', 'automations', 'CRMs', 'AI chatbots', 'client portals'];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1.12em] overflow-hidden whitespace-nowrap align-bottom">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={words[i]}
          initial={{ y: '105%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-105%', opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-gradient inline-block pb-1 will-change-transform"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const up = (d: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay: d },
});

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex max-w-6xl items-center px-5 py-10 md:px-8 lg:min-h-[calc(100svh-73px)] lg:py-6">
      <div className="grid w-full items-center gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-3">
          <motion.a {...up(0.1)} href="#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <span className="ul-draw" style={{ animationDelay: '0.6s' }}>See my work below</span> <ArrowDown className="h-4 w-4 animate-bounce" />
          </motion.a>
          <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.08] sm:text-6xl lg:text-[4rem]">
            <motion.span {...up(0.2)} className="block">I build <RotatingWord /></motion.span>
            <motion.span {...up(0.32)} className="block">that win customers</motion.span>
            <motion.span {...up(0.44)} className="block">and run themselves.</motion.span>
          </h1>
          <motion.p {...up(0.58)} className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm <span className="ul-draw font-semibold text-foreground" style={{ animationDelay: '1s' }}>Atib Saiyed</span>, a{' '}
            <span className="hl-sweep rounded-md px-2 py-0.5 font-medium text-accent-foreground" style={{ animationDelay: '1.25s' }}>Website & AI Automation Expert</span>. I help small businesses get more leads and stop wasting hours on busywork.
          </motion.p>
          <motion.div {...up(0.7)} className="mt-7 flex flex-wrap gap-3">
            <RollButton href="#projects">View Projects</RollButton>
            <RollButton href="#contact" variant="outline">Contact</RollButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          className="lg:col-span-2"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}
