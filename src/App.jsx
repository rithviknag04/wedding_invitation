import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

// Pages
import Welcome from './pages/Welcome';
import Invitation from './pages/Invitation';
import Story from './pages/Story';
import Details from './pages/Details';
import Gallery from './pages/Gallery';
import Family from './pages/Family';

// Data
import { galleryPhotos } from './data/weddingData';

export default function App() {
  const [page, setPage] = useState('welcome');
  const [activeLightbox, setActiveLightbox] = useState(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1);
      const validPages = ['welcome', 'home', 'story', 'details', 'gallery', 'family'];
      const target = validPages.includes(hash) ? hash : 'welcome';
      setPage(target);
      window.scrollTo(0, 0);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (target) => {
    window.location.hash = target;
  };

  return (
    <>
      <Navbar currentPage={page} onNavigate={navigateTo} />

      <main className="container">
        {page === 'welcome' && <Welcome onNavigate={navigateTo} />}
        {page === 'home' && <Invitation onNavigate={navigateTo} />}
        {page === 'story' && <Story />}
        {page === 'details' && <Details />}
        {page === 'gallery' && <Gallery onOpenLightbox={setActiveLightbox} />}
        {page === 'family' && <Family />}
      </main>

      <Footer />

      <LightboxModal
        photos={galleryPhotos}
        activeIndex={activeLightbox}
        onClose={() => setActiveLightbox(null)}
        onSelectIndex={setActiveLightbox}
      />
    </>
  );
}
