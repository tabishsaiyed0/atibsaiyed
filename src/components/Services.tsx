import { Globe, Table2, Zap, Filter, Bot, LayoutDashboard, Plug, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ease } from './Reveal';
import Reveal from './Reveal';

export const services = [
  { icon: Globe, title: 'Websites', text: 'Pages that turn visitors into leads.', value: 'Website' },
  { icon: Table2, title: 'Airtable Systems', text: 'Your business data in one tidy place.', value: 'Airtable' },
  { icon: Zap, title: 'Automation', text: 'Repetitive tasks that do themselves.', value: 'Automation' },
  { icon: Filter, title: 'CRM Systems', text: 'Never miss a lead or follow-up.', value: 'CRM' },
  { icon: Bot, title: 'AI Automation', text: 'Smart helpers that reply, sort and summarise.', value: 'AI Automation' },
  { icon: LayoutDashboard, title: 'Client Portals', text: 'One login for clients to see everything.', value: 'Client Portal' },
  { icon: Plug, title: 'Connect Your Tools', text: 'Your apps talking to each other.', value: 'Connect Tools' },
] as const;

export default function Services({ onPick }: { onPick: (v: string) => void }) {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:px-8">
      <Reveal>
        <h2 className="text-5xl font-extrabold md:text-6xl">Services<span className="text-primary">.</span></h2>
        <p className="mt-3 text-lg text-muted-foreground">Everything a small business needs to grow online and save time.</p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.button
            key={s.title}
            onClick={() => onPick(s.value)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease, delay: (i % 4) * 0.08 }}
            className="group relative rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <s.icon className="h-5 w-5" />
            </span>
            <ArrowUpRight className="absolute right-5 top-6 h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
