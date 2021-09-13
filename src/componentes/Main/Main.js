import React, { Component } from "react";
import Header from "../Header/Header";
import CardPelicula from "../CardPelicula/CardPelicula";
import './Main.css' ;

class Main extends Component{
    constructor(){
        super()
        this.state = {
            peli:[],
            nextURL: ''
        }
    }

    componentDidMount(){

        let url = "https://api.themoviedb.org/3/movie/popular?api_key=c2f0cd4705d9cf0edf12534fc1a19f65";
    
        fetch(url)
        .then(response => response.json())
        .then (data => {
            console.log(data)
            this.setState({
                peli: data.results,
                nextURL: data.page + 1
            })
        })
        .catch(error => console.log(error))
        }

    eliminarTarjeta(id){
        let borrarPelicula = this.state.peli.filter(pelicula => pelicula.id !== id);

        this.setState({
            peli: borrarPelicula
        })
    }

    agregarTarjeta(){
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=c2f0cd4705d9cf0edf12534fc1a19f65&page=" + this.state.nextURL;

        fetch(url)
        .then(response => response.json())
        .then (data => {
            console.log(data)
            this.setState({
                peli: this.state.peli.concat(data.results),
                nextURL: data.page + 1
            })
        })
        .catch(error => console.log(error))
    }



    
    render(){
        return(
            <React.Fragment>
                <Header />
                <button className="pointer" type="button" onClick={()=>this.agregarTarjeta()}>Cargar más tarjetas</button>
                <div>
                {this.state.peli === ""? 
                <h3>Cargando...</h3>:
                <div className="Peliculas">
                {
                    this.state.peli.map((pelicula, idx)=> <CardPelicula key={pelicula.title + idx} dataPelicula={pelicula} borrar = {(id)=>this.eliminarTarjeta(id)}/>)
                }
                </div>
                }
                </div>
            </React.Fragment>
            )
        }
}

export default Main
