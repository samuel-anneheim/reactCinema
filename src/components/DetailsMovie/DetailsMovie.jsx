import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import "./DetailsMovie.css"

export const DetailsMovie = (props) => {

    let { id } = useParams();

    let movie = props.movies.find(el => el.id === parseInt(id));
    console.log(movie);

    return(
        <div className='details'>
            <h3>{movie?.title}</h3>
            <img src={movie?.image} alt="" />
            <ul>
                <li>desc: {movie?.desc}</li>
                <li>Realisateur: {movie?.realisateur}</li>
                <li>Année: {movie?.year}</li>
            </ul>
        </div>

    )
}

export default DetailsMovie