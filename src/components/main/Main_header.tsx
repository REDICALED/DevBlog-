'use client';

import { motion, useAnimation } from 'framer-motion';
import Pirate_logo from "@/components/main/Pirate_logo";
import { useRecoilState } from "recoil";
import { OpeningState } from "@/Atoms/OpeningAtom";
import { useEffect, useState } from 'react';
import Greyscale from "@/assets/dark.svg";
import SlideupChildren from "@/components/main/SlideupChildren";
import Backtotop from "@/assets/back-to-top.svg";

export default function Main_header() {
    const [openingstate, setOpeningState] = useRecoilState(OpeningState);

    const text = "®KobeKrnl";  // 애니메이션할 텍스트
    const isLargeScreen = window.innerWidth >= 1024;
    // 텍스트를 한 글자씩 나눔
    const letters = text.split('');

    const containerControls = useAnimation();  // 애니메이션 제어
    const blinkControls = useAnimation();

    // 글자 애니메이션이 끝난 후 컨테이너 크기를 축소하는 콜백
    const onAnimationComplete = () => {
        requestAnimationFrame(() => {
            // 깜빡이기 시작
            blinkControls.start("blink").then(() => {
                containerControls.start({
                    height: isLargeScreen ? '150px' : '60px', //이걸 string state로 관리
                    transition: { duration: 1 }
                }).then(() => {
                    setOpeningState(false);
                });
            });
        });
    };



    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

const handleScroll = () => {
  if(window.scrollY < 50){
    containerControls.start({
      height:  isLargeScreen ? '150px' : '60px',
      transition: { duration: 0.5 }
  });
  }
  else{
    containerControls.start({
      height:  isLargeScreen ? '75px' : '50px',
      transition: { duration: 0.5 }
  });
  }
  };


    return (
        <>
            <motion.span
                className={`w-[100vw] transition-[background-color] duration-500 lg:border-b-[4.0px] border-b-[3.0px] mb-0 border-[var(--text-color)] flex flex-row justify-center items-center ${openingstate ? 'h-screen ' : ` bg-[var(--bg-color)] fixed top-0 z-50 `}`}
                animate={containerControls}  // 컨테이너 애니메이션 제어
            >

                
                <motion.div
                    className={`overflow-hidden  ml-2 lg:ml-10  ${openingstate ? '' : 'animate-slide-left-parent'} `}
                    style={{ display: 'flex' }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.05,  // 글자 애니메이션이 0.1초 간격으로 진행
                            },
                        },
                    }}
                    onAnimationComplete={onAnimationComplete}  // 애니메이션 완료 후 컨테이너 축소
                >
                    {letters.map((letter, index) => (
                        <motion.span
                        key={index}
                        variants={{
                          hidden: {
                            opacity: 1,
                            y: 500,
                          },
                          visible: {
                            opacity: 1,
                            y: [500, 0],
                            transition: {
                              duration: 1,
                              ease: "easeOut",
                            },
                          },
                        }}
                      >
                        <motion.span
                          animate={blinkControls}
                          initial={{ opacity: 1 }}
                          variants={{
                            blink: {
                              opacity: [1, 0, 1, 0,   1, 0, 1, 0,  1],  // 깜빡임 효과
                              transition: {
                                duration: 1.5,
                                repeat: 0,
                                times: [0, 0.1, 0.15, 0.2,  0.3, 0.35, 0.6,0.8,  1], 
                                ease: "steps(1)",
                              },
                            },
                          }}
                        >
                          <span className={`inline-block font-bold overflow-hidden transition-[font-size] duration-500 ${openingstate ? 'lg:text-[80px] text-[35px]' : 'lg:text-[40px] text-[17px]'}`}>
                            {letter}
                          </span>
                        </motion.span>
                      </motion.span>
                    ))}
                </motion.div>
                {
                  !openingstate && 
                  
                <span 
                className=" animate-slide-right-parent place-items-center lg:size-[60px] size-[35px] overflow-hidden duration-500  mr-[50px]  lg:mr-[120px] hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] hover:text-[var(--bg-color)] border-[var(--text-color)] hover:bg-[var(--text-color)] inline-flex" >
                  <SlideupChildren>
                <Greyscale
                    className="transition-[fill] duration-200 lg:h-[60px] h-[35px] p-2" 

                 onClick={()=>{
                  requestAnimationFrame(() => {
                    document.documentElement.style.setProperty('--bg-color', `#f9f9f9`);
                    document.documentElement.style.setProperty('--text-color', `#000000`);
                });  
                }}>
                </Greyscale>
                  </SlideupChildren>
                </span>
                  
                  }

                <span className=" animate-slide-right-parent place-items-center justify-center lg:h-[65px] h-[35px] overflow-hidden lg:mr-[40px] mr-[10px] duration-500 hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] inline-flex">
                  <Pirate_logo />
                </span>

                { !openingstate && <span className=" animate-slide-right-parent place-items-center justify-center lg:h-[60px] h-[35px] overflow-hidden lg:mr-[190px] mr-[90px] duration-500 hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] inline-flex">
                  <SlideupChildren>
                    <Backtotop onClick={()=>{
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }} alt="logo" className=" transition-[fill] duration-200 lg:h-[60px] h-[35px] p-2"/>
                </SlideupChildren>
                </span>}
            </motion.span>
            {openingstate ? <></> : (
        <div
          className={` h-[60px] lg:h-[150px] mt-8 `}
        ></div>
    )}

        </>
    );
}
