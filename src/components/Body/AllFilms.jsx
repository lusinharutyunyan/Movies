import React, { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import "./AllFilmes.css";
import SearchAppBar from "../Header/Header";

const MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=246b9d72542baa49f1ad478cf180242d&language=en-US&page=1";

export default function AllFilms() {
  const [movies, setMovies] = useState([]);

  function addSearchData(value) {
    setMovies(value);
  }
  useEffect(() => {
    fetch(MOVIES_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <SearchAppBar method={addSearchData} />
      <div className='bg-gray-900'>
        <div className='block  text-4xl p-4 text-gray-300  ml-20'>POPULAR</div>
        <div className='movies flex justify-center '>
          {movies.length > 0 &&
            movies.map((movie) => <Movies key={movie.id} {...movie} />)}
        </div>
      </div>
    </>
  );
}
