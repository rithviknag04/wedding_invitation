import React, { useEffect } from 'react';

export default function LightboxModal({ photos, activeIndex, onClose, onSelectIndex }) {
  if (activeIndex === null || !photos || !photos[activeIndex]) {
    return null;
  }

  const currentPhoto = photos[activeIndex];
  const total = photos.length;

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + total) % total);
  };

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % total);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, total]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>
        <div className="lightbox-img-area">
          <img src={currentPhoto.src} alt={currentPhoto.title} />
        </div>
        <div className="lightbox-title">{currentPhoto.title}</div>
        <div className="lightbox-counter">
          {currentPhoto.sub} • {activeIndex + 1} of {total}
        </div>
        <div className="lightbox-nav">
          <button className="lightbox-btn" onClick={handlePrev}>
            ‹ Previous
          </button>
          <button className="lightbox-btn" onClick={handleNext}>
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

