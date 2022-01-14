import React from "react";
import { CardMovie } from "../AllMovies/CardMovie";

export const HomePage = (props) => {

  const movie = props.movies[Math.floor(Math.random() * props.movies.length)]
  // console.log(randomElement);
  return (
    <div>
      <h1>Cinéma react Js</h1>
      <CardMovie movie={movie} homePage={true}/>
    </div>
  );
};

export default HomePage;
