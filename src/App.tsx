import { useEffect, useState } from 'react';
import type { Product } from './data/siteContent';
import { faqs, products } from './data/siteContent';
import { ProductModal } from './components/ProductModal';
import { ToastRegion, type ToastMessage } from './components/ToastRegion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCategories, ProductGrid } from './components/ProductExperience';
import { BlogSection, FaqSection, HowItWorks, Testimonials, WhyChooseUs } from './components/TrustSections';
import { Footer, LegalAndTrust, MobileStickyCTA, Newsletter, OrderTracking, WhatsAppButton } from './components/UtilitySections';

const REDIRECT_URL = 'http://healthcarepills.com/';
const SITE_URL = 'https://topmedsguru.vercel.app/';

const handleRedirect = () => {
  window.location.href = REDIRECT_URL;
};

function useSeo() {
  useEffect(() => {
    document.title =
      'Buy Medicines Online Safely & Securely | Topmedguru Online Pharmacy Worldwide';

    const metaDescription =
      'Buy medicines online with a professional pharmacy experience. Browse sildenafil online, tadalafil tablets, cheap generic medicines, and trusted worldwide delivery support.';

    const ensureMeta = (name: string, content: string) => {
      let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    ensureMeta('description', metaDescription);
    ensureMeta(
      'keywords',
      'buy medicines online, cheap generic medicines, sildenafil online, tadalafil tablets, online pharmacy worldwide, ED treatment pills',
    );

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL;

    let schemaScript = document.getElementById('topmedguru-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'topmedguru-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          '@id': `${SITE_URL}#medical-webpage`,
          name: 'Topmedguru Online Pharmacy',
          url: SITE_URL,
          description: metaDescription,
          about: [
            'buy medicines online',
            'cheap generic medicines',
            'sildenafil online',
            'tadalafil tablets',
            'online pharmacy worldwide',
            'ED treatment pills',
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}#faq`,
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
        ...products.slice(0, 4).map((product) => ({
          '@type': 'Product',
          name: product.name,
          description: product.description,
          category: product.category,
          url: `${SITE_URL.replace(/\/$/, '')}${product.slug}`,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.reviews,
          },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            price: product.price,
            url: `${SITE_URL.replace(/\/$/, '')}${product.slug}`,
          },
        })),
      ],
    });
  }, []);
}

type CartItem = {
  product: Product;
  quantity: number;
};

export default function App() {
  useSeo();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState('0');
  const [sortBy, setSortBy] = useState('popularity');
  const [isGridLoading, setIsGridLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [trackingInput, setTrackingInput] = useState('');
  const [trackingEmail, setTrackingEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<{ status: string; detail: string } | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsGridLoading(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedQuantity(1);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (!toasts.length) {
      return;
    }

    const timers = toasts.map((toast) =>
      window.setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== toast.id));
      }, 3400),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [toasts]);

  const matchingSuggestions = products.filter((product) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      return false;
    }

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  const filteredProducts = [...products]
    .filter((product) => (selectedCategory === 'All' ? true : product.category === selectedCategory))
    .filter((product) => product.rating >= Number(minRating))
    .filter((product) => {
      const query = searchTerm.trim().toLowerCase();
      if (!query) {
        return true;
      }

      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.popularFor.toLowerCase().includes(query)
      );
    })
    .sort((first, second) => {
      if (sortBy === 'price-asc') {
        return first.price - second.price;
      }
      if (sortBy === 'price-desc') {
        return second.price - first.price;
      }
      if (sortBy === 'rating') {
        return second.rating - first.rating;
      }
      return second.reviews - first.reviews;
    });

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const pushToast = (title: string, body: string) => {
    setToasts((current) => [...current, { id: Date.now() + Math.floor(Math.random() * 1000), title, body }]);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [...current, { product, quantity }];
    });

    pushToast('Added to cart', `${product.name} (${quantity}) has been saved to the reminder cart.`);
  };

  const relatedProducts = selectedProduct
    ? products.filter((product) => product.category === selectedProduct.category && product.id !== selectedProduct.id).slice(0, 3)
    : [];

  const handleTrackOrder = () => {
    if (!trackingInput.trim() || !trackingEmail.trim()) {
      pushToast('Tracking info needed', 'Enter both order number and email to check shipment status.');
      return;
    }

    const states = [
      { status: 'Payment confirmed', detail: 'Payment has been accepted and the dispensing review is complete.' },
      { status: 'Dispatch ready', detail: 'Your package is prepared and waiting for courier handoff.' },
      { status: 'In transit', detail: 'The order is moving through the courier network toward the destination country.' },
    ];
    const selected = states[(trackingInput.length + trackingEmail.length) % states.length];
    setTrackingResult(selected);
    pushToast('Tracking updated', `Latest shipment status: ${selected.status}.`);
  };

  const handleNewsletterSubmit = () => {
    if (!newsletterEmail.includes('@')) {
      pushToast('Valid email required', 'Please enter a valid email address to receive health tips and offers.');
      return;
    }

    pushToast('Subscription confirmed', 'You are now subscribed for health tips, offers, and product updates.');
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ToastRegion toasts={toasts} onDismiss={(id) => setToasts((current) => current.filter((toast) => toast.id !== id))} />

      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={matchingSuggestions}
        onSuggestionSelect={(product) => {
          setSearchTerm(product.name);
          setSelectedCategory(product.category);
          setSelectedProduct(product);
        }}
        onRedirect={handleRedirect}
      />

      <main>
        <Hero onRedirect={handleRedirect} onBrowseCategories={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })} />
        <FeaturedCategories onSelectCategory={setSelectedCategory} />
        <ProductGrid
          filteredProducts={filteredProducts}
          isGridLoading={isGridLoading}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          minRating={minRating}
          setMinRating={setMinRating}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onQuickView={setSelectedProduct}
          onAddToCart={addToCart}
          onRedirect={handleRedirect}
        />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <FaqSection />
        <BlogSection />
        <OrderTracking
          trackingInput={trackingInput}
          setTrackingInput={setTrackingInput}
          trackingEmail={trackingEmail}
          setTrackingEmail={setTrackingEmail}
          trackingResult={trackingResult}
          onTrack={handleTrackOrder}
        />
        <Newsletter email={newsletterEmail} setEmail={setNewsletterEmail} onSubmit={handleNewsletterSubmit} />
        <LegalAndTrust />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA cartCount={cartCount} onRedirect={handleRedirect} />

      <ProductModal
        product={selectedProduct}
        quantity={selectedQuantity}
        relatedProducts={relatedProducts}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={() => {
          if (selectedProduct) {
            addToCart(selectedProduct, selectedQuantity);
          }
        }}
        onBuyNow={() => {
          if (selectedProduct) {
            addToCart(selectedProduct, selectedQuantity);
          }
          handleRedirect();
        }}
        onQuantityChange={setSelectedQuantity}
        onSelectRelated={setSelectedProduct}
      />
    </div>
  );
}
