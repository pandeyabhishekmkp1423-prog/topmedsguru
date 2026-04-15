import { motion } from 'motion/react';
import { ArrowRight, Pill, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { products, siteStats, trustBadges } from '../data/siteContent';

type HeroProps = {
  onRedirect: () => void;
  onBrowseCategories: () => void;
};

export function Hero({ onRedirect, onBrowseCategories }: HeroProps) {
  return (
    <section className="hero-grid relative overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-100/70 to-transparent" />
      <motion.div
        animate={{ scale: [1, 1.12, 1], rotate: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-sky-300/30 blur-[110px]"
      />
      <motion.div
        animate={{ scale: [1, 1.18, 1], rotate: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-24 bottom-6 h-96 w-96 rounded-full bg-emerald-200/40 blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-20 pt-10 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary shadow-lg shadow-sky-100/60">
            <ShieldCheck className="h-4 w-4" />
            Certified experience, privacy-first interface
          </div>
          <h1 className="mt-6 text-balance text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
            Buy Trusted Medicines Online Safely & Securely
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Affordable access to prescription and wellness products with transparent content, fast dispatch support,
            discreet packaging, and a premium medical-grade shopping experience.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={onRedirect} className="button-primary">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={onBrowseCategories} className="button-secondary">
              Browse Categories
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="surface-card !rounded-3xl !p-4">
                  <Icon className="h-5 w-5 text-secondary" />
                  <p className="mt-3 text-sm font-bold text-slate-950">{badge.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {siteStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black tracking-tight text-primary">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_40px_100px_-32px_rgba(14,165,233,0.35)] backdrop-blur md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_36%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary/70">Topmedguru Care</p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Conversion-ready medical storefront</h2>
                </div>
                <div className="rounded-3xl bg-primary/5 p-4 text-primary">
                  <Stethoscope className="h-8 w-8" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/60">Secure checkout</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    SSL-first payment flow with discreet order handling and customer support follow-up.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/60">Clinical clarity</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Product pages include dosage, side effects, suitability notes, reviews, and related items.
                  </p>
                </div>
              </div>

              <div className="surface-card">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Most searched today</p>
                    <h3 className="mt-2 text-xl font-black text-slate-950">Sildenafil online and tadalafil tablets</h3>
                  </div>
                  <Sparkles className="h-6 w-6 text-amber-400" />
                </div>
                <div className="mt-4 grid gap-3">
                  {products.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-sky-50 p-2 text-primary">
                          <Pill className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-950">{product.name}</p>
                          <p className="text-sm text-slate-500">{product.popularFor}</p>
                        </div>
                      </div>
                      <p className="text-lg font-black text-primary">${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
