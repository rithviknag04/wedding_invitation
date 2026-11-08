import React from 'react';
import Sparkles from '../components/Sparkles';
import { galleryPhotos } from '../data/weddingData';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section className="pg" id="p-gallery">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <h2>Gallery</h2>
        <p className="note">Tap any photo to view in high definition</p>

        <div className="gallery-grid">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="gallery-card"
              onClick={() => onOpenLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onOpenLightbox(idx);
              }}
            >
              <div className="gallery-img-wrap">
                <img src={photo.src} alt={photo.title} loading="lazy" />
              </div>
              <div className="gallery-card-badge">{photo.title}</div>
            </div>
          ))}
        </div>

        <p className="note" style={{ marginTop: '22px' }}>
          Cherished moments leading to our special day
        </p>
      </div>
    </section>
  );
}

