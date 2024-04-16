import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Mingle from "../../../components/Mingle";
import EditForm from "../../../components/EditForm";
import { getPost } from "../../../actions/post";
export default async function page({ params }) {
  const post = await getPost(params.id);
  return (
    <>
      <Navbar />
      <Mingle />
      <EditForm params={params} post={post}/>
      <Footer />
    </>
  );
}
