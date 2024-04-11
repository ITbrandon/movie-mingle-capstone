"use server"

import React from 'react'
import Navbar from "../../components/Navbar";
import Mingle from "../../components/Mingle";
import { getPosts } from '../../actions/post';
export default async function feed(){
const posts = await getPosts();
console.log(posts);
  return (
    <>
      <Navbar />
      <Mingle />
      <section className="flex flex-col items-center gap-4 mt-8">
        {posts.map((post, index) => (
          <>
            <article className="p-4 bg-white text-black h-60 w-[75%]">
              <h1 className="text-center">{post.title}</h1>
              <hr />
              <p>{post.content}</p>
            </article>
          </>
        ))}
      </section>
    </>
  );
}

