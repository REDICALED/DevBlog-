'use client';

import { motion, useAnimation } from 'framer-motion';
import Pirate_logo from "@/components/main/Pirate_logo";
import { useRecoilState } from "recoil";
import { OpeningState } from "@/Atoms/OpeningAtom";
import { useEffect } from 'react';
import Greyscale from "@/assets/dark.svg";
import SlideupChildren from "@/components/main/SlideupChildren";
import Backtotop from "@/assets/back-to-top.svg";
import DarkMode from "@/assets/darkmode.svg";
import Link from "next/link";
import { DarkmodeSwitchState } from "@/Atoms/DarkmodeSwitchAtom";

export default function Main_header() {
    const [openingstate, setOpeningState] = useRecoilState(OpeningState);
    const [DarkmodeSwitch, setDarkmodeSwitch] = useRecoilState(DarkmodeSwitchState);

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
              if (!openingstate) {
                  return; // 이후 애니메이션 실행 중단
              }
          
              // openingstate가 true인 경우에만 애니메이션 실행
              containerControls.start({
                  height: isLargeScreen ? '150px' : '60px', // 애니메이션으로 전환
                  transition: { duration: 1 },
              }).then(() => {
                  setOpeningState(false); // 애니메이션 종료 후 상태 변경
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
  if(window.scrollY < 15){
    containerControls.start({
      height:  isLargeScreen ? '150px' : '60px',
      transition: { duration: 0.5 }
  });
  }
  else{
    containerControls.start({
      height:  isLargeScreen ? '75px' : '45px',
      transition: { duration: 0.5 }
  });
  }
  };


    return (
        <>
            <motion.span
                className={`w-full transition-[background-color] duration-[0.45s] lg:border-b-[4.0px] border-b-[3.0px] mb-0 border-[var(--text-color)] flex flex-row justify-center items-center z-50 
                   ${openingstate ? 'h-screen ' : ` bg-[var(--bg-color)] fixed top-0 ${isLargeScreen ? 'h-[150px]' : '[60px]'} `} `}
                animate={containerControls}  // 컨테이너 애니메이션 제어
            >

                
                <motion.span
                    className={`overflow-hidden  pl-2 lg:ml-10  ${openingstate ? '' : 'animate-slide-left-parent'} `}
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
                            {!openingstate ? <Link href='/'>{letter}</Link> : <span>{letter}</span>}
                          </span> 
                        </motion.span>
                      </motion.span>
                    ))}
                </motion.span>
                {
                  !openingstate && 
                  
                <button 
                className=" lg:mr-[190px] mr-[90px] animate-slide-right-parent place-items-center lg:size-[60px] size-[35px] overflow-hidden duration-500 hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] hover:text-[var(--bg-color)] border-[var(--text-color)] hover:bg-[var(--text-color)] inline-flex" >
                  <SlideupChildren>
                <DarkMode
                    className="transition-[background-color] duration-[0.45s] lg:h-[60px] h-[35px] p-2" 

                 onClick={()=>{
                    const currentBgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
                    const currentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
                  
                    // 색상 교환
                    document.documentElement.style.setProperty('--bg-color', currentTextColor);
                    document.documentElement.style.setProperty('--text-color', currentBgColor);
                    setDarkmodeSwitch(!DarkmodeSwitch);
                }}>
                </DarkMode>
                  </SlideupChildren>
                </button>
                  }

{
                  !openingstate && 
                  
                <button 
                className=" lg:mr-[120px] mr-[50px]  animate-slide-right-parent place-items-center lg:size-[60px] size-[35px] overflow-hidden duration-500 hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] hover:text-[var(--bg-color)] border-[var(--text-color)] hover:bg-[var(--text-color)] inline-flex" >
                  <SlideupChildren>
                <Greyscale
                    className="transition-[background-color] duration-[0.45s] lg:h-[60px] h-[35px] p-2" 

                 onClick={()=>{
                  if (!DarkmodeSwitch){
                      document.documentElement.style.setProperty('--bg-color', `#000000`);
                      document.documentElement.style.setProperty('--text-color', `#f9f9f9`);

                  }
                  else{
                      document.documentElement.style.setProperty('--bg-color', `#f9f9f9`);
                      document.documentElement.style.setProperty('--text-color', `#000000`);

                  }
                  
                }}>
                </Greyscale>
                  </SlideupChildren>
                </button>
                  }

                <span className=" lg:mr-[40px] mr-[10px] animate-slide-right-parent place-items-center justify-center lg:h-[65px] h-[35px] overflow-hidden duration-500 hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] inline-flex">
                  <Pirate_logo />
                </span>

                { !openingstate && <button className=" lg:mr-[260px] mr-[130px]  animate-slide-right-parent place-items-center justify-center lg:h-[60px] h-[35px] overflow-hidden duration-500 hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] inline-flex">
                  <SlideupChildren>
                    <Backtotop onClick={()=>{
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }} alt="logo" className=" transition-[background-color] duration-[0.45s]  lg:h-[60px] h-[35px] p-2"/>
                </SlideupChildren>
                </button>}
            </motion.span>
            {openingstate ? <></> : (
        <div
          className={`h-[60px] lg:h-[150px] mt-8 `}
        ></div>
    )}

        </>
    );
}
