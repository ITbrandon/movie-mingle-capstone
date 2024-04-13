import React from "react";
import Navbar from "../components/Navbar";
import TvSlider from "../components/TvSlider";
import TvLibrary from "../components/TvLibrary";
import Footer from "../components/Footer";
const tvShows = () => {
  return (
    <main>
      <Navbar />
      <h1 className="text-orange-600 text-2xl font-bold text-center mt-6 underline">
        Welcome To Our Television Gallery
      </h1>
      <TvSlider />
      <TvLibrary />
      <Footer />
    </main>
  );
};

export default tvShows;
