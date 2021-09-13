import React, { Component } from 'react'; 
import FilterField from '../FilterField/FilterField';
import './Header.css' ;
import '../cardPelicula/CardPelicula.css' ;


class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      text: "Filas",
      cambiar: false
  }
}

cambiar(){
  if(this.state.cambiar){
      this.setState({
          text: "Filas",
          cambiar: false,
      })
  }
  else{
      this.setState({
          text: "Columnas",
          cambiar: true,
      })
  }
}

  
  render(){
    return (
      
      <header className="App-header">

          <h1 className="tituloApp"> POPCORN MOVIE</h1> 
    
          <div className="Menu-buttons">
            
            <button className="more" onClick= { ()=>this.cambiar() } > {this.state.text} </button>
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