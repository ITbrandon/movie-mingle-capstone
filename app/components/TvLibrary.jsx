"use client";

import React, { useEffect, useState } from "react";

const TvLibrary = () => {
  let storedSearch;
  if (typeof window !== "undefined") {
    storedSearch = localStorage.getItem("SAVE_TV_SEARCH") || "";
  }
  const [searchValue, setSearchValue] = useState(storedSearch);
  const [tvShows, setTvShows] = useState([]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const url = searchValue
    ? `https://api.themoviedb.org/3/search/tv?query=${searchValue}&api_key=515c06361867cda878865171c07f1df6`
    : "https://api.themoviedb.org/3/discover/tv?api_key=515c06361867cda878865171c07f1df6";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((value) => {
      setTvShows(value.results);
    });
    localStorage.setItem("SAVE_TV_SEARCH", searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="p-2 border-2 border-solid border-orange-600 rounded-xl"
          placeholder="search"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      <section className=" text-orange-600 grid grid-cols-4 w-full gap-4 p-4 mt-11">
        {tvShows.map((show, index) => (
          <>
            <a href={`/${show.id}`}>
              <article className="border-6 border-solid border-orange-600 bg-orange-600 flex flex-col items-center justify-evenly rounded-xl hover:opacity-60 duration-300">
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt="posters"
                  className="rounded-t-xl"
                />
                <h3 className="text-white font-bold text-center">
                  {show.original_name}
                </h3>
              </article>
            </a>
          </>
        ))}
      </section>
    </>
  );
};

export default TvLibrary;
