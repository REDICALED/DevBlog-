"use client";

import { motion, AnimatePresence } from 'framer-motion';

export default function SlideupText({ delay = 0, children }: { delay?: number, children: React.ReactNode }) {
  return (
    <AnimatePresence
      onExitComplete={() => {}}
      mode="wait"
    >
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: [500, 0] }}
        transition={{
          duration: 1.9+delay,
          times: [0, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
