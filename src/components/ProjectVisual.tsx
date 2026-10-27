import { Check, Sparkles, Database, Mail, Clock, MousePointerClick, Filter, ChevronRight, FileText, Briefcase, ClipboardCheck, Search, PhoneCall, Gem } from 'lucide-react';
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

function Sports() {
  const steps: Array<[string, boolean]> = [
    ['Registration confirmed', true],
    ['Flights uploaded', true],
    ['Room share preferences', false],
  ];
  return (
    <Browser url="travel-portal.example.com">
      <div className="flex h-full">
        <div className="hidden w-[26%] shrink-0 flex-col gap-1 border-r border-border bg-secondary p-4 sm:flex">
          <p className="px-2 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Teams</p>
          {['Athletes', 'Participants', 'Operators'].map((t, i) => (
            <span key={t} className={`rounded-md px-2 py-1.5 text-[11px] ${i === 0 ? 'bg-card font-semibold shadow-sm' : 'text-muted-foreground'}`}>{t}</span>
          ))}
          <div className="mt-auto min-w-0 rounded-lg bg-card p-2.5">
            <p className="text-[9px] leading-tight text-muted-foreground">Leads migrated</p>
            <p className="whitespace-nowrap text-sm font-bold leading-tight">6,000+</p>
          </div>
        </div>
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[9px] text-muted-foreground">Barcelona Cup 2026</p>
              <p className="text-sm font-bold">Your event checklist</p>
            </div>
            <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[9px] font-semibold text-primary-foreground">2 of 3 done</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-secondary"><div className="h-1.5 w-2/3 rounded-full bg-primary" /></div>
          <div className="mt-2 space-y-1.5">
            {steps.map(([s, done]) => (
              <div key={s} className="flex items-center gap-2.5 rounded-md border border-border px-2.5 py-1.5 text-[11px]">
                <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ${done ? 'bg-primary text-primary-foreground' : 'border border-border'}`}>{done && <Check className="h-2.5 w-2.5" />}</span>
                <span className={done ? 'text-muted-foreground line-through' : 'font-medium'}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

function Jewelry() {
  return (
    <Browser url="jewellery-example.com">
      <div className="grid h-full grid-cols-2 gap-2 p-4">
        <div className="flex flex-col justify-center gap-2.5">
          <span className="w-fit rounded-full bg-accent px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent-foreground">AI try-on</span>
          <div className="h-4 w-11/12 rounded bg-foreground/80" />
          <div className="h-4 w-2/3 rounded bg-foreground/80" />
          <Bar w="90%" /><Bar w="65%" />
          <div className="mt-1 flex flex-wrap gap-1.5">
            <span className="rounded-md bg-primary px-2.5 py-1.5 text-[10px] font-semibold text-primary-foreground">Try the preview</span>
            <span className="rounded-md border border-border px-2.5 py-1.5 text-[10px] font-medium">Upload</span>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-200/60 via-amber-100/40 to-card ring-1 ring-border">
            <span className="absolute left-2 top-2 rounded bg-card/90 px-1.5 py-0.5 text-[9px] font-semibold text-muted-foreground">Before</span>
            <div className="flex h-full items-center justify-center"><Gem className="h-8 w-8 text-amber-600/60" /></div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/25 via-accent to-card ring-1 ring-primary/30">
            <span className="absolute left-2 top-2 rounded bg-primary px-1.5 py-0.5 text-[9px] font-semibold text-primary-foreground">After · AI</span>
            <div className="flex h-full items-center justify-center"><Sparkles className="h-8 w-8 text-primary/70" /></div>
          </div>
        </div>
      </div>
    </Browser>
  );
}

function Law() {
  const partners: Array<[string, string, string]> = [
    ['R. Whitmore', 'Corporate', '92'],
    ['S. Alvarez', 'Family', '87'],
    ['J. Chen', 'Litigation', '81'],
  ];
  const sources: Array<[string, number, number]> = [
    ['Referrals', 68, 85],
    ['Web', 42, 55],
    ['Events', 27, 35],
    ['Other', 14, 18],
  ];
  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-2">
        <div className="flex items-center gap-2 text-[11px] font-semibold"><Briefcase className="h-3.5 w-3.5 text-primary" /> Referral partners</div>
        <span className="rounded bg-card px-2 py-0.5 text-[9px] font-semibold shadow-sm">AI profiled</span>
      </div>
      <div className="grid flex-1 grid-cols-[1.35fr_1fr] overflow-hidden">
        <div className="border-r border-border">
          <div className="grid grid-cols-[1.4fr_1fr_0.5fr] px-4 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground"><span>Attorney</span><span>Practice</span><span>Score</span></div>
          {partners.map(([n, p, s]) => (
            <div key={n} className="grid grid-cols-[1.4fr_1fr_0.5fr] items-center border-t border-border/70 px-4 py-2 text-[11px]">
              <span className="truncate font-medium">{n}</span><span className="text-muted-foreground">{p}</span><span className="font-semibold text-primary">{s}</span>
            </div>
          ))}
          <div className="m-3 flex items-center gap-2 rounded-lg bg-accent px-3 py-2">
            <FileText className="h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="text-[10px] font-semibold">Booklet generated</p>
              <p className="text-[9px] text-muted-foreground">24 profiles · client-ready PDF</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className="text-[10px] font-semibold">Matters by lead source</p>
          <div className="mt-2 space-y-1.5">
            {sources.map(([s, v, w]) => (
              <div key={s}>
                <div className="flex justify-between text-[9px] text-muted-foreground"><span>{s}</span><span>{v}</span></div>
                <div className="mt-0.5 h-1.5 rounded-full bg-secondary"><div className="h-1.5 rounded-full bg-primary" style={{ width: `${w}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-lg border border-border p-2">
            <p className="text-[9px] text-muted-foreground">Research time</p>
            <p className="text-sm font-bold">−10 hrs/week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reports() {
  const bars: Array<[string, number]> = [['New leads', 72], ['Viewings', 38], ['Deals closed', 24]];
  const rows: Array<[string, string, string]> = [
    ['Contacts', '12,480', 'Matched'],
    ['Deals', '3,240', 'Matched'],
    ['Properties', '8,910', '2 flagged'],
    ['Invoices', '5,102', 'Matched'],
  ];
  return (
    <div className="grid h-full grid-cols-2 gap-2 bg-secondary p-3">
      <div className="flex flex-col rounded-xl border border-border bg-card p-3">
        <div className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-primary" /><p className="text-[10px] font-semibold">Weekly report</p></div>
        <p className="mt-1.5 text-[9px] text-muted-foreground">Mon 07:00 · sent to 4 people</p>
        <div className="mt-3 space-y-2">
          {bars.map(([l, v]) => (
            <div key={l}>
              <div className="flex justify-between text-[9px] text-muted-foreground"><span>{l}</span><span>{v}</span></div>
              <div className="mt-0.5 h-1.5 rounded-full bg-secondary"><div className="h-1.5 rounded-full bg-primary" style={{ width: `${v}%` }} /></div>
            </div>
          ))}
        </div>
        <span className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-accent px-2 py-1 text-[9px] font-semibold text-accent-foreground"><Check className="h-2.5 w-2.5" /> Automated</span>
      </div>
      <div className="flex flex-col rounded-xl border border-border bg-card p-3">
        <div className="flex items-center gap-1.5"><ClipboardCheck className="h-3.5 w-3.5 text-primary" /><p className="text-[10px] font-semibold">Migration QA</p></div>
        <p className="mt-1.5 text-[9px] text-muted-foreground">Source vs destination</p>
        <div className="mt-3 space-y-1.5">
          {rows.map(([n, c, s]) => (
            <div key={n} className="flex items-center justify-between gap-1 rounded-md border border-border px-1.5 py-1.5 text-[8px]">
              <span className="truncate font-medium">{n} <span className="text-muted-foreground">{c}</span></span>
              <span className={`shrink-0 rounded-full px-1.5 py-0.5 font-semibold ${s === 'Matched' ? 'bg-primary/15 text-primary' : 'bg-amber-500/15 text-amber-700'}`}>{s}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-md bg-secondary px-2 py-1.5 text-[9px]"><span className="font-semibold">−70%</span> manual entry</div>
      </div>
    </div>
  );
}

function Scraper() {
  const listings: Array<[string, string, string, string]> = [
    ['Gothic Quarter', '2BR', '€148', '91%'],
    ['Gràcia', '1BR', '€112', '94%'],
    ['Poblenou', '3BR', '€205', '79%'],
  ];
  return (
    <Browser url="market-scan.example.com">
      <div className="flex h-full flex-col p-3.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5"><Search className="h-3.5 w-3.5 text-primary" /><p className="text-[11px] font-semibold">Airbnb market scan</p></div>
          <div className="flex gap-1">{['1BR', '2BR', '3BR'].map((t, i) => <span key={t} className={`rounded px-1.5 py-0.5 text-[8px] font-semibold ${i === 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>{t}</span>)}</div>
        </div>
        <div className="mt-2.5 grid grid-cols-[1.4fr_0.6fr_0.7fr_0.6fr] border-y border-border py-1 text-[8px] font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Area</span><span>Beds</span><span>Nightly</span><span>Occ.</span>
        </div>
        {listings.map(([a, b, c, d]) => (
          <div key={a} className="grid grid-cols-[1.4fr_0.6fr_0.7fr_0.6fr] items-center border-b border-border/60 py-1 text-[10px]">
            <span className="truncate font-medium">{a}</span><span className="text-muted-foreground">{b}</span><span className="font-semibold">{c}</span><span>{d}</span>
          </div>
        ))}
        <p className="mt-1 text-[8px] text-muted-foreground">+ 312 more listings scanned</p>
        <div className="mt-auto flex items-center gap-2 rounded-lg bg-accent px-2.5 py-1.5">
          <PhoneCall className="h-3.5 w-3.5 shrink-0 text-primary" />
          <div className="flex-1">
            <p className="text-[9px] font-semibold">Call summary saved</p>
            <p className="truncate text-[8px] text-muted-foreground">No-show flagged · notes in Airtable + Drive</p>
          </div>
          <span className="shrink-0 rounded-full bg-primary/15 px-1.5 py-0.5 text-[8px] font-semibold text-primary">Auto</span>
        </div>
      </div>
    </Browser>
  );
}

function Email() {
  const steps = [
    { icon: MousePointerClick, label: 'SendGrid', note: 'click events' },
    { icon: Filter, label: 'Dedupe', note: 'by message ID' },
    { icon: Database, label: 'Airtable', note: 'contacts' },
  ];
  return (
    <Browser url="campaign-reporting.example.com">
      <div className="flex h-full flex-col p-3.5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold">Click attribution pipeline</p>
          <span className="rounded-full bg-accent px-2 py-0.5 text-[8px] font-semibold text-accent-foreground">Weekly</span>
        </div>
        <div className="mt-2.5 flex items-center gap-1">
          {steps.map(({ icon: Icon, label, note }, i) => (
            <div key={label} className="flex flex-1 items-center gap-1">
              <div className="flex flex-1 flex-col items-center gap-0.5 rounded-lg border border-border bg-card p-1.5 text-center">
                <Icon className="h-3.5 w-3.5 text-primary" />
                <span className="text-[9px] font-semibold">{label}</span>
                <span className="text-[8px] text-muted-foreground">{note}</span>
              </div>
              {i < steps.length - 1 && <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground" />}
            </div>
          ))}
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {[['Clicks', '4,218'], ['Matched', '98.6%'], ['Dupes', '1,204']].map(([l, v]) => (
            <div key={l} className="rounded-lg bg-card p-1.5 text-center ring-1 ring-border">
              <p className="text-[8px] uppercase tracking-wide text-muted-foreground">{l}</p>
              <p className="text-sm font-bold">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 rounded-lg bg-accent px-2.5 py-1.5">
          <Clock className="h-3.5 w-3.5 shrink-0 text-primary" />
          <p className="text-[9px] font-semibold">50 hrs/week of manual reporting removed</p>
        </div>
      </div>
    </Browser>
  );
}

const map = { sports: Sports, jewelry: Jewelry, law: Law, reports: Reports, scraper: Scraper, email: Email };

export default function ProjectVisual({ kind }: { kind: Visual }) {
  const C = map[kind];
  return <div className="h-full w-full select-none text-left"><C /></div>;
}
