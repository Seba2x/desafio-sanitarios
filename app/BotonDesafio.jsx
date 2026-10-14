'use client'

import { useState } from 'react';
import { consultarAPI } from './acciones';

export default function BotonDesafio() {
  const [chiste, setChiste] = useState(null);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  const manejarClick = async () => {
    setCargando(true);
    setError(null);
    setChiste(null);
    
    const resultado = await consultarAPI();

    if (resultado.exito) {
      setChiste(resultado);
    } else {
      setError(resultado.mensaje);
    }
    
    setCargando(false);
  };

  return (
    <div style={{ padding: '20px', border: '2px dashed #ccc', borderRadius: '10px', marginTop: '30px' }}>
      <h2>Prueba de conexión a API externa</h2>
      
      <button 
        onClick={manejarClick} 
        disabled={cargando}
        style={{ padding: '10px 20px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}
      >
        {cargando ? 'Conectando al servidor...' : 'Obtener dato curioso'}
      </button>

      {chiste && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eef', borderRadius: '8px', color: '#000' }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{chiste.pregunta}</p>
          <p style={{ margin: '0', color: '#555' }}>- {chiste.remate}</p>
        </div>
      )}
      
      {error && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fee', borderRadius: '8px' }}>
          <p style={{ margin: '0', color: 'red', fontWeight: 'bold' }}>❌ {error}</p>
        </div>
      )}
    </div>
  );
}