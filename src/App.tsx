import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Toaster } from '@project/components/ui/sonner';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ToolsStrip from './components/ToolsStrip';
import Services from './components/Services';
import Projects from './components/Projects';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [service, setService] = useState('Website');
  const pick = (v: string) => {
    setService(v);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-background">
        <Nav />
        <main>
          <Hero />
          <ToolsStrip />
          <Services onPick={pick} />
          <Projects />
          <Collaborate />
          <Contact service={service} setService={setService} />
        </main>
        <Footer />
        <Toaster />
      </div>
    </MotionConfig>
  );
}
