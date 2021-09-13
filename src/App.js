// import logo from './logo.svg';
import './App.css';
import React from "react";
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import Head from './componentes/Head/Head';

function App(){
  return(
    <React.Fragment>
      <Head />
      <div className="App">
          <Main />
      <footer>
          <Footer />
      </footer>
      </div>
    </React.Fragment>
  )
}





/* function App(){
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
} */

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
