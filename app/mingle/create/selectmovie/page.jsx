import React from "react";
import Navbar from '../../../components/Navbar';
import Mingle from '../../../components/Mingle';
import Form from '../../../components/Form';
import Footer from '../../../components/Footer';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function formPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const username = data.session?.user.email;
  return (
    <>
      <Navbar />
      <Mingle />
      <Form username={username} />
      <Footer />
    </>
  );
}


