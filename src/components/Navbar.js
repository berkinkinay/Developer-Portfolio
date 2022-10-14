import React, { useState } from 'react';
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
import Animatepages from './Animatepages';

const Navbar = () => {

  return (

<Animatepages>  
  <div
   class=
   'h-fit absolute right-2 px-20 py-6 w-full text-slate-400 text-xl 2xl:text-lg xl:text-base font-bold'
   >
     <button className='text hover:underline hover:decoration-sky-500' onClick={() => {
             window.location.href= "https://berkinkinay.dev/"
             }}
             >   berkinkinay.dev
    </button> 
 </div> 
    <div 
     class=
    'flex absolute top-4 right-10 bg-zinc-900 rounded-md lg:hidden'
    >
     <div 
      class=
      'flex text-white w-full h-10 items-center text-xl justify-center gap-2 2xl:text-base'
      > 
      <div 
       className=
      'grid grid-cols-3 gap-4 italic'
      > 
       <div 
        class='hover:text-gray-400'
       >
         <ul class=''>
           <li className='Pointer'> <a href='/'>About me</a></li>  </ul>
       </div>
       <div class='hover:text-gray-400' >
         <ul class='ml-2'>
           <li className='Pointer'> <a href='/Portfolio'> Portfolio </a></li>
         </ul>
      </div>
      <div 
       class=
       'hover:text-gray-400'
       >
        <ul class=''>
          <li className='Pointer'> <a href='mailto:helloberkin@gmail.com'> Contact </a></li>  </ul>
      </div>
     </div>
       <div class='text-5xl font-light mr-4 mb-1'> I </div>
       <div 
        class=
        'grid grid-cols-3 gap-3 mt-2'
        >
          <motion.div
             whileHover={{ scale: 1.1 }}
             transition={{ duration: 0.2 }}
             >
            <a class='' href="https://github.com/developedbyven" target="_blank">     
              <Tooltip disableFocusListener disableTouchListener title="My Github">
               <button> <FaGithub class='hover:text-zinc-500' size={30}/> </button> 
              </Tooltip>
             </a>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
               >                  
            <a class='' href="/">  
              <Tooltip disableFocusListener disableTouchListener title="Dev.to profile">
                <button> <FaDev class='hover:text-zinc-500' size={30}/> </button> 
               </Tooltip>
            </a>
            </motion.div> 
          <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
             >              
            <a class='' href="https://www.linkedin.com/in/berkin-k%C4%B1nay-04a137228/" target="_blank">     
              <Tooltip disableFocusListener disableTouchListener title="Linkedin profile">
               <button> <FaLinkedin class='hover:text-zinc-500' size={30}/> </button>
               </Tooltip>
            </a>   
          </motion.div>  
         </div>  
      </div>  
    </div>
    </Animatepages>
  )
}

export default Navbar;