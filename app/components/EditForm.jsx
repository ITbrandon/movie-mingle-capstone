"use client"

import React, { useState } from "react";
import { getPost, updatePost, deletePost } from "../actions/post";
import { useRouter } from "next/navigation";
export default function Form({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const handleEdit = async (e) => {
    e.preventDefault();
    const postObject = {
      title,
      content,
      image
    };

    try {
      const response = await updatePost(params.id, postObject);
      if (response.status === 201) {
        console.log("Edit made successfully:", response.data);
        setTitle("");
        setContent("");
        setMovie("");
      } else {
        console.log("Failed to Edit post:", response.data);
      }
    } catch (error) {
      console.error("Error Editing Post post:", error);
    }
    router.push("/mingle/myposts");
  };

  const handleDelete = async () => {
    try {
      const response = await deletePost(params.id);
      if (response.status === 201) {
        console.log("Delete made successfully:", response.data);
        setTitle("");
        setContent("");
        setMovie("");
      } else {
        console.log("Failed to Delete post:", response.data);
      }
    } catch (error) {
      console.error("Error Deleting Post post:", error);
    }
    router.push("/mingle/myposts");
  }
  return (
    <div className="p-4">
      <form
        onSubmit={handleEdit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
            placeholder="Title"
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
            placeholder="Content"
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
            placeholder="Movie"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
            type="submit"
          >
            Finish Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
            onClick={handleDelete}
          >
            Delete Post
          </button>
        </div>
      </form>
    </div>
  );
}
