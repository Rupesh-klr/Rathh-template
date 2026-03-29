import React, { useState } from 'react';

const destinations = [
    {
        id: 1,
        name: 'Kyoto, Japan',
        tripName: 'Classic Japan Discovery',
        days: 12,
        originalPrice: 3850,
        discountedPrice: 3499,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
        alt: 'Kyoto, Japan'
    },
    {
        id: 2,
        name: 'Machu Picchu, Peru',
        tripName: 'Peru Highlights Adventure',
        days: 10,
        originalPrice: 4630,
        discountedPrice: 4399,
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
        alt: 'Machu Picchu, Peru'
    },
    {
        id: 3,
        name: 'Santorini, Greece',
        tripName: 'Greek Islands Explorer',
        days: 8,
        originalPrice: 3200,
        discountedPrice: 2899,
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
        alt: 'Santorini, Greece'
    },
    {
        id: 4,
        name: 'The Serengeti, Tanzania',
        tripName: 'East Africa Highlights',
        days: 10,
        originalPrice: 4630,
        discountedPrice: 4399,
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
        alt: 'The Serengeti, Tanzania'
    },
    {
        id: 5,
        name: 'Rome, Italy',
        tripName: 'Italian Heritage Trail',
        days: 9,
        originalPrice: 3450,
        discountedPrice: 3199,
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
        alt: 'Rome, Italy'
    },
    {
        id: 6,
        name: 'Banff National Park, Canada',
        tripName: 'Canadian Rockies Explorer',
        days: 7,
        originalPrice: 2990,
        discountedPrice: 2699,
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop',
        alt: 'Banff National Park, Canada'
    }
];

const PopularDestinations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
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

                {/* ── Card Container ─────────────────────────────── */}
                <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                    overflow: 'hidden',
                }}>

                    {/* ── Image Section with Carousel ── */}
                    <div style={{ position: 'relative', width: '100%' }}>

                        {/* Image Track */}
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

                            {/* ── Text Overlay on Image ── */}
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

                        {/* ── PREV Button ── */}
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

                        {/* ── NEXT Button ── */}
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

                    {/* ── Trip Details Section (Below Image) ── */}
                    <div style={{
                        padding: 'clamp(18px, 4vw, 28px)',
                        opacity: textVisible ? 1 : 0,
                        transition: 'opacity 0.35s ease-in-out',
                    }}>
                        {/* Duration */}
                        <p style={{
                            margin: '0 0 8px 0',
                            fontSize: 'clamp(0.85rem, 3vw, 0.95rem)',
                            fontWeight: '400',
                            color: '#6b7280',
                            letterSpacing: '0.02em',
                        }}>
                            {current.days} days
                        </p>

                        {/* Trip Name */}
                        <h4 style={{
                            margin: '0 0 20px 0',
                            fontSize: 'clamp(1.15rem, 4.5vw, 1.5rem)',
                            fontWeight: '700',
                            color: '#111827',
                            lineHeight: 1.3,
                        }}>
                            {current.tripName}
                        </h4>

                        {/* Price */}
                        <p style={{
                            margin: 0,
                            fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)',
                            color: '#374151',
                            textAlign: 'center',
                        }}>
                            <span style={{ fontWeight: '400', color: '#6b7280' }}>From </span>
                            <span style={{
                                textDecoration: 'line-through',
                                color: '#9ca3af',
                                fontWeight: '400',
                                marginRight: '6px',
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
    );
};

export default PopularDestinations;
