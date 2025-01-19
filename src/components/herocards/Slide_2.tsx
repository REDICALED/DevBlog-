'use client';

import Bc_coded from '@/assets/coded.jpg'
import SlideupText from "@/components/main/SlideupText";
 

export default function Slide_2() {
    return (
        <div className='lg:flex w-full h-[calc(100vh-164px)] lg:h-[calc(100vh-254px)] place-items-center items-start '>
          


                <div className=" lg:mr-10 font-semibold lg:w-2/3 lg:text-[7.5vh] text-[3vh] leading-nonemy-2 lg:mt-0  ">
                
                <div className=" lg:text-[100px] text-[24px] h-auto overflow-hidden my-2 font-bold">
                <SlideupText text={"Mastering all things of Web/CS"}></SlideupText>
                </div>

                <div className=" font-medium lg:text-[42px] text-[16px] h-auto mt-3 lg:mt-5 overflow-hidden">
                <SlideupText text={"majored in Computer Science and studied at 42 Seoul for 2 years."}></SlideupText>
                </div>

                {/* <div className=" font-medium lg:text-[42px] text-[16px] h-auto mt-3 lg:mt-3 overflow-hidden">
                <SlideupText text={"Currently gaining experience through freelance projects and internships."}></SlideupText>
                </div> */}
                <div className=" font-medium lg:text-[32px] text-[14px] h-auto mt-5 lg:mt-10 overflow-hidden">
                <SlideupText text={"Core Skils: React/Next.js, tailwindcss, Recoil, Typescript, C/C++, Supabase"}></SlideupText>
                </div>


                </div>
                <div className='lg:w-1/3 w-full mt-5 lg:mt-0 '>
                    <div className='grid place-items-center'>
                      <img
                        key={0}
                        src={Bc_coded.src}
                        alt="Image"
                        className=" lg:py-10 grid place-items-center object-cover h-[calc(2*(100vh-164px)/5)] lg:h-[calc((100vh-254px))] rounded-md animate__slide-in-right   "
                      />
                    </div>
                </div>
              </div>
    )
}