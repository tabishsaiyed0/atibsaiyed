import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const ease = [0.22, 1, 0.36, 1] as const;

export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RollButton({ children, href, variant = 'dark', className = '', onClick }: { children: string; href?: string; variant?: 'dark' | 'outline' | 'light'; className?: string; onClick?: () => void }) {
  const styles = {
    dark: 'bg-foreground text-background hover:shadow-lg',
    outline: 'border border-foreground/20 text-foreground hover:border-foreground',
    light: 'bg-background text-foreground',
  }[variant];
  const inner = (
    <span className="roll">
      <span><span>{children}</span><span>{children}</span></span>
    </span>
  );
  const cls = `group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${styles} ${className}`;
  return href ? <a href={href} className={cls}>{inner}</a> : <button type="button" onClick={onClick} className={cls}>{inner}</button>;
}
