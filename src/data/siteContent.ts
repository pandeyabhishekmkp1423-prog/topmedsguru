import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  Brain,
  HeartPulse,
  Pill,
  ShieldCheck,
  SmilePlus,
  Syringe,
  Truck,
} from 'lucide-react';

export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  count: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  dosage: string;
  sideEffects: string;
  safety: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  popularFor: string;
  strengths: string[];
  tiers: Array<{ label: string; quantity: number; price: number }>;
};

export type Review = {
  name: string;
  country: string;
  title: string;
  quote: string;
  rating: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Article = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
};

export type Policy = {
  title: string;
  summary: string;
  bullets: string[];
};

export const categories: Category[] = [
  {
    name: 'Erectile Dysfunction',
    slug: '/category/erectile-dysfunction',
    description: 'Discreet access to common ED treatment options with clear strength guidance.',
    icon: HeartPulse,
    count: '18 products',
  },
  {
    name: 'Pain Relief',
    slug: '/category/pain-relief',
    description: 'Popular options for short-term pain support with usage and safety summaries.',
    icon: ShieldCheck,
    count: '22 products',
  },
  {
    name: 'Antibiotics',
    slug: '/category/antibiotics',
    description: 'Frequently requested antibacterial medicines with dosage information by condition.',
    icon: Syringe,
    count: '14 products',
  },
  {
    name: 'Mental Health',
    slug: '/category/mental-health',
    description: 'Common therapy-support medicines explained in plain language and simple comparison cards.',
    icon: Brain,
    count: '16 products',
  },
  {
    name: 'Weight Loss',
    slug: '/category/weight-loss',
    description: 'Structured options for weight management with treatment suitability highlights.',
    icon: SmilePlus,
    count: '12 products',
  },
  {
    name: "Men's Health",
    slug: '/category/mens-health',
    description: 'Broader men’s wellness essentials including energy, performance, and support products.',
    icon: Pill,
    count: '20 products',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Sildenafil 100mg',
    slug: '/product/sildenafil-100mg',
    category: 'Erectile Dysfunction',
    categorySlug: '/category/erectile-dysfunction',
    description:
      'Sildenafil is a PDE5 inhibitor commonly prescribed to support erectile dysfunction treatment in adults. Product details, onset expectations, and storage guidance are presented in a patient-friendly format.',
    dosage:
      'Usually taken 30 to 60 minutes before sexual activity. Adult dosing should follow clinician instructions and should not exceed the prescribed frequency.',
    sideEffects:
      'Common side effects can include headache, flushing, nasal congestion, indigestion, or temporary visual disturbance.',
    safety:
      'Not suitable for everyone. Prescription requirements and use restrictions vary by country. Patients using nitrates or managing heart conditions should seek clinician advice first.',
    price: 69,
    originalPrice: 89,
    rating: 4.9,
    reviews: 342,
    badge: 'Best Seller',
    popularFor: 'Reliable ED support',
    strengths: ['25mg', '50mg', '100mg'],
    tiers: [
      { label: 'Starter', quantity: 10, price: 69 },
      { label: 'Value', quantity: 20, price: 119 },
      { label: 'Clinic Pack', quantity: 40, price: 219 },
    ],
  },
  {
    id: 2,
    name: 'Tadalafil 20mg',
    slug: '/product/tadalafil-20mg',
    category: 'Erectile Dysfunction',
    categorySlug: '/category/erectile-dysfunction',
    description:
      'Tadalafil tablets are often selected by adults seeking longer-lasting ED support. The listing highlights timing, expected duration, and strength availability.',
    dosage:
      'Commonly used before anticipated activity or once daily in lower strengths when prescribed. Follow the approved clinician guidance for your regimen.',
    sideEffects:
      'Possible side effects include muscle aches, headache, indigestion, facial flushing, or nasal symptoms.',
    safety:
      'Adults with cardiovascular disease, kidney disease, or concurrent nitrate use should speak to a qualified clinician before use.',
    price: 74,
    originalPrice: 96,
    rating: 4.8,
    reviews: 287,
    badge: 'Trending',
    popularFor: 'Longer coverage window',
    strengths: ['5mg', '10mg', '20mg'],
    tiers: [
      { label: 'Starter', quantity: 10, price: 74 },
      { label: 'Value', quantity: 20, price: 128 },
      { label: 'Clinic Pack', quantity: 40, price: 236 },
    ],
  },
  {
    id: 3,
    name: 'Amoxicillin 500mg',
    slug: '/product/amoxicillin-500mg',
    category: 'Antibiotics',
    categorySlug: '/category/antibiotics',
    description:
      'Amoxicillin is a frequently prescribed antibiotic used for selected bacterial infections. This product card focuses on administration timing and patient counseling points.',
    dosage:
      'Use only when prescribed for a confirmed or strongly suspected bacterial infection. Complete the full course exactly as directed.',
    sideEffects:
      'Common side effects can include nausea, diarrhea, mild skin rash, or abdominal discomfort.',
    safety:
      'Antibiotics do not treat viral illnesses. Allergy history should always be reviewed before use.',
    price: 38,
    originalPrice: 49,
    rating: 4.7,
    reviews: 184,
    badge: 'Value',
    popularFor: 'Common bacterial infections',
    strengths: ['250mg', '500mg'],
    tiers: [
      { label: 'Starter', quantity: 20, price: 38 },
      { label: 'Value', quantity: 40, price: 69 },
      { label: 'Clinic Pack', quantity: 80, price: 126 },
    ],
  },
  {
    id: 4,
    name: 'Azithromycin 250mg',
    slug: '/product/azithromycin-250mg',
    category: 'Antibiotics',
    categorySlug: '/category/antibiotics',
    description:
      'Azithromycin tablets are commonly used in selected bacterial infections under medical supervision. The listing includes clear course and handling guidance.',
    dosage:
      'Dosing schedules vary by condition and should only be followed as prescribed by a clinician.',
    sideEffects:
      'Possible side effects include stomach upset, loose stools, nausea, or temporary taste changes.',
    safety:
      'Patients with liver disease, heart rhythm issues, or interacting medicines should review suitability with a clinician.',
    price: 44,
    originalPrice: 58,
    rating: 4.6,
    reviews: 156,
    badge: 'Popular',
    popularFor: 'Shorter-course prescribing',
    strengths: ['250mg', '500mg'],
    tiers: [
      { label: 'Starter', quantity: 6, price: 44 },
      { label: 'Value', quantity: 12, price: 82 },
      { label: 'Clinic Pack', quantity: 24, price: 154 },
    ],
  },
  {
    id: 5,
    name: 'Tramadol 50mg',
    slug: '/product/tramadol-50mg',
    category: 'Pain Relief',
    categorySlug: '/category/pain-relief',
    description:
      'Tramadol is a prescription analgesic used in selected moderate pain scenarios. This page focuses on dose spacing, common side effects, and safe storage expectations.',
    dosage:
      'Use only exactly as prescribed. Dose limits, refill eligibility, and supply rules vary by jurisdiction.',
    sideEffects:
      'Possible side effects include dizziness, nausea, constipation, sweating, or drowsiness.',
    safety:
      'This is a controlled medicine in many regions. Use should follow local law and clinician supervision.',
    price: 82,
    originalPrice: 105,
    rating: 4.7,
    reviews: 201,
    badge: 'Controlled Rx',
    popularFor: 'Moderate pain management',
    strengths: ['50mg', '100mg ER'],
    tiers: [
      { label: 'Starter', quantity: 30, price: 82 },
      { label: 'Value', quantity: 60, price: 149 },
      { label: 'Clinic Pack', quantity: 90, price: 212 },
    ],
  },
  {
    id: 6,
    name: 'Zolpidem 10mg',
    slug: '/product/zolpidem-10mg',
    category: 'Mental Health',
    categorySlug: '/category/mental-health',
    description:
      'Zolpidem is commonly prescribed for short-term insomnia management. Content focuses on bedtime use, next-day caution, and practical patient notes.',
    dosage:
      'Take exactly as prescribed, right before bedtime, and only when a full night of sleep is possible.',
    sideEffects:
      'Some patients report drowsiness, dizziness, unusual dreams, or next-day grogginess.',
    safety:
      'May impair alertness the next morning. Avoid combining with alcohol or other sedating medicines unless advised by a clinician.',
    price: 57,
    originalPrice: 72,
    rating: 4.6,
    reviews: 133,
    badge: 'Night Support',
    popularFor: 'Short-term sleep support',
    strengths: ['5mg', '10mg'],
    tiers: [
      { label: 'Starter', quantity: 15, price: 57 },
      { label: 'Value', quantity: 30, price: 102 },
      { label: 'Clinic Pack', quantity: 60, price: 188 },
    ],
  },
  {
    id: 7,
    name: 'Semaglutide Support Kit',
    slug: '/product/semaglutide-support-kit',
    category: 'Weight Loss',
    categorySlug: '/category/weight-loss',
    description:
      'A structured product entry for semaglutide-related weight management support, including counseling points, storage notes, and escalation reminders.',
    dosage:
      'Dose initiation and escalation should follow clinician guidance. Individual suitability and supply rules vary by market.',
    sideEffects:
      'Potential side effects include nausea, reduced appetite, constipation, vomiting, or stomach discomfort.',
    safety:
      'Not appropriate for everyone. Patients with pancreatic, thyroid, or gastrointestinal concerns should seek medical review first.',
    price: 249,
    originalPrice: 289,
    rating: 4.8,
    reviews: 119,
    badge: 'New',
    popularFor: 'Structured weight support',
    strengths: ['0.25mg', '0.5mg', '1mg'],
    tiers: [
      { label: 'Starter', quantity: 1, price: 249 },
      { label: 'Value', quantity: 2, price: 469 },
      { label: 'Clinic Pack', quantity: 3, price: 669 },
    ],
  },
  {
    id: 8,
    name: 'Finasteride 1mg',
    slug: '/product/finasteride-1mg',
    category: "Men's Health",
    categorySlug: '/category/mens-health',
    description:
      'Finasteride 1mg is widely used for male pattern hair loss support. This listing explains time-to-results expectations and ongoing adherence reminders.',
    dosage:
      'Typically taken once daily as prescribed. Continued use is usually needed to maintain benefit.',
    sideEffects:
      'Some patients may experience reduced libido, breast tenderness, or mood changes.',
    safety:
      'Use is not suitable in pregnancy exposure contexts. A clinician should review PSA interpretation and overall suitability.',
    price: 46,
    originalPrice: 59,
    rating: 4.7,
    reviews: 167,
    badge: 'Popular',
    popularFor: 'Hair retention support',
    strengths: ['1mg'],
    tiers: [
      { label: 'Starter', quantity: 30, price: 46 },
      { label: 'Value', quantity: 90, price: 118 },
      { label: 'Clinic Pack', quantity: 180, price: 216 },
    ],
  },
];

