import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header/Header";

export default function Info() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const URL = `https://api.themoviedb.org/3/movie/${Number(
    movieId
  )}?api_key=bb824d9469ebe0cbbacb6182f0dbdc1a&language=en-US`;
  const imgUrl =
    "https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.backdrop_path;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [URL]);
  return (
    <div className='bg-gray-900 w-full h-screen text-white'>
      <Header />
      <div className='movie m-2  max-w-full max-h-full'>
        <img src={imgUrl} alt='img' />
        <div className='movie-info'>
          <h1 className='text-2xl'>{movie.original_title} </h1>
          <h2 className='text-lg'>{movie.vote_average}</h2>
          <div className='movie-over'>
            <h3>{movie.overview}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
