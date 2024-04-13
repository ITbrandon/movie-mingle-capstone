"use client"

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
export default async function page({ params }) {

  return (
    <>
      <Navbar />
      <Card params={params} />
      <Footer />
    </>
  );
}


