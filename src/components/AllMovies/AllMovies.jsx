import React from 'react';
import { CardMovie } from './CardMovie';
import "./AllMovies.css"

export const AllMovies = (props) => {
    
    return(
        <div className="containerMovies">
            {props.movies.map(movie => {
                return <CardMovie key={movie.id} movie={movie} movies={props.movies} setMovie={props.setMovie}/>
            })}
        </div>
    )
}