import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
    const [startDates, setStartDates] = useState('');
    const [endDates, setEndDates] = useState('');
    const [destination, setDestination] = useState('');

    const handleDateClick = (ref) => {
        if (ref.current) {
            ref.current.showPicker();
        }
    };

    const showdetails = () => {
        console.log(startDates, endDates, destination);
    };

    return (
        <div className="hero-container">

            {/* Video Background Section */}
            <div className="hero-video-wrapper">
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-content text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
                    <h1>Your Journey to <br className="hero-desktop-br" />Unforgettable Experiences <br className="hero-desktop-br" />Starts Here</h1>
                </div>
            </div>

            {/* ── Search Bar ── */}
            <div className="search-bar-container hero-desktop-search">
                <div className="search-inputs-wrapper">

                    <div className="search-input-group destination-group">
                        <span className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </span>
                        <input type="text" placeholder="Search destinations"
                            onChange={e => setDestination(e.target.value)} value={destination} />
                    </div>

                    <div className="dates-container">
                        <div className="search-input-group date-group" onClick={() => handleDateClick(startDateRef)}>
                            <span className="search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </span>
                            <input type="date" ref={startDateRef} className="date-input" onChange={e => setStartDates(e.target.value)} />
                            {startDates ? <span className="date-placeholder">{startDates}</span> : <span className="date-placeholder">Start Date</span>}
                        </div>

                        <div className="search-input-group date-group" onClick={() => handleDateClick(endDateRef)}>
                            <span className="search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </span>
                            <input type="date" ref={endDateRef} className="date-input" onChange={e => setEndDates(e.target.value)} />
                            {endDates ? <span className="date-placeholder">{endDates}</span> : <span className="date-placeholder">End Date</span>}
                        </div>
                    </div>

                    <div className="search-btn-container w-full md:w-auto md:ml-7">
                        <button className="search-btn" onClick={showdetails}>
                            <span className="search-icon-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            Search
                        </button>
                    </div>

                </div>
            </div>

            {/* ── MOBILE Search Card (shown only on mobile) ── */}
            <div className="hero-mobile-search-card">
                {/* Destination pill */}
                <div className="hero-mobile-pill">
                    <span className="hero-mobile-pill-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="hero-mobile-pill-input"
                        placeholder="Search destinations"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>

                {/* Combined date pill */}
                <div className="hero-mobile-pill hero-mobile-date-pill">
                    <span className="hero-mobile-pill-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </span>
                    <input type="date" ref={startDateRef} className="hero-hidden-date" onChange={e => setStartDates(e.target.value)} />
                    <input type="date" ref={endDateRef} className="hero-hidden-date" onChange={e => setEndDates(e.target.value)} />
                    <div className="hero-mobile-date-display">
                        <span onClick={() => handleDateClick(startDateRef)} className="hero-mobile-date-part">
                            {startDates || 'Start date'}
                        </span>
                        <span className="hero-mobile-date-sep">&nbsp;—&nbsp;</span>
                        <span onClick={() => handleDateClick(endDateRef)} className="hero-mobile-date-part">
                            {endDates || 'End date'}
                        </span>
                    </div>
                </div>

                {/* Red Search button */}
                <button className="hero-mobile-search-btn" onClick={showdetails}>
                    Search
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>



            <div className="cta-container">
                <Link to="/dyna">
                    <button className="discover-btn">Discover experiences</button>
                </Link>
            </div>

        </div>
    );
};

export default HeroSection;
