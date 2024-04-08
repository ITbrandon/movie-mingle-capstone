import Login from "../components/Login";
import Movie from "../components/Movie";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (data.session?.user) {
    redirect("/");
  }

  return (
    <main className="w-full m-auto">
      <h1 className="text-orange-600 font-bold font-serif text-center mt-10 text-8xl">Movie Mingle</h1>
      <Login />
      <Movie />
    </main>
  );
}
