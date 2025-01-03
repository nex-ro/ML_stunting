import React from 'react';
import '../style/Card.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        
      </div>
    </div>
  );
};

export default Card;