import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  action,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`mb-12 flex flex-col gap-5 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {eyebrow ? (
        <span
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] ${
            isDark
              ? 'border border-white/15 bg-white/10 text-white/85'
              : 'border border-primary/10 bg-primary/5 text-primary'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <div className={`max-w-3xl space-y-4 ${isCenter ? 'mx-auto' : ''}`}>
        <h2 className={`text-balance text-3xl font-black tracking-tight md:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
          {title}
        </h2>
        <p className={`text-pretty text-base leading-7 md:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
      </div>
      {action}
    </motion.div>
  );
}
