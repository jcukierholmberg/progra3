import React from 'react'; 
import FilterField from '../FilterField/FilterField';
import './Header.css' ;


function Header() {
    return (
      
        <header className="App-header">

          <h1 className="tituloApp"> Nombre de la App </h1> 
    
          <div className="Menu-buttons">
            
            <button className="Nav-menu"> Ordenar ASC/DESC </button>
            <button className="Nav-menu"> Filas </button>
            <button className="Nav-menu"> Columnas </button>

            <FilterField />
            
            {/* <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                  aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search buscador" ></i>
                </span>
            </div> */}

          </div>
        </header>
    
        );
}


export default Header ;