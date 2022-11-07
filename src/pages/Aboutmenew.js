import React from 'react'
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
import Moreinfo from './Moreinfo';
import Iconsmobile from '../components/Iconsmobile';
import { AiOutlineDownCircle } from 'react-icons/ai';

const Aboutmenew = () => {
    return (  
    
 <div className='text'>
  <div className='Mobileview'>
   <div
     class=
    'flex xl:flex xl:flex-col xl:items-center xl:justify-center h-screen 2xl:h-screen w-full lg:w-full items-center justify-center text-black bg-zinc-900 xl:h-[1600px] md:h-[1450px] sm:h-[1890px]'
    > 
     <button 
      class='flex absolute w-6 h-6 right-8 bottom-10 animate-bounce' 
      id='/hello'
     >
       <a href='#hello'>f
         <AiOutlineDownCircle size="2.6em" color="white" />{" "}
       </a> 
     </button>
  <div
   class=
   'flex justify-center xl:flex xl:flex-col xl:items-center xl:justify-center w-full h-[540px] left-36 items-center text-white sm:flex sm:items-center sm:justify-center'
  >      
    <img class='h-96 w-80 ml-24 mt-16 2xl:ml-[170px] 2xl:mt-24 xl:h-80 lg:h-72 lg:w-56 md:h-64 rounded-full mb-24 xl:mb-80 lg:flex lg:justify-center lg:items-center sm:flex sm:absolute sm:right-[108px] sm:top-6 sm:h-56 sm:w-48 xs:flex xs:absolute xs:w-56 xs:h-64 xs:top-6 xs:right-16' src={Me} alt='' /> 
     <div 
       class=
      'flex ml-36 w-[900px] h-[380px] 2xl:h-[380px] right-64 xl:items-center xl:justify-center items-center justify-center lg:mb-24 lg:ml-1 lg:w-full sm:h-72 sm:mr-1 sm:w-full'
      >
      <div 
       class=
       'grid grid-rows-4 grid-flow-col text-white text-xl bg-zinc-900 w-fit h-[378px] lg:ml-24 sm:h-96 sm:w-full xl:mr-24 2xl:mr-24 2xl:mt-4'
       >  
        <motion.div
          animate={{ x: 15 }}
          transition={{ ease: "easeOut", duration: 1.8}}  
        >
        <div
         class=
         'text-3xl mt-6 2xl:text-2xl text-gray-400 font-semibold sm:w-80 sm:text-2xl'
         >
          Hello👋 I'm <a class="text-sky-500 hover:text-slate-200 after:content-[''] ..." href="https://www.instagram.com/berkinkinay/" target="_blank">Berkin Kınay</a> a Front-End Developer from Turkey
       </div>
       <div 
        class=
        'text-slate-500 font-semibold text-xl 2xl:text-lg mt-10 '
        >  
          I Build & Develop web apps 🌐 who specializes in developing <a class=" font-bold text-purple-600 after:content-[''] ..." href="" >React</a> apps. 
          Focusing on the best user experience, I can optimize your applications and provide high-performance developments. 
       </div>
       <div
        class=
        'mr-16 mt-10 3xl:text-lg 2xl:text-base text-slate-300'
        > 
         I am focusing on developing the new features in Software Development.
         I work on JavaScript technologies mostly.  
         I'm also improving myself about Back-End currently.
        </div>
       <div 
        class=
        'mr-12 mt-10 3xl:text-lg 2xl:text-base text-slate-300'
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
         'flex text-xl text-purple-600 font-medium absolute 3xl:bottom-36 2xl:bottom-[125px] xl:top-[1050px] lg:bottom-0 xl:mt-[100px] ml-4 lg:mt-80 lg:ml-12 md:top-[1240px] sm:flex sm:text-base sm:top-[1060px] sm:left-4'
          >
           <Typewrite 
             onInit=
             {(typewriter) => { 
             typewriter
             .typeString ("another happy web landing!")
             .pauseFor(1000)
             .deleteAll()
             .pauseFor(50)
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
    'flex h-16 w-[520px] xl:top-[900px] lg:mt-36 absolute bottom-12 items-center justify-center rounded-[30px] md:top-[1200px] sm:hidden'
    >
    <div
     class=
     "grid w-full h-full items-start justify-center drop-shadow-2xl xl:mt-[620px] xl:grid xl:grid-rows-9 lg:mt-[800px] lg:ml-12  sm:hidden"
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
       class=  
       "absolute top-2 flex items-center justify-center h-16 w-[470px] divide-gray-600 rounded-[25px] bg-zinc-900 leading-none ml-8"
       > 
      <div 
       class=
      "absolute flex flex-cols-9 items-center text-white w-fit h-24 gap-4"
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
   <section class=''> 
          <Moreinfo />
   </section>
   </div>
 </div>
 );
}  

export default Aboutmenew;