export const testimonials: Review[] = [
  {
    name: 'Michael R.',
    country: 'United States',
    title: 'Fast dispatch and clear guidance',
    quote:
      'The product details were much easier to understand than on most pharmacy sites. Delivery tracking updates were clear and discreet.',
    rating: 5,
  },
  {
    name: 'Daniel K.',
    country: 'Canada',
    title: 'Reliable reorder experience',
    quote:
      'I appreciated the simple checkout flow and the fact that dosage information was shown clearly before ordering.',
    rating: 5,
  },
  {
    name: 'Luis M.',
    country: 'Spain',
    title: 'Professional and private',
    quote:
      'Packaging arrived discreetly, and the support team answered my question about shipping windows within a few hours.',
    rating: 4,
  },
  {
    name: 'Oliver P.',
    country: 'United Kingdom',
    title: 'Helpful comparison cards',
    quote:
      'The category layout helped me compare options quickly without feeling overwhelmed. It feels much more trustworthy than typical marketplace stores.',
    rating: 5,
  },
  {
    name: 'Rahul S.',
    country: 'India',
    title: 'Smooth mobile ordering',
    quote:
      'The mobile design is clean, the tap targets are large, and the order reminder toast made the experience feel polished.',
    rating: 5,
  },
  {
    name: 'James T.',
    country: 'Australia',
    title: 'Good educational content',
    quote:
      'The FAQ and article summaries explained common side effects in simple language, which made choosing the right discussion points with my doctor easier.',
    rating: 4,
  },
  {
    name: 'Ethan L.',
    country: 'Germany',
    title: 'Transparent pricing tiers',
    quote:
      'Pricing tiers were easy to compare, and the quick-view modal gave enough detail before redirecting me to order.',
    rating: 5,
  },
  {
    name: 'Noah B.',
    country: 'Ireland',
    title: 'Feels like a serious pharmacy brand',
    quote:
      'The site has a strong medical look without feeling cold. It gave me more confidence than generic eCommerce templates.',
    rating: 5,
  },
];

