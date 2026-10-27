import Reveal, { RollButton } from './Reveal';

export default function Collaborate() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent underline underline-offset-4">COLLABORATE</span>
            <h2 className="mt-4 text-3xl font-extrabold text-background md:text-4xl">Need more leads, or less busywork?</h2>
            <p className="mt-3 max-w-xl text-background/65">I build websites and automations for small businesses that want results without the tech headaches.</p>
          </div>
          <RollButton href="#contact" variant="light" className="relative mt-6 shrink-0 md:mt-0">Discuss your project</RollButton>
        </div>
      </Reveal>
    </section>
  );
}
