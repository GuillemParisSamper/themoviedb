import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie.jsx'
import { useParams } from 'react-router-dom';
import './Search.scss';

const Search = (props) => {
    const {search} = useParams();
    const [movies, setMovies] = useState([]);
    console.log(search)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b5138e06a3a9125b8c326498bbeae997&query=${search}`)
        .then(res => setMovies(res.data.results))
        .catch(console.error)
    },[search])
 
    return <div className="movies">
        {/* Tipo de películas: {movieType} */}
        {movies?.map(movie=><Movie key={movie.id} movie={movie}/>)}
    </div>
}

export default Search;