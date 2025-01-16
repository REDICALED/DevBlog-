'use client';

import { useEffect, useState } from 'react';
import '../../app/post/[id]/styles.module.scss';
import PostHtmlContent from '@/components/post/PostHtmlContent';
import PostSuggestNext from './PostSuggestNext';
import PostSuggestPrev from './PostSuggestPrev';

export default function Notes(props: any) {
  const [linkid, setLinkId] = useState<string[]>([]);
  const [loaded, setloaded] = useState<boolean>(false);

  useEffect(() => {
    console.log(props.SupaArray)

      setloaded(true);
  }, []);

  if (!loaded) {
    return <div>loading...</div>;
  }

  return (
    <>

    <div className=' lg:mx-auto w-full lg:w-[80vw] h-full'>
      <div className=''>
      <div className=' ml-3 font-semibold text-7xl mb-2'> {props.SupaArray.title}</div>
      <div className='flex mt-2 mb-2 opacity-50'>
      <div className=' ml-4 mr-2 font-semibold text-md'> {new Date(props.SupaArray.date).toISOString().replace('T', ' ').split('.')[0]}</div>
      
      {
        props.SupaArray.tags && props.SupaArray.tags.map((tag: string, index: number) => (
          <div key={index} className=' ml-1 font-semibold text-md '> {"#"+tag}</div>
        ))
      }
      
      </div>

      <div className=' fixed right-0 mx-1 max-w-[10vw] lg:block hidden   '>
      
      {linkid.map((value: any, index: number) => (  
        <>
        <a
         href={"#"+value} key={index} className='font-semibold opacity-65 hover:opacity-100 scroll-smooth block py-1 lg:text-base text-sm '> {value.replace(/-/g, ' ').replace(/<br\s*\/?>/g, '')}</a>
        </>
      ))}

      </div>

      <div className='px-7 mt-10'>
      <PostHtmlContent content={props.SupaArray.content} setLinkId={setLinkId} />
      </div>

      <div className='flex w-full h-auto lg:h-[150px] lg:my-32 my-10 place-items-center place-content-between '>
      <div className='w-[30vw] ml-10 lg:ml-0 '>
      { props.PrevSupaArray && <PostSuggestPrev data={props.PrevSupaArray} />}
      </div>
      <div className='w-[30vw] mr-10 lg:mr-0 '>
      { props.NextSupaArray && <PostSuggestNext data={props.NextSupaArray} />}
      </div>
    </div>
      </div>


    </div>




    </>
  );
}