import React, { useState, useRef } from 'react';

const destinations = [
    {
        id: 1,
        name: 'Kyoto, Japan',
        tripName: 'Classic Japan Discovery',
        days: 12,
        originalPrice: 3850,
        discountedPrice: 3499,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
        alt: 'Kyoto, Japan',
    },
    {
        id: 2,
        name: 'Machu Picchu, Peru',
        tripName: 'Peru Highlights Adventure',
        days: 10,
        originalPrice: 4630,
        discountedPrice: 4399,
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
        alt: 'Machu Picchu, Peru',
    },
    {
        id: 3,
        name: 'Santorini, Greece',
        tripName: 'Greek Islands Explorer',
        days: 8,
        originalPrice: 3200,
        discountedPrice: 2899,
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
        alt: 'Santorini, Greece',
    },
    {
        id: 4,
        name: 'The Serengeti, Tanzania',
        tripName: 'East Africa Highlights',
        days: 10,
        originalPrice: 4630,
        discountedPrice: 4399,
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
        alt: 'The Serengeti, Tanzania',
    },
    {
        id: 5,
        name: 'Rome, Italy',
        tripName: 'Italian Heritage Trail',
        days: 9,
        originalPrice: 3450,
        discountedPrice: 3199,
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
        alt: 'Rome, Italy',
    },
    {
        id: 6,
        name: 'Banff National Park, Canada',
        tripName: 'Canadian Rockies Explorer',
        days: 7,
        originalPrice: 2990,
        discountedPrice: 2699,
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop',
        alt: 'Banff National Park, Canada',
    },
];

/* ─── Scoped CSS injected once into <head> ─────────────────────────────────── */
const STYLES = `
  /* ── Visibility toggle ── */
  .pd-mobile-carousel { display: block; }
  .pd-desktop-scroll  { display: none;  }

  @media (min-width: 768px) {
    .pd-mobile-carousel { display: none;  }
    .pd-desktop-scroll  { display: flex; }
  }

  /* ── Horizontal scroll row (desktop only) ── */
  .pd-desktop-scroll {
    flex-direction: row;
    gap: 24px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 8px 4px 20px;
    /* hide scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .pd-desktop-scroll::-webkit-scrollbar { display: none; }

  /* ── Card ── */
  .pd-card {
    flex: 0 0 300px;
    scroll-snap-align: start;
    border-radius: 20px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(0,0,0,0.09);
    cursor: pointer;
    position: relative;
    transition: transform 0.32s cubic-bezier(.25,.8,.25,1),
                box-shadow  0.32s cubic-bezier(.25,.8,.25,1);
  }
  .pd-card:hover {
    transform: translateY(-4px) scale(1.025);
    box-shadow: 0 18px 48px rgba(0,0,0,0.18);
  }

  /* Image wrapper */
  .pd-card-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
  }
  .pd-card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  .pd-card:hover .pd-card-img-wrap img {
    transform: scale(1.07);
  }

  /* Gradient overlay */
  .pd-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top,
      rgba(0,0,0,0.58) 0%,
      rgba(0,0,0,0.12) 50%,
      transparent 100%);
    display: flex;
    align-items: flex-end;
    padding: 18px;
    pointer-events: none;
  }
  .pd-card-overlay h3 {
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 1.15rem;
    line-height: 1.25;
    text-shadow: 0 2px 8px rgba(0,0,0,0.45);
  }

  /* Duration badge */
  .pd-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(255,255,255,0.92);
    color: #374151;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 999px;
    letter-spacing: 0.03em;
    box-shadow: 0 2px 8px rgba(0,0,0,0.14);
    backdrop-filter: blur(4px);
  }

  /* Card body */
  .pd-card-body   { padding: 16px 18px 18px; }
  .pd-card-days   {
    margin: 0 0 4px;
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .pd-card-trip   {
    margin: 0 0 14px;
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
    line-height: 1.35;
  }
  .pd-card-price  {
    margin: 0;
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    gap: 6px;
    flex-wrap: wrap;
    font-size: 0.88rem;
  }
  .pd-price-label    { color: #9ca3af; }
  .pd-price-original { text-decoration: line-through; color: #9ca3af; }
  .pd-price-final    { font-weight: 700; color: #111827; font-size: 1.05rem; }

  /* ── Desktop scroll wrapper & arrow buttons ── */
  .pd-desktop-wrap {
    position: relative;
  }
  .pd-scroll-btn {
    display: none;
  }
  @media (min-width: 768px) {
    .pd-scroll-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-60%);
      z-index: 10;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: none;
      background: #ffffff;
      color: #1f2937;
      font-size: 22px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 18px rgba(0,0,0,0.20);
      transition: background 0.22s, transform 0.22s, box-shadow 0.22s;
    }
    .pd-scroll-btn:hover {
      background: #f3f4f6;
      box-shadow: 0 8px 28px rgba(0,0,0,0.28);
      transform: translateY(-60%) scale(1.08);
    }
    .pd-scroll-btn:active {
      transform: translateY(-60%) scale(0.96);
    }
    .pd-scroll-btn-left  { left:  0px; }
    .pd-scroll-btn-right { right: 0px; }
  }
`;

