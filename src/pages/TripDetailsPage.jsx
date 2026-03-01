import React from 'react';
import Navbar from '../components/Navbar';
import TripDetails from '../components/TripDetails/TripDetails';
import Footer from '../components/Footer';

/**
 * TripDetails Page
 * 
 * Pass real backend data via `tripData` prop.
 * All sub-components fall back gracefully to sample data if props are empty.
 */
const TripDetailsPage = ({ tripData }) => {
    return (
        <>
            <Navbar />
            <TripDetails tripData={tripData} />
            <Footer />
        </>
    );
};

export default TripDetailsPage;
