export type Visual = 'sports' | 'jewelry' | 'law' | 'reports' | 'scraper' | 'email';

export type Category = 'Website' | 'Automation' | 'CRM' | 'Data' | 'AI';

export type Project = {
  title: string;
  client: string;
  category: Category;
  summary: string;
  highlights: string[];
  goal: string;
  story: string;
  result: string;
  visual: Visual;
};

export const projects: Project[] = [
  {
    title: 'Sports Travel CRM & Portals',
    client: 'Sports travel & events company',
    category: 'CRM',
    summary: 'Leads were split across three tools and nobody trusted the numbers. One CRM and three portals now save the team 25+ hours a week.',
    highlights: ['Airtable', 'GoHighLevel', 'Make', 'Softr'],
    goal: 'Leads scattered across three tools, with no single source of truth.',
    story: 'I migrated 6,000+ leads into Airtable, connected GoHighLevel and Make, and built Softr dashboards for athletes, participants and operators so each group sees only their own next steps.',
    result: '25+ hrs/week saved · 6,000+ leads migrated',
    visual: 'sports',
  },
  {
    title: 'Jewellery AI Try-On Landing Page',
    client: 'Independent jewellery retailer',
    category: 'Website',
    summary: 'A landing page that lets shoppers preview a redesign with AI before they enquire, with follow-up that stops the moment they reply.',
    highlights: ['React + TypeScript', 'Airtable', 'n8n', 'AI image gen'],
    goal: 'Low-quality leads were filling the sales inbox.',
    story: 'I built a fast landing page with AI redesign and try-on previews, in-store capture, and automated follow-up at 7 days, 30 days and 4 months. Qualified leads rose 40%.',
    result: 'Qualified leads +40%',
    visual: 'jewelry',
  },
  {
    title: 'Attorney Research & Referral Booklet',
    client: 'Law firm',
    category: 'AI',
    summary: 'An Airtable AI agent profiles referral partners and turns the research into a client-ready PDF, with a live view of matters by lead source.',
    highlights: ['Airtable AI', 'Interfaces', 'PDF generation'],
    goal: 'Referral research was slow, manual and hard to reuse.',
    story: 'The agent enriches attorney records, writes profile copy and assembles a polished booklet. An Airtable Interface charts matters by lead source so the firm can see which relationships pay off.',
    result: '10+ hrs/week of research replaced',
    visual: 'law',
  },
  {
    title: 'Automated Reporting & Migration QA',
    client: 'Real estate data operations',
    category: 'Data',
    summary: 'Weekly reports that build and send themselves, plus reconciliation checks that catch migration errors before a client ever sees them.',
    highlights: ['n8n', 'Airtable', 'Automated QA'],
    goal: 'Reporting, migrations and QA were all done by hand.',
    story: 'n8n pulls the week of data, builds the report and emails it. A reconciliation pass compares source and destination records and flags mismatches for review.',
    result: 'Manual data entry down 70%',
    visual: 'reports',
  },
  {
    title: 'Rental Market Scraper & Follow-Up',
    client: 'Short-term rental investor',
    category: 'Automation',
    summary: 'Airbnb market data by bedroom tier, plus a booking workflow that confirms calls, flags no-shows and files summaries without manual admin.',
    highlights: ['Apify', 'n8n', 'Fathom', 'Claude'],
    goal: 'Market research and call follow-up ate the week.',
    story: 'An Apify scraper compiles local listings by bedroom tier. After each call, Fathom and Claude summarise the conversation, flag no-shows and save notes to Airtable and Drive.',
    result: '40 hrs/week saved',
    visual: 'scraper',
  },
  {
    title: 'Email Click Attribution Pipeline',
    client: 'Email marketing team',
    category: 'Data',
    summary: 'Click data finally reaches the CRM, deduplicated by message ID and loaded weekly, so campaign reporting matches reality.',
    highlights: ['Apps Script', 'SendGrid', 'n8n', 'Airtable'],
    goal: 'Click data never made it back to the CRM.',
    story: 'An Apps Script and n8n pipeline pulls SendGrid click events, removes duplicate message IDs, links them to contacts and loads a clean weekly set into Airtable, replacing a manual reporting routine.',
    result: '50 hrs/week saved',
    visual: 'email',
  },
];
