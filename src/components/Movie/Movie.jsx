import React from "react";
import './Movie.scss'

const Movie = ({movie}) => {
    return <div className="movie">
        <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt={movie.title} />
        <div>{movie.vote_average}</div>
        <h4>{movie.title}</h4>
    </div>
}

export default Movie