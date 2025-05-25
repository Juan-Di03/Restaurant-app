import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRestaurant = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [direccion, setDireccion] = useState('');
  const [imagen, setImagen] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si no hay URL, la generamos automáticamente con el nombre
    const slug = url.trim() !== '' 
      ? url.trim().toLowerCase().replace(/\s+/g, '-') 
      : nombre.toLowerCase().replace(/\s+/g, '-');

    const nuevoRestaurante = {
      name: nombre,
      description: descripcion,
      address: direccion,
      image: imagen,
      link: `/restaurant/${slug}`
    };

    const restaurantesExistentes = JSON.parse(localStorage.getItem('restaurantes')) || [];
    restaurantesExistentes.push(nuevoRestaurante);
    localStorage.setItem('restaurantes', JSON.stringify(restaurantesExistentes));

    navigate(nuevoRestaurante.link);
  };

  return (
    <div className="container mt-5">
      <h2>Agregar Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input 
            type="text" 
            className="form-control" 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input 
            type="text" 
            className="form-control" 
            value={direccion} 
            onChange={(e) => setDireccion(e.target.value)} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL personalizada para el restaurante (opcional)</label>
          <input 
            type="text" 
            className="form-control" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="Ejemplo: restaurante-ejemplo" 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL de la imagen</label>
          <input 
            type="text" 
            className="form-control" 
            value={imagen} 
            onChange={(e) => setImagen(e.target.value)} 
            placeholder="https://ejemplo.com/imagen.jpg" 
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
  );
};

export default NewRestaurant;




