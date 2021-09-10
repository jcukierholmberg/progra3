import React, {Component} from 'react';

class CardPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
         
        }
    }

    render(){
        // console.log(this.props);
        return (
            <div className="card-pelicula">
                <h4>{this.props.dataPelicula.title}</h4>
            </div>
        );
    }
}

export default CardPelicula
