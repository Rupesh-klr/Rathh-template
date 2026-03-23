import React, { useState } from 'react';

const destinations = [
    {
        id: 1,
        name: 'Kyoto, Japan',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
        alt: 'Kyoto, Japan'
    },
    {
        id: 2,
        name: 'Machu Picchu, Peru',
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
        alt: 'Machu Picchu, Peru'
    },
    {
        id: 3,
        name: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
        alt: 'Santorini, Greece'
    },
    {
        id: 4,
        name: 'The Serengeti, Tanzania',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
        alt: 'The Serengeti, Tanzania'
    },
    {
        id: 5,
        name: 'Rome, Italy',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
        alt: 'Rome, Italy'
    },
    {
        id: 6,
        name: 'Banff National Park, Canada',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop',
        alt: 'Banff National Park, Canada'
    }
];

const PopularDestinations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);

    const navigate = (direction) => {
        // Fade out text
        setTextVisible(false);
        setTimeout(() => {
            setCurrentIndex((prev) =>
                direction === 'next'
                    ? (prev + 1) % destinations.length
                    : (prev - 1 + destinations.length) % destinations.length
            );
            // Fade text back in after image starts sliding
            setTimeout(() => setTextVisible(true), 150);
        }, 180);
    };

    return (
        <div style={{ padding: '40px 16px', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '540px', margin: '0 auto', width: '100%' }}>

                {/* Heading */}
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginBottom: '28px',
                    color: '#111827',
                }}>
                    Popular Destinations
                </h2>

                {/* ── Carousel Shell ─────────────────────────────── */}
                {/* position:relative lets buttons anchor here, NOT inside the track */}
                <div style={{ position: 'relative', width: '100%' }}>

                    {/* ── Image Track (overflow hidden = only shows 1 slide) ── */}
                    <div style={{
                        width: '100%',
                        aspectRatio: '4 / 3',
                        overflow: 'hidden',          /* clips all slides except current */
                        borderRadius: '20px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
                        position: 'relative',        /* stacking context for overlay */
                    }}>
                        {/* Sliding strip: all images side-by-side, translated by index */}
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
                                        minWidth: '100%',   /* each slide = full container width */
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
                                            objectFit: 'cover',   /* fills, no awkward crop */
                                            display: 'block',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ── Text Overlay (inside the image, fades in/out) ── */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: 'clamp(14px, 4vw, 24px)',
                            pointerEvents: 'none',  /* don't block button clicks */
                        }}>
                            <h3 style={{
                                margin: 0,
                                color: '#ffffff',
                                fontWeight: '700',
                                fontSize: 'clamp(1.1rem, 4.5vw, 1.75rem)',
                                lineHeight: 1.2,
                                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                opacity: textVisible ? 1 : 0,
                                transition: 'opacity 0.35s ease-in-out',
                            }}>
                                {destinations[currentIndex].name}
                            </h3>
                        </div>
                    </div>

                    {/* ── PREV Button (anchored to shell, never moves) ── */}
                    <button
                        onClick={() => navigate('prev')}
                        aria-label="Previous destination"
                        style={{
                            position: 'absolute',
                            left: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            backgroundColor: '#ffffff',
                            color: '#1f2937',
                            border: 'none',
                            borderRadius: '50%',
                            width: '42px',
                            height: '42px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
                        }}
                    >
                        &#8592;
                    </button>

                    {/* ── NEXT Button (anchored to shell, never moves) ── */}
                    <button
                        onClick={() => navigate('next')}
                        aria-label="Next destination"
                        style={{
                            position: 'absolute',
                            right: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            backgroundColor: '#ffffff',
                            color: '#1f2937',
                            border: 'none',
                            borderRadius: '50%',
                            width: '42px',
                            height: '42px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
                        }}
                    >
                        &#8594;
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PopularDestinations;
