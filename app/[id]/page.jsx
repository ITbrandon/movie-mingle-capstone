"use client"

import React from "react";
// import { useParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
export default async function page({ params }) {

// const params = useParams();
// const [movies, setMovies] = useState([]);
// const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=515c06361867cda878865171c07f1df6`;

// const getData = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// useEffect(() => {
//   getData().then((value) => {
//     setMovies(value);
//   });
// }, []);

  return (
    <>
      <Navbar />
      <Card params={params} />
      <Footer />
    </>
  );
}


