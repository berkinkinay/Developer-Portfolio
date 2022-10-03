import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaNode } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { GrReactjs } from 'react-icons/gr';
import Typewrite from "typewriter-effect";
import Me from "../components/img/hi.png";
import {
   SiJavascript,
   SiCsswizardry, 
   SiVuedotjs,
   SiTailwindcss,
   SiBootstrap,
   SiTypescript
 } from 'react-icons/si';
import Animatedloader from '../components/Animatedloader';
import Moreinfo from '../pages/Moreinfo';
import Iconsmobile from '../components/Iconsmobile';

const Aboutme = () => {
    return (  
    
 <div className='text'>
  <div className='Mobileview'>
   <div
    class=
    'flex h-screen 2xl:h-screen w-full items-center justify-center text-black bg-zinc-900 xl:h-[860px] md:h-[1450px] sm:h-[1490px]'
   > 
  <div 
    class=
    'flex xl:flex xl:flex-col xl:items-center xl:justify-center w-full h-[540px] left-36 items-center text-white sm:w-full'
   >
    <div  
     class=
     'flex w-1/3 xl:mt-80 h-screen xl:h-[490px] items-center justify-center text-3xl bg-zinc-900 sm:flex sm:absolute sm:bottom-[420px] sm:bg-white sm:w-72 sm:h-80 sm:hidden'
    >         
     <div 
      class=
       'h-96 3xl:mt-[118px] xl:h-96 w-80 xl:w-96 xl:mt-56 ml-80 2xl:ml-24 mb-24 lg:mb-20 rounded-full items-center justify-center bg-zinc-900 m:hidden'
      > 
        <img class='h-96 w-80 xl:h-80 lg:h-72 lg:w-56 md:h-64  sm:h-56 rounded-full mb-24 xl:mb-36' src={Me} alt='' /> 
     </div>
     <div 
      class=
       '3xl:hidden flex! absolute! h-96 w-80 xl:w-96 xl:mt-56 ml-80 mb-24 lg:mb-20 rounded-full items-center justify-center bg-zinc-900'
      > 
        <img class='h-96 w-80' src={Me} alt='' /> 
     </div>
   </div>   
     <div 
       class=
      'flex w-2/3 xl:items-center xl:justify-center h-96 items-center justify-center lg:ml-24 lg:mb-24 sm:h-72 sm:bg-gray-700 sm:mr-24 sm:w-full'
      >
      <div 
       class=
       'grid grid-rows-4 grid-flow-col text-white text-xl bg-zinc-900 w-[780px] mr-24 h-72 mb-12 lg:ml-24 sm:h-96 sm:bg-gray-800 sm:w-full'
       >  
        <motion.div
          animate={{ x: 15 }}
          transition={{ ease: "easeOut", duration: 1.8}}
        >
        <div
         class=
         'text-3xl 2xl:text-2xl text-gray-400 font-semibold sm:w-80 sm:mt-12 sm:text-base'
         >
          Hello👋 I'm <a class="text-sky-500 after:content-[''] ..." href="https://www.instagram.com/berkinkinay/" target="_blank">Berkin Kınay</a> a Front-End Developer from Turkey
       </div>
       <div 
        class=
        'text-gray-500 font-semibold text-xl 2xl:text-lg mt-10 sm:mr-16'
        >  
          I Build & Develop web apps 🌐 who specializes in developing <a class=" font-bold text-purple-600 after:content-[''] ..." href="" >React</a> apps. 
          I can develop your future beautiful, smooth website to bring a high quality and beautiful web experience. 
       </div>
       <div
        class=
        'mr-16 mt-10 3xl:text-lg 2xl:text-base text-gray-300'
        > 
         I am focusing on developing the new features in Software Development.
         I work on JavaScript technologies mostly.
         I'm also improving myself about Back-End currently.
        </div>
       <div 
        class=
        'mr-12 mt-10 3xl:text-lg 2xl:text-base text-gray-300'
        > 
         I determine some main topics while doing my job something like focusing to write
         clean user interfaces, problem solving, different perspective solutions, highly
         level fast coding and using new modern technologies.     
        </div>
        </motion.div>
      </div>
     </div>
   </div> 
       <div
         class=
         'text-xl text-purple-600 font-medium absolute 3xl:top-[772px] 2xl:top-[560px] xl:flex! xl:mt-72 ml-4 lg:mt-80 lg:ml-12 md:top-[1240px] sm:flex sm:text-xs sm:top-[860px] sm:mr-8'
          >
           <Typewrite 
             onInit=
             {(typewriter) => { 
             typewriter
             .pauseFor(2000)
             .typeString ("opss... wait a sec please")
             .pauseFor(1500)
             .deleteAll()
             .typeString("These are the programing languages and frameworks that I know.")
             .pauseFor(2000)
             .start();
             }}
            >
           </Typewrite>
       </div>   
   <div 
    class=
    'flex h-16 w-[520px] absolute bottom-12 items-center justify-center rounded-[30px] md:top-[1200px] sm:hidden'
    >
    <div 
     class=
     "grid w-full h-full items-start justify-center drop-shadow-2xl xl:mt-[620px] xl:grid xl:grid-rows-9 lg:mt-[800px] lg:ml-12  sm:hidden"
     >
     <div 
      class=
      "relative flex items-center justify-center h-[60px] w-[480px] mr-2"
      >
      <div class=
      "flex absolute inset-3 h-full w-full items-center rounded-lg bg-purple-700 px-10 py-6 blur hover:bg-purple-400"
      >
      </div>
     <div 
      class=
      "flex absolute inset-3 h-full w-full items-center rounded-lg bg-purple-700 px-10 py-6 blur-md hover:bg-purple-400"
      >
     </div>
     <div
      class=
      "flex absolute inset-3 h-full w-full items-center rounded-lg bg-purple-700 px-10 py-6 blur-lg hover:bg-purple-400"
      >
      </div>
      </div>
      <button 
       class=  
       "absolute top-2 flex items-center justify-center h-16 w-[470px] divide-gray-600 rounded-[25px] bg-zinc-900 leading-none ml-8"
       > 
      <div 
       class=
      "gird grid-cols-9 absolute flex items-center text-white w-fit h-24 gap-4"
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
    <div class='sm:flex! sm:absolute!'><Iconsmobile /></div>
    </div>
   <section class='h-screen w-full bg-black'> 
          <Moreinfo />
   </section>
   </div>
 </div>
 );
}  

export default Aboutme;
