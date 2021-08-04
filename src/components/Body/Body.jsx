import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Movies from "../Movies/Movies";
import Header from "../../Header/Header";

const MoviesAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=bb824d9469ebe0cbbacb6182f0dbdc1a&language=en-US&page=1";
const SEARCH =
  "https://api.themoviedb.org/3/movie/popular?api_key=bb824d9469ebe0cbbacb6182f0dbdc1a&language=en-US&page=2";

export default function Body() {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  let history = useHistory();

  useEffect(() => {
    fetch(MoviesAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   fetch(SEARCH + searchVal)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // };
  // const handleChange = (e) => {
  //   setSearchVal(e.target.value);
  // };

  return (
    <>
      <Header />
      <div className='bg-gray-900'>
        <div className='blcok  text-4xl p-4 text-gray-300  ml-20'>POPULAR</div>
        <div className='movies flex justify-center '>
          {movies.length > 0 &&
            movies.map((movie) => <Movies key={movie.id} {...movie} />)}
        </div>
      </div>
    </>
  );
}
