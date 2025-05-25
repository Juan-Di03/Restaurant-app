import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurantsData } from '../data';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const storedRestaurants = JSON.parse(localStorage.getItem('restaurantes')) || [];
    setRestaurants([...restaurantsData, ...storedRestaurants]);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Restaurantes destacados</h2>
      <div className="row">
        {restaurants.map((restaurant, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              {restaurant.image && (
                <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
              )}
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.description}</p>
                <Link to={restaurant.link} className="btn btn-warning">
                  Ver Restaurante
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

