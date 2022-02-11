import React from "react";
import './Movie.scss'

const Movie = ({movie}) => {
    return <div className="movie">
        <h4>{movie.title}</h4>
        <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt={movie.title} />
        <p>{movie.vote_average}</p>
    </div>
}

export default Movie