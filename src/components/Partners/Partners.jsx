// Partners.jsx

import React from 'react';
import './Partners.css';
import { assets } from '../../assets/assets'; // Adjust the import path as needed

const Partners = () => {
    return (
        <div className="partners-container">
            <div className="partner-item">
                <img src={assets.re} alt="Royal Enfield" />
                <p>Collaborating with Royal Enfield on sustainable tourism initiatives.</p>
            </div>
            {/* Add more partner items as needed */}
        </div>
    );
}

export default Partners;
