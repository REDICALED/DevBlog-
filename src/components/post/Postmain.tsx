'use client';

import { useEffect, useState } from 'react';
import '../../app/post/[id]/styles.module.scss';
import PostHtmlContent from '@/components/post/PostHtmlContent';
import PostSuggestNext from './PostSuggestNext';
import PostSuggestPrev from './PostSuggestPrev';

export default function Notes(props: any) {
  const [formattedDate, setformattedDate] = useState<any>(null);
  const [linkid, setLinkId] = useState<string[]>([]);
  const [loaded, setloaded] = useState<boolean>(false);

  useEffect(() => {
      const formattedDate = new Date(props.SupaArray.date).toISOString().replace('T', ' ')
      .split('.')[0];
      setformattedDate(formattedDate);
      setloaded(true);
  }, []);

  if (!loaded) {
    return <div>loading...</div>;
  }

  return (
    <>

    <div className=' lg:mx-auto w-full lg:w-[80vw]'>
      <div className=' grid'>
      <div className=' ml-3 font-semibold text-7xl mb-2 opacity-70'> {props.SupaArray.title}</div>
      <div className='flex mt-2 mb-2 opacity-50'>
      <div className=' ml-4 mr-2 font-semibold text-md'> {formattedDate}</div>
      {
        
        props.SupaArray.tags && props.SupaArray.tags.map((tag: string, index: number) => (
          <div key={index} className=' ml-1 font-semibold text-md '> {"#"+tag}</div>
        ))
      }</div>
      <div style={{ borderColor: 'var(--text-color)'}} className={ " mb-10 w-full h-5 border-b-4"}></div>

      <div className=' my-10 px-8 border-l-2 border-[var(--text-color)] '>
      {linkid.map((value: any, index: number) => (  
        <>
        <a
         href={"#"+value} key={index} className=' opacity-65 scroll-smooth block py-1 lg:text-xl text-sm '> {value.replace(/-/g, ' ').replace(/<br\s*\/?>/g, '')}</a>
        </>
      ))}
      </div>
      {/* # 태그 */}
      <div className='px-7 '>
      <PostHtmlContent content={props.SupaArray.content} setLinkId={setLinkId} />
      </div>
      </div>
    </div>

    <div className='flex w-full h-auto lg:h-[150px] mt-16 mb-10 '>
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