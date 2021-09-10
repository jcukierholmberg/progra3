import React, {Component} from 'react'; 
import './Pelicula.css' ;
import CardPelicula from '../cardPelicula/CardPelicula';

class Pelicula extends Component{

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

render(){
    return (
        <React.Fragment>
        <div className="Peliculas">
            {
                this.state.peli.map((pelicula, idx)=> <CardPelicula key={pelicula.title + idx} dataPelicula={pelicula}/>)
            }
        </div>
        </React.Fragment>
        );
    }
}
export default Pelicula ;
