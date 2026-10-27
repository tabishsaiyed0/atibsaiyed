import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import { submitLead } from '../api/submitLead';
import { Input } from '@project/components/ui/input';
import { Textarea } from '@project/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@project/components/ui/select';
import Reveal, { ease } from './Reveal';
import { CONTACT_EMAIL, LINKEDIN_URL } from './ProfileCard';
import { LinkedInLogo } from './Footer';

const options = ['Website', 'Airtable', 'Automation', 'CRM', 'AI Automation', 'Client Portal', 'Connect Tools', 'Not sure'] as const;
const schema = z.object({
  name: z.string().trim().min(1, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email'),
  service: z.enum(options),
  message: z.string().trim().min(10, 'Tell me a little more (10+ characters)'),
});
type Values = z.infer<typeof schema>;

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="text-sm font-semibold">{label}</span>
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error && <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1.5 block text-sm text-destructive">{error}</motion.span>}
      </AnimatePresence>
    </div>
  );
}

function Success({ onReset }: { onReset: () => void }) {
  return (
    <motion.div key="ok" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease }} className="flex min-h-[420px] flex-col items-center justify-center text-center">
      <svg viewBox="0 0 52 52" className="h-16 w-16">
        <circle cx="26" cy="26" r="24" className="fill-accent" />
        <path d="M15 27l7 7 15-16" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="draw stroke-primary" />
      </svg>
      <h3 className="mt-5 text-2xl font-bold">Message sent!</h3>
      <p className="mt-2 max-w-sm text-muted-foreground">Thanks for reaching out. I'll get back to you within 24 hours.</p>
      <button onClick={onReset} className="link-underline mt-6 text-sm font-semibold text-primary">Send another message</button>
    </motion.div>
  );
}

const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-80px' } } as const;

function Heading() {
  return (
    <motion.div {...inView} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
      <motion.span
        variants={{ hidden: { opacity: 0, y: 8, backgroundSize: '0% 2px' }, show: { opacity: 1, y: 0, backgroundSize: '100% 2px', transition: { duration: 0.7, ease } } }}
        className="block w-fit bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--brand-2)))] bg-no-repeat pb-1 text-xs font-semibold tracking-[0.2em] text-primary"
        style={{ backgroundPosition: '0 100%' }}
      >GET IN TOUCH</motion.span>
      <h2 className="mt-4 text-5xl font-extrabold leading-[1.05] md:text-6xl">
        <motion.span className="inline-block" variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}>Let's</motion.span>{' '}
        <motion.span
          className="inline-block rounded-xl bg-[linear-gradient(100deg,hsl(var(--accent)),hsl(var(--brand-2)/0.22))] bg-no-repeat px-3 text-accent-foreground"
          variants={{ hidden: { opacity: 0, y: 22, backgroundSize: '0% 100%' }, show: { opacity: 1, y: 0, backgroundSize: '100% 100%', transition: { duration: 0.9, ease, backgroundSize: { duration: 0.9, ease, delay: 0.35 } } } }}
        >collaborate</motion.span>
      </h2>
      <motion.p variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="mt-5 text-lg text-muted-foreground">
        Tell me about your business and what's slowing you down. I'll reply within 24 hours with next steps.
      </motion.p>
    </motion.div>
  );
}

function Info() {
  const items = [
    { icon: Mail, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: LinkedInLogo, label: 'linkedin.com/in/atibsaiyed', href: LINKEDIN_URL },
  ];
  return (
    <Reveal delay={0.2} className="mt-8 space-y-3">
      {items.map(({ icon: Icon, label, href }) => (
        <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
          className="group flex items-center gap-3 text-sm font-medium transition-colors hover:text-primary">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50"><Icon className="h-4 w-4" /></span>
          {label}
        </a>
      ))}
      <p className="flex items-center gap-3 text-sm text-muted-foreground"><span className="flex h-10 w-10 items-center justify-center"><Clock className="h-4 w-4" /></span>Usually replies within a day</p>
    </Reveal>
  );
}

export default function Contact({ service, setService }: { service: string; setService: (v: string) => void }) {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, control, reset, setValue, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema), mode: 'onTouched',
    defaultValues: { name: '', email: '', message: '', service: service as Values['service'] },
  });
  useEffect(() => { setValue('service', service as Values['service']); }, [service, setValue]);

  const onSubmit = async (v: Values) => {
    try { await submitLead(v); setSent(true); reset({ name: '', email: '', message: '', service: v.service }); }
    catch { toast.error('Something went wrong. Please try again.'); }
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2 lg:pt-4">
          <Heading />
          <Info />
        </div>
        <Reveal delay={0.1} className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8 md:p-10 lg:col-span-3">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? <Success onReset={() => setSent(false)} /> : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}><Input className="h-12 rounded-xl bg-background px-4" placeholder="Your name" autoComplete="name" {...register('name')} /></Field>
                  <Field label="Email Address" error={errors.email?.message}><Input type="email" className="h-12 rounded-xl bg-background px-4" placeholder="you@business.com" autoComplete="email" {...register('email')} /></Field>
                </div>
                <Field label="What do you need?">
                  <Controller control={control} name="service" render={({ field }) => (
                    <Select value={field.value} onValueChange={(v) => { field.onChange(v); setService(v); }}>
                      <SelectTrigger className="h-12 rounded-xl bg-background px-4"><SelectValue /></SelectTrigger>
                      <SelectContent>{options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  )} />
                </Field>
                <Field label="Message" error={errors.message?.message}><Textarea rows={6} className="min-h-[160px] resize-none rounded-xl bg-background px-4 py-3" placeholder="Tell me about the project..." {...register('message')} /></Field>
                <button type="submit" disabled={isSubmitting}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground font-semibold text-background transition-all duration-300 hover:shadow-lg active:scale-[0.99] disabled:opacity-60">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
