import React from "react";

const Movie = ({movie}) => {
    return <div className="movie">
        <h4>{movie.title}</h4>
    </div>
}

export default Movie