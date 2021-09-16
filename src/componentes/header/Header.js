import React, { Component } from 'react'; 
import FilterField from '../FilterField/FilterField';
import './Header.css' ;
import '../cardPelicula/CardPelicula.css' ;


class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: "Ordenar por columnas",
      cambiar: false
  }
}

  
  render(){
    return (
      <header className="App-header">

          <h1 className="tituloApp"> POPCORN MOVIE</h1> 
    
          <div className="Menu-buttons">
            
            <i class="fas fa-list"></i>
            {/* <i class="fas fa-columns"></i> */}

            <div className="row card-container">
                    <FilterField filtro={(textoAFiltrar)=>this.props.filtro(textoAFiltrar)}/>
            </div>
          </div>
      </header>
    );
  }
  
}


export default Header ;