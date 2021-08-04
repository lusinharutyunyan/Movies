import React from "react";

export default function FavMovies({
  title,
  id,
  poster_path,
  vote_average,
  overview,
}) {
  const IMG = "https://image.tmdb.org/t/p/w1280";

  return (
    <div
      className=' max-w-full w-64 m-5 relative overflow-hidden bg-gray-900'
      id='parent'>
      <div>
        <img className='max-w-full' src={IMG + poster_path} alt={title}></img>
        <div className=' bg-indigo-900 h-8 flex justify-around text-lg '>
          <h3>{title}</h3>
          <span>{vote_average}</span>
        </div>
      </div>

      <div
        className='absolute max-w-full max-h-full overflow-auto bg-black bg-opacity-75 inset-x-0 bottom-0 p-2 transform translate-y-full text-white'
        id='child'>
        <h2>Overview:</h2>
        <p className=''>{overview}</p>
      </div>
    </div>
  );
}
