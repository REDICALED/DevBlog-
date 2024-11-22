"use client";

import { motion } from 'framer-motion';

export default function BlinkerBar(porps: any) {
    return (
        <motion.span
                          animate="blink"
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
                        <div style={{ borderColor: 'var(--text-color)'}} className=" mx-10 h-5 border-l-4 border-r-4 border-t-4"></div>
            </motion.span>
    )
}
