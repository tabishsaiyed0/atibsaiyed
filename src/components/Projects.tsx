import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@project/components/ui/dialog';
import Reveal, { ease } from './Reveal';
import ProjectVisual from './ProjectVisual';
import { projects, type Project } from './projectData';

function Tag({ p }: { p: Project }) {
  return <span className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-semibold tracking-wider text-accent-foreground">{p.category.toUpperCase()} · EXAMPLE BUILD</span>;
}

function Chips({ p }: { p: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {p.highlights.map((h) => <span key={h} className="rounded-lg border border-border px-3 py-1 text-sm text-muted-foreground">{h}</span>)}
    </div>
  );
}

function Details({ p, onClose }: { p: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!p} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        {p && (
          <>
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border"><ProjectVisual kind={p.visual} /></div>
            <DialogHeader>
              <div><Tag p={p} /></div>
              <DialogTitle className="font-display text-3xl font-bold">{p.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">{p.summary} {p.story}</DialogDescription>
            </DialogHeader>
            <p className="rounded-xl bg-secondary p-4 text-sm"><span className="font-semibold text-primary">Goal: </span>{p.goal}</p>
            <Chips p={p} />
            <p className="text-xs text-muted-foreground">Illustrative example of the kind of system I build. Not a client case study.</p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Desktop({ onOpen }: { onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(projects.length - 1, Math.max(0, Math.floor(v * projects.length)));
    setActive((cur) => (cur === next ? cur : next));
  });
  const p = projects[active];
  return (
    <div ref={ref} className="relative hidden lg:block" style={{ height: `${projects.length * 75}vh` }}>
      <div className="sticky top-[73px] flex h-[calc(100vh-73px)] items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-16 px-8">
          <div className="min-h-[340px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease }}>
                <Tag p={p} />
                <h3 className="mt-4 text-[2.6rem] font-bold leading-tight">{p.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
                <Chips p={p} />
                <button onClick={() => onOpen(p)} className="link-underline mt-6 text-sm font-semibold text-primary">View details →</button>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex gap-2">
              {projects.map((_, i) => (
                <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === active ? 'w-10 bg-primary' : 'w-6 bg-foreground/15'}`} />
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3]">
            {projects.map((proj, i) => (
              <motion.button
                key={proj.title}
                onClick={() => onOpen(proj)}
                aria-label={`View ${proj.title}`}
                tabIndex={i === active ? 0 : -1}
                initial={false}
                animate={{ y: i <= active ? (i - active) * -14 : '110%', scale: i <= active ? 1 - (active - i) * 0.04 : 1, opacity: i <= active ? 1 : 0 }}
                transition={{ duration: 0.6, ease }}
                className="group absolute inset-0 overflow-hidden rounded-3xl border border-border bg-card shadow-xl will-change-transform"
                style={{ zIndex: i, pointerEvents: i === active ? 'auto' : 'none' }}
              >
                <ProjectVisual kind={proj.visual} />
                <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/25">
                  <span className="flex translate-y-3 items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" /> View details
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Mobile({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl gap-6 px-5 sm:grid-cols-2 lg:hidden">
      {projects.map((p) => (
        <Reveal key={p.title}>
          <button onClick={() => onOpen(p)} className="w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-md transition-transform duration-300 active:scale-[0.99]">
            <div className="aspect-[16/11] border-b border-border"><ProjectVisual kind={p.visual} /></div>
            <div className="p-5">
              <Tag p={p} />
              <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary">View details →</span>
            </div>
          </button>
        </Reveal>
      ))}
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <section id="projects" className="scroll-mt-16 bg-secondary pb-12 pt-20">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="text-5xl font-extrabold md:text-6xl">Projects<span className="text-primary">.</span></h2>
        <p className="mt-3 text-lg text-muted-foreground">Example builds showing the websites and automations I create. Scroll to explore.</p>
      </Reveal>
      <Desktop onOpen={setOpen} />
      <Mobile onOpen={setOpen} />
      <Details p={open} onClose={() => setOpen(null)} />
    </section>
  );
}
