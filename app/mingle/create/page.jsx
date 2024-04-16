import React from 'react'
import Navbar from '../../components/Navbar';
import Mingle from '../../components/Mingle';
import Footer from "../../components/Footer";
export default async function create() {
  return (
    <>
      <Navbar />
      <Mingle />
      <section className="flex flex-col md:flex-row gap-4 h-screen items-center justify-center p-4">
        <a href="/mingle/create/selectmovie">
          <article
            className="bg-orange-600 p-4 flex flex-col items-center justify-center rounded-xl duration-300 cursor-pointer h-96 w-96 hover:opacity-60 hover:text-white text-orange-600"
            style={{
              backgroundImage:
                "url('https://i.ytimg.com/vi/kv8aFut7MUU/maxresdefault.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-center text-4xl font-bold">
              Create a Movie Post
            </h1>
          </article>
        </a>
        <a href="/mingle/create/selectshow">
          <article
            className="bg-orange-600 p-4 flex flex-col items-center justify-center rounded-xl duration-300 cursor-pointer h-96 w-96 hover:opacity-60 hover:text-white text-orange-600"
            style={{
              backgroundImage:
                "url('https://www.comingsoon.net/wp-content/uploads/sites/3/2022/11/tlou-posters.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-center text-4xl font-bold">
              Create a Tv Show Post
            </h1>
          </article>
        </a>
      </section>
      <Footer />
    </>
  );
}

