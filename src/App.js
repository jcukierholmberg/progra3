// import logo from './logo.svg';
import './App.css';

import Pelicula from './componentes/pelicula/Pelicula';
import Header from './componentes/header/Header';

function App() {
  return (
      
      <div className="App">

      <Header />

      <div className= "Peliculas"> 
         <Pelicula /> 
         <Pelicula /> 
         <Pelicula /> 
      </div>

      <footer className="footer">
        <h1> Flor aguirre, Joaquin Cukier, Kiara Anderson</h1>
      </footer>
    </div>
  );
}

export default App;
