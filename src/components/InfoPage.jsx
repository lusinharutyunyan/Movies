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
   
    <div className='bg-gray-900 h-screen'>
      <Header />
      <div class='container mx-auto py-12 px-4 bg-gray-900 flex justify-center mt-16'>
        <div class='inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-white rounded-lg border shadow-lg pb-6 lg:pb-0'>
          <div class='w-full lg:w-1/3 lg:p-4'>
            <img
              src={imgUrl}
              alt='movie'
              class='h-64 lg:h-full object-cover object-center w-full'
            />
          </div>

          <div class='w-full lg:w-2/3 p-4'>
            <div class='inline-grid'>
              <p class='work-sans font-semibold text-xl text-black'>
                {movie.original_title}
              </p>
              <p class='raleway text-sm my-4 text-black opacity-75'>
               Rating : {movie.vote_average}
              </p>
              <p className='text-black'>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
