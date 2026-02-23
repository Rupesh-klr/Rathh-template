import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const destinations = ['Orissa', 'Gujarat', 'Madhya Pradesh', 'Telangana', 'Goa'];

const DynaDestination = ({ selectedDestinations, setSelectedDestinations }) => {
    const handleCheckbox = (dest) => {
        setSelectedDestinations((prev) =>
            prev.includes(dest) ? prev.filter((d) => d !== dest) : [...prev, dest]
        );
    };

    return (
        <div className="dyna-destination-wrapper">
            {/* Left: Destination checkboxes */}
            <div className="dyna-destination-left">
                <div className="dyna-section-header">
                    <FaMapMarkerAlt className="dyna-section-icon" />
                    <h3 className="dyna-section-title">Destination</h3>
                </div>
                <div className="dyna-checkbox-list">
                    {destinations.map((dest) => (
                        <label key={dest} className="dyna-checkbox-item">
                            <input
                                type="checkbox"
                                checked={selectedDestinations.includes(dest)}
                                onChange={() => handleCheckbox(dest)}
                            />
                            <span>{dest}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Right: Map Image */}
            <div className="dyna-destination-right">
                <div className="dyna-map-placeholder">
                    <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="200" rx="12" fill="#f3f4f6" />
                        <path d="M50 150 Q100 50, 150 120 T250 80 T350 100" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                        <circle cx="80" cy="130" r="8" fill="#f59e0b" />
                        <circle cx="150" cy="100" r="8" fill="#f59e0b" />
                        <circle cx="200" cy="90" r="8" fill="#f59e0b" />
                        <circle cx="260" cy="85" r="8" fill="#f59e0b" />
                        <circle cx="330" cy="95" r="8" fill="#f59e0b" />
                        <path d="M76 125 L80 115 L84 125 Z" fill="#f59e0b" />
                        <path d="M146 95 L150 85 L154 95 Z" fill="#f59e0b" />
                        <path d="M196 85 L200 75 L204 85 Z" fill="#f59e0b" />
                        <path d="M256 80 L260 70 L264 80 Z" fill="#f59e0b" />
                        <path d="M326 90 L330 80 L334 90 Z" fill="#f59e0b" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default DynaDestination;
