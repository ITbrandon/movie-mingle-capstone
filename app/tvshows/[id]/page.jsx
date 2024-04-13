"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TvCard from "../../components/TvCard";
export default async function page({ params }) {
  return (
    <>
      <Navbar />
      <TvCard params={params} />
      <Footer />
    </>
  );
}
