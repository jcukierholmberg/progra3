// import logo from './logo.svg';
import './App.css';
import Pelicula from './componentes/pelicula/Pelicula';

function App() {
  return (
    <div className="App">

      <header className="App-header">
          <h1 className="tituloApp"> Peliculas </h1>
      </header>

      <div> 
         <Pelicula /> 
      </div>
    </div>
  );
}

export default App;
