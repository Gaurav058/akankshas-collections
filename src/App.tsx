import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { SearchModal } from './components/SearchModal';
import { ProductModal } from './components/ProductModal';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { RegionalEdit } from './pages/RegionalEdit';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { VisitUs } from './pages/VisitUs';
import { Contact } from './pages/Contact';
import { Journal } from './pages/Journal';
import { JournalArticle } from './pages/JournalArticle';
import { FAQs } from './pages/FAQs';
import { LegalPage } from './pages/LegalPage';
import { NotFound } from './pages/NotFound';
import type { Product } from './data/products';
import { products } from './data/products';

// Helper component to scroll window to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export const AppContent: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Check URL query parameters for direct product opening
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('id');
    if (productId) {
      const found = products.find(p => p.id === productId);
      if (found) setSelectedProduct(found);
    }
  }, [location.search]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0D0D0D' }}>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home onSelectProduct={(p) => setSelectedProduct(p)} />} />
          <Route path="/collections" element={<Collections onSelectProduct={(p) => setSelectedProduct(p)} />} />
          <Route path="/regional/:region" element={<RegionalEdit onSelectProduct={(p) => setSelectedProduct(p)} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/visit-us" element={<VisitUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalArticle />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/shipping-policy" element={<LegalPage type="shipping" />} />
          <Route path="/returns-policy" element={<LegalPage type="returns" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
