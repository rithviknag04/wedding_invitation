import React, { useState, useRef } from 'react';
import Sparkles from '../components/Sparkles';
import { initialSwipeCards, weddingInfo } from '../data/weddingData';

export default function Welcome({ onNavigate }) {
  const [cards, setCards] = useState(initialSwipeCards);
  const [topCardStyle, setTopCardStyle] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ isDown: false, startX: 0, currentX: 0 });

  const stackAngles = [0, -4, 3.5, -2.5];

  // Pointer drag events for Photo Stack
  const handlePointerDown = (e) => {
    dragRef.current = {
      isDown: true,
      startX: e.clientX,
      currentX: 0
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDown) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.currentX = dx;
    setTopCardStyle({
      transform: `translateX(${dx}px) rotate(${dx / 18}deg)`
    });
  };

  const handlePointerUp = () => {
    if (!dragRef.current.isDown) return;
    dragRef.current.isDown = false;
    setIsDragging(false);
    const dx = dragRef.current.currentX;

    if (Math.abs(dx) > 70) {
      setTopCardStyle({
        transform: `translateX(${dx > 0 ? 140 : -140}%) rotate(${dx > 0 ? 25 : -25}deg)`,
        opacity: 0,
        transition: 'transform 0.4s ease, opacity 0.4s ease'
      });
      setTimeout(() => {
        setCards((prev) => {
          const next = [...prev];
          next.push(next.shift());
          return next;
        });
        setTopCardStyle({});
      }, 420);
    } else {
      setTopCardStyle({});
    }
  };

  return (
    <section className="pg cv" id="p-welcome">
      {/* Ambient Falling Particles */}
      <Sparkles count={16} spread={19} durationBase={7} />

      <div className="duo">
        {/* Ambient Twinkles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="tw"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 31) % 100}%`,
              fontSize: `${10 + (i % 12)}px`,
              animationDelay: `${(i * 0.4) % 2.4}s`
            }}
          >
            ✦
          </span>
        ))}

        <figure className="ph">
          <div className="img">Bride’s photo</div>
          <figcaption>{weddingInfo.bride}</figcaption>
        </figure>
        <div className="amp">&</div>
        <figure className="ph r">
          <div className="img">Groom’s photo</div>
          <figcaption>{weddingInfo.groom}</figcaption>
        </figure>
      </div>

      <p className="t big" style={{ animationDelay: '1.7s' }}>are getting married</p>
      <p className="t" style={{ animationDelay: '2s' }}>{weddingInfo.dateFormatted}</p>
      <p className="t" style={{ animationDelay: '2.4s' }}>Scroll down</p>

      <section className="tg">
        {/* Rising Hearts */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="ht"
            style={{
              left: `${(i * 27) % 100}%`,
              fontSize: `${12 + (i % 12)}px`,
              animationDuration: `${6 + (i % 5)}s`,
              animationDelay: `${-(i * 1.5)}s`
            }}
          >
            ♥
          </span>
        ))}

        <h2 className="sr">{weddingInfo.tagline}</h2>
        <div className="tgw sr">
          <div
            className="stk"
            id="stk"
            aria-label={`Photos of ${weddingInfo.bride} and ${weddingInfo.groom}. Swipe to see more.`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {cards.map((card, i) => {
              const depth = Math.min(i, 3);
              const defaultTransform = `translateY(${depth * 14}px) scale(${1 - depth * 0.05}) rotate(${stackAngles[depth]}deg)`;
              const style =
                i === 0 && (isDragging || topCardStyle.transform)
                  ? {
                      zIndex: cards.length,
                      opacity: 1,
                      pointerEvents: 'auto',
                      ...topCardStyle
                    }
                  : {
                      zIndex: cards.length - i,
                      opacity: i > 3 ? 0 : 1,
                      transform: defaultTransform,
                      pointerEvents: i === 0 ? 'auto' : 'none'
                    };

              return (
                <div
                  key={card.id}
                  className={`pc ${i === 0 && isDragging ? 'drag' : ''}`}
                  style={style}
                >
                  {card.text}
                </div>
              );
            })}
          </div>
        </div>
        <p className="sr" style={{ fontSize: '.9rem', opacity: 0.8, marginTop: '44px' }}>
          Swipe the photos
        </p>
        <p className="sr big" style={{ marginTop: '24px' }}>
          {weddingInfo.bride} & {weddingInfo.groom}
        </p>
        <p className="sr">{weddingInfo.dateFormatted}</p>
        <a
          className="btn btn-wed sr"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          Open the invitation
        </a>
      </section>
    </section>
  );
}

