import React from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return(
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="allMovies">Films</Link>
            <Link to="addMovie">Ajouter un film</Link>
        </nav>
    )
}

export default Navbar;