let stylesInjected = false;
function injectStyles() {
    if (!stylesInjected && typeof document !== 'undefined') {
        const tag = document.createElement('style');
        tag.textContent = STYLES;
        document.head.appendChild(tag);
        stylesInjected = true;
    }
}

/* ─── Reusable desktop card ────────────────────────────────────────────────── */
const DestinationCard = ({ dest }) => (
    <div className="pd-card">
        <div className="pd-card-img-wrap">
            <img src={dest.image} alt={dest.alt} />
            <div className="pd-card-overlay">
                <h3>{dest.name}</h3>
            </div>
            <span className="pd-badge">{dest.days} Days</span>
        </div>
        <div className="pd-card-body">
            <p className="pd-card-days">{dest.days} Day Trip</p>
            <h4 className="pd-card-trip">{dest.tripName}</h4>
            <p className="pd-card-price">
                <span className="pd-price-label">From</span>
                <span className="pd-price-original">USD ${dest.originalPrice.toLocaleString()}</span>
                <span className="pd-price-final">USD ${dest.discountedPrice.toLocaleString()}</span>
            </p>
        </div>
    </div>
);

/* ─── Main component ───────────────────────────────────────────────────────── */
const PopularDestinations = () => {
    injectStyles();

    const [currentIndex, setCurrentIndex] = useState(0);
    const desktopScrollRef = useRef(null);

    const scrollDesktop = (dir) => {
        if (!desktopScrollRef.current) return;
        desktopScrollRef.current.scrollBy({
            left: dir === 'next' ? 324 : -324,
            behavior: 'smooth',
        });
    };
    const [textVisible, setTextVisible] = useState(true);

    const navigate = (direction) => {
        setTextVisible(false);
        setTimeout(() => {
            setCurrentIndex((prev) =>
                direction === 'next'
                    ? (prev + 1) % destinations.length
                    : (prev - 1 + destinations.length) % destinations.length
            );
            setTimeout(() => setTextVisible(true), 150);
        }, 180);
    };

    const current = destinations[currentIndex];

    return (
        <div style={{ padding: '48px 24px', backgroundColor: '#ffffff' }}>

            {/* ── Section heading ── */}
            <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '36px',
                color: '#111827',
            }}>
                Popular Destinations
            </h2>

            {/* ══════════════════════════════════════════════════════════
                DESKTOP — horizontally scrollable card row with arrows
            ══════════════════════════════════════════════════════════ */}
            <div className="pd-desktop-wrap">
                {/* Left arrow */}
                <button
                    className="pd-scroll-btn pd-scroll-btn-left"
                    onClick={() => scrollDesktop('prev')}
                    aria-label="Scroll destinations left"
                >
                    &#8592;
                </button>

                <div className="pd-desktop-scroll" ref={desktopScrollRef}>
                    {destinations.map((dest) => (
                        <DestinationCard key={dest.id} dest={dest} />
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    className="pd-scroll-btn pd-scroll-btn-right"
                    onClick={() => scrollDesktop('next')}
                    aria-label="Scroll destinations right"
                >
                    &#8594;
                </button>
            </div>

            {/* ══════════════════════════════════════════════════════════
                MOBILE  — original single-card carousel (unchanged)
            ══════════════════════════════════════════════════════════ */}
            <div className="pd-mobile-carousel">
                <div style={{ maxWidth: '540px', margin: '0 auto', width: '100%' }}>
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                        overflow: 'hidden',
                    }}>
                        {/* Image + controls */}
                        <div style={{ position: 'relative', width: '100%' }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '4 / 3',
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                {/* Sliding strip */}
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%',
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    transition: 'transform 0.5s ease-in-out',
                                }}>
                                    {destinations.map((dest) => (
                                        <div
                                            key={dest.id}
                                            style={{
                                                minWidth: '100%',
                                                width: '100%',
                                                height: '100%',
                                                flexShrink: 0,
                                                position: 'relative',
                                            }}
                                        >
                                            <img
                                                src={dest.image}
                                                alt={dest.alt}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Text overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 50%, transparent 100%)',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: 'clamp(16px, 4vw, 28px)',
                                    pointerEvents: 'none',
                                }}>
                                    <h3 style={{
                                        margin: 0,
                                        color: '#ffffff',
                                        fontWeight: '700',
                                        fontSize: 'clamp(1.2rem, 5vw, 1.85rem)',
                                        lineHeight: 1.25,
                                        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                        opacity: textVisible ? 1 : 0,
                                        transition: 'opacity 0.35s ease-in-out',
                                    }}>
                                        {current.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Prev */}
                            <button
                                onClick={() => navigate('prev')}
                                aria-label="Previous destination"
                                style={{
                                    position: 'absolute', left: '14px', top: '50%',
                                    transform: 'translateY(-50%)', zIndex: 20,
                                    backgroundColor: '#ffffff', color: '#1f2937',
                                    border: 'none', borderRadius: '50%',
                                    width: '42px', height: '42px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '20px', fontWeight: '700', cursor: 'pointer',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
                                }}
                            >
                                &#8592;
                            </button>

                            {/* Next */}
                            <button
                                onClick={() => navigate('next')}
                                aria-label="Next destination"
                                style={{
                                    position: 'absolute', right: '14px', top: '50%',
                                    transform: 'translateY(-50%)', zIndex: 20,
                                    backgroundColor: '#ffffff', color: '#1f2937',
                                    border: 'none', borderRadius: '50%',
                                    width: '42px', height: '42px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '20px', fontWeight: '700', cursor: 'pointer',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
                                }}
                            >
                                &#8594;
                            </button>
                        </div>

                        {/* Trip details */}
                        <div style={{
                            padding: 'clamp(18px, 4vw, 28px)',
                            opacity: textVisible ? 1 : 0,
                            transition: 'opacity 0.35s ease-in-out',
                        }}>
                            <p style={{
                                margin: '0 0 8px 0',
                                fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
                                fontWeight: '400',
                                color: '#6b7280',
                                letterSpacing: '0.02em',
                            }}>
                                {current.days} days
                            </p>
                            <h4 style={{
                                margin: '0 0 20px 0',
                                fontSize: 'clamp(1.15rem, 4.5vw, 1.5rem)',
                                fontWeight: '700',
                                color: '#111827',
                                lineHeight: 1.3,
                            }}>
                                {current.tripName}
                            </h4>
                            <p style={{
                                margin: 0,
                                fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)',
                                color: '#374151',
                                textAlign: 'right',
                            }}>
                                <span style={{ fontWeight: '400', color: '#6b7280' }}>From </span>
                                <span style={{
                                    textDecoration: 'line-through',
                                    color: '#9ca3af',
                                    fontWeight: '400',
                                    marginRight: '2px',
                                }}>
                                    USD ${current.originalPrice.toLocaleString()}
                                </span>
                                <span style={{
                                    fontWeight: '700',
                                    color: '#111827',
                                    fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                                }}>
                                    USD ${current.discountedPrice.toLocaleString()}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularDestinations;
