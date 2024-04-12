import React from "react";
import Navbar from "../../components/Navbar";
import Mingle from "../../components/Mingle";
import Footer from "../../components/Footer";
import { deletePost, getUserPosts, updatePost } from "../../actions/post";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function myposts() {
  const userPosts = await getUserPosts();
  const updatePosts = await updatePost();
  const deletePosts = await deletePost();
 const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  console.log(data.session?.user);
  return (
    <>
      <Navbar />
      <Mingle />
      <section className="flex justify-center items-center h-[90vh] font-serif">
        <h1 className="text-orange-600 font-bold text-2xl">
          You Have No Posts Currently
        </h1>
        <h2></h2>
      </section>
      <Footer />
    </>
  );
}
