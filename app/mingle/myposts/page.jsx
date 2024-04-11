import React from 'react'
import Navbar from "../../components/Navbar";
import Mingle from "../../components/Mingle";
import { getUserPosts } from '../../actions/post';
export default async function myposts() {
const posts = await getUserPosts()
  return (
    <>
      <Navbar />
      <Mingle />
    </>
  );
}


