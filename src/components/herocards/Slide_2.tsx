'use client';

import Bc_coded from '@/assets/coded.jpg'
import SlideupTextLoop from "@/components/main/SlideupTextLoop";
import SlideupText from "@/components/main/SlideupText";
import {IconBrandGithubFilled, IconMailFilled } from "@tabler/icons-react";
import SlideupChildren from "@/components/main/SlideupChildren";
 

export default function Slide_2() {
    return (
        <div className='lg:flex w-full h-[600px] lg:h-[600px] place-items-center items-start '>
          
                <div className='lg:w-1/3 w-full lg:mr-10 '>
                    <div className='grid place-items-center'>
                      <img
                        key={0}
                        src={Bc_coded.src}
                        alt="Image"
                        className=" grid place-items-center object-contain h-[25vh] lg:h-[600px] rounded-md animate__slide-in-top  "
                      />
                    </div>
                </div>

                <div className=" font-semibold lg:w-2/3 lg:text-[7.5vh] text-[3vh] leading-nonemy-2 lg:mt-0  ">
                
                <div className=" lg:text-[70px] text-[24px] h-auto overflow-hidden my-2">
                <SlideupText text={"Savoring all things of Web/CS."}></SlideupText>
                </div>

                <p className=" font-medium lg:text-[28px] text-[14px] h-auto mt-3 lg:mt-5 overflow-hidden">
                <SlideupText text={"majored in Computer Science and studied at 42 Seoul for 2 years."}></SlideupText>
                </p>

                <p className=" font-medium lg:text-[28px] text-[14px] h-auto mt-3 lg:mt-3 overflow-hidden">
                <SlideupText text={"Currently gaining experience through freelance projects and internships."}></SlideupText>
                </p>
                <p className=" font-medium lg:text-[24px] text-[12px] h-auto mt-5 lg:mt-10 overflow-hidden">
                <SlideupText text={"Core Skils: React/Next.js, tailwindcss, Recoil, Typescript, C/C++, Supabase"}></SlideupText>
                </p>


                </div>

              </div>
    )
}