import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddMovie.css";

export const AddMovie = (props) => {
  const lastItemMovies = props.movies.slice(-1)[0].id;
  const idUpMovies = parseInt(lastItemMovies) + 1;

  const [movie, setMovie] = useState({
    id: idUpMovies,
    title: "",
    year: 0,
    image: "",
    realisateur: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    props.setMovie([...props.movies, movie]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Titre</label>
        </div>
        <input type="text" name="title" onChange={handleChange} required />
      </div>
      <div>
        <div>
          <label>mini description</label>
        </div>
        <input type="text" name="desc" onChange={handleChange} required />
      </div>
      <div>
        <div>
          <label>Année</label>
        </div>
        <input type="number" name="year" onChange={handleChange} required />
      </div>
      <div>
        <div>
          <label>Lien Image</label>
        </div>
        <input type="text" name="image" onChange={handleChange} required />
      </div>
      <div>
        <div>
          <label>Realisateur</label>
        </div>
        <input type="text" name="realsiateur" onChange={handleChange} required/>
      </div>
      <Link to="/allMovies" onClick={handleSubmit}><button type="submit">Envoyer</button></Link>
    </form>
  );
};

export default AddMovie;
