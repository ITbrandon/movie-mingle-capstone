import React from 'react'
import Navbar from "../../components/Navbar";
import Mingle from "../../components/Mingle";
import { deletePost, getUserPosts, updatePost } from '../../actions/post';
export default async function myposts() {
const userPosts = await getUserPosts();
const updatePosts = await updatePost();
const deletePosts = await deletePost();
  return (
    <>
      <Navbar />
      <Mingle />
    </>
  );
}


