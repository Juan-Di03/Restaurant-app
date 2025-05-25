import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './UX/NavBar';
import Home from './pages/Home';
import Search from './pages/Search';
import NewRestaurant from './pages/NewRestaurant';
import RestaurantDetail from './UX/RestaurantDetail';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/new-restaurant" element={<NewRestaurant />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </>
  );
}

export default App;

