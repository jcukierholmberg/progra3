import React, {Component} from "react";

class FilterField extends Component {
    constructor(){
        super();
        this.state ={
            filterBy:''
        }
    }
    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, () => this.props.filtrarPersonajes(this.state.filterBy))
        
    }

    render(){
        return(
            <form action="" onSubmit={(m)=>this.evitarSubmit(m)}>
                <input type="text" onChange={(f)=>this.controlarCambios(f)} value={this.state.filterBy} placehoder="Filtrar pelicula"/>
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search buscador" ></i>
                </span>
            </form>
        )
    }
}

export default FilterField