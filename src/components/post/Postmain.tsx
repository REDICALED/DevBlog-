'use client';

import { useEffect, useState } from 'react';
import '../../app/post/[id]/styles.module.css';
import PostHtmlContent from '@/components/post/PostHtmlContent';
import { useRecoilState } from "recoil";
import { createClient } from '@supabase/supabase-js';
import PostSuggestNext from './PostSuggestNext';
import PostSuggestPrev from './PostSuggestPrev';

import supabaseClient from '@/utils/supabase/CreateClient';

export default function Notes(props: any) {
  const [supaArray, setSupaArray] = useState<any>(null);
  const [formattedDate, setformattedDate] = useState<any>(null);
  const [loaded, setloaded] = useState<boolean>(false);
  const [ PrevPost, setPrevPost] = useState<any>(null);
  const [ NextPost, setNextPost] = useState<any>(null);


  useEffect(() => {
    
      console.log('fetchNotes 시작');
      console.log('supabaseclient:', supabaseClient);
      const fetchNotes = async () => {
        const { data, error } = await supabaseClient.from('posts').select().eq('uuid', props.id).single();
        if (error) {
          console.error(error);
        } else {
          const supaArray = JSON.parse(JSON.stringify(data));
          setSupaArray(supaArray);
          const formattedDate = new Date(supaArray.date).toISOString().split('T')[0];
          setformattedDate(formattedDate);

          const { data: prevPost, error: prevError } = await supabaseClient
          .from('posts')
          .select()
          .lt('date', supaArray.date) // 현재 게시물의 date 보다 작은 값
          .order('date', { ascending: false }) // 최신 순으로 정렬
          .limit(1);
          if(prevPost){
            setPrevPost(JSON.parse(JSON.stringify(prevPost))[0]);
          }

          const { data: nextPost, error: nextError } = await supabaseClient
          .from('posts')
          .select()
          .gt('date', supaArray.date) // 현재 게시물의 date 보다 큰 값
          .order('date', { ascending: true }) // 오래된 순으로 정렬
          .limit(1);
          if(nextPost){
            console.log('nextPost:', nextPost);
          setNextPost(JSON.parse(JSON.stringify(nextPost))[0]);
          }
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
      <div className=' mx-10 '>
      <PostHtmlContent content={supaArray.content} />
      </div>
      </div>
    </div>

    <div className='flex w-full h-auto lg:h-[150px] mt-16 '>
      <div className='w-[30vw] mx-[10vw] '>
      { PrevPost && <PostSuggestPrev data={PrevPost} />}
      </div>
      <div className='w-[30vw] mx-[10vw] '>
      { NextPost && <PostSuggestNext data={NextPost} />}
      </div>
    </div>


    </>
  );
}