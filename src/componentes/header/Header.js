import React, { Component } from 'react'; 
import FilterField from '../FilterField/FilterField';
import './Header.css' ;


class Header extends Component {

  constructor(props){
    super(props)


  } 
  
  render(){
    return (
      
      <header className="App-header">

          <h1 className="tituloApp"> Nombre de la App </h1> 
    
          <div className="Menu-buttons">
            
            <button className="Nav-menu"> Ordenar ASC/DESC </button>
            <i class="fas fa-list"></i>
            <i class="fas fa-columns"></i>

            <div className="row card-container">
                    <FilterField filtro={(textoAFiltrar)=>this.props.filtro(textoAFiltrar)}/>
            </div>

          </div>
      </header>
  
      );
  }
  
}


export default Header ;