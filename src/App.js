// import logo from './logo.svg';
import './App.css';

import Pelicula from './componentes/pelicula/Pelicula';

function App() {
  return (
    <div className="App">

      <header className="App-header">
          <h1 className="tituloApp"> Nombre de la App </h1>
      </header>

      <div className= "Peliculas"> 
        
         <Pelicula /> 

      </div>
    </div>
  );
}

export default App;
