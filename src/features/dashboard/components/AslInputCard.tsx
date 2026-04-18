import {supabase} from "@/lib/supabase/client";
export function AslInputCard({setTranslation}:any){
  const handleGesture =async (gesture: string) =>{
    // get meaning from supabase 
    const {data} =await supabase
    .from ("gestures")
    .select("meaning")
    .eq("gesture",gesture)
    .single();
    const meaning = data?.meaning || "Unknown";
    //send to dashboard state
    setTranslation(meaning);
    // save history
    const {data: user}=await supabase.auth.getUser();
    if (user.user){
      await supabase.from("history").insert([
        {
          user_id:user.user.id,
          input : gesture,
          output:meaning,
        },
      ]);
    }
  };
  return (
    <div>
      <h2>ASL Input</h2>
      <button onClick={() => handleGesture("✋")}>Test Gesture ✋</button>
    </div>
  );
}