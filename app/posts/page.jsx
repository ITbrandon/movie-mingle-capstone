import { createClient } from "../../utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: post } = await supabase.from("post").select();

  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
