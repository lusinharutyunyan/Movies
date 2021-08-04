import React from "react";
import "./Movies.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const IMG = "https://image.tmdb.org/t/p/w1280";

export default function Movies({ title, poster_path, overview, vote_average }) {
  handleFavs =() => {
    
  }
  return (
    <div className='w-64 m-5 relative overflow-hidden	' id='parent'>
      <div>
        <img className='max-w-full' src={IMG + poster_path} alt={title}></img>
        <div className=' bg-red-600 h-8 flex justify-around text-lg '>
          <h3>{title}</h3>
          <span>{vote_average}</span>
        </div>
      </div>

      <div
        className='absolute max-w-full max-h-full overflow-auto bg-black bg-opacity-75 inset-x-0 bottom-0 p-2 transform translate-y-full text-white'
        id='child'>
        <h2>Overview:</h2>
        <p className=''>{overview}</p>
        <button className='group rounded-sm focus:bg-red-700 ' onClick={handleFavs}>
          Add to
          <FavoriteIcon className='group-focus:text-yellow-300 ' />
        </button>
      </div>
    </div>
  );
}