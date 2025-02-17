'use client';

import HeroHeader from '@/components/mantine/HeroHeader';

export default function Notes(props: any) {




  return (
    <>

    <div className=' lg:mx-auto w-full lg:w-[80vw] h-full'>
      <div className=''>
      <div className=' ml-3 font-semibold text-5xl lg:text-7xl mb-2'> 개발자 김병찬입니다. </div>


      <div className=' fixed right-0 mx-1 px-5 max-w-[10vw] lg:block hidden   '>
      
      {[].map((value: any, index: number) => (  
        <a
         href={"#"+value} key={index} className='font-semibold opacity-65 hover:opacity-100 scroll-smooth block py-2 lg:text-base text-sm '> {value.replace(/-/g, ' ').replace(/<br\s*\/?>/g, '')}</a>
      ))}

      </div>

      <div className='px-5 mt-10'>
      <HeroHeader/>

      </div>

      </div>


    </div>




    </>
  );
}