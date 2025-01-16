import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export function Search_input(props: any) {
  const [search, setSearch] = useState<string>('');
 const getsupaArray = async () => {
    const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,);
    const { data: notes, error } = await supabaseClient.from('posts').select().ilike('title', `%${search}%`);
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
    </div>
  );
}