import './App.css';
import freecodecampLogo from './imagenes/freecodecamplogo.svg';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/contador.jsx';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarclic = () => {
    setNumClics(numClics + 1);
    
    console.log('clic');
  };
  
  const reiniciarContador = () => {
    setNumClics(0);
    console.log('reinciar');
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecampLogo} alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador  numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarclic={manejarclic} />
        <Boton texto="Reiniciar" esBotonDeClic={false} manejarclic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
