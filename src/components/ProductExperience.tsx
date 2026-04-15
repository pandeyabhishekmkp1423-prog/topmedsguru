import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Pill, Star } from 'lucide-react';
import { categories, type Product } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

const starIcons = (count: number) =>
  Array.from({ length: count }, (_, index) => (
    <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
  ));

export function FeaturedCategories({ onSelectCategory }: { onSelectCategory: (name: string) => void }) {
  return (
    <section id="categories" className="section-space">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured Categories"
          title="Navigate by condition, therapy area, and high-intent buying paths"
          description="Each category card is designed for conversion and SEO, with scalable slug-friendly structure that can map directly to routes such as /category/erectile-dysfunction."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.name}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                onClick={() => {
                  onSelectCategory(category.name);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group surface-card relative overflow-hidden text-left"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-100/60 blur-3xl transition group-hover:bg-emerald-100/60" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary to-secondary p-3 text-white shadow-lg shadow-sky-200/70">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary/60">{category.count}</p>
                      <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{category.name}</h3>
                    </div>
                    <ChevronRight className="mt-1 h-5 w-5 text-slate-300 transition group-hover:text-primary" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{category.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Browse {category.slug}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductSkeletonGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="surface-card animate-pulse">
          <div className="h-44 rounded-[1.6rem] bg-slate-200/80" />
          <div className="mt-6 h-4 w-24 rounded-full bg-slate-200/70" />
          <div className="mt-4 h-8 w-2/3 rounded-full bg-slate-200/70" />
          <div className="mt-4 h-16 rounded-3xl bg-slate-200/70" />
          <div className="mt-6 flex items-center justify-between">
            <div className="h-8 w-20 rounded-full bg-slate-200/70" />
            <div className="h-10 w-28 rounded-full bg-slate-200/70" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductGrid({
  filteredProducts,
  isGridLoading,
  selectedCategory,
  setSelectedCategory,
  minRating,
  setMinRating,
  sortBy,
  setSortBy,
  onQuickView,
  onAddToCart,
  onRedirect,
}: {
  filteredProducts: Product[];
  isGridLoading: boolean;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  minRating: string;
  setMinRating: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onRedirect: () => void;
}) {
  return (
    <section id="products" className="section-space bg-[linear-gradient(180deg,rgba(248,250,252,0.85),white)]">
      <div className="section-container">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Trending products built for browsing, comparison, and conversion"
          description="Use search, filters, ratings, and pricing tiers to compare cheap generic medicines, online pharmacy worldwide essentials, and high-demand ED treatment pills."
          action={
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-primary">
                SEO path example: `/product/sildenafil-100mg`
              </div>
              <button type="button" onClick={onRedirect} className="button-secondary">
                View Full Inventory
              </button>
            </div>
          }
        />

        <div className="surface-card mb-8">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary/30"
              >
                <option value="All">All categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Minimum Rating</span>
              <select
                value={minRating}
                onChange={(event) => setMinRating(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary/30"
              >
                <option value="0">All ratings</option>
                <option value="4.5">4.5 and up</option>
                <option value="4.7">4.7 and up</option>
                <option value="4.8">4.8 and up</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Price</span>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                Tiered pricing from $38 to $249
              </div>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">Sort By</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary/30"
              >
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price low to high</option>
                <option value="price-desc">Price high to low</option>
                <option value="rating">Highest rating</option>
              </select>
            </label>
          </div>
        </div>

        {isGridLoading ? (
          <ProductSkeletonGrid />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.32)] transition hover:-translate-y-1 hover:border-primary/20"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-50 to-emerald-50 p-6">
                  <div className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    {product.badge}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary backdrop-blur">
                    Save ${product.originalPrice - product.price}
                  </div>
                  <div className="flex min-h-32 items-center justify-center">
                    <Pill className="h-20 w-20 text-primary/70 transition duration-300 group-hover:scale-110 group-hover:text-secondary" />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/60">{product.category}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{product.name}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">{product.popularFor}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1">{starIcons(5)}</div>
                    <p className="text-sm font-semibold text-slate-500">
                      {product.rating} ({product.reviews})
                    </p>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-400 line-through">${product.originalPrice}</p>
                      <p className="text-3xl font-black tracking-tight text-primary">${product.price}</p>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                      {product.strengths.join(' / ')}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <button type="button" onClick={() => onQuickView(product)} className="button-secondary !w-full !justify-center">
                      Quick View
                    </button>
                    <button type="button" onClick={() => onAddToCart(product, 1)} className="button-primary !w-full !justify-center">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {!isGridLoading && filteredProducts.length === 0 ? (
          <div className="surface-card mt-6 text-center">
            <p className="text-xl font-black text-slate-950">No products matched your current filters.</p>
            <p className="mt-2 text-slate-600">Try a broader rating threshold or switch back to all categories.</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
