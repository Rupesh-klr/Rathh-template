import React, { useState } from 'react';
import DynaHeading from './DynaHeading';
import DynaDestination from './DynaDestination';
import DynaFilters from './DynaFilters';
import DynaCards from './DynaCards';
import './Dyna.css';

const DynaPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDestinations, setSelectedDestinations] = useState([]);
    const [selectedDurations, setSelectedDurations] = useState([]);
    const [priceRange, setPriceRange] = useState(10000);
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [sortBy, setSortBy] = useState('popularity');
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
    const [mobileSortOpen, setMobileSortOpen] = useState(false);

    const handleSearch = () => {
        console.log('Search:', { searchTerm, startDate, endDate });
    };

    const handleSortChange = (sortOption) => {
        console.log('Sort option:', sortOption);
        setSortBy(sortOption);
    };

    const handleClearAll = () => {
        setSelectedDestinations([]);
        setSelectedDurations([]);
        setPriceRange(10000);
        setSelectedStyles([]);
        setSearchTerm('');
        setStartDate('');
        setEndDate('');
    };

    const handleApplyFilters = () => {
        console.log('Filters applied:', {
            selectedDestinations,
            selectedDurations,
            priceRange,
            selectedStyles,
        });
        setMobileFilterOpen(false);
    };

    return (
        <div className="dyna-page">
            {/* Component 1: Heading */}
            <DynaHeading
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                onSearch={handleSearch}
            />

            {/* Mobile Sort | Filter Bar */}
            <div className="dyna-mobile-bar">
                <button className="dyna-mobile-bar-btn" onClick={() => setMobileSortOpen(true)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                        <line x1="10" y1="18" x2="14" y2="18"></line>
                    </svg>
                    Sort
                </button>
                <div className="dyna-mobile-bar-divider" />
                <button className="dyna-mobile-bar-btn" onClick={() => setMobileFilterOpen(true)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                    Filter
                </button>
            </div>

            {/* Mobile Filter Drawer Overlay */}
            {mobileFilterOpen && (
                <div className="dyna-filter-overlay" onClick={() => setMobileFilterOpen(false)}>
                    <div className="dyna-filter-drawer" onClick={(e) => e.stopPropagation()}>
                        <div className="dyna-filter-drawer-header">
                            <span className="dyna-filter-drawer-title">Filters</span>
                            <button className="dyna-filter-drawer-close" onClick={() => setMobileFilterOpen(false)}>✕</button>
                        </div>
                        <div className="dyna-filter-drawer-body">
                            <DynaDestination
                                selectedDestinations={selectedDestinations}
                                setSelectedDestinations={setSelectedDestinations}
                            />
                            <DynaFilters
                                selectedDurations={selectedDurations}
                                setSelectedDurations={setSelectedDurations}
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                                selectedStyles={selectedStyles}
                                setSelectedStyles={setSelectedStyles}
                                onClearAll={handleClearAll}
                                onApplyFilters={handleApplyFilters}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Sort Menu Overlay */}
            {mobileSortOpen && (
                <div className="dyna-filter-overlay" onClick={() => setMobileSortOpen(false)}>
                    <div className="dyna-sort-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="dyna-sort-option" onClick={() => { handleSortChange('popularity'); setMobileSortOpen(false); }}>
                            <span>Popularity</span>
                            <div className={`dyna-sort-radio ${sortBy === 'popularity' ? 'selected' : ''}`}></div>
                        </div>
                        <div className="dyna-sort-option" onClick={() => { handleSortChange('low'); setMobileSortOpen(false); }}>
                            <span>Price: Low to High</span>
                            <div className={`dyna-sort-radio ${sortBy === 'low' ? 'selected' : ''}`}></div>
                        </div>
                        <div className="dyna-sort-option" onClick={() => { handleSortChange('high'); setMobileSortOpen(false); }}>
                            <span>Price: High to Low</span>
                            <div className={`dyna-sort-radio ${sortBy === 'high' ? 'selected' : ''}`}></div>
                        </div>
                        <div className="dyna-sort-option" onClick={() => { handleSortChange('date'); setMobileSortOpen(false); }}>
                            <span>Date</span>
                            <div className={`dyna-sort-radio ${sortBy === 'date' ? 'selected' : ''}`}></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content: Sidebar + Cards */}
            <div className="dyna-main-layout">
                {/* Left Sidebar (hidden on mobile) */}
                <aside className="dyna-sidebar">
                    {/* Component 2: Destination */}
                    <DynaDestination
                        selectedDestinations={selectedDestinations}
                        setSelectedDestinations={setSelectedDestinations}
                    />

                    {/* Component 3: Filters */}
                    <DynaFilters
                        selectedDurations={selectedDurations}
                        setSelectedDurations={setSelectedDurations}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        selectedStyles={selectedStyles}
                        setSelectedStyles={setSelectedStyles}
                        onClearAll={handleClearAll}
                        onApplyFilters={handleApplyFilters}
                    />
                </aside>

                {/* Right: Cards Grid */}
                <main className="dyna-content">
                    <DynaCards sortBy={sortBy} handleSortChange={handleSortChange} />
                </main>
            </div>
        </div>
    );
};

export default DynaPage;
