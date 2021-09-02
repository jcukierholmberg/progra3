// import logo from './logo.svg';
import './App.css';

import Pelicula from './componentes/pelicula/Pelicula';
import TopNav from './componentes/header/Nav';

function App() {
  return (
    <div className="App">

      <TopNav />

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
