'use client';

'use client';

import budda from '@/assets/budda.png'
import kobe_run from '@/assets/kobe_run.png'
import spiffo from '@/assets/spiffo.png'

import ootsuki from '@/assets/ootsuki.webp'

import SlideupText from "@/components/main/SlideupText";
 

export default function Slide_4() {
    return (
        <div className=' relative lg:flex w-full h-[500px] lg:h-[600px] place-items-center items-start '>

                <div className=" lg:px-[10%] lg:pt-[0] font-semibold lg:w-full lg:text-[7.5vh] text-[3vh] leading-nonemy-2 ">
                
                <div className=" lg:text-[70px] text-[24px] h-auto overflow-hidden my-2">
                <SlideupText text={"daily life, hobbies and Kobe"}></SlideupText>
                </div>

                <div className=" font-medium lg:text-[28px] text-[14px] h-auto mt-3 lg:mt-5 overflow-hidden">
                <SlideupText text={"Hobbies: Cooking, gaming (Tetris - 90APM, challenge is always welcome)"}></SlideupText>
                </div>

                <div className=" font-medium lg:text-[28px] text-[14px] h-auto mt-3 lg:mt-5 overflow-hidden">
                <SlideupText text={"I love hip-hop, EDM, cartoons, and my little brother Kobe."}></SlideupText>
                </div>
                <div className=" font-medium lg:text-[28px] text-[14px] h-auto mt-3 lg:mt-5 overflow-hidden">
                <SlideupText text={"I recently traveled to Japan and want to visit more great places later"}></SlideupText>
                </div>


                </div>

                <div className='w-full absolute bottom-0 left-0 '>
                    <div className=''>
                      <img
                        key={0}
                        src={budda.src}
                        alt="Image"
                        className="object-contain w-full lg:w-1/2 rounded-md place-self-center animate__slide-in-bottom lg:mb-0 mb-[10px]  "
                      />
                    </div>
                </div>

                <div className=' w-full lg:w-[10%] lg:absolute lg:top-0 lg:justify-end flex justify-center pt-2 right-0 '>
                    <div className=''>
                      <img  
                        key={0}
                        src={ootsuki.src}
                        alt="Image"
                        className="object-contain h-[60px] lg:h-auto rounded-md animate__slide-in-top  "
                      />
                    </div>
                </div>

                <div className=' font-extrabold text-center text-[12px] lg:text-[24px] w-full lg:w-[10%] absolute bottom-0 lg:pb-[200px] pb-[50px] flex justify-start left-0  '>
                    <div className=' animate__bounce-in-bottom '>
                      <img  
                        key={0}
                        src={kobe_run.src}
                        alt="Image"
                        className="object-contain h-[50px] lg:h-auto rounded-md  "
                      />
                      (Kobe)
                    </div>
                </div>

                <div className=' w-full lg:w-[10%] absolute bottom-0 pb-[60px] flex justify-end right-0  '>
                    <div className=''>
                      <img  
                        key={0}
                        src={spiffo.src}
                        alt="Image"
                        className="object-contain h-[50px] lg:h-auto rounded-md animate__bounce-in-top   "
                      />
                    </div>
                </div>

              </div>
    )
}