export const faqs: Faq[] = [
  {
    question: 'Is it safe to buy medicines online?',
    answer:
      'It can be safe when the pharmacy follows secure payment practices, clear product labeling, transparent policies, and local prescription rules. Patients should avoid stores that hide contact information or make unrealistic guarantees.',
  },
  {
    question: 'Do I need a prescription?',
    answer:
      'Prescription requirements depend on the product and the destination country. Some items require prescription validation or pharmacist review before supply.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Shipping windows usually depend on destination, customs processing, courier capacity, and the medicine category. Most standard international orders are estimated within 5 to 12 business days.',
  },
  {
    question: 'Are your medicines genuine?',
    answer:
      'Topmedguru presents products with batch-conscious sourcing language, transparent strength details, and clear safety notes. Final supply quality depends on the dispensing partner and local regulatory handling.',
  },
  {
    question: 'Can I track my order online?',
    answer:
      'Yes. The upgraded interface includes a basic tracking lookup so returning customers can quickly review shipment status using an order code and email.',
  },
  {
    question: 'Do you ship worldwide?',
    answer:
      'The storefront is positioned for international buyers, but medicine availability, destination restrictions, and customs rules vary by region.',
  },
];

export const articles: Article[] = [
  {
    title: 'Best ED Treatments in 2025: Comparing Sildenafil, Tadalafil, and Daily Options',
    slug: '/blog/best-ed-treatments-2025',
    category: 'ED Treatment Pills',
    excerpt:
      'A clear comparison of onset, duration, strengths, and counseling points for adults reviewing the most common erectile dysfunction options.',
    readTime: '6 min read',
  },
  {
    title: 'How Sildenafil Works and When to Take It for Best Results',
    slug: '/blog/how-sildenafil-works',
    category: 'Sildenafil Online',
    excerpt:
      'A simple explanation of PDE5 inhibition, expected onset, food interactions, and the questions patients commonly ask first.',
    readTime: '5 min read',
  },
  {
    title: 'Side Effects of Painkillers: What Adults Should Watch For',
    slug: '/blog/side-effects-of-painkillers',
    category: 'Pain Relief',
    excerpt:
      'An overview of common painkiller side effects, safe-use reminders, and why dose spacing and alcohol interactions matter.',
    readTime: '7 min read',
  },
  {
    title: 'Buying Medicines Online Worldwide: Checklist for Safe Ordering',
    slug: '/blog/buy-medicines-online-worldwide',
    category: 'Online Pharmacy Worldwide',
    excerpt:
      'The practical safety checklist patients can use to compare online pharmacies before entering payment or health details.',
    readTime: '4 min read',
  },
  {
    title: 'Tadalafil Tablets Explained: Daily vs On-Demand Use',
    slug: '/blog/tadalafil-tablets-explained',
    category: 'Tadalafil Tablets',
    excerpt:
      'A guide to how tadalafil durations differ from sildenafil and which lifestyle questions usually shape the choice.',
    readTime: '5 min read',
  },
  {
    title: 'Cheap Generic Medicines: How to Compare Value Without Sacrificing Clarity',
    slug: '/blog/cheap-generic-medicines-guide',
    category: 'Cheap Generic Medicines',
    excerpt:
      'A realistic look at pricing tiers, generic naming, package sizes, and what trustworthy product listings should disclose.',
    readTime: '6 min read',
  },
];

