import React from "react";
import Navbar from "../../../components/Navbar";
import Mingle from "../../../components/Mingle";
import TvForm from "../../../components/TvForm";
import Footer from "../../../components/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function formPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const username = data.session?.user.email;
  const userId = data.session?.user.id;
  return (
    <>
      <Navbar />
      <Mingle />
      <h1 className="text-orange-600 font-bold text-3xl text-center mt-8"></h1>
      <TvForm username={username} userId={userId} />
      <Footer />
    </>
  );
}
