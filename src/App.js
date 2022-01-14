import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/HomePage/HomePage";
import { useState } from "react";
import { AllMovies } from "./components/AllMovies/AllMovies";
import { DetailsMovie } from "./components/DetailsMovie/DetailsMovie";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {

  const [movies, setMovie] = useState([
    {
      id: 1,
      title: "Eternals",
      year: 2011,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      realisateur: "Chloé Zhao (dir.), Gemma Chan, Richard Madden",
      desc: "descirption du film 1",
    },
    {
      id: 2,
      title: "Dune",
      year: 2011,
      image:
        "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
      realisateur:
        "Denis Villeneuve (dir.), Timothée Chalamet, Rebecca Ferguson",
      desc: "descirption du film 2",
    },
  ]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage movies={movies}/>} 
        />
        <Route 
          path="allMovies" 
          element={<AllMovies movies={movies} setMovie={setMovie} />} 
        />
        <Route
          path="addMovie"
          element={<AddMovie movies={movies} setMovie={setMovie} />}
        />
          <Route 
          path="allMovies/detailsMovie/:id" 
          element={<DetailsMovie movies={movies} />}  
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;