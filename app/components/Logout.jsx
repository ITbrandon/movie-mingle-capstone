"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Button from './Button'

export default function Logout() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    localStorage.clear();
  };

  return (
    <>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </>
  );
}
