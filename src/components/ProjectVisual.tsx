import { Check, Webhook, Sparkles, Database, Mail, Clock } from 'lucide-react';
import type { Visual } from './projectData';

function Browser({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" /><span className="h-2.5 w-2.5 rounded-full bg-foreground/15" /><span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground">{url}</span>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

const Bar = ({ w, c = 'bg-foreground/10' }: { w: string; c?: string }) => <div className={`h-2.5 rounded-full ${c}`} style={{ width: w }} />;

function Site() {
  return (
    <Browser url="clinic-example.com">
      <div className="grid h-full grid-cols-2 gap-6 p-7">
        <div className="flex flex-col justify-center gap-3">
          <Bar w="40%" c="bg-primary/40" /><div className="h-5 w-11/12 rounded bg-foreground/80" /><div className="h-5 w-3/4 rounded bg-foreground/80" />
          <Bar w="90%" /><Bar w="70%" />
          <div className="mt-2 w-fit rounded-full bg-primary px-4 py-2 text-[11px] font-semibold text-primary-foreground">Book a visit</div>
        </div>
        <div className="rounded-xl border border-border bg-secondary p-4">
          <p className="text-[11px] font-semibold">Pick a time</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {['9:00', '9:30', '10:00', '11:00', '2:00', '3:30'].map((t, i) => (
              <span key={t} className={`rounded-md py-1.5 text-center text-[10px] ${i === 2 ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>{t}</span>
            ))}
          </div>
          <div className="mt-4 rounded-md bg-card py-2 text-center text-[10px] font-semibold">Confirm booking</div>
        </div>
      </div>
    </Browser>
  );
}

function Landing() {
  return (
    <Browser url="agent-example.com/valuation">
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-accent/60 to-card p-7 text-center">
        <Bar w="25%" c="bg-primary/40" /><div className="h-6 w-2/3 rounded bg-foreground/80" /><Bar w="50%" />
        <div className="mt-3 flex w-4/5 gap-2 rounded-full border border-border bg-card p-1.5">
          <span className="flex-1 px-3 py-1.5 text-left text-[11px] text-muted-foreground">Your property address</span>
          <span className="rounded-full bg-foreground px-4 py-1.5 text-[11px] font-semibold text-background">Get valuation</span>
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-3">{[0, 1, 2].map((i) => <div key={i} className="h-16 rounded-lg bg-foreground/[0.06]" />)}</div>
      </div>
    </Browser>
  );
}

function Coach() {
  return (
    <Browser url="coach-example.com/packages">
      <div className="grid h-full grid-cols-3 gap-3 p-6">
        {['Starter', 'Growth', 'Premium'].map((p, i) => (
          <div key={p} className={`flex flex-col gap-2 rounded-xl border p-4 ${i === 1 ? 'border-primary bg-accent/50' : 'border-border'}`}>
            <p className="text-[11px] font-semibold">{p}</p>
            <div className="h-5 w-1/2 rounded bg-foreground/70" />
            {[0, 1, 2].map((k) => <div key={k} className="flex items-center gap-1.5"><Check className="h-3 w-3 text-primary" /><Bar w="70%" /></div>)}
            <div className={`mt-auto rounded-full py-1.5 text-center text-[10px] font-semibold ${i === 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>Choose</div>
          </div>
        ))}
      </div>
    </Browser>
  );
}

function N8n() {
  const nodes = [
    { icon: Webhook, label: 'New lead', x: 6, y: 42 },
    { icon: Sparkles, label: 'AI reply', x: 30, y: 18 },
    { icon: Database, label: 'Add to CRM', x: 30, y: 66 },
    { icon: Mail, label: 'Send email', x: 56, y: 18 },
    { icon: Clock, label: 'Wait 2 days', x: 56, y: 66 },
    { icon: Mail, label: 'Follow-up', x: 80, y: 42 },
  ];
  const links = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5]];
  return (
    <div className="relative h-full w-full bg-secondary [background-image:radial-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px)] [background-size:18px_18px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {links.map(([a, b]) => (
          <path key={`${a}${b}`} d={`M${nodes[a].x + 13} ${nodes[a].y + 7} C ${nodes[a].x + 20} ${nodes[a].y + 7}, ${nodes[b].x - 6} ${nodes[b].y + 7}, ${nodes[b].x} ${nodes[b].y + 7}`}
            fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.55" strokeWidth="0.5" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.5 }} />
        ))}
      </svg>
      {nodes.map(({ icon: Icon, label, x, y }) => (
        <div key={label + x} className="absolute flex w-[14%] min-w-[64px] flex-col items-center gap-1.5" style={{ left: `${x}%`, top: `${y}%` }}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card shadow-sm"><Icon className="h-5 w-5 text-primary" /></span>
          <span className="whitespace-nowrap text-[10px] font-medium text-muted-foreground">{label}</span>
        </div>
      ))}
      <span className="absolute left-4 top-4 rounded-md bg-card px-2.5 py-1 text-[10px] font-semibold shadow-sm">Workflow · Lead follow-up</span>
    </div>
  );
}

