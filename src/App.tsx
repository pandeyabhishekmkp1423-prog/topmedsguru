import { useState, useEffect } from 'react';
import { 
  Plus, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Package, 
  Headphones, 
  Menu, 
  X,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const REDIRECT_URL = "http://healthcarepills.com/";

const handleRedirect = () => {
  window.location.href = REDIRECT_URL;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose', href: '#why-choose' },
    { name: 'Medications', href: '#medications' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-xl border-b border-slate-100 py-3' : 'bg-white/80 backdrop-blur-md py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl shadow-lg group-hover:rotate-12 transition-transform">
            <Plus className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black text-primary tracking-tighter">TOPMED<span className="text-secondary">GURU</span></span>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Healthcare Partner</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-secondary font-bold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button 
          onClick={handleRedirect}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-8 py-3 rounded-full font-black shadow-xl shadow-secondary/30 transition-all hover:scale-105 active:scale-95"
        >
          Order Now <ArrowRight className="w-4 h-4" />
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 font-bold text-lg py-2 border-b border-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleRedirect}
                className="w-full bg-gradient-to-r from-secondary to-primary text-white py-4 rounded-2xl font-black text-center shadow-lg"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-accent/50 to-white relative overflow-hidden">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-white mb-10">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-sm font-black text-primary uppercase tracking-wider">4.9/5 Trusted by 1200+ Patients</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-primary leading-[0.9] mb-8 tracking-tighter">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Online Pharmacy</span> & Partner
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Safe, secure, and reliable access to essential medications. Experience the future of professional healthcare delivered with care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={handleRedirect}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95"
              >
                Visit Pharmacy Now
              </button>
              <button 
                onClick={handleRedirect}
                className="w-full sm:w-auto bg-white text-primary border-2 border-primary/10 px-12 py-6 rounded-full font-black text-xl hover:bg-slate-50 transition-all shadow-xl"
              >
                Shop Now
              </button>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
              <div className="flex items-center gap-2 font-black text-primary"><ShieldCheck /> SECURE PAYMENTS</div>
              <div className="flex items-center gap-2 font-black text-primary"><Truck /> FAST SHIPPING</div>
              <div className="flex items-center gap-2 font-black text-primary"><CheckCircle /> FDA APPROVED</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const QuickLinks = () => {
  const links = [
    "Buy Adderall Online",
    "Buy Alprazolam Online",
    "Buy Oxycodone Online",
    "Buy Percocet Online",
    "Buy Tramadol Online",
    "Buy Valium Online"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Quick Access Pharmacy Links</h2>
          <p className="text-slate-500">Fast-track your order with our most popular medications</p>
        </div>
        
        <div className="flex flex-col gap-4">
          {links.map((link, idx) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={handleRedirect}
              className="group w-full flex items-center justify-between bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-secondary transition-all text-left"
            >
              <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{link}</span>
              <div className="bg-accent p-2 rounded-full group-hover:bg-secondary transition-colors">
                <ChevronRight className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

const PharmacyOfMonth = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-primary/5 border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-secondary text-white px-8 py-2 font-bold rounded-bl-3xl">
            MARCH 2026
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-secondary font-bold tracking-widest uppercase mb-4">Pharmacy of the Month</h4>
              <h2 className="text-4xl font-extrabold text-primary mb-6 leading-tight">
                Recognized for Excellence in Healthcare Delivery
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-lg font-semibold text-slate-700">4.9/5 by 1,240+ satisfied customers</span>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Easy ordering with 100% Satisfaction Guarantee",
                  "Award-Winning Customer Service",
                  "FDA-Approved Medications",
                  "Secure & Confidential Ordering"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <button onClick={handleRedirect} className="bg-secondary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
                  Visit Pharmacy Now
                </button>
                <button onClick={handleRedirect} className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  Shop Now
                </button>
                <button onClick={handleRedirect} className="text-primary font-bold hover:underline underline-offset-4 px-4">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-accent rounded-3xl flex items-center justify-center p-12">
                <Stethoscope className="w-full h-full text-secondary/40" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 max-w-[200px]">
                <p className="text-sm font-bold text-primary mb-1">Trusted Partner</p>
                <p className="text-xs text-slate-500 leading-relaxed">Delivering quality healthcare solutions worldwide since 2018.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About Topmedguru</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Topmedguru.com is a leading online healthcare platform dedicated to providing safe, reliable, and affordable access to essential medications. We understand that your health is your most valuable asset, which is why we partner with certified pharmacies to ensure every product meets the highest safety standards.
            </p>
            <p>
              Our mission is to simplify the healthcare journey by offering a seamless online experience, from browsing to delivery. With a focus on transparency, security, and customer satisfaction, we have become a trusted partner for thousands of individuals seeking quality medical solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      title: "Secure Ordering",
      desc: "Your data is protected with military-grade encryption for every transaction."
    },
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      title: "Fast Delivery",
      desc: "Discreet and rapid shipping to ensure you never miss a dose."
    },
    {
      icon: <Package className="w-8 h-8 text-secondary" />,
      title: "Trusted Products",
      desc: "All medications are sourced from FDA-approved facilities."
    },
    {
      icon: <Headphones className="w-8 h-8 text-secondary" />,
      title: "24/7 Support",
      desc: "Our medical support team is available around the clock for your needs."
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We combine technology with healthcare expertise to provide a superior pharmacy experience.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MedicationsGrid = () => {
  const [selectedMed, setSelectedMed] = useState<any>(null);

  const meds = [
    { 
      name: "Adderall", 
      category: "ADHD", 
      price: "From $120",
      description: "A combination medication used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy.",
      dosage: "Typically 5mg to 30mg daily, as prescribed.",
      sideEffects: "Loss of appetite, dry mouth, sleep problems, anxiety."
    },
    { 
      name: "Alprazolam", 
      category: "Anxiety", 
      price: "From $95",
      description: "A benzodiazepine used to treat anxiety and panic disorders.",
      dosage: "0.25mg to 0.5mg three times daily, as prescribed.",
      sideEffects: "Drowsiness, dizziness, increased saliva production."
    },
    { 
      name: "Oxycodone", 
      category: "Pain Relief", 
      price: "From $150",
      description: "An opioid pain medication used to treat moderate to severe pain.",
      dosage: "5mg to 15mg every 4 to 6 hours as needed for pain.",
      sideEffects: "Nausea, constipation, headache, dizziness."
    },
    { 
      name: "Percocet", 
      category: "Pain Relief", 
      price: "From $140",
      description: "A combination of oxycodone and acetaminophen used for moderate to severe pain.",
      dosage: "1 to 2 tablets every 6 hours as needed.",
      sideEffects: "Nausea, vomiting, constipation, lightheadedness."
    },
    { 
      name: "Tramadol", 
      category: "Pain Relief", 
      price: "From $85",
      description: "An opioid-like pain medication used to treat moderate to moderately severe pain.",
      dosage: "50mg to 100mg every 4 to 6 hours as needed.",
      sideEffects: "Dizziness, nausea, constipation, sweating."
    },
    { 
      name: "Valium", 
      category: "Anxiety", 
      price: "From $90",
      description: "A benzodiazepine used to treat anxiety, muscle spasms, and seizures.",
      dosage: "2mg to 10mg, 2 to 4 times daily.",
      sideEffects: "Drowsiness, fatigue, muscle weakness."
    },
    { 
      name: "Modafinil", 
      category: "Sleep Disorders", 
      price: "From $110",
      description: "A medication used to improve wakefulness in adults with excessive sleepiness.",
      dosage: "200mg once daily in the morning.",
      sideEffects: "Headache, nausea, nervousness, dizziness."
    },
    { 
      name: "Viagra", 
      category: "Men's Health", 
      price: "From $75",
      description: "Used to treat erectile dysfunction and pulmonary arterial hypertension.",
      dosage: "50mg taken as needed, approx 1 hour before activity.",
      sideEffects: "Headache, flushing, upset stomach, abnormal vision."
    },
  ];

  return (
    <section id="medications" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Our Medications</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">Browse our wide selection of high-quality, FDA-approved medications. Click for details.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {meds.map((med, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              onClick={() => setSelectedMed(med)}
              className="group bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-secondary shadow-sm hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-video bg-accent/50 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Package className="w-16 h-16 text-secondary/40" />
              </div>
              <div className="mb-6">
                <span className="text-xs font-black text-secondary uppercase tracking-[0.2em]">{med.category}</span>
                <h3 className="text-2xl font-black text-primary mt-2">{med.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-xl font-black text-primary">{med.price}</span>
                <div className="bg-primary group-hover:bg-secondary text-white p-3 rounded-2xl transition-colors shadow-lg">
                  <Plus className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button onClick={handleRedirect} className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-5 rounded-full font-black shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
            View Full Inventory
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedMed && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMed(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedMed(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-primary" />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="bg-accent/30 p-12 flex items-center justify-center">
                  <Package className="w-32 h-32 text-secondary/40" />
                </div>
                <div className="p-10 md:p-12">
                  <span className="text-xs font-black text-secondary uppercase tracking-[0.2em]">{selectedMed.category}</span>
                  <h3 className="text-4xl font-black text-primary mt-2 mb-6">{selectedMed.name}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-black text-primary uppercase mb-2">Description</h4>
                      <p className="text-slate-600 leading-relaxed">{selectedMed.description}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-primary uppercase mb-2">Dosage</h4>
                      <p className="text-slate-600 leading-relaxed">{selectedMed.dosage}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-primary uppercase mb-2">Side Effects</h4>
                      <p className="text-slate-600 leading-relaxed italic">{selectedMed.sideEffects}</p>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between gap-4">
                    <span className="text-2xl font-black text-primary">{selectedMed.price}</span>
                    <button 
                      onClick={handleRedirect}
                      className="flex-1 bg-secondary text-white py-4 rounded-2xl font-black shadow-xl shadow-secondary/20 hover:scale-105 transition-transform"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const TrustStatement = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-secondary" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            Topmedguru.com delivers reliable healthcare solutions with a focus on safety, security, and customer trust.
          </h2>
          <p className="text-white/70 text-lg">
            Join over 1,200+ happy customers who trust us for their essential medication needs.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-lg">
              <Plus className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-black text-primary tracking-tighter uppercase">Topmedguru</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
          </div>

          <p className="text-slate-400 text-sm font-medium">
            © 2026 Topmedguru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100">
      <button 
        onClick={handleRedirect}
        className="w-full bg-secondary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-secondary/20 flex items-center justify-center gap-2"
      >
        👉 Order Now
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <PharmacyOfMonth />
        <AboutSection />
        <WhyChooseUs />
        <MedicationsGrid />
        <TrustStatement />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
