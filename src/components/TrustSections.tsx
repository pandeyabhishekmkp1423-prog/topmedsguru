import { AnimatePresence, motion } from 'motion/react';
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  CreditCard,
  Headphones,
  HeartHandshake,
  Search,
  ShoppingCart,
  Truck,
  WalletCards,
} from 'lucide-react';
import { useState } from 'react';
import { articles, faqs, testimonials } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

const starIcons = (count: number) =>
  Array.from({ length: count }, (_, index) => (
    <svg key={index} viewBox="0 0 24 24" className="h-4 w-4 fill-amber-400 text-amber-400">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ));

export function WhyChooseUs() {
  const features = [
    {
      icon: BadgeCheck,
      title: '100% Genuine Medicine Content',
      text: 'Product pages are written to feel medically serious, with realistic safety language and transparent strength guidance.',
    },
    {
      icon: CheckCircle2,
      title: 'Discreet Packaging',
      text: 'Privacy-forward ordering cues help buyers understand how sensitive purchases are handled after checkout.',
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      text: 'Clear trust badges, checkout language, and reinforced SSL cues reduce buyer hesitation.',
    },
    {
      icon: Truck,
      title: 'Fast Shipping Worldwide',
      text: 'International delivery estimates and tracking support make the site feel operational rather than generic.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      text: 'Support-focused copy, tracking lookup, and FAQ content lower friction throughout the funnel.',
    },
    {
      icon: HeartHandshake,
      title: 'Pharmacy-Grade UX',
      text: 'Clear spacing, calm visuals, and premium content hierarchy make product browsing more trustworthy.',
    },
  ];

  return (
    <section id="why-us" className="section-space">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trust-building details that make a pharmacy storefront convert"
          description="This experience combines polished UI, careful health content, and high-confidence checkout signals without relying on exaggerated medical claims."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="surface-card"
              >
                <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: 'Choose Medicine',
      text: 'Browse categories, use search suggestions, and compare product strengths with SEO-friendly detail cards.',
      icon: Search,
    },
    {
      title: 'Add to Cart',
      text: 'Use the quick view modal to adjust quantity, review tier pricing, and save items to the reminder cart.',
      icon: ShoppingCart,
    },
    {
      title: 'Secure Checkout',
      text: 'Proceed to the existing order destination with reinforced privacy, payment, and policy messaging.',
      icon: WalletCards,
    },
    {
      title: 'Fast Delivery',
      text: 'Track orders using the lightweight shipment lookup and stay informed with customer support cues.',
      icon: Truck,
    },
  ];

  return (
    <section className="section-space bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple four-step buying flow that feels trustworthy on every device"
          description="The redesigned funnel keeps the path clear: search, compare, add to cart, and proceed to a secure order experience."
          theme="dark"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="absolute right-4 top-4 text-6xl font-black tracking-tighter text-white/5">
                  0{index + 1}
                </div>
                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3 text-secondary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="section-space">
      <div className="section-container">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Realistic testimonial content that supports trust and on-page depth"
          description="These reviews are written to sound plausible, location-aware, and product-informed without feeling like generic placeholder praise."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((review, index) => (
            <motion.article
              key={`${review.name}-${review.country}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="surface-card"
            >
              <div className="flex items-center gap-1">{starIcons(review.rating)}</div>
              <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">{review.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">"{review.quote}"</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-950">{review.name}</p>
                <p className="text-sm text-slate-500">{review.country}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section id="faq" className="section-space bg-[linear-gradient(180deg,rgba(240,249,255,0.8),white)]">
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Answers for buyers comparing online pharmacy options"
            description="This FAQ strengthens search visibility for high-intent queries around safety, prescriptions, shipping timelines, and product authenticity."
          />
          <div className="surface-card">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <CircleHelp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-black text-slate-950">Need help with order timing?</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Use the tracking panel below or reach the WhatsApp CTA for a faster support touchpoint.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openQuestion === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold text-slate-950">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-6 text-sm leading-7 text-slate-600">{faq.answer}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="section-space">
      <div className="section-container">
        <SectionHeading
          eyebrow="Educational Blog"
          title="SEO-rich educational content for patients, shoppers, and search engines"
          description="These sample articles target phrases like sildenafil online, tadalafil tablets, cheap generic medicines, and online pharmacy worldwide while keeping the tone professional and simple."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="surface-card"
            >
              <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {article.category}
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">{article.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{article.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-sm font-semibold text-slate-500">{article.readTime}</span>
                <span className="text-sm font-bold text-primary">{article.slug}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
