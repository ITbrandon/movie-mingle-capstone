import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Library from "../components/Library"
const gallery = () => {
  return (
    <main>
      <Navbar />
      <h1 className="text-orange-600 text-2xl font-bold text-center mt-6 underline">Welcome To Our Cinema Library</h1>
      <Carousel />
      <Library />
    </main>
  );
};

export default gallery;