function AirtableGrid() {
  const rows = [['Smith & Co', 'In progress', '$2,400'], ['Green Dental', 'Done', '$1,150'], ['Nova Realty', 'New', '$3,800'], ['Peak Fitness', 'In progress', '$920'], ['Lumen Studio', 'Done', '$1,600']];
  const tone: Record<string, string> = { Done: 'bg-primary/15 text-primary', 'In progress': 'bg-amber-500/15 text-amber-700', New: 'bg-sky-500/15 text-sky-700' };
  return (
    <div className="flex h-full w-full flex-col bg-card">
      <div className="flex items-center gap-4 border-b border-border bg-secondary px-4 py-2.5 text-[11px] font-semibold">
        <span className="rounded-md bg-card px-2 py-1 shadow-sm">Jobs</span><span className="text-muted-foreground">Clients</span><span className="text-muted-foreground">Invoices</span>
      </div>
      <div className="grid grid-cols-[1.4fr_1fr_0.8fr] border-b border-border px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"><span>Client</span><span>Status</span><span>Value</span></div>
      {rows.map(([c, s, v]) => (
        <div key={c} className="grid grid-cols-[1.4fr_1fr_0.8fr] items-center border-b border-border/70 px-4 py-2.5 text-[12px]">
          <span className="font-medium">{c}</span><span><span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${tone[s]}`}>{s}</span></span><span>{v}</span>
        </div>
      ))}
      <p className="px-4 py-2 text-[10px] text-muted-foreground">Sample data</p>
    </div>
  );
}

function Portal() {
  const steps = [['Welcome call booked', true], ['Contract signed', true], ['Upload documents', false], ['Kick-off meeting', false]] as const;
  return (
    <Browser url="portal.example.com">
      <div className="p-7">
        <p className="text-[11px] text-muted-foreground">Welcome back</p>
        <div className="mt-1 h-5 w-1/2 rounded bg-foreground/80" />
        <div className="mt-4 h-2 w-full rounded-full bg-secondary"><div className="h-2 w-1/2 rounded-full bg-primary" /></div>
        <div className="mt-5 space-y-2.5">
          {steps.map(([s, done]) => (
            <div key={s} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-[12px]">
              <span className={`flex h-4 w-4 items-center justify-center rounded-full ${done ? 'bg-primary text-primary-foreground' : 'border border-border'}`}>{done && <Check className="h-3 w-3" />}</span>
              <span className={done ? 'text-muted-foreground line-through' : 'font-medium'}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

const map = { website: Site, landing: Landing, coach: Coach, n8n: N8n, airtable: AirtableGrid, portal: Portal };

export default function ProjectVisual({ kind }: { kind: Visual }) {
  const C = map[kind];
  return <div className="h-full w-full select-none text-left"><C /></div>;
}
