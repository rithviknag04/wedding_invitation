import React from 'react';
import Sparkles from '../components/Sparkles';
import { storyMilestones } from '../data/weddingData';

export default function Story() {
  return (
    <section className="pg" id="p-story">
      <Sparkles count={8} spread={29} durationBase={6} />
      <div className="paper">
        <h2>Our story</h2>
        <p className="note">Replace these lines with your sister’s own words.</p>
        <ol className="tl" data-stagger>
          {storyMilestones.map((item, idx) => (
            <li key={idx} style={{ animationDelay: item.delay }}>
              <h3>{item.year} · {item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

