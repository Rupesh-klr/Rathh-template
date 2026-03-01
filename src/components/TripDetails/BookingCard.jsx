import React, { useState } from 'react';
import './TripDetails.css';

const BookingCard = ({ price, tripDates, tripName }) => {
    const defaultDates = [
        'Aug 10 - 15, 2024',
        'Sep 05 - 10, 2024',
        'Oct 20 - 25, 2024',
        'Nov 12 - 17, 2024',
    ];

    const dates =
        tripDates && tripDates.length > 0
            ? tripDates.map((d) => `${d.from} – ${d.to}`)
            : defaultDates;

    const [selectedDate, setSelectedDate] = useState(0);

    const pills = ['Small Group', 'Expert Guide', 'Local Experiences'];

    return (
        <div className="booking-card">

            {/* ── 1. Price Row ── */}
            <div className="booking-price-row">
                <span className="booking-price">${price || '1,250'}</span>
                <span className="booking-per-person">per person</span>
            </div>

            {/* ── 2. Available Dates ── */}
            <h4 className="booking-dates-title">Available Dates</h4>
            <div className="booking-dates-grid">
                {dates.map((d, i) => (
                    <button
                        key={i}
                        className={`booking-date-pill ${selectedDate === i ? 'booking-date-pill--active' : ''}`}
                        onClick={() => setSelectedDate(i)}
                    >
                        {d}
                    </button>
                ))}
            </div>

            {/* ── 3. Book Now Button ── */}
            <button className="booking-btn">
                <span className="booking-btn-text">Book Now</span>
            </button>

            {/* ── 4. Feature Pills ── */}
            <div className="booking-pills">
                {pills.map((pill, i) => (
                    <span key={i} className="booking-pill">{pill}</span>
                ))}
            </div>

        </div>
    );
};

export default BookingCard;
