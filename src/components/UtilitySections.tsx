import { ArrowRight, BadgeCheck, CheckCircle2, Clock3, Headphones, Plus, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { policies } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function OrderTracking({
  trackingInput,
  setTrackingInput,
  trackingEmail,
  setTrackingEmail,
  trackingResult,
  onTrack,
}: {
  trackingInput: string;
  setTrackingInput: (value: string) => void;
  trackingEmail: string;
  setTrackingEmail: (value: string) => void;
  trackingResult: { status: string; detail: string } | null;
  onTrack: () => void;
}) {
  const steps = ['Order placed', 'Payment confirmed', 'Dispatch ready', 'In transit', 'Delivered'];
  const activeIndex = trackingResult
    ? {
        'Order placed': 0,
        'Payment confirmed': 1,
        'Dispatch ready': 2,
        'In transit': 3,
        Delivered: 4,
      }[trackingResult.status] ?? 1
    : 1;

  return (
    <section id="tracking" className="section-space bg-slate-950 text-white">
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
        <SectionHeading
          align="left"
          eyebrow="Order Tracking"
          title="Basic tracking UI for returning customers"
          description="This lightweight module is designed to be admin-friendly later. Today it offers a polished placeholder interface for order lookup and shipment confidence."
          theme="dark"
        />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Order Number</span>
                <input
                  value={trackingInput}
                  onChange={(event) => setTrackingInput(event.target.value)}
                  placeholder="TMG-48291"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Email Address</span>
                <input
                  value={trackingEmail}
                  onChange={(event) => setTrackingEmail(event.target.value)}
                  placeholder="name@example.com"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                />
              </label>
              <button type="button" onClick={onTrack} className="button-primary">
                Track Shipment
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/60">Shipment Status</p>
              <h3 className="mt-2 text-2xl font-black">{trackingResult?.status ?? 'Payment confirmed'}</h3>
            </div>
            <Clock3 className="h-7 w-7 text-secondary" />
          </div>

          <div className="mt-8 grid gap-4">
            {steps.map((step, index) => {
              const isActive = index <= activeIndex;
              return (
                <div key={step} className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                      isActive
                        ? 'border-emerald-300 bg-emerald-400/20 text-emerald-200'
                        : 'border-white/10 bg-white/5 text-white/40'
                    }`}
                  >
                    {isActive ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
                  </div>
                  <div>
                    <p className={`font-bold ${isActive ? 'text-white' : 'text-white/45'}`}>{step}</p>
                    {trackingResult && step === trackingResult.status ? (
                      <p className="text-sm text-slate-300">{trackingResult.detail}</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Newsletter({
  email,
  setEmail,
  onSubmit,
}: {
  email: string;
  setEmail: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <section className="section-space">
      <div className="section-container">
        <div className="overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-primary via-sky-700 to-emerald-600 p-8 text-white shadow-[0_40px_120px_-45px_rgba(2,132,199,0.55)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Newsletter + CTA</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Get Health Tips & Offers</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                Subscribe for practical medicine guides, online pharmacy safety tips, new product updates, and limited pricing alerts.
              </p>
            </div>
            <div className="grid gap-3 md:min-w-[420px]">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-4 text-sm text-white outline-none placeholder:text-white/60"
              />
              <button type="button" onClick={onSubmit} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-black text-primary transition hover:bg-slate-100">
                Subscribe Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalAndTrust() {
  const [activePolicy, setActivePolicy] = useState(0);

  return (
    <section id="legal" className="section-space bg-[linear-gradient(180deg,rgba(240,249,255,0.7),white)]">
      <div className="section-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Trust + Legal"
            title="Privacy, terms, disclaimers, and shipping details in one clear section"
            description="The legal area is structured to scale into dedicated pages later while already supporting trust, transparency, and buyer confidence."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="surface-card">
              <ShieldCheck className="h-6 w-6 text-secondary" />
              <h3 className="mt-4 text-xl font-black text-slate-950">SSL Secure</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Strong payment language and security cues reduce hesitation at the point of purchase.
              </p>
            </div>
            <div className="surface-card">
              <BadgeCheck className="h-6 w-6 text-secondary" />
              <h3 className="mt-4 text-xl font-black text-slate-950">Trusted Pharmacy</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Content is organized to feel professional, compliant-aware, and ready for future administrative updates.
              </p>
            </div>
          </div>
        </div>

        <div className="surface-card">
          <div className="flex flex-wrap gap-3">
            {policies.map((policy, index) => (
              <button
                key={policy.title}
                type="button"
                onClick={() => setActivePolicy(index)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  activePolicy === index
                    ? 'bg-primary text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-primary/20 hover:text-primary'
                }`}
              >
                {policy.title}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-black tracking-tight text-slate-950">{policies[activePolicy].title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{policies[activePolicy].summary}</p>
            <div className="mt-5 grid gap-3">
              {policies[activePolicy].bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <p className="text-sm leading-7 text-slate-600">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pb-28 pt-10 md:pb-12">
      <div className="section-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-2 text-white">
                <Plus className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-black tracking-tight text-slate-950">
                  TOPMED<span className="text-secondary">GURU</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                  Medical eCommerce platform
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              A production-ready pharmacy landing experience focused on UI polish, trust content, SEO structure, and scalable product merchandising.
            </p>
          </div>

          <div className="grid gap-4 text-sm font-bold text-slate-600 md:grid-cols-2">
            <button type="button" onClick={() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-primary">
              Privacy Policy
            </button>
            <button type="button" onClick={() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-primary">
              Terms & Conditions
            </button>
            <button type="button" onClick={() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-primary">
              Disclaimer
            </button>
            <button type="button" onClick={() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-primary">
              Shipping Policy
            </button>
          </div>

          <div className="text-sm text-slate-400">© 2026 Topmedguru. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export function MobileStickyCTA({ cartCount, onRedirect }: { cartCount: number; onRedirect: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/90 p-4 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <button type="button" onClick={onRedirect} className="button-primary !w-full !justify-center">
          Shop Now
          <ArrowRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex min-w-24 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-4 text-sm font-bold text-slate-700"
        >
          <ShoppingCart className="h-4 w-4" />
          {cartCount}
        </button>
      </div>
    </div>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 left-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-black text-white shadow-[0_24px_70px_-20px_rgba(16,185,129,0.55)] transition hover:-translate-y-0.5 md:bottom-6"
    >
      <Headphones className="h-4 w-4" />
      WhatsApp Chat
    </a>
  );
}
