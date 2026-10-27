import Reveal from './Reveal';

const tools = [
  { name: 'Airtable', domain: 'airtable.com' },
  { name: 'n8n', domain: 'n8n.io' },
  { name: 'Make', domain: 'make.com' },
  { name: 'Zapier', domain: 'zapier.com' },
  { name: 'GoHighLevel', domain: 'gohighlevel.com' },
  { name: 'Softr', domain: 'softr.io' },
  { name: 'Webflow', domain: 'webflow.com' },
  { name: 'Framer', domain: 'framer.com' },
  { name: 'Notion', domain: 'notion.so' },
  { name: 'Google Sheets', domain: 'sheets.google.com' },
  { name: 'Slack', domain: 'slack.com' },
  { name: 'OpenAI', domain: 'openai.com' },
  { name: 'Claude', domain: 'claude.ai' },
];

function Tool({ name, domain }: { name: string; domain: string }) {
  return (
    <li className="group/item flex shrink-0 items-center gap-3 pr-12 font-display text-lg font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground md:pr-16">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt=""
        width={28}
        height={28}
        loading="lazy"
        className="h-7 w-7 rounded-md object-contain opacity-70 grayscale transition-all duration-300 group-hover/item:opacity-100 group-hover/item:grayscale-0"
      />
      {name}
    </li>
  );
}

export default function ToolsStrip() {
  return (
    <section className="py-14" aria-label="Tools I work with">
      <Reveal>
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground">TOOLS I WORK WITH</p>
      </Reveal>
      <Reveal delay={0.1} className="group mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="marquee flex w-max group-hover:[animation-play-state:paused]">
          {[...tools, ...tools].map((t, i) => (
            <Tool key={i} {...t} />

          ))}
        </ul>
      </Reveal>
    </section>
  );
}
