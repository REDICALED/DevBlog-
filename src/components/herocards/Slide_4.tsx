'use client';

import zebra from '@/assets/zebra.png'
import table from '@/assets/table.png'


import SlideupText from "@/components/main/SlideupText";
 

export default function Slide_4() {
    return (
        <div className=' relative lg:flex w-full h-[500px] lg:h-[600px] place-items-center items-start '>

                <div className=" lg:ml-4 font-semibold lg:w-full lg:text-[7.5vh] text-[3vh] leading-nonemy-2 ">
                
                <div className=" lg:text-[70px] text-[24px] h-auto overflow-hidden my-2">
                <SlideupText text={"Web + Art vision"}></SlideupText>
                </div>

                <p className=" font-medium lg:text-[28px] text-[14px] h-auto mt-3 lg:mt-5 overflow-hidden">
                <SlideupText text={"Someday, I want to implement fine art within the web. "}></SlideupText>
                </p>

                <p className=" font-medium lg:text-[28px] text-[14px] h-auto mt-3 lg:mt-5 overflow-hidden">
                <SlideupText text={"Recently, I've been developing a Buddhist art website using AI and web technics"}></SlideupText>
                </p>

                </div>

                <div className='w-full lg:absolute bottom-0 left-0 pt-2 lg:pt-0 '>
                    <div className=''>
                      <img
                        key={0}
                        src={zebra.src}
                        alt="Image"
                        className="object-contain lg:h-[300px] rounded-md animate__slide-in-left  "
                      />
                    </div>
                </div>


                <div className='w-full lg:absolute bottom-0 right-0 flex justify-end pt-1 lg:pt-0 '>
                    <div className=''>
                      <img  
                        key={0}
                        src={table.src}
                        alt="Image"
                        className="object-contain w-4/5 mx-auto lg:h-[350px] rounded-md animate__slide-in-right  "
                      />
                    </div>
                </div>

              </div>
    )
}