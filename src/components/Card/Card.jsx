import React from 'react';
import { assets } from '../../assets/assets'; // Import the assets
import './Card.css'; // Make sure this path is correct

const Card = ({ item, handleClick, isActive, isClicked }) => {
  // Get the image source from the assets
  const imgSrc = assets[item.image];

  // Determine the class for the card based on its state
  const cardClass = `our-work-card ${isActive ? "active" : ""} ${isClicked ? "clicked" : ""}`;

  return (
    <div className={cardClass} onClick={handleClick}>
      <img src={imgSrc} alt={item.title} className={`our-work-item-img ${isClicked ? "clicked-img" : ""}`} />
      <div className="work-details">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default Card;
