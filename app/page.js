import Header from './components/Header';
import Catalogo from './components/Catalogo';
// El botón del desafío ya no lo mostramos acá para limpiar el diseño

export default function Home() {
  return (
    <main className="contenedor-principal">
      <Header />
      
      {/* El catálogo ahora ocupa todo el ancho de la tarjeta */}
      <Catalogo />
      
    </main>
  );
}