'use client';

import { useEffect, useState } from 'react';
import PostHtmlContent from '@/components/post/PostHtmlContent';
import PostSuggestNext from './PostSuggestNext';
import PostSuggestPrev from './PostSuggestPrev';
import PostH3Id from './PostH3Id';
import styles from '../../app/post/[id]/styles.module.scss';

export default function Notes(props: any) {
  const [linkid, setLinkId] = useState<string[]>([]);
  const [FilteredArray, setFilteredArray] = useState<string>();
  const [loaded, setloaded] = useState<boolean>(false);

  useEffect(() => {
      if (getComputedStyle(document.documentElement).getPropertyValue('--bg-color') === '#') {
        document.documentElement.style.setProperty('--bg-color', '#f9f9f9');
      }
      if (getComputedStyle(document.documentElement).getPropertyValue('--text-color') === '#') {
        document.documentElement.style.setProperty('--text-color', '#f9f9f9');
      }
    const outputArray = PostH3Id({ content: props.SupaArray.content, setLinkId: setLinkId });
    setFilteredArray(outputArray);
    console.log(outputArray)
    setloaded(true);
  }, []);

  if (!loaded) {
    return <div>loading...</div>;
  }

  return (
    <>

    <div className=' lg:mx-auto w-full lg:w-[80vw] h-full'>
      <div className=''>
      <div className=' ml-3 font-semibold text-5xl lg:text-7xl mb-2'> {props.SupaArray.title}</div>
      <div className='mt-2 mb-2 opacity-50'>
      <div className=' ml-4 mr-2 font-semibold lg:text-base text-sm '> {new Date(props.SupaArray.date).toISOString().replace('T', ' ').split('.')[0]}</div>
      <div className='ml-4 mr-2 mt-2 flex flex-wrap'>
      {
        props.SupaArray.tags && props.SupaArray.tags.map((tag: string, index: number) => (
          <div key={index} className=' ml-[1px] font-semibold text-sm lg:text-base '> {"#"+tag}</div>
        ))
      }
      
      </div>

      </div>

      <div className=' fixed right-0 mx-1 px-5 max-w-[10vw] lg:block hidden   '>
      
      {linkid.map((value: any, index: number) => (  
        <>
        <a
         href={"#"+value} key={index} className='font-semibold opacity-65 hover:opacity-100 scroll-smooth block py-2 lg:text-base text-sm '> {value.replace(/-/g, ' ').replace(/<br\s*\/?>/g, '')}</a>
        </>
      ))}

      </div>

      <div className='px-5 mt-10'>
        <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: FilteredArray || '' }} />
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