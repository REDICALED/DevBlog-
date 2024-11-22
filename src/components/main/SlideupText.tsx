"use client";

import { motion, AnimatePresence } from 'framer-motion';

export default function SlideupText(props: any) {

  return (
    <AnimatePresence
      onExitComplete={() => {}}
      mode="wait"
    >
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: [500, 0] }}
        transition={{
          duration: 1.9,
          times: [0, 1],
        }}
      >
        {props.text}
      </motion.div>
    </AnimatePresence>
  );
}
