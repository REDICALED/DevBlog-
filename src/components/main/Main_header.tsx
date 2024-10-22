'use client';

import Pirate_circle from "/pirate_circle.svg";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Pirate_logo from "@/components/main/Pirate_logo";

export default function Main_header() {

    const text = "Redi Blog";  // 애니메이션할 텍스트

    // 텍스트를 한 글자씩 나눔
    const letters = text.split('');

    const containerControls = useAnimation();  // 애니메이션 제어

    // 글자 애니메이션이 끝난 후 컨테이너 크기를 축소하는 콜백
    const onAnimationComplete = () => {
        containerControls.start({ height: '20vh', transition: { duration: 1 } });
    };

    return (
        <>
            <motion.span
                className="flex flw-row justify-center items-center"
                style={{ height: '100vh' }}  // 처음에는 전체 높이
                animate={containerControls}  // 컨테이너 애니메이션 제어
            >
                <span className="">
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
                                    opacity: 1,  // 처음에는 글자가 보이지 않게 설정
                                    y: 500,  // 글자가 아래에서부터 시작
                                },
                                visible: {
                                    opacity: 1,  // 글자가 보이게
                                    y: [500, 0],  // 글자가 밑에서 위로 올라가면서 속도가 변화
                                    transition: {
                                        duration: 1,  // 애니메이션 지속 시간
                                        ease: "easeOut",  // 자연스러운 easeOut 애니메이션
                                    },
                                },
                            }}
                        >
                            <span className="inline-block font-semibold lg:text-[160px] text-[50px] overflow-hidden">
                                {letter}
                            </span>
                        </motion.span>
                    ))}
                </motion.div>
            </motion.span>
        </>
    );
}
