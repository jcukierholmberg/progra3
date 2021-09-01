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

      <footer className="footer">
        <h1> Flor aguirre, Joaquin Cukier, Kiara Anderson</h1>
      </footer>
    </div>
  );
}

export default App;
