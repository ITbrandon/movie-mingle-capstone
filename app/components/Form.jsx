"use client"

import React, { useState } from "react";
import { createPost } from "../actions/post";
export default function Form({ username }) {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [image, setImage] = useState("");
console.log(username);
const handleSubmit = async(e) => {
  e.preventDefault();
  const postObject = { title, content, image, user:username };
  
  try {
    const response = await createPost(postObject);
    if (response.status === 201) {
      console.log("Post created successfully:", response.data);
      setTitle("");
      setContent("");
      setMovie("");
    } 
    else {
      console.log("Failed to create post:", response.data);
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
  return (
    <div className="p-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-orange-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-orange-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-orange-700 text-sm font-bold mb-2"
            htmlFor="movie"
          >
            Movie Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="movie"
            type="text"
            name="movie"
            placeholder="Optional"
            value={image}
            onChange={(e) => setMovie(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}


