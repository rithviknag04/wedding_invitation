import React from 'react';
import Sparkles from '../components/Sparkles';
import { familyDetails } from '../data/weddingData';

export default function Family() {
  return (
    <section className="pg" id="p-family">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <h2>The families</h2>
        <div className="list-group list-group-flush rows" data-stagger>
          {familyDetails.map((item, idx) => (
            <div key={idx} className="list-group-item" style={{ animationDelay: item.delay }}>
              <b>{item.title}</b>
              {item.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

