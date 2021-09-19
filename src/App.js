// import logo from './logo.svg';
import './App.css';
import React from "react";
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';

function App(){
  return(
    <React.Fragment>
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
