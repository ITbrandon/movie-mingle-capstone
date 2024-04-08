"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import React, { useEffect } from "react";
// import { prisma } from "../lib/db";
import Navbar from "./components/Navbar";
// import { getUserPosts } from "./actions/post"
import Button from "./components/Button";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (!data.session?.user) {
    redirect("/login");
  }
// const posts = await getUserPosts("7ce5913c-172c-452a-95bc-b5e64479ba57");
// console.log(posts);
  return (
    <main>
      <Navbar />
      <img
        className="w-screen h-screen brightness-50"
        src="https://i.etsystatic.com/35616477/r/il/0d42ca/4497597939/il_794xN.4497597939_fa96.jpg"
        alt="poster"
      ></img>
      <article className="font-serif p-4 w-96 flex flex-col gap-2 items-center justify-center text-center text-white bg-black border-2 border-solid border-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-orange-600 font-bold">WELCOME TO MOVIE MINGLE</h1>
        <h4>Discover the vast world of Cinema or Discuss your favorite movies with other users</h4>
        <section className="flex items-center gap-3">
          <Button>
            <a href="/gallery">Explore</a>
          </Button>
          <Button>
          <a href="/mingle">Socialize</a>
          </Button>
        </section>
      </article>
    </main>
  );
}
