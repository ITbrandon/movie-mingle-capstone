import React from "react";
import Navbar from "../../components/Navbar";
import Mingle from "../../components/Mingle";
import Footer from "../../components/Footer";
import { getUserPosts } from "../../actions/post";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function myposts() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  const userPosts = await getUserPosts(data.session?.user.id);

  const getImage = async (imageText) => {
    const imageUrl = `https://api.themoviedb.org/3/search/movie?query=${imageText}&api_key=515c06361867cda878865171c07f1df6`;
    const response = await fetch(imageUrl);
    const data = await response.json();
    const imagePath = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
    return imagePath;
  };

  return (
    <>
      <Navbar />
      <Mingle />
      <section className="flex flex-col items-center gap-4 p-8">
        {userPosts.map(async (post, index) => {
          const image = await getImage(post.image);
          return (
            <>
              <article className="p-4 bg-white text-black w-3/4 md:w-1/2 rounded-lg">
                <div className="flex justify-evenly">
                  <div className="w-full p-2">
                    <h1 className="text-center font-bold mb-4">{post.title}</h1>

                    <p className="text-center">{post.content}</p>
                  </div>
                  <img src={image} alt="image" width={200} height={200} />
                </div>
                <div className="flex items-center gap-4 ">
                  <a href={`/mingle/myposts/${post.id}`}>
                    <button className="p-2 border-2 border-solid border-orange-600 bg-white text-orange-600 rounded-xl duration-300 hover:bg-orange-600 hover:text-white">
                      Edit
                    </button>
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
