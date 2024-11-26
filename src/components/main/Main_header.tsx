'use client';

import { motion, useAnimation } from 'framer-motion';
import Pirate_logo from "@/components/main/Pirate_logo";
import { useRecoilState } from "recoil";
import { OpeningState } from "@/Atoms/OpeningAtom";

export default function Main_header() {
    const [openingstate, setOpeningState] = useRecoilState(OpeningState);

    const text = "Redi Blog";  // 애니메이션할 텍스트
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
                    height: isLargeScreen ? '25vh' : '15vh',
                    transition: { duration: 1 }
                }).then(() => {
                    setOpeningState(false);
                });
            });
        });
    };

    return (
        <>
            <motion.span
                className={`flex flex-row justify-center items-center ${openingstate ? 'h-screen' : 'h-[15vh] lg:h-[25vh]'}`}
                animate={containerControls}  // 컨테이너 애니메이션 제어
            >
              <span className="lg:h-[130px] h-[60px] overflow-hidden lg:mr-5 mr-2 transition-none hover:transition-all hover:duration-200 rounded-md text-[var(--text-color)] bg-[var(--bg-color)] hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] inline-flex">
                    <Pirate_logo />
                </span>
                
                <motion.div
                    className="overflow-hidden"
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
                          <span className="inline-block font-medium lg:text-[120px] text-[45px] overflow-hidden">
                            {letter}
                          </span>
                        </motion.span>
                      </motion.span>
                    ))}
                </motion.div>
            </motion.span>
        </>
    );
}
