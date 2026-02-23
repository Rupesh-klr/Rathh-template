import React from 'react';
import { FaClock, FaDollarSign, FaCompass } from 'react-icons/fa';

const durationOptions = ['1-7 Days', '8-14 Days', '15+ Days'];
const travelStyleOptions = ['Adventure', 'Cultural', 'Wildlife', 'Relaxation', 'Food & Wine'];

const DynaFilters = ({
    selectedDurations,
    setSelectedDurations,
    priceRange,
    setPriceRange,
    selectedStyles,
    setSelectedStyles,
    onClearAll,
    onApplyFilters,
}) => {
    const handleDuration = (dur) => {
        setSelectedDurations((prev) =>
            prev.includes(dur) ? prev.filter((d) => d !== dur) : [...prev, dur]
        );
    };

    const handleStyle = (style) => {
        setSelectedStyles((prev) =>
            prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
        );
    };

    return (
        <div className="dyna-filters-wrapper">
            {/* Duration */}
            <div className="dyna-filter-section">
                <div className="dyna-section-header">
                    <FaClock className="dyna-section-icon" />
                    <h3 className="dyna-section-title">Duration</h3>
                </div>
                <div className="dyna-checkbox-list">
                    {durationOptions.map((dur) => (
                        <label key={dur} className="dyna-checkbox-item">
                            <input
                                type="checkbox"
                                checked={selectedDurations.includes(dur)}
                                onChange={() => handleDuration(dur)}
                            />
                            <span>{dur}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="dyna-filter-section">
                <div className="dyna-section-header">
                    <FaDollarSign className="dyna-section-icon" />
                    <h3 className="dyna-section-title">Price Range</h3>
                </div>
                <div className="dyna-price-range">
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="dyna-range-slider"
                    />
                    <div className="dyna-price-labels">
                        <span>$0</span>
                        <span>${priceRange.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Travel Style */}
            <div className="dyna-filter-section">
                <div className="dyna-section-header">
                    <FaCompass className="dyna-section-icon" />
                    <h3 className="dyna-section-title">Travel Style</h3>
                </div>
                <div className="dyna-checkbox-list">
                    {travelStyleOptions.map((style) => (
                        <label key={style} className="dyna-checkbox-item">
                            <input
                                type="checkbox"
                                checked={selectedStyles.includes(style)}
                                onChange={() => handleStyle(style)}
                            />
                            <span>{style}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="dyna-filter-buttons">
                <button className="dyna-clear-btn" onClick={onClearAll}>
                    Clear All
                </button>
                <button className="dyna-apply-btn" onClick={onApplyFilters}>
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default DynaFilters;
