import React from 'react';
import { motion } from 'framer-motion'
//ICONS
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
 import Iconsmobile from '../components/Iconsmobile';

const IconsDesktop = () => {
  return (

 <div 
  class='flex h-16 w-[520px] xl:top-[900px] lg:mt-36 absolute bottom-12 items-center
         justify-center rounded-[30px] md:top-[1200px] sm:hidden'
  >
   <div
    class="grid w-full h-full items-start justify-center drop-shadow-2xl
           xl:mt-[620px] xl:grid xl:grid-rows-9 lg:mt-[800px] lg:ml-12  sm:hidden"
   >
    <div 
     class=
     "relative flex items-center justify-center h-[60px] w-[470px] mr-2"
      >
       <div class="flex absolute inset-3 h-full w-full items-center rounded-lg bg-purple-700 px-10 py-6 blur-md hover:bg-purple-400"></div>
       <div class="flex absolute inset-3 h-full w-full items-center rounded-lg bg-purple-700 px-10 py-6 blur-md hover:bg-purple-400"></div>
       <div class="flex absolute inset-3 h-full w-full items-center rounded-lg bg-purple-700 px-10 py-6 blur-lg hover:bg-purple-400"></div>
    </div>
     <button 
       class="absolute top-2 flex items-center justify-center h-16 w-[470px]
             divide-gray-600 rounded-[25px] bg-zinc-900 leading-none ml-8"
      > 
       <div 
       class=
       "absolute flex flex-cols-9 items-center text-white w-fit h-24 gap-4 cursor-default	"
       >  
        <motion.div
          whileHover={{ scale: 1.2 }} 
          transition={{ duration: 0.2 }}
       >  
          <SiJavascript class='ml-2' size="2.5em" color="yellow" />{" "}
        </motion.div>
       <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        > 
          <TiHtml5 size=" 3em" color="red" />{" "} 
        </motion.div>
        <motion.div
           whileHover={{ scale: 1.2 }}
           transition={{ duration: 0.2 }}
         > 
          <SiCsswizardry size="2.3em" color="white" />{" "} 
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
             <SiTypescript size="2.5em" color="blue" />{" "}
         </motion.div>                               
      </div>
     </button>
     </div>    
    </div>
  )
}
export default IconsDesktop;