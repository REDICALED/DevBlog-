import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import supabaseClient from "@/utils/supabase/CsrClient";

export function Search_input(props: any) {
  const [search, setSearch] = useState<string>('');
 const getsupaArray = async () => {
    const { data: notes, error } = await supabaseClient.from('posts').select().ilike('title', `%${search}%`);
    console.log(notes);
    if (error) {
      console.error('Error fetching data:', error);
    }
    const supaArray = await JSON.parse(JSON.stringify(notes));
    props.setSupaArray(supaArray);
  }
  return (
    <div>
        <input type="text" placeholder="Title로 검색" 
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            getsupaArray();}
        }}
        className=" focus:outline-none
    focus:border-[3px]
    transition-[background-color]
    duration-[0.45s]
    placeholder-[var(--text-color)] w-[300px] h-[40px] border-2 rounded-lg p-2 border-[var(--text-color)] text-[var(--text-color)] bg-[var(--bg-color)]" />
    <button onClick={()=>{
      getsupaArray();
    }} className="border-2 border-black ml-2 p-1 "> 찾기 </button>
    </div>
  );
}