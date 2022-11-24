import { motion } from 'framer-motion'
import React from 'react'

export const AnimatedBoxes = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      whileTap={{ scale: 1 }}
    >

    </motion.div>
  )
}