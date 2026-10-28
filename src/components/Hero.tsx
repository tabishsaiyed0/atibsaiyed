import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RollButton, ease } from './Reveal';
import ProfileCard from './ProfileCard';

const words = ['websites', 'landing pages', 'booking systems', 'automations', 'AI assistants'];

function RotatingText() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.span
        key={words[i]}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.3, ease }}
        className="inline-block text-primary"
      >
        {words[i]}
      </motion.span>
    </AnimatePresence>
  );
}

const up = (d: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay: d },
});

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex max-w-6xl items-center px-5 py-6 md:px-8 lg:min-h-[calc(100svh-73px)]">
      <div className="grid w-full items-center gap-8 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <h1 className="text-[2.4rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
            <motion.span {...up(0.2)} className="block">I build <RotatingText /></motion.span>
            <motion.span {...up(0.32)} className="block">that win customers</motion.span>
            <motion.span {...up(0.44)} className="block">and run themselves.</motion.span>
          </h1>
          
          <motion.p {...up(0.68)} className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
            I'm <span className="font-semibold text-foreground">Atib Saiyed</span>, a{' '}
            <span className="font-semibold text-accent-foreground">Website &amp; AI Automation Expert</span>. You run your business. I make sure it gets found, gets enquiries, and handles the boring jobs for you.
          </motion.p>
          {/*<motion.p {...up(0.76)} className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">
            I build <RotatingText />
          </motion.p>*/}
          <motion.div {...up(0.84)} className="mt-5 flex flex-wrap gap-3">
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
