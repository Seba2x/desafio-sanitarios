'use server'

export async function consultarAPI() {
  try {
    const respuesta = await fetch('https://official-joke-api.appspot.com/jokes/programming/random', {
      cache: 'no-store'
    });

    if (!respuesta.ok) {
      throw new Error(`Error del servidor: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    
    return { 
      exito: true, 
      pregunta: datos[0].setup, 
      remate: datos[0].punchline 
    };

  } catch (error) {
    console.error("Error en Server Action:", error);
    return { 
      exito: false, 
      mensaje: "No pudimos conectar con la API. ¡Revisá tu conexión!" 
    };
  }
}