export type Visual = 'website' | 'landing' | 'coach' | 'n8n' | 'airtable' | 'portal';

export type Project = {
  title: string;
  category: 'Website' | 'Automation';
  summary: string;
  highlights: string[];
  goal: string;
  story: string;
  visual: Visual;
};

export const projects: Project[] = [
  {
    title: 'Clinic Booking Website',
    category: 'Website',
    summary: 'A booking-first website concept for a local clinic. Visitors pick a time in two clicks, and every booking lands in an Airtable CRM with an instant confirmation email.',
    highlights: ['Online booking', 'Airtable CRM', 'Auto emails'],
    goal: 'Let patients book any time, without phone tag.',
    story: 'A clear booking button above the fold, a short services list and trust signals. Each booking is saved to Airtable, the patient gets a confirmation email, and the front desk gets a daily list of new appointments.',
    visual: 'website',
  },
  {
    title: 'Real Estate Landing Page',
    category: 'Website',
    summary: 'A fast landing page concept for an agent, with a "Free valuation" form that drops every lead straight into a follow-up pipeline.',
    highlights: ['Valuation form', 'Lead tagging', 'CRM pipeline'],
    goal: 'Track every seller enquiry from first click to signed deal.',
    story: 'Built to capture sellers rather than just show listings. The form asks three simple questions, tags the lead by area and adds it to a pipeline with reminders.',
    visual: 'landing',
  },
  {
    title: 'Coach Website & Payments',
    category: 'Website',
    summary: 'A simple website concept for a coach, with a discovery-call form, a welcome email sequence and online payments for packages.',
    highlights: ['Discovery calls', 'Email welcome', 'Payments'],
    goal: 'Let new clients book and pay without back-and-forth.',
    story: 'Visitors read the story, book a discovery call and receive a welcome series. Packages are paid online and every client is logged in one tidy list.',
    visual: 'coach',
  },
  {
    title: 'n8n Lead Follow-up Workflow',
    category: 'Automation',
    summary: 'Leads from forms, ads and email are collected in one place, get an instant personal reply and are followed up automatically until they book.',
    highlights: ['n8n', 'Instant replies', 'Follow-up sequence'],
    goal: 'No lead waits hours for a reply or slips through the cracks.',
    story: 'A webhook catches each new lead, AI drafts a friendly reply, the lead is added to the CRM and follow-ups are scheduled. They stop as soon as the lead books a call.',
    visual: 'n8n',
  },
  {
    title: 'Airtable Operations Dashboard',
    category: 'Automation',
    summary: 'Clients, jobs and invoices in one Airtable base, with views for each team and a weekly AI summary sent to the owner.',
    highlights: ['Airtable', 'Team views', 'AI summaries'],
    goal: 'Know how the business is doing in two minutes.',
    story: 'Spreadsheets are replaced by one linked base. Each team sees only what they need, statuses update automatically, and a weekly AI-written summary highlights what needs attention.',
    visual: 'airtable',
  },
  {
    title: 'Client Onboarding System',
    category: 'Automation',
    summary: 'When a client signs, a portal is set up, a welcome email goes out, documents are requested and tasks are created for the team.',
    highlights: ['Client portal', 'Checklists', 'Integrations'],
    goal: 'Give every new client the same great start, with no manual setup.',
    story: 'A signed contract triggers everything: a personal portal with a checklist, reminders for missing documents, and tasks for the team so nothing gets missed.',
    visual: 'portal',
  },
];
