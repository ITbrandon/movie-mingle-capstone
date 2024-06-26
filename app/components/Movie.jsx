"use client"

import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=515c06361867cda878865171c07f1df6";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData()
    .then((value) => {
      setMovies(value.results);
    })
  }, [])
  

  return (
    <ul className=" text-orange-600 grid grid-cols-4 w-full">
      {movies.map((movie, index) => (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="posters"
          />
        </>
      ))}
      {/* <h1>{JSON.stringify(movies)}</h1> */}
    </ul>
  ); 
};

export default Movie;
