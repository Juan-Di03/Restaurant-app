import React, { useState } from 'react';
import { restaurantsData } from '../data';
import RestaurantCard from '../UX/RestaurantCard';

const Search = () => {
  const [query, setQuery] = useState('');

  const filteredRestaurants = restaurantsData.filter(restaurant =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Buscar restaurantes</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Busca por nombre"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="row g-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Search;