export const policies: Policy[] = [
  {
    title: 'Privacy Policy',
    summary: 'Explains how personal, order, and communication data are handled across browsing and checkout touchpoints.',
    bullets: [
      'Order and contact details are collected only for fulfillment, support, and service communication.',
      'Payment processing should occur through secure third-party gateways rather than stored raw card data.',
      'Users can request data review or account assistance through support channels.',
    ],
  },
  {
    title: 'Terms & Conditions',
    summary: 'Defines order acceptance, account responsibilities, supply limitations, and jurisdiction-specific restrictions.',
    bullets: [
      'Orders are subject to product availability and destination review.',
      'Customers are responsible for providing accurate shipping and medical screening information when required.',
      'Storefront content is informational and does not replace professional medical advice.',
    ],
  },
  {
    title: 'Disclaimer',
    summary: 'Clarifies that product content is educational and not a substitute for diagnosis or individualized treatment.',
    bullets: [
      'Medicine suitability varies by person, condition, and concurrent medication use.',
      'Patients should consult a qualified clinician for diagnosis, contraindications, and urgent care decisions.',
      'Local prescription, import, and controlled-substance rules must always be followed.',
    ],
  },
  {
    title: 'Shipping Policy',
    summary: 'Sets expectations for dispatch windows, courier timelines, customs processing, and reshipment review.',
    bullets: [
      'Estimated shipping times begin after payment review and order confirmation.',
      'Customs inspections and destination regulations can affect final delivery speed.',
      'Support can review delayed shipments using order number and email address.',
    ],
  },
];

export const trustBadges = [
  { label: 'FDA-aware sourcing language', icon: BadgeCheck },
  { label: 'SSL secure checkout', icon: ShieldCheck },
  { label: 'Fast tracked delivery', icon: Truck },
];

export const siteStats = [
  { label: 'Verified product pages', value: '70+' },
  { label: 'Customer satisfaction score', value: '4.8/5' },
  { label: 'Countries served', value: '40+' },
  { label: 'Support response target', value: '< 12h' },
];
