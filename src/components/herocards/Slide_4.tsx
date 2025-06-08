'use client';

import zebra from '@/assets/zebra.png'
import table from '@/assets/table.png'


import SlideupText from "@/components/main/SlideupText";
 

export default function Slide_4() {
    return (
        <div className=' relative lg:flex w-full h-[calc(100vh-164px)] lg:h-[calc(100vh-254px)] place-items-center items-start '>

                <div className=" lg:ml-4 font-semibold lg:w-full lg:text-[7.5vh] text-[3vh] leading-[1.2]  ">
                
                <div className=" lg:text-[10vh] text-[24px] h-auto overflow-hidden my-2 font-bold">
                <SlideupText text={"Web + Art vision"}></SlideupText>
                </div>

                <div className=" font-medium lg:text-[4vh] text-[16px] h-auto mt-3 lg:mt-3 overflow-hidden">
                <SlideupText text={"Someday, I want to implement fine art within the web. "}></SlideupText>
                </div>

                <div className=" font-medium lg:text-[4vh] text-[16px] h-auto mt-3 lg:mt-2 overflow-hidden">
                <SlideupText text={"Recently, I've been developing a Buddhist art website using AI and web technics"}></SlideupText>
                </div>

                </div>

                <div className=' overflow-hidden w-full lg:absolute bottom-0 left-0 pt-2 lg:pt-0 '>
                    <div className=''>
                      <img
                        key={0}
                        src={zebra.src}
                        alt="Image"
                        className="object-contain h-[calc(1*(100vh-254px)/3)] lg:h-[calc(3*(90vh-254px)/5)] rounded-md animate__slide-in-left  "
                      />
                    </div>
                </div>


                <div className=' overflow-hidden w-full lg:absolute fixed bottom-0 right-0 flex justify-end pt-1 lg:pt-0 '>
                    <div className=''>
                      <img  
                        key={0}
                        src={table.src}
                        alt="Image"
                        className=" object-contain w-4/5 mx-auto lg:h-[calc(3*(100vh-254px)/5)] rounded-md animate__slide-in-right  "
                      />
                    </div>
                </div>

              </div>
    )
}