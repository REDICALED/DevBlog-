'use client';

import { useEffect, useState } from 'react';
import '../../app/post/[id]/styles.module.css';
import PostHtmlContent from '@/components/post/PostHtmlContent';
import { useRecoilState } from "recoil";
import { createClient } from '@supabase/supabase-js';

export default function Notes(props: any) {
  const [supaArray, setSupaArray] = useState<any>(null);
  const [formattedDate, setformattedDate] = useState<any>(null);
  const [loaded, setloaded] = useState<boolean>(false);

  useEffect(() => {
    
      const supabaseclient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      console.log('fetchNotes 시작');
      console.log('supabaseclient:', supabaseclient);
      const fetchNotes = async () => {
        const { data, error } = await supabaseclient.from('posts').select().eq('uuid', props.id).single();
        if (error) {
          console.error(error);
        } else {
          const supaArray = JSON.parse(JSON.stringify(data));
          setSupaArray(supaArray);
          const formattedDate = new Date(supaArray.date).toISOString().split('T')[0];
          setformattedDate(formattedDate);
          setloaded(true);
        }setSupaArray
      };
      fetchNotes();
    
  }, []);

  if (!loaded) {
    return <div>loading...</div>;
  }
  
  return (
    <>

    <div className=' lg:mx-auto w-[100vw] lg:w-[80vw]'>
      <div className=' grid'>
      <div className=' font-semibold text-7xl mb-2 opacity-70'> {supaArray.title}</div>
      <div className='flex mt-2 mb-2 opacity-50'>
      <div className=' ml-1 mr-2 font-semibold text-md'> {formattedDate}</div>
      {
        
        supaArray.tags && supaArray.tags.map((tag: string, index: number) => (
          <div key={index} className=' ml-1 font-semibold text-md '> {"#"+tag}</div>
        ))
      }</div>
      <div style={{ borderColor: 'var(--text-color)'}} className={ " mb-10 lg:w-[80vw] h-5 border-b-4"}></div>
      <PostHtmlContent content={supaArray.content} />
      </div>
    </div>
    </>
  );
}