import React from 'react'
import { Workspace } from '../pages/Workspace';
//ANIMATE-PAGES
import { motion } from 'framer-motion';
import AnimatedObjects from '../components/AnimatedObjects';
//ICONS
import {
    SiJavascript,
    SiTailwindcss,
  } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaConnectdevelop } from 'react-icons/fa' 
import { SiVuedotjs, SiTypescript, SiThreedotjs } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import '../Logo.css'; 

const Hello = () => {
  return (
    
<div
 class='text font-medium'>    
 <div 
  class=
 'flex h-screen 2xl:h-screen w-full bg-zinc-900 items-center justify-center lg:h-[1820px] md:h-[1700px] md:w-[800px] sm:w-full sm:h-[2200px]'>
  <div 
   class=
  'flex h-[730px] w-full bg-zinc-900 items-center justify-center'
  >
      <div className='App'>
            <div className='App-header'>
              <div 
               class='w-fit h-fit flex absolute top-24 2xl:top-4 ml-[859px] rounded-full md:ml-[820px]
                      lg:mr-4 sm:w-fit sm:h-fit sm:flex sm:absolute sm:right-[150px] sm:mt-6 sm:text-4xl
                      xs:w-fit xs:h-fit xs:flex xs:absolute xs:right-[130px] xs:mt-6 xs:text-4xl'
              >
               <motion.div
                 animate={{ y: 50 }}
                 transition={{ ease: "easeOut", duration: 0.8 }}
              > 
               <FaConnectdevelop size='2em' color='white' className='App-logo' />        
               </motion.div>
              </div> 
           </div>
        </div>
    <div
     class=
     'flex h-[540px] w-[820px] lg:mt-24 items-center justify-center text-slate-800 sm:flex sm:gap-5'
     >
      <AnimatedObjects>
    <div 
     class=
     'grid grid-cols-3 gap-6 h-[full] w-full rounded-[70px] ml-4 lg:grid lg:grid-cols-1 sm:gap-5'
     >
     <motion.div 
       whileHover={{ scale: 1.1 }}
       transition={{ type: "spring", stiffness: 100, damping: 10 }}
       whileTap={{ scale: 1 }}
     >
       <div class='box'></div>
       </motion.div>
       <div 
        class='flex absolute z-10 h-fit w-36 mt-[68px] ml-[340px] text-lg md:ml-12
               md:mt-[300px] items-center justify-center lg:ml-14 lg:mt-[70px] sm:ml-[70px] sm:mt-[360px]'> 
       <button 
         class="hover-2 text-base sm:text-2xl"
         onClick={ () => { 
             window.location.href='https://github.com/developedbyven/Coffee-Store-App'
             }}
         >
                3D Earth Map App
            <div class='sm:h-fit sm:w-fit sm:text-xl'>(in development)</div>
        </button> 
       </div>
       <div class='project-box-1'>
          <p class='bg-purple-500 rounded w-fit mb-3 text-white'> Used Techs </p>
          <div class='grid grid-cols-4 gap-2'>         
             <SiJavascript class='bg-black 3xl:h-fit' size="2em" color="yellow" />{" "}
             <GrReactjs class='sm:text-lg sm:h-fit sm:w-fit' size="2em" color="purple" />{" "}
             <SiThreedotjs size="2em" color="black" />{" "}
             <SiTailwindcss size="2em" color="cyan" />{" "}
          </div>
       </div>
       <motion.div 
           whileHover={{ scale: 1.1 }}
           transition={{ type: "spring", stiffness: 100, damping: 10 }}
           whileTap={{ scale: 1 }}
         >
       <div class='box'></div>
       </motion.div>
       <div 
        class='text-base flex absolute z-10 h-fit w-36 mt-[70px] ml-[60px]
               md:ml-12 md:mt-[860px] items-center justify-center lg:ml-14 lg:mt-[354px]
               sm:ml-[70px] sm:mt-[670px] sm:text-xl'> 
       <button
         class="hover-2 text-base sm:text-2xl"
         onClick={ () => { 
             window.location.href='https://github.com/developedbyven/Coffee-Store-App'
             }}
         >
            Developer Portfolio Website
        </button> 
       </div>
       <div class='project-box-2'>
          <p class='bg-purple-500 rounded w-fit mb-3 text-white'> Used Techs </p>
          <div class='grid grid-cols-3 gap-2'>         
            <SiJavascript class='bg-black sm:text-lg' size="2em"  color="yellow" />{" "}
            <GrReactjs class='sm:text-lg sm:h-fit sm:w-fit' size="2em" color="purple" />{" "}
            <SiTailwindcss class='sm:text-lg sm:h-fit sm:w-fit' size="2.2em" color="cyan" />{" "}
          </div>
       </div>
       <motion.div 
           whileHover={{ scale: 1.1 }}
           transition={{ type: "spring", stiffness: 100, damping: 10 }}
           whileTap={{ scale: 1 }}
         >
       <div class='box'></div>
       </motion.div>
       <div 
        class='text-base flex absolute z-10 h-fit w-36 mt-[74px] ml-[620px]
               md:ml-12 md:mt-[860px] items-center justify-center lg:ml-14 lg:mt-[620px]
               sm:ml-[70px] sm:mt-[670px] sm:text-xl'> 
       <button 
         class="hover-2 text-base sm:text-2xl"
         onClick={ () => { 
             window.location.href='https://github.com/developedbyven/Coffee-Store-App'
             }}
         >
                Discord Clone
            <div class='sm:h-fit sm:w-fit sm:text-xl'>(in development)</div>
        </button>
       </div>
       <div class='project-box-3'>
          <p class='bg-purple-500 rounded w-fit mb-3 text-white'> Used Techs </p>
          <div class='grid grid-cols-3 gap-2'>         
            <SiJavascript class='bg-black sm:text-lg' size="2em"  color="yellow" />{" "}
            <GrReactjs class='sm:text-lg sm:h-fit sm:w-fit' size="2em" color="purple" />{" "}
            <SiTailwindcss class='sm:text-lg sm:h-fit sm:w-fit' size="2.2em" color="cyan" />{" "}
          </div>
       </div>
       <motion.div 
           whileHover={{ scale: 1.1 }}
           transition={{ type: "spring", stiffness: 100, damping: 10 }}
           whileTap={{ scale: 1 }}
         >
       <div class='box'></div>
       </motion.div>
       <div 
        class='text-base flex absolute z-10 h-fit w-36 mt-[350px] ml-[60px]
               md:ml-12 md:mt-[860px] items-center justify-center lg:ml-14 lg:mt-[890px]
               sm:ml-[70px] sm:mt-[670px] sm:text-xl'> 
       <button 
         class="hover-2 text-base sm:text-2xl"
         onClick={ () => { 
             window.location.href='https://github.com/developedbyven/Coffee-Store-App'
             }}
         >
              Shopping Store App
            <div class='sm:h-fit sm:w-fit sm:text-xl'>(in development)</div>
        </button> 
       </div>
       <div class='project-box-4'>
          <p class='bg-purple-500 rounded w-fit mb-3 text-white'> Used Techs </p>
          <div class='grid grid-cols-3 gap-2'>         
            <SiJavascript class='bg-black sm:text-lg' size="2em"  color="yellow" />{" "}
            <GrReactjs class='sm:text-lg sm:h-fit sm:w-fit' size="2em" color="purple" />{" "}
            <SiTailwindcss class='sm:text-lg sm:h-fit sm:w-fit' size="2.2em" color="cyan" />{" "}
          </div>
       </div>
       <motion.div 
           whileHover={{ scale: 1.1 }}
           transition={{ type: "spring", stiffness: 100, damping: 10 }}
           whileTap={{ scale: 1 }}
         >
       <div class='box'></div>
       </motion.div>
       <div 
        class='text-base flex absolute z-10 h-fit w-36 mt-[340px] ml-[340px]
               md:ml-12 md:mt-[860px] items-center justify-center lg:ml-14 lg:mt-[1180px]
               sm:ml-[70px] sm:mt-[670px] sm:text-xl'> 
       <button 
         class="hover-2 text-base sm:text-2xl"
         onClick={ () => { 
             window.location.href='https://github.com/developedbyven/Coffee-Store-App'
             }}
         >
                Music Player & Library App 
            <div class='sm:h-fit sm:w-fit sm:text-xl'>(in development)</div>
        </button>
       </div>
       <div class='project-box-5'>
          <p class='bg-purple-500 rounded w-fit mb-3 text-white'> Used Techs </p>
          <div class='grid grid-cols-4 gap-2'>   
             <SiTypescript class='bg-white' size="2em" color="blue" />{" "}
             <GrReactjs size="2em" color="purple" />{" "}
             <TbApi size="2em" color="blue" />{" "}
             <SiTailwindcss size="2em" color="cyan" />{" "}      
          </div>
       </div>
       <motion.div 
           whileHover={{ scale: 1.1 }}
           transition={{ type: "spring", stiffness: 100, damping: 10 }}
           whileTap={{ scale: 1 }}
         >
       <div class='box'></div>
       </motion.div>
       <div 
        class='text-base flex absolute z-10 h-fit w-36 mt-[342px] ml-[620px]
               md:ml-12 md:mt-[860px] items-center justify-center lg:ml-14 lg:mt-[1460px]
               sm:ml-[70px] sm:mt-[670px] sm:text-xl'> 
       <button 
         class="hover-2 text-base sm:text-2xl"
         onClick={ () => { 
             window.location.href='https://github.com/developedbyven/Coffee-Store-App'
             }}
         >
                Star Wars Library Documentation App               
            <div class='sm:h-fit sm:w-fit sm:text-xl'>(in development)</div>
        </button> 
       </div>
       <div class='project-box-6'>
          <p class='bg-purple-500 rounded w-fit mb-3 text-white'> Used Techs </p>
          <div class='grid grid-cols-4 gap-2'>         
             <SiTypescript class='bg-white' size="2em" color="blue" />{" "}
             <GrReactjs size="2em" color="purple" />{" "}
             <TbApi size="2em" color="blue" />{" "}
             <SiTailwindcss size="2em" color="cyan" />{" "}
          </div>
       </div>
     </div>
     </AnimatedObjects>
    </div>
   </div>
   <div class="flex absolute 3xl:bottom-14 2xl:bottom-0 items-center justify-center w-78 h-fit">
      <div 
       class=
       "flex h-fit w-fit 3xl:text-lg 2xl:text-base lg:hidden"
       >
        Dev note: Some of these projects has been launched but still in development(open source)
       at the same time. You can review
       <a rel="noreferrer"  
          href="https://github.com/developedbyven" target="_blank"
          class="ml-1 mr-1 flex text-lg font-semibold
               text-gray-500 hover:text-white"
             > repositories                                         
        </a> on Github right now.
      </div>
   </div>
 </div>
 <section class='flex h-72 w-full bg-zinc-900'>
     <Workspace />
   </section>  
</div>
  )
}

export default Hello
