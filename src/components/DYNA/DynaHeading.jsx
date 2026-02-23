import React from 'react';

const DynaHeading = ({ searchTerm, setSearchTerm, startDate, setStartDate, endDate, setEndDate, onSearch }) => {
    return (
        <div className="dyna-heading-wrapper">
            {/* Left Side */}
            <div className="dyna-heading-left">
                <h1 className="dyna-title">Discover Your Next Adventure</h1>
                <p className="dyna-subtitle">Filter &amp; Sort</p>
            </div>

            {/* Right Side - Search Bar */}
            <div className="dyna-heading-right">
                <div className="dyna-search-bar">
                    <input
                        type="text"
                        placeholder="Search within results..."
                        className="dyna-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="date"
                        className="dyna-date-input"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="Start Date"
                    />
                    <input
                        type="date"
                        className="dyna-date-input"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="End Date"
                    />
                    <button className="dyna-search-btn" onClick={onSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DynaHeading;
