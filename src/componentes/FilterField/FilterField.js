import React, {Component} from "react";
import './FilterField.css' ;

class FilterField extends Component {
    constructor(props){
        super(props);
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
            },
             
        () => this.props.filtro(this.state.filterBy))
        
    }

    render(){
        return(
        <form action="" onSubmit={(m)=>this.evitarSubmit(m)}>
                <input className="input" type="text" onChange={(f)=>this.controlarCambios(f)} value={this.state.filterBy} placeholder="Buscar pelicula"/>
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search buscador" ></i>
                </span>
            </form>
        )
    }
}

export default FilterField