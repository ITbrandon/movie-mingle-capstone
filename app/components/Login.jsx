"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
      router.refresh();
    }
  };

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
      router.refresh();
    }
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-8 h-screen w-full"
      >
        <form className="flex flex-col gap-4 bg-black p-4 border-2 border-solid border-orange-600 text-white rounded-xl mt-4 w-2/3">
          <h1 className="text-center font-bold">Welcome</h1>
          <label className="grid">
            Email
            <input
              className="p-2 text-white bg-black border-2 border-solid border-orange-600 rounded-lg mt-4"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="grid">
            Password
            <input
              className="p-2 text-white bg-black border-2 border-solid border-orange-600 rounded-lg mt-4 mb-8"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button
            className="bg-orange-600 p-2 rounded-lg duration-300 hover:bg-orange-800"
            type="button"
            onClick={handleSignUp}
          >
            Sign up
          </button>
          <button
            className="bg-orange-600 p-2 rounded-lg duration-300 hover:bg-orange-800"
            type="button"
            onClick={handleSignIn}
          >
            Sign in
          </button>
          {errorMessage && <p className="bg-red-700 p-4">{errorMessage}</p>}
        </form>
        {/* <div className="bg-orange-600 p-2 rounded-md mb-8">
          <p className="text-4xl text-white font-serif text-center">
            Welcome to The Ultimate Movie & Television Social Media Platform
          </p>
        </div> */}
      </div>
    </>
  );
}
