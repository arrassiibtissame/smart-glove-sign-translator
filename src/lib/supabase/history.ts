import { supabase } from "./client";

// Save translation history
export const saveHistory = async (
  userId: string,
  input: string,
  output: string
) => {
  return await supabase.from("history").insert([
    {
      user_id: userId,
      input,
      output,
    },
  ]);
};