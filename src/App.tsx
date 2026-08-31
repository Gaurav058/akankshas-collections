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
import { CategoryPage } from './pages/CategoryPage';
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
          
          {/* EXPLICIT CATEGORY & COLLECTION ROUTES */}
          <Route path="/women" element={
            <CategoryPage
              categoryId="women"
              title="Women's Apparel & Ethnic Fashion"
              subtitle="Explore curated women's kurtas, stitched suits, unstitched dress materials, and partywear at Akanksha's Collections, Hamirpur."
              editorialText="Our boutique features a handpicked selection of women's ethnic clothing tailored for everyday ease, office sophistication, festive gatherings, and grand celebrations."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/kurtas" element={
            <CategoryPage
              categoryId="kurtas"
              title="Kurtas & Kurtis Collection"
              subtitle="Daily wear, office wear, and festive embroidered kurtis in premium cotton, silk blends, and breathable fabrics in Hamirpur."
              editorialText="Discover minimalist straight-cut kurtas, floral printed everyday kurtis, and intricately embroidered neckline pieces crafted for contemporary Indian women."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/stitched-suits" element={
            <CategoryPage
              categoryId="stitched-suits"
              title="Stitched Suits & Ready-to-Wear"
              subtitle="Tailored 3-piece suit sets, Anarkalis, and straight cut suits with dupatta at Akanksha's Collections Satya Complex."
              editorialText="Ready to wear 3-piece suit sets featuring delicate zardozi neckline work, heavy organza dupattas, and classic silhouettes designed for seamless elegance."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/unstitched-suits" element={
            <CategoryPage
              categoryId="unstitched-suits"
              title="Unstitched Suits & Dress Materials"
              subtitle="Premium unstitched dress fabrics, Chanderi silk, Cotton silk, and designer suit materials in Hamirpur, HP."
              editorialText="Create your custom silhouette with our unstitched dress materials. Select from fine Chanderi silks, pure cottons, and embroidered fabrics with matching dupattas."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/partywear" element={
            <CategoryPage
              categoryId="partywear"
              title="Partywear & Occasion Wear"
              subtitle="Statement gowns, heavy Sharara suits, and festive ensemble dress wear for weddings and evening functions."
              editorialText="Turn heads at evening receptions and sangeet celebrations with hand-embellished Sharara sets, Anarkalis, and rich silk festive suits."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/formal-wear" element={
            <CategoryPage
              categoryId="formal-wear"
              title="Formal & Office Wear"
              subtitle="Elegant, minimalist formal suits and breathable cotton kurtis for professional working women in Hamirpur."
              editorialText="Refined, understated silhouettes tailored for workspace comfort and effortless professional grace. Soft breathable fabrics with understated detail."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/bridal-wear" element={
            <CategoryPage
              categoryId="bridal-wear"
              title="Bridal Edit & Heavy Festive Wear"
              subtitle="Royal bridal suits, heavy zari embroidery, and heirloom bridal ensembles at Akanksha's Collections Hamirpur."
              editorialText="Deep crimson, maroon, and regal gold heavy bridal suits. Intricate dabka, gotapatti, and zardozi detailing for unforgettable wedding rituals."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/jewellery" element={
            <CategoryPage
              categoryId="jewellery"
              title="Artificial Jewellery Collection"
              subtitle="Kundan chokers, temple jewellery, festive jhumkas, and statement bridal necklace sets in Hamirpur."
              editorialText="Complement your ethnic outfit with Kundan choker sets, pearl drop earrings, polished oxidized silver pieces, and royal wedding statement sets."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/bangles" element={
            <CategoryPage
              categoryId="bangles"
              title="Bangles & Kadas Collection"
              subtitle="Bridal chooda sets, gold-plated velvet bangles, and festive kada sets at Satya Complex, Hamirpur."
              editorialText="Vibrant glass bangles, metallic kada sets, and traditional bridal choodas to add rhythmic charm and sparkle to your ethnic attire."
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          {/* EXPLICIT REGIONAL ROUTES */}
          <Route path="/punjabi-wear" element={
            <CategoryPage
              categoryId="stitched-suits"
              title="Punjabi-Inspired Regional Wear"
              subtitle="Vibrant Punjabi Patiala suits, Shararas, and rich embroidered dupattas showcasing regional fashion influences."
              editorialText="Celebrating the bold flair of Punjabi regional fashion with vivid magenta, royal blue, and emerald green Patiala and Sharara suits."
              regionalInfluence="Punjabi"
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/rajasthani-wear" element={
            <CategoryPage
              categoryId="unstitched-suits"
              title="Rajasthani-Inspired Regional Wear"
              subtitle="Gota patti work, Bandhani prints, and regal Rajasthani festive suit dress materials in Hamirpur."
              editorialText="Intricate Gota Patti embellishments, vibrant Bandhani motifs, and traditional Rajasthani craft techniques for festive royalty."
              regionalInfluence="Rajasthani"
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

          <Route path="/himachali-wear" element={
            <CategoryPage
              categoryId="stitched-suits"
              title="Himachali Regional Heritage Wear"
              subtitle="Graceful Himachali regional suits, traditional shawls, and festive hill heritage attire at Akanksha's Collections."
              editorialText="Rooted in Himachali grace, featuring warm textured weaves, cozy pashmina blends, and subtle floral borders for hill festive occasions."
              regionalInfluence="Himachali"
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          } />

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
