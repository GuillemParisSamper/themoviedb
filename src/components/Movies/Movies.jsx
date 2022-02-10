import React from 'react';
import { useParams } from 'react-router-dom';
import './Movies.scss';

const Movies = (props) => {
    const {movieType} = useParams();
    //console.log("test")
    //console.log(`/${movieType}`)
    return <div className="movies">
        Tipo de películas: {movieType}
    </div>
}

export default Movies;