"use client";

import { motion, AnimatePresence } from 'framer-motion';

export default function SlideupText({ delay = 0, text }: { delay?: number, text: string }) {
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
        {text}
      </motion.div>
    </AnimatePresence>
  );
}
