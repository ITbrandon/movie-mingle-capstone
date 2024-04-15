import React from 'react'
import Navbar from '../../../components/Navbar';
import Mingle from '../../../components/Mingle';
import Footer from '../../../components/Footer';
const page = () => {
  return (
    <>
      <Navbar />
      <Mingle />
      <section className="flex justify-center items-center h-[90vh] font-serif">
        <h1 className="text-orange-600 font-bold text-2xl">
          Your Post Was Successful!
        </h1>
        <h2></h2>
      </section>
      <Footer />
    </>
  );
}

export default page
