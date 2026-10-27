import { Globe, Table2, Zap, Inbox, Bot, LayoutDashboard, Plug, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ease } from './Reveal';
import Reveal from './Reveal';

export const services = [
  {
    icon: Globe,
    title: 'Website & Landing Page Development',
    text: 'A professional site that brings you enquiries.',
    example: 'A clinic site where patients can book online.',
    tool: 'Next.js · Webflow',
    value: 'Website',
  },
  {
    icon: Zap,
    title: 'Save Hours Every Week',
    text: 'Repetitive jobs done for you, automatically.',
    example: 'Invoices sent without lifting a finger.',
    tool: 'Make · Zapier',
    value: 'Automation',
  },
  {
    icon: Inbox,
    title: 'Never Lose a Lead',
    text: 'Every enquiry tracked and followed up on time.',
    example: 'An instant reply to every new enquiry.',
    tool: 'Airtable · GoHighLevel',
    value: 'CRM',
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    text: 'Answers customer questions 24/7.',
    example: 'A website chat that books calls.',
    tool: 'OpenAI · n8n',
    value: 'AI Automation',
  },
  {
    icon: Table2,
    title: 'Organise Your Business',
    text: 'Clients, jobs and invoices in one tidy place.',
    example: 'Every client detail just a click away.',
    tool: 'Airtable · Notion',
    value: 'Airtable',
  },
  {
    icon: LayoutDashboard,
    title: 'Client Portals',
    text: 'One login where clients see progress and files.',
    example: 'Clients check updates without emailing you.',
    tool: 'Softr · Airtable',
    value: 'Client Portal',
  },
  {
    icon: Plug,
    title: 'Connect Your Apps',
    text: 'Your tools share data — no more copy-paste.',
    example: 'New enquiries flow straight into your system.',
    tool: 'n8n · Make',
    value: 'Connect Tools',
  },
] as const;

export default function Services({ onPick }: { onPick: (v: string) => void }) {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:px-8">
      <Reveal>
        <h2 className="text-5xl font-extrabold md:text-6xl">Services<span className="text-primary">.</span></h2>
        <p className="mt-3 text-lg text-muted-foreground">Everything a small business needs to grow online and save time. Click a service to get started.</p>
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
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 pb-11 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <s.icon className="h-5 w-5" />
            </span>
            <ArrowUpRight className="absolute right-5 top-6 h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            <h3 className="mt-4 text-lg font-bold leading-snug">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Example: </span>
              {s.example}
            </p>
            <span className="pointer-events-none absolute bottom-4 left-6 rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {s.tool}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
