import React, {Component} from 'react'; 
import './Pelicula.css' ;


class Pelicula extends Component{

    constructor(){
        super()
        this.state = {
        }
    }
    
    componentDidMount(){

    let apikey = "?api_key=c2f0cd4705d9cf0edf12534fc1a19f65";
    let url = "https://api.themoviedb.org/3/movie/popular";

    fetch(url + apikey + "&page=3")
    .then(response => response.json())
    .then (data => {
        console.log(data)
        this.setState({
            titulo: data.results.title,
        })
    })
    .catch(error => console.log(error))

}

render(){
    return (
        <div className= "tarjetaPelicula"> 
            
            <h2> imagen </h2>
            <h2 className="tituloPelicula"> Titulo </h2>
            <p> descrpcion de la pelicula</p>

        </div>
    
        );
}

}
export default Pelicula ;
