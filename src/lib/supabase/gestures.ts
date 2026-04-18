import { supabase } from "./client";

export const getGestures = async () => {
  return await supabase.from("gestures").select("*");
};

export const addGesture = async (gesture: string, meaning: string) => {
  return await supabase.from("gestures").insert([
    { gesture, meaning },
  ]);
};

export const deleteGesture = async (id: string) => {
  return await supabase.from("gestures").delete().eq("id", id);
};