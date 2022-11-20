import React from 'react';
import { motion } from 'framer-motion';
import { FaNode } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { GrReactjs } from 'react-icons/gr';
import {
   SiJavascript,
   SiCsswizardry, 
   SiVuedotjs,
   SiTailwindcss,
   SiBootstrap,
   SiTypescript
 } from 'react-icons/si';

 const Iconsmobile = () => {
   return (
    <div 
    class=
    '3xl:hidden sm:flex sm: top-[970px] sm:h-[420px] sm:w-1 sm:z-10 sm:absolute sm:right-[250px] xs:flex xs:absolute xs:left-[140px]'
    >
    <div 
     class=
     "sm:grid sm:w-20 sm:h-full sm:items-start sm:justify-center sm:drop-shadow-2xl"
     >
     <div 
      class=
      "sm:flex! sm:flex-col sm:justify-center sm:h-24 sm:right-10 sm:mr-24"
      >
      <div class=
      "sm:flex sm:absolute sm:inset-3 sm:h-full sm:w-full items-center rounded-lg sm:top-[490px] bg-purple-700 blur hover:bg-purple-400"
      >
      </div>
     <div 
      class=
      "sm:flex sm:absolute inset-3 sm:h-full sm:w-full sm:items-center sm:rounded-lg sm:top-[490px] bg-purple-700 blur-md hover:bg-purple-400"
      >
     </div>
     <div
      class=
      "sm:flex sm:absolute sm:inset-3 h-full w-full items-center rounded-lg sm:top-[490px] bg-purple-700 blur-lg hover:bg-purple-400"
      >
      </div>
      </div>
      <button 
       class=  
       "sm:ml-2 sm:absolute sm:flex sm:items-center sm:justify-center sm:h-[420px] sm:w-20 divide-gray-600 rounded-[25px] bg-zinc-900 leading-none sm:top-[490px]"
       > 
      <div 
       class=
      "sm:flex sm:flex-col sm:absolute sm:items-center sm:text-white gap-3 sm:mb-2"
      >  
       <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ duration: 0.2 }}
        >  
        <SiJavascript class='' size="2.2em" color="yellow" />{" "}  
        </motion.div>
       <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ duration: 0.2 }}
        > 
        <TiHtml5 size=" 2.8em" color="red" />{" "} 
       </motion.div>
       <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        > 
        <SiCsswizardry size="2.1em" color="white" />{" "} 
        </motion.div>
       <motion.div
           whileHover={{ scale: 1.2 }}
           transition={{ duration: 0.2 }}
        >
         <FaNode size="2.8em" color="lime" />{" "}
        </motion.div>
       <motion.div
           whileHover={{ scale: 1.2 }}
           transition={{ duration: 0.2 }}
        >
         <GrReactjs size="3em" color="purple" />{" "}
         </motion.div>
        <motion.div
           whileHover={{ scale: 1.2 }}
           transition={{ duration: 0.2 }}
          >
          <SiTailwindcss size="2.8em" color="cyan" />{" "} 
          </motion.div>
         <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
           >  
            <SiBootstrap size="2.8em" color="navy" />{" "} 
           </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
           > 
            <SiVuedotjs size="2.8em" color="green" />{" "}
           </motion.div>
          <motion.div
             whileHover={{ scale: 1.2 }}
             transition={{ duration: 0.2 }}
             >  
            <SiTypescript size="2.2em" color="blue" />{" "}
           </motion.div>                    
      </div>
     </button>
     </div>    
    </div>

   )
 }
 
 export default Iconsmobile;