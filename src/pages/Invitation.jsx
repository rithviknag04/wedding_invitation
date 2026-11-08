import React, { useState } from 'react';
import Sparkles from '../components/Sparkles';
import { weddingInfo } from '../data/weddingData';

export default function Invitation({ onNavigate }) {
  const [envelopeState, setEnvelopeState] = useState({ open: false, out: false });
  const [confetti, setConfetti] = useState([]);

  // Burst of 30 petals/confetti
  const triggerBurst = () => {
    const petals = [];
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * 6.28;
      const dist = 110 + Math.random() * 170;
      petals.push({
        id: Math.random(),
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist - 70,
        bg: i % 3 ? '#c8942e' : '#e08a9a',
        delay: Math.random() * 0.25
      });
    }
    setConfetti(petals);
    setTimeout(() => setConfetti([]), 2300);
  };

  const handleEnvelopeClick = () => {
    if (envelopeState.open) return;
    setEnvelopeState({ open: true, out: false });

    setTimeout(() => {
      setEnvelopeState({ open: true, out: true });
      triggerBurst();
    }, 750);
  };

  return (
    <section
      className={`pg ${envelopeState.open ? 'open' : ''} ${envelopeState.out ? 'out' : ''}`}
      id="p-home"
      style={{ textAlign: 'center' }}
    >
      {/* Ambient Falling Particles */}
      <Sparkles count={14} spread={21} durationBase={7} />

      <div className="par" id="par">
        <p>With the blessings of</p>
        <small>Parents of {weddingInfo.bride}</small>
        <p className="pn">Mr. [Father’s name] & Mrs. [Mother’s name]</p>
        <small>Parents of {weddingInfo.groom}</small>
        <p className="pn">Mr. [Father’s name] & Mrs. [Mother’s name]</p>
      </div>

      <div className="stage">
        <div className="envwrap">
          <button
            className={`env ${envelopeState.open ? 'open' : ''}`}
            id="ev"
            aria-label="Open the invitation"
            onClick={handleEnvelopeClick}
          >
            <b>P&S</b>
          </button>
          <p className="hint" id="hint">Tap the seal to open your invitation</p>
        </div>

        <div className="paper" id="card">
          <p style={{ '--d': '0.55s' }}>With the blessings of our families</p>
          <h1 style={{ '--d': '0.68s' }}>
            {weddingInfo.bride} <i>and</i> {weddingInfo.groom}
          </h1>
          <p style={{ '--d': '0.81s' }}>invite you to celebrate their wedding</p>
          <hr style={{ '--d': '0.94s' }} />
          <p className="big" style={{ '--d': '1.07s' }}>{weddingInfo.dateFormatted}</p>
          <p style={{ '--d': '1.20s' }}>{weddingInfo.time}</p>
          <p style={{ '--d': '1.33s' }}>{weddingInfo.venue}</p>
          <a
            className="btn btn-wed"
            href="#details"
            style={{ '--d': '1.46s' }}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('details');
            }}
          >
            See all details
          </a>
        </div>

        {/* Confetti Petals */}
        {confetti.map((p) => (
          <span
            key={p.id}
            className="pt"
            style={{
              '--x': `${p.x}px`,
              '--y': `${p.y}px`,
              background: p.bg,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}

