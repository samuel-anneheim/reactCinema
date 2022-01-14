import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const CardMovie = (props) => {
  const deleteMovie = (id) => {
    props.setMovie(props.movies.filter((item) => item.id !== id));
  };

  return (
    <div className="cardMovie">
      <img src={props.movie.image} alt="" />
      {props.homePage ? (
        <Link to={`allMovies/detailsMovie/${props.movie.id}`}>{props.movie?.title}</Link>
      ) : (
        <Fragment>
          <Link to={`detailsMovie/${props.movie.id}`}>
            {props.movie?.title}
          </Link>
          <button onClick={(e) => deleteMovie(props.movie.id)}>Delete</button>
        </Fragment>
      )}
    </div>
  );
};
