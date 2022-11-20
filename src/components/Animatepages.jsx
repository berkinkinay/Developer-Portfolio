import React from 'react';
import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0, x:20 },
    animate: { opacity: 1, x:0 },
    exit: { opacity: 0, x: -20 },
};

const Animatepages = ({children}) => {
    
  return (
    <motion.div
      variants={animations} 
      initial="initial"
      animate="animate"
      exit="exit"
      >
        {children}
    </motion.div>
  );
};

export default Animatepages