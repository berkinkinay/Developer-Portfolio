import React from 'react'
import { motion } from 'framer-motion'

const AnimatedObjects = ({children}) =>  {
  return (
    <div>
     <motion.div
       animate={{ y: 50 }}
       transition={{ ease: "easeOut", duration: 1.2 }}
       >
        {children}
    </motion.div>
    </div>
  )
}

export default AnimatedObjects;