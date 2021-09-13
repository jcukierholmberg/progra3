// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Pelicula from './componentes/Pelicula/Pelicula';



function App(){
  return(
    <div className="App">
      <header>
          <Header />
      </header>
      <main>
          <button type="button">Cargar más tarjetas</button>
          <section class="card-container">
              
          <Pelicula />
              
          </section>
      </main>
    <footer>
        <Footer />
    </footer>
    </div>
  )
}

{/* function App() {
  return (
      
      <div className="App">

      <Header />

      <div className= "Peliculas"> 
         <Pelicula />
      </div>

      <footer className="footer">
        <h1> Flor aguirre, Joaquin Cukier, Kiara Anderson</h1>
      </footer>
    </div>
  );
}  */}

export default App;
