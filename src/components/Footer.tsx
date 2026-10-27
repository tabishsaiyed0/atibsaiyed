import { Mail } from 'lucide-react';
import { CONTACT_EMAIL, LINKEDIN_URL } from './ProfileCard';

export function LinkedInLogo({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#0A66C2" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const nav = [['Home', '#home'], ['Services', '#services'], ['Projects', '#projects'], ['Contact', '#contact']];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-display font-bold text-foreground">Atib Saiyed</span>
          {nav.map(([l, h]) => <a key={h} href={h} className="link-underline transition-colors hover:text-foreground">{l}</a>)}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-2 transition-colors hover:text-foreground">
            <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" /> <span className="link-underline">{CONTACT_EMAIL}</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="group flex items-center gap-2 transition-colors hover:text-foreground">
            <LinkedInLogo className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" /> <span className="link-underline">LinkedIn</span>
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© 2026 Atib Saiyed. All rights reserved.</p>
    </footer>
  );
}
