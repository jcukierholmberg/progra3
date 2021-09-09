import React from 'react'; 
import './Header.css' ;


function Header() {
    return (
      
        <header className="App-header">

          <h1 className="tituloApp"> Nombre de la App </h1> 
    
          <div className="Menu-buttons">
            
            <button className="Nav-menu"> Ordenar ASC/DESC </button>
            <button className="Nav-menu"> Filas </button>
            <button className="Nav-menu"> Columnas </button>
            
            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                  aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
            </div>

          </div>
        </header>
    
        );
}


export default Header ;