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
        // console.log(this.props);
        return (
            // <div className="card-pelicula">
            //     <h4>{this.props.dataPelicula.title}</h4>
            // </div>

            <article className="cards">
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-arrow-right"></i>
                </div>
                <i className="far fa-window-close"></i>
            </section>
            <main>
                <img src="./img/image-default.png" alt=""/> 
                <h3>{this.props.dataPelicula.title}</h3>
                <p className="description">{this.props.dataPelicula.overview}</p>
                <section className= {`extra  ${this.state.cambiar ? "mostrar" : "nomostrar"}`}> 
                    <p>{this.props.dataPelicula.popularity}</p>
                    <p>{this.props.dataPelicula.release_date}</p>
                    <p>{this.props.dataPelicula.original_language}</p>
                </section>
                <p className="more" onClick= { ()=>this.cambiar() } > {this.state.text} </p>
            </main>
            </article>



        );
    }
}

export default CardPelicula
