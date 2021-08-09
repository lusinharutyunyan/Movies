import React from "react";
import "./Movies.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CancelIcon from "@material-ui/icons/Cancel";
import { useHistory } from "react-router-dom";

export default function Movies({
  title,
  overview,
  vote_average,
  poster_path,
  id,
}) {
  const IMG = "https://image.tmdb.org/t/p/w1280";
  const handleFavs = () => {
    localStorage.setItem(
      "movie",
      JSON.stringify([
        ...JSON.parse(
          localStorage.getItem("movie") ? localStorage.getItem("movie") : "[]"
        ),
        id,
      ])
    );
  };

  let history = useHistory();

  const removeFav = () => {
    localStorage.removeItem("movie");
  };

  const handlePageChange = () => {
    history.push("/info");
  };

  return (
    <div className='w-64 m-5 relative overflow-hidden	' id='parent'>
      <div onClick={handlePageChange}>
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
        <div className='text-center'>
          <button
            className='group rounded-sm  focus:bg-red-700 '
            onClick={handleFavs}>
            <FavoriteIcon />
          </button>
          <button
            className='group rounded-sm focus:bg-red-700'
            onClick={removeFav}>
            <CancelIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
