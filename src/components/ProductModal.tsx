import { AnimatePresence, motion } from 'motion/react';
import { Minus, Plus, ShieldCheck, Star, X } from 'lucide-react';
import type { Product } from '../data/siteContent';

type ProductModalProps = {
  product: Product | null;
  quantity: number;
  relatedProducts: Product[];
  onClose: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
  onQuantityChange: (next: number) => void;
  onSelectRelated: (product: Product) => void;
};

export function ProductModal({
  product,
  quantity,
  relatedProducts,
  onClose,
  onAddToCart,
  onBuyNow,
  onQuantityChange,
  onSelectRelated,
}: ProductModalProps) {
  return (
    <AnimatePresence>
      {product ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 md:p-6">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
            aria-label="Close product quick view"
          />
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative z-10 max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_45px_120px_-40px_rgba(15,23,42,0.5)]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary via-sky-700 to-emerald-500 p-8 text-white md:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_30%)]" />
                <div className="relative space-y-6">
                  <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                    {product.category}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                      {product.slug}
                    </p>
                    <h3 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{product.name}</h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/85">{product.description}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/65">Rating</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Star className="h-5 w-5 fill-amber-300 text-amber-300" />
                        <span className="text-2xl font-black">{product.rating}</span>
                      </div>
                      <p className="mt-1 text-sm text-white/80">{product.reviews} verified reviews</p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/65">Popular For</p>
                      <p className="mt-2 text-lg font-bold">{product.popularFor}</p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/65">Savings</p>
                      <p className="mt-2 text-lg font-bold">
                        Save ${Math.max(product.originalPrice - product.price, 0)}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 text-emerald-200" />
                      <div>
                        <p className="font-bold">Safety and suitability</p>
                        <p className="mt-2 text-sm leading-6 text-white/80">{product.safety}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 bg-white p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="surface-card !p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Dosage Info</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.dosage}</p>
                  </div>
                  <div className="surface-card !p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Side Effects</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.sideEffects}</p>
                  </div>
                </div>

                <div className="surface-card">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Pricing Tiers</p>
                      <p className="mt-1 text-sm text-slate-500">Volume discounts help improve conversion for repeat buyers.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 line-through">${product.originalPrice}</p>
                      <p className="text-3xl font-black text-slate-950">${product.price}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {product.tiers.map((tier) => (
                      <div
                        key={tier.label}
                        className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3"
                      >
                        <div>
                          <p className="font-bold text-slate-950">{tier.label}</p>
                          <p className="text-sm text-slate-500">{tier.quantity} units</p>
                        </div>
                        <p className="text-lg font-black text-primary">${tier.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Quantity</p>
                      <p className="mt-1 text-sm text-slate-500">Adjust units before adding to your reminder cart.</p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                      <button
                        type="button"
                        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                        className="rounded-full p-3 text-slate-700 transition hover:bg-slate-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-12 text-center text-lg font-black text-slate-950">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => onQuantityChange(quantity + 1)}
                        className="rounded-full p-3 text-slate-700 transition hover:bg-slate-100"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <button type="button" onClick={onAddToCart} className="button-secondary">
                      Add To Cart
                    </button>
                    <button type="button" onClick={onBuyNow} className="button-primary">
                      Buy Now
                    </button>
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Related Products</p>
                      <p className="mt-1 text-sm text-slate-500">Helpful alternatives from the same category.</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {relatedProducts.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectRelated(item)}
                        className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left transition hover:border-primary/30 hover:bg-slate-50"
                      >
                        <div>
                          <p className="font-bold text-slate-950">{item.name}</p>
                          <p className="text-sm text-slate-500">{item.popularFor}</p>
                        </div>
                        <p className="text-lg font-black text-primary">${item.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
