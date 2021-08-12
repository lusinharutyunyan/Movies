import Header from "../Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import FavMovies from "./FavMovies";

export default function Favorites() {
  const [movie, setMovie] = useState([]);
  const favorite = JSON.parse(localStorage.getItem("movie"));

  const get = (index = 0, myData = []) => {
    const data = fetch(
      "https://api.themoviedb.org/3/movie/" +
        favorite[index] +
        "?api_key=f53e6b2f16ed0b466ebc6de372262155"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie([...myData, data]);

        if (index + 1 < favorite.length) {
          get(index + 1, [...myData, data]);
        }
      });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className='bg-gray-900 h-screen '>
      <Header />
      <div className='movies flex justify-center bg-gray-900 '>
        {movie.length &&
          movie.map((movie) => <FavMovies key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}
