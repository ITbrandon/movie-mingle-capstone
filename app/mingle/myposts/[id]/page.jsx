import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Mingle from "../../../components/Mingle";
import EditForm from "../../../components/EditForm";
export default async function page({ params }) {
  return (
    <>
      <Navbar />
      <Mingle />
      <EditForm params={params} />
      <Footer />
    </>
  );
}
