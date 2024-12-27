'use client';

import { useEffect, useState } from 'react';
import '../../app/post/[id]/styles.module.css';
import PostHtmlContent from '@/components/post/PostHtmlContent';
import PostSuggestNext from './PostSuggestNext';
import PostSuggestPrev from './PostSuggestPrev';

export default function Notes(props: any) {
  const [formattedDate, setformattedDate] = useState<any>(null);
  const [loaded, setloaded] = useState<boolean>(false);
  const [ PrevPost, setPrevPost] = useState<any>(null);
  const [ NextPost, setNextPost] = useState<any>(null);
  const [supaArray, setsupaArray] = useState<any>(null);

  useEffect(() => {
      setsupaArray(props.SupaArray);
      const formattedDate = new Date(props.SupaArray.date).toISOString().split('T')[0];
      setformattedDate(formattedDate);
      setloaded(true);
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
      { props.PrevSupaArray && <PostSuggestPrev data={props.PrevSupaArray} />}
      </div>
      <div className='w-[30vw] mx-[10vw] '>
      { props.NextSupaArray && <PostSuggestNext data={props.NextSupaArray} />}
      </div>
    </div>


    </>
  );
}