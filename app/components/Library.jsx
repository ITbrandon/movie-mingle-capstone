"use client"

import React, { useEffect, useState } from "react";

const Library = () => {
  const [searchValue, setSearchValue] = useState(window.localStorage.getItem("SAVE_SEARCH") || "");
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

   const url = searchValue
     ? `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=515c06361867cda878865171c07f1df6`
     : "https://api.themoviedb.org/3/discover/movie?api_key=515c06361867cda878865171c07f1df6";


   const getData = async () => {
     const response = await fetch(url);
     const data = await response.json();
     return data;
   };

   useEffect(() => {
     getData().then((value) => {
       setMovies(value.results);
     });
     window.localStorage.setItem("SAVE_SEARCH", searchValue);
   }, [searchValue]);

  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="input p-2 border-2 border-solid border-orange-600 rounded-xl"
          placeholder="search"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      {/* <span className="error text-black bg-red-600"></span> */}
      <section className=" text-orange-600 grid grid-cols-4 w-full gap-4 p-4 mt-11">
        {movies.map((movie, index) => (
          <>
            <a href={`/${movie.id}`}>
              <article className="border-6 border-solid border-orange-600 bg-orange-600 flex flex-col items-center justify-evenly rounded-xl hover:opacity-60 duration-300">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="posters"
                  className="rounded-t-xl"
                />
                <h3 className="text-white font-bold text-center">
                  {movie.original_title}
                </h3>
              </article>
            </a>
          </>
        ))}
      </section>
    </>
  );
}

export default Library
