import { Mail, Linkedin } from 'lucide-react';
import { RollButton } from './Reveal';

export const CONTACT_EMAIL = 'atibsaiyed2002@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/atibsaiyed';

const socials = [
  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
  { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
];

export default function ProfileCard() {
  return (
    <div className="mx-auto max-w-sm rounded-3xl border border-border bg-card p-4 shadow-xl transition-transform duration-500 hover:-translate-y-1">
      <div className="flex items-center justify-between px-1 text-sm">
        <span className="font-display font-bold">Atib Saiyed</span>
        <span className="flex items-center gap-2 text-muted-foreground">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          Open to projects
        </span>
      </div>
      <div className="mt-3 overflow-hidden rounded-2xl">
        <img
          src="atib.png"
          alt="Atib Saiyed"
          className="h-[clamp(220px,40vh,340px)] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
        />
      </div>
      <p className="mt-3 text-center font-display text-xl font-bold">Atib Saiyed</p>
      <p className="mt-1 text-center text-xs font-semibold tracking-wider text-primary">WEBSITE & AI AUTOMATION EXPERT · 5+ YRS</p>
      <div className="mt-3 flex justify-center gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
      <RollButton href="#contact" className="mt-4 w-full">Get in Touch</RollButton>
    </div>
  );
}
