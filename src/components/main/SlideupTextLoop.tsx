"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SlideupTextLoop(props: any) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => {
        if (prev === props.text.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 4700); // 애니메이션 duration과 동일한 시간으로 설정

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 해제
  }, [props.text.length]);

  return (
    
      <motion.div
        key={currentTextIndex}
        initial={{ y: 500 }}
        animate={{ y: [500, 0, 0, 200] }}
        transition={{
          duration: 5,
          times: [0, 0.25, 0.7, 1],
          repeat: Infinity,  // 무한 반복
        }}
      >
        {props.text[currentTextIndex]}
      </motion.div>
  );
}
