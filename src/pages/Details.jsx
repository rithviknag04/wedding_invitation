import React from 'react';
import Sparkles from '../components/Sparkles';
import { weddingDetails } from '../data/weddingData';

export default function Details() {
  return (
    <section className="pg" id="p-details">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <h2>Wedding details</h2>
        <div className="list-group list-group-flush rows" data-stagger>
          {weddingDetails.map((item, idx) => (
            <div key={idx} className="list-group-item" style={{ animationDelay: item.delay }}>
              <b>{item.label}</b>
              {item.value}
              {item.sub && (
                <>
                  <br />
                  <span className="note">{item.sub}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

