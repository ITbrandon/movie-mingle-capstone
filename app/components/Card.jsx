"use client"

import React, { useEffect, useState } from "react";
const Card = ({ params }) => {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=515c06361867cda878865171c07f1df6`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((value) => {
      setMovies(value);
    });
  }, []);

  return (
    <>
      <main className="flex flex-col md:flex-row">
        <img
          className="h-screen w-full md:w-1/2 bg-cover bg-center"
          src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
          alt="poster"
        />
        <section className="flex flex-col gap-4 items-center text-white font-bold justify-center font-serif text-center p-8">
          <h1>{movies.original_title}</h1>
          <p>{movies.overview}</p>
        </section>
      </main>
    </>
  );
}

export default Card
