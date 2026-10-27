import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Maximize2, TrendingUp, BadgeCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@project/components/ui/dialog';
import Reveal, { ease } from './Reveal';
import ProjectVisual from './ProjectVisual';
import { projects, type Project } from './projectData';

function Tag({ p }: { p: Project }) {
  return <span className="rounded-md bg-accent px-2 py-0.5  font-semibold tracking-wider text-accent-foreground">{p.category.toUpperCase()} · CASE STUDY</span>;
}

function Client({ p, className = '' }: { p: Project; className?: string }) {
  return <p className={`text-[11px] font-semibold uppercase tracking-wider text-muted-foreground ${className}`}>{p.client}</p>;
}

function Chips({ p }: { p: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {p.highlights.map((h) => <span key={h} className="rounded-lg border border-border px-3 py-1 text-sm text-muted-foreground">{h}</span>)}
    </div>
  );
}

function ResultPill({ p }: { p: Project }) {
  return (
    <div className="mt-4 flex w-fit items-start gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground">
      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <span>{p.result}</span>
    </div>
  );
}

function Details({ p, onClose }: { p: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!p} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="block w-[calc(100%-2rem)] max-w-4xl gap-0 overflow-hidden rounded-3xl p-0 sm:rounded-3xl">
        {p && (
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="grid min-w-0 lg:grid-cols-[0.95fr_1fr]">
              <div className="hidden min-w-0 items-center justify-center border-b border-border bg-secondary p-4 sm:p-6 min-[360px]:flex lg:border-b-0 lg:border-r">
                <div className="aspect-auto min-h-[300px] w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:aspect-[4/3] sm:min-h-0">
                  <ProjectVisual kind={p.visual} />
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-4 p-5 sm:p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pr-8">
                  <Tag p={p} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{p.client}</span>
                </div>
                <DialogTitle className="font-display text-2xl font-bold leading-tight sm:text-[2rem]">{p.title}</DialogTitle>
                <DialogDescription asChild>
                  <div className="space-y-2.5">
                    <p className="text-base font-medium leading-snug text-foreground">{p.summary}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.story}</p>
                  </div>
                </DialogDescription>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div className="rounded-xl bg-accent p-3.5 text-sm text-accent-foreground">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Result</p>
                    <p className="mt-1 font-semibold leading-snug">{p.result}</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-3.5 text-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">The problem</p>
                    <p className="mt-1 leading-snug">{p.goal}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Stack</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.highlights.map((h) => <span key={h} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">{h}</span>)}
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">Client names withheld. Figures measured during delivery or reported by the client.</p>
                <a href="#contact" onClick={onClose} className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">Start a project like this →</a>
              </div>
            </div>
          </div>
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
                <Client p={p} className="mt-3" />
                <h3 className="mt-2 text-[2.35rem] font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.summary}</p>
                <ResultPill p={p} />
                <Chips p={p} />
                <button onClick={() => onOpen(p)} className="link-underline mt-6 text-sm font-semibold text-primary">View details →</button>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex gap-2">
              {projects.map((_, i) => (
                <span key={i} className={`h-1 rounded-lg transition-all duration-500 ${i === active ? 'w-10 bg-primary' : 'w-6 bg-foreground/15'}`} />
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
                  <span className="flex translate-y-3 items-center gap-2 rounded-lg bg-background px-5 py-2.5 text-sm font-semibold opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
            <div className="aspect-[4/3] border-b border-border"><ProjectVisual kind={p.visual} /></div>
            <div className="p-5">
              <Tag p={p} />
              <Client p={p} className="mt-3" />
              <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <ResultPill p={p} />
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
        <h2 className="text-5xl font-extrabold md:text-6xl">Selected Projects<span className="text-primary">.</span></h2>
        <p className="mt-3 text-lg text-muted-foreground">Real client systems, in production. Names withheld; results aren't.</p>
        <a href="https://www.upwork.com/freelancers/~01de6a6b2bb3d6551d" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-1.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
          <BadgeCheck className="h-4 w-4 text-primary" />
          Top Rated on Upwork · 20 projects delivered
        </a>
      </Reveal>
      <Desktop onOpen={setOpen} />
      <Mobile onOpen={setOpen} />
      <Details p={open} onClose={() => setOpen(null)} />
    </section>
  );
}
