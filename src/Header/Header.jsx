import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function Header() {
  let history = useHistory();
  return (
    <header className='bg-red-700 p-2 flex justify-center text-red-100'>
      <form className='flex  flex-row p-2 '>
        <h1 className='text-3xl font-bold'>
          <Link to='/body' onClick={() => history.push("/body")}>
            DAS AREQ
          </Link>
        </h1>
        <Link className='ml-12 mt-2 text-2x1 font-medium' to='/favorites'>
          Favorites
        </Link>
        <div className='flex flex-row ml-96'>
          {/* <input
              className='w-60 ml-60 '
              type='text'
              placeholder='Search...'
              value={searchVal}
              onChange={handleChange}
            /> */}
          <Link
            to='/login'
            onClick={() => history.push("/login")}
            className='ml-6 mt-2 font-medium'>
            LOG OUT
          </Link>
        </div>
      </form>
    </header>
  );
}
