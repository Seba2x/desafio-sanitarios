'use client'

import { useState } from 'react';

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState('');

  const [productos] = useState([
    { id: 1, nombre: 'Caño de PVC 110mm', precio: 5200 },
    { id: 2, nombre: 'Bomba de Agua 1/2 HP', precio: 45000 },
    { id: 3, nombre: 'Tanque de Agua Tricapa 1000L', precio: 120000 },
    { id: 4, nombre: 'Grifería para Baño Peirano', precio: 68000 },
    { id: 5, nombre: 'Codo PVC 45 grados', precio: 800 },
    { id: 6, nombre: 'Pegamento para PVC 250cc', precio: 3500 },
    { id: 7, nombre: 'Sifón para bacha doble', precio: 12500 },
  ]);

  const productosFiltrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Función para formatear el precio y evitar el error de hidratación
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR').format(precio);
  };

  return (
    <div className="tarjeta">
      {/* EL BUSCADOR CENTRADO */}
      <div className="contenedor-buscador">
        <input 
          type="text" 
          placeholder="🔍 Buscar productos, marcas y más..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="barra-busqueda"
        />
      </div>

      <h2 style={{ marginTop: 0, color: '#1e293b', marginBottom: '20px' }}>Catálogo</h2>

      {/* LA LISTA DE PRODUCTOS */}
      <div className="grilla-productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(prod => (
            <div key={prod.id} className="producto-item">
              <span className="producto-nombre">{prod.nombre}</span>
              <span className="producto-precio">$ {formatearPrecio(prod.precio)}</span>
            </div>
          ))
        ) : (
          <p className="mensaje-vacio">
            No encontramos ningún producto que coincida con "{busqueda}"
          </p>
        )}
      </div>
    </div>
  );
}