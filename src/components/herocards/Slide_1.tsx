'use client';

import Bc_sit from '@/assets/bc_sit.jpg'
import SlideupTextLoop from "@/components/main/SlideupTextLoop";
import SlideupText from "@/components/main/SlideupText";
import {IconBrandGithubFilled, IconMailFilled } from "@tabler/icons-react";
import SlideupChildren from "@/components/main/SlideupChildren";
 

export default function Slide_1() {
    return (
        <div className='lg:flex w-full h-[calc(100vh-164px)] lg:h-[calc(100vh-254px)] place-items-center items-start '>
          
                <div className='lg:w-1/3 w-full '>
                    <div className='grid place-items-center'>
                      <img
                        key={0}
                        src={Bc_sit.src}
                        alt="Image"
                        className=" grid place-items-center object-cover  h-[calc((100vh-164px)/2)] lg:h-[calc((100vh-254px))] rounded-md animate__slide-in-top  "
                      />
                    </div>
                </div>

                <div className=" grid place-items-center font-semibold lg:w-2/3 leading-nonemy-2 lg:mt-0  ">
                
                <div className=" lg:text-[120px] text-[28px] h-auto overflow-hidden my-2 font-bold">
                <SlideupText text={"ByeongChan Kim"}></SlideupText>
                </div>

                <div className=" font-medium lg:text-[51px] text-[17px] h-auto mt-1 lg:mt-5 overflow-hidden">
                <SlideupText text={"Welcome to my website!"}></SlideupText>
                </div>

                <div className=" font-medium lg:text-[51px] text-[17px] h-auto mt-1 lg:mt-3 overflow-hidden">
                <SlideupText text={"Take your time and enjoy!"}></SlideupText>
                </div>

                <div className='flex'>

                  <a href={'https://www.github.com/REDICALED'} target='_blank' >
                  <div className=" rounded-md lg:mr-10 
                  transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
                  h-auto px-2 inline-flex place-items-center font-medium lg:text-[72px] text-[18px] mt-3 lg:mt-10 overflow-hidden">
                    <SlideupChildren delay={0.65}>
                      <IconBrandGithubFilled className="lg:size-[80px] size-[18px]" />
                    </SlideupChildren>
                    <SlideupText text={"Github"} />
                  </div>
                  </a>

                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=redicaled@gmail.com" target="_blank" rel="noopener noreferrer" >
                  <div className=" rounded-md lg:mr-10 
                  transition-none hover:transition-all hover:duration-200 hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] 
                  h-auto px-2 inline-flex place-items-center font-medium lg:text-[72px] text-[18px] mt-3 lg:mt-10 overflow-hidden">
                    <SlideupChildren delay={0.65}>
                      <IconMailFilled className="lg:size-[80px] size-[18px]" />
                    </SlideupChildren>
                    <SlideupText text={"Mail"} />
                  </div>
                  </a>
                </div>

                <div className='overflow-hidden font-medium lg:text-[48px] text-[16px] h-auto my-3 lg:mt-10 p-2'>
                <SlideupTextLoop 
                delay={0.65}
                text={["Annyeong Haseyo 👋", "Programmer 🖥️" , "@Kobe_the_Wag 🐕" ,"Web - Art 🌐", " Diary, Travel Log, Thoughts, etc ... 🌍" ]}
                />
                </div>
                
                </div>

              </div>
    )
}