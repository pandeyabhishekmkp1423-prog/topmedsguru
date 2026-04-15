import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ChevronRight, Menu, Package, Plus, Search, ShoppingCart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Product } from '../data/siteContent';

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function Header({
  cartCount,
  cartTotal,
  searchTerm,
  setSearchTerm,
  suggestions,
  onSuggestionSelect,
  onRedirect,
}: {
  cartCount: number;
  cartTotal: number;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  suggestions: Product[];
  onSuggestionSelect: (product: Product) => void;
  onRedirect: () => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Categories', href: 'categories' },
    { name: 'Products', href: 'products' },
    { name: 'Reviews', href: 'reviews' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Blog', href: 'blog' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-sky-100 bg-white/95 py-3 shadow-[0_18px_80px_-36px_rgba(2,132,199,0.35)] backdrop-blur-xl'
          : 'bg-white/85 py-5 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left"
          aria-label="Go to top"
        >
          <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-2.5 shadow-lg shadow-sky-400/20">
            <Plus className="h-6 w-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-xl font-black tracking-tight text-slate-950">
              TOPMED<span className="text-secondary">GURU</span>
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
              Trusted online pharmacy worldwide
            </p>
          </div>
        </button>

        <div className="relative hidden max-w-xl flex-1 lg:block">
          <label className="flex items-center gap-3 rounded-full border border-sky-100 bg-slate-50 px-4 py-3 shadow-inner">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => window.setTimeout(() => setIsSearchFocused(false), 120)}
              placeholder="Search sildenafil online, tadalafil tablets, antibiotics..."
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
          {isSearchFocused && searchTerm && suggestions.length ? (
            <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              {suggestions.slice(0, 5).map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => onSuggestionSelect(product)}
                  className="flex w-full items-center justify-between border-b border-slate-100 px-4 py-3 text-left transition last:border-b-0 hover:bg-sky-50"
                >
                  <div>
                    <p className="font-bold text-slate-950">{product.name}</p>
                    <p className="text-sm text-slate-500">{product.category}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToId(link.href)}
              className="text-sm font-bold text-slate-600 transition hover:text-primary"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollToId('tracking')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-primary/20 hover:text-primary"
          >
            <Package className="h-4 w-4" />
            Track Order
          </button>
          <button
            type="button"
            onClick={onRedirect}
            className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-4 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartCount} items
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs">${cartTotal.toFixed(0)}</span>
          </button>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-3 text-slate-700 md:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-slate-100 bg-white px-4 pb-6 pt-4 shadow-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <label className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search medicines"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none"
                />
              </label>
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToId(link.href);
                    }}
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-left font-bold text-slate-700"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <button type="button" onClick={onRedirect} className="button-primary">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
