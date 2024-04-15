"use server"

import React from 'react'
import Navbar from "../../components/Navbar";
import Mingle from "../../components/Mingle";
import Footer from "../../components/Footer";
import { getPosts } from '../../actions/post';
export default async function feed(){
const posts = await getPosts();
const getImage = async (imageText) => {
  const imageUrl = `https://api.themoviedb.org/3/search/movie?query=${imageText}&api_key=515c06361867cda878865171c07f1df6`;
  const response = await fetch(imageUrl);
  const data = await response.json();
  const imagePath = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
  return imagePath;
}
const getUsername = (user) => {
const index = user.indexOf("@");
const usernameArray = user.split(""); 
const username = usernameArray.splice(0, index).join("");
return username;
}
  return (
    <>
      <Navbar />
      <Mingle />
      <section className="flex flex-col items-center gap-4 p-8">
        {posts.map(async (post, index) => {
          const image = await getImage(post.image)
          console.log(image)
          return (
            <>
              <article className="p-4 bg-white text-black w-3/4 md:w-1/2 rounded-lg">
                <div className="flex justify-evenly">
                  <div className="w-full p-2">
                    <h1 className="text-center font-bold mb-4">{post.title}</h1>
                    
                    <p className='text-center'>{post.content}</p>
                  </div>
                  <img src={image} alt="image" width={200} height={200} />
                </div>
                <h4 className="text-center font-bold border-t-solid border-t-black border-t-4 mt-4">
                  By: {getUsername(post.user)}
                </h4>
              </article>
            </>
          );})}
      </section>
      <Footer/>
    </>
  );
}

