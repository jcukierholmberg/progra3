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

export default App;
