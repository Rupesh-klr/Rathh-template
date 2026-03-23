import React, { useRef, useState } from 'react';

const DynaHeading = ({ searchTerm, setSearchTerm, startDate, setStartDate, endDate, setEndDate, onSearch }) => {

    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    const handleStartPick = () => {
        try { startDateRef.current?.showPicker(); } catch (e) {}
    };
    const handleEndPick = () => {
        try { endDateRef.current?.showPicker(); } catch (e) {}
    };

    return (
        <div className="dyna-heading-wrapper">

            {/* Left Side — always visible */}
            <div className="dyna-heading-left">
                <h1 className="dyna-title">Discover Your Next Adventure</h1>
                <p className="dyna-subtitle">Filter &amp; Sort</p>
            </div>

            {/* ── DESKTOP Right Search Bar (hidden on mobile) ── */}
            <div className="dyna-heading-right dyna-desktop-search">
                <div className="dyna-search-bar">
                    <input
                        type="text"
                        placeholder="Search within results..."
                        className="dyna-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="dyna-date-wrapper">
                        <svg className="dyna-date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {!startDate && <span className="dyna-date-placeholder">Start Date</span>}
                        <input
                            type="date"
                            className={`dyna-date-input ${!startDate ? 'empty' : ''}`}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            onClick={(e) => { try { e.target.showPicker(); } catch (err) {} }}
                        />
                    </div>
                    <div className="dyna-date-wrapper">
                        <svg className="dyna-date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {!endDate && <span className="dyna-date-placeholder">End Date</span>}
                        <input
                            type="date"
                            className={`dyna-date-input ${!endDate ? 'empty' : ''}`}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            onClick={(e) => { try { e.target.showPicker(); } catch (err) {} }}
                        />
                    </div>
                    <button className="dyna-search-btn" onClick={onSearch}>Search</button>
                </div>
            </div>

            {/* ── MOBILE Search Card (shown only on mobile) ── */}
            <div className="dyna-mobile-search-card">

                {/* Destination pill */}
                <div className="dyna-mobile-pill">
                    <span className="dyna-mobile-pill-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="dyna-mobile-pill-input"
                        placeholder="Search destinations"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Combined date pill */}
                <div className="dyna-mobile-pill dyna-mobile-date-pill">
                    <span className="dyna-mobile-pill-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </span>
                    {/* Hidden native pickers */}
                    <input type="date" ref={startDateRef} className="dyna-hidden-date" onChange={e => setStartDate(e.target.value)} />
                    <input type="date" ref={endDateRef} className="dyna-hidden-date" onChange={e => setEndDate(e.target.value)} />
                    {/* Visible combined label */}
                    <div className="dyna-mobile-date-display">
                        <span onClick={handleStartPick} className="dyna-mobile-date-part">
                            {startDate || 'Start date'}
                        </span>
                        <span className="dyna-mobile-date-sep">&nbsp;—&nbsp;</span>
                        <span onClick={handleEndPick} className="dyna-mobile-date-part">
                            {endDate || 'End date'}
                        </span>
                    </div>
                </div>

                {/* Red Search button */}
                <button className="dyna-mobile-search-btn" onClick={onSearch}>
                    Search
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>

            </div>

        </div>
    );
};

export default DynaHeading;
