import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import TechTable from './components/TechTable';
import CollectionHero from './components/CollectionHero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Newsletter from './components/Newsletter';
import CollectionSEOContent from './components/CollectionSEOContent';
import CompanyPage from './components/CompanyPage';
import HelpPage from './components/HelpPage';
import ServicesPage from './components/ServicesPage';
import LandingPage from './components/LandingPage';

import productsData from './data/products.json';

function App() {
  const getViewFromPath = () => {
    const path = window.location.pathname.replace(/^\//, '');
    if (path.startsWith('detail/')) {
      return 'detail';
    }
    return path || 'landing';
  };

  const getProductFromPath = () => {
    const path = window.location.pathname.replace(/^\//, '');
    if (path.startsWith('detail/')) {
      const id = path.split('/')[1];
      const allProducts = Object.values(productsData).flat();
      // @ts-ignore
      return allProducts.find(p => p.id === id) || null;
    }
    return null;
  };

  const [currentView, setCurrentView] = useState<string>(getViewFromPath());
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(650);
  const [selectedProduct, setSelectedProduct] = useState<{
    id?: string;
    title: string;
    price: string;
    image: string;
    description?: string;
    specifications?: any[];
  } | null>(getProductFromPath());

  // Sync state to URL path (History API)
  useEffect(() => {
    let newPath = currentView === 'landing' ? '/' : `/${currentView}`;

    // Add the product ID to the URL if we are on the detail view
    if (currentView === 'detail' && selectedProduct?.id) {
      newPath = `/detail/${selectedProduct.id}`;
    }

    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  }, [currentView, selectedProduct]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getViewFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [currentView]);

  const renderView = () => {
    if (currentView.startsWith('company-')) return <CompanyPage activeTab={currentView.replace('company-', '')} />;
    if (currentView.startsWith('help-')) return <HelpPage activeTab={currentView.replace('help-', '')} />;
    if (currentView.startsWith('services-')) return <ServicesPage activeTab={currentView.replace('services-', '')} />;
    if (currentView === 'landing') {
      return <LandingPage onNavigate={setCurrentView} />;
    }

    if (currentView.startsWith('category-')) {
      const categoryId = currentView.replace('category-', '');
      return (
        <>
          <CollectionHero categoryId={categoryId} />
          <ProductGrid categoryId={categoryId} onProductClick={(product) => {
            setSelectedProduct(product);
            setCurrentView('detail');
          }} />
          <CollectionSEOContent />
        </>
      );
    }

    switch (currentView) {
      case 'marketing':
        return (
          <>
            <Hero />
            <FeatureGrid />
            <TechTable />
          </>
        );
      case 'detail':
        return (
          <ProductDetail
            product={selectedProduct}
            onProductClick={(product) => {
              setSelectedProduct(product);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      {/* Main Content Overlay - Reveal Effect */}
      <main
        className="relative z-20 bg-white min-h-screen transition-all duration-0"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        <div className="pt-[140px]">
          {renderView()}
        </div>
      </main>

      {/* Fixed Sticky Footer Area - Reveals as user scrolls to bottom */}
      <div ref={footerRef} className="fixed bottom-0 left-0 right-0 z-10 w-full flex flex-col">
        <Newsletter />
        <Footer onNavigate={setCurrentView} />
      </div>

      {/* WhatsApp & Call Floating Buttons */}
      <div className="fixed bottom-8 left-8 z-[90] flex flex-col space-y-4">
        <button className="bg-[#25D366] text-white p-3.5 rounded-2xl shadow-2xl hover:scale-110 transition-transform">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </button>
        <button className="bg-red-600 text-white p-3.5 rounded-2xl shadow-2xl hover:scale-110 transition-transform">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
