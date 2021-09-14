import React, { Component } from "react";
import Header from "../header/Header";
import FilterField from "../FilterField/FilterField";
import CardPelicula from "../cardPelicula/CardPelicula";
import './Main.css' ;

class Main extends Component{
    constructor(){
        super()
        this.state = {
            peli:[],
            nextURL: '',
            peliculasFiltro: [],
            button: "Ordenar por columnas",
            filas: true,
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
                nextURL: data.page + 1,
                peliculasFiltro: data.results
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

    filtro(textoAFiltrar){
        let peliculasFiltradas = this.state.peliculasFiltro.filter( pelicula => pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase()));
    
        this.setState({
            peli: peliculasFiltradas
        })
      }    

      filas(){
        if(this.state.filas){
            this.setState({
                button: "Ordenar por columnas",
                filas: false,
            })
        }
        else{
            this.setState({
                button: "Ordenar por filas",
                filas: true,
            })
        }
      }


    render(){
        return(
            <React.Fragment>
                <Header  filtro={(textoAFiltrar)=>this.filtro(textoAFiltrar)}/>
                
                <div>
                {this.state.peli === ""? 
                <h3>Cargando...</h3>:
                
                <div className= {`peliculas ${this.state.filas ? "Filas" : "Columnas"}`}>

                <div className="boton">
                <button className="Orden" onClick= { ()=>this.filas() } > {this.state.button} </button>
                </div>  

                {
                    this.state.peli.map((pelicula, idx)=> <CardPelicula key={pelicula.title + idx} dataPelicula={pelicula} borrar = {(id)=>this.eliminarTarjeta(id)}/>)
                }
                </div>
                }
                </div>
                <button className="pointer" type="button" onClick={()=>this.agregarTarjeta()}>Cargar más tarjetas</button>

                

            </React.Fragment>
            )
        }
}

export default Main
