"use client";

import React, { useEffect, useState } from "react";
const TvCard = ({ params }) => {
  const [tvShows, setTvShows] = useState([]);
  const url = `https://api.themoviedb.org/3/tv/${params.id}?api_key=515c06361867cda878865171c07f1df6`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((value) => {
      setTvShows(value);
    });
  }, []);

  return (
    <>
      <main className="flex flex-col md:flex-row">
        <img
          className="h-screen w-full md:w-1/2 bg-cover bg-center"
          src={`https://image.tmdb.org/t/p/w500${tvShows.backdrop_path}`}
          alt="poster"
        />
        <section className="flex flex-col gap-4 items-center text-white font-bold justify-center font-serif text-center p-8">
          <h1>{tvShows.original_name}</h1>
          <p>{tvShows.overview}</p>
        </section>
      </main>
    </>
  );
};

export default TvCard;
