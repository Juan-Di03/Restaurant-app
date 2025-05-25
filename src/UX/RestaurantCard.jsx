// src/UX/RestaurantCard.jsx
import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow">
        <img src={restaurant.image || 'https://via.placeholder.com/300x200'} className="card-img-top" alt={restaurant.name} />
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">{restaurant.descrption}</p>
          <p className="card-text"><small className="text-muted">{restaurant.address}</small></p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

