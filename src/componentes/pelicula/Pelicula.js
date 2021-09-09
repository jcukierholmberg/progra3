import React from 'react'; 
import './Pelicula.css' ;

function Pelicula() {
    let apikey = "api_key=c2f0cd4705d9cf0edf12534fc1a19f65";
    let url = "https://developers.themoviedb.org/3/movies/get-popular-movies";

    fetch(url + apikey)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
        //que hago
    })
    .catch(function(error){
        console.log(error);
    })

    return (
        <div className= "tarjetaPelicula"> 
            
            <h2> imagen </h2>
            <h2 className="tituloPelicula"> Titulo de la pelicula </h2>
            <p> descrpcion de la pelicula</p>

        </div>
    
        );
}
export default Pelicula ;
