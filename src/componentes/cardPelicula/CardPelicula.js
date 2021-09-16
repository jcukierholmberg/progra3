import React, {Component} from 'react';
import './CardPelicula.css' ;

class CardPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: "Ver más",
            cambiar: false,
        }
    }

    cambiar(){
        if(this.state.cambiar){
            this.setState({
                text: "Ver mas",
                cambiar: false,
            })
        }
        else{
            this.setState({
                text: "Ver menos",
                cambiar: true,
            })
        }
    }



    render(){
        return (
            <article className="cards">
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left flecha"></i>
                    <i className="fas fa-chevron-right flecha"></i>
                </div>
                <i class="fas fa-trash trash" onClick = {()=>this.props.borrar(this.props.dataPelicula.id)}></i>
                
            </section>
            <main>
                {/* <div className= {`orientaccion ${this.props.filas ? "cards" : "cambiado"}`}> */}
                <img src= { "https://image.tmdb.org/t/p/w185" + this.props.dataPelicula.poster_path } alt=""/>
                <h3>{this.props.dataPelicula.title}</h3>
                <p className="description">{this.props.dataPelicula.overview}</p>
                <section className= {`extra  ${this.state.cambiar ? "mostrar" : "nomostrar"}`}> 
                    <p> <b>Popularity:</b>  {this.props.dataPelicula.popularity}</p>
                    <p><b>Release date:</b> {this.props.dataPelicula.release_date}</p>
                    <p><b>Language:</b> {this.props.dataPelicula.original_language}</p>
                </section>
                <p className="more" onClick= { ()=>this.cambiar() } > {this.state.text} </p>
                {/* </div> */}
            </main>
            </article>
        );
    }
}

export default CardPelicula
