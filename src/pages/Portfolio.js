import React from 'react';
import { motion } from 'framer-motion';
import Lastpart from '../components/Lastpart';
import {
  SiJavascript,
  SiTailwindcss,
  SiVite
} from 'react-icons/si';
import { FaConnectdevelop } from 'react-icons/fa' 
import { GrReactjs } from 'react-icons/gr';
import { SiVuedotjs, SiTypescript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb'
import '../Logo.css'; 

const Portfolio = () => {
    return (      

  <div
   class='text font-medium'>   
      <div 
       class=
       'flex h-screen 2xl:h-screen w-full bg-zinc-900 items-center justify-center lg:h-[1720px] md:h-[1700px] md:w-[800px] sm:w-full sm:h-[2200px]'
       > 
       <div 
        class=
       'flex h-[730px] w-full bg-zinc-900 items-center justify-center'
        >
          <div className='App'>
            <div className='App-header'>
              <div class='w-fit h-fit flex absolute top-24 2xl:top-4 ml-[859px] rounded-full md:ml-[820px] lg:mr-4 sm:w-fit sm:h-fit sm:flex sm:absolute sm:right-[150px] sm:mt-6 sm:text-4xl xs:w-fit xs:h-fit xs:flex xs:absolute xs:right-[130px] xs:mt-6 xs:text-4xl'
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
         'flex h-[540px] w-[820px] items-center justify-center text-slate-800 sm:flex sm:gap-5'
          >
          <motion.div
            animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
           >
           <div class='grid grid-cols-3 gap-6 h-[full] w-full rounded-[70px] ml-4 lg:grid lg:grid-cols-1 sm:gap-5'
           >
           <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileTap={{ scale: 1 }}
           >
            <div class='h-64 w-64 sm:h-72 sm:w-72 flex bg-white rounded-[50px] hover:blur-sm'></div>
            </motion.div>

            <motion.div
             whileHover={{ scale: 1.1 }}  
             transition={{ type: "spring", stiffness: 100,  duration: 0.2 }}
             whileTap={{ scale: 1 }}
            >
            <div class='h-64 w-64 sm:h-72 sm:w-72 flex bg-white rounded-[50px] hover:blur-sm '></div>
            </motion.div>
           <div 
            class='flex absolute z-10 h-fit w-36 mt-[79px] ml-[335px] text-lg md:ml-12 md:mt-[600px] items-center justify-center lg:ml-14 lg:mt-[590px] sm:ml-[70px] sm:mt-[360px]'> 
            <button 
             class="hover-2 text-base sm:text-2xl"
             onClick={ () => {
                  window.location.href='https://github.com/developedbyven/Coffee-Store-App'
                    }}
            >
                Coffee Store App
              <div class='sm:h-fit sm:w-fit sm:text-xl'>(in development)</div>
            </button> 
           </div>
            <div class='flex flex-col absolute z-10 h-fit w-36 mt-[160px] ml-[340px] items-center justify-center text-sm md:ml-12 md:mt-[670px] lg:ml-14 lg:mt-[670px] sm:ml-[80px] sm:mt-[460px] sm:text-xl'
            >
              <div class='bg-purple-500 rounded w-fit mb-3 text-white'> Used Techs </div>
            <div class='grid grid-cols-3 gap-2'>         
             <SiJavascript class='bg-black sm:text-lg' size="2em"  color="yellow" />{" "}
             <GrReactjs class='sm:text-lg sm:h-fit sm:w-fit' size="2em" color="purple" />{" "}
             <SiTailwindcss class='sm:text-lg sm:h-fit sm:w-fit' size="2.2em" color="cyan" />{" "}
            </div> 
           </div>
            
           <div 
            class='text-base flex absolute z-10 h-fit w-36 mt-[70px] ml-[620px] md:ml-12 md:mt-[860px] items-center justify-center lg:ml-14 lg:mt-[850px] sm:ml-[70px] sm:mt-[670px] sm:text-xl'> 
            <button href=""
            class="hover-2"
            >
               Music Player & Library App
              <div>(in development)</div>
            </button> 
            </div>
            <div class='flex flex-col absolute z-10 h-fit w-36 mt-[153px] ml-[628px] items-center justify-center text-sm md:ml-12 md:mt-[940px] lg:ml-14 lg:mt-[940px] sm:ml-[70px] sm:mt-[780px] sm:text-xl'
            >
              <div class='w-fit bg-purple-500 text-white mr-3 mb-3 rounded mt-1'> Used Techs </div>
            <div class='grid gap-3 grid-cols-4'>
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
             <div class='h-64 w-64 sm:h-72 sm:w-72 bg-white rounded-[60px] hover:blur-sm'></div>
            </motion.div>
  
            <div 
            class='flex absolute z-10 h-fit w-36 mt-[350px] ml-[55px] items-center justify-center sm:ml-[70px] sm:mt-[990px] text-base sm:text-lg'> 
            <button 
            class="hover-2"
            >
              Chatting App
              <div>(in development)</div>
            </button> 
            </div>
            <div class='flex flex-col absolute z-10 h-fit w-36 mt-[430px] ml-14 items-center justify-center text-sm sm:ml-[70px] sm:mt-[1080px] sm:text-lg'
            >
              <div class='bg-purple-500 text-white w-fit mb-3 rounded'> Used Techs </div>
              <div class='grid gap-4 grid-cols-3'>
              <SiJavascript class='bg-black 3xl:h-fit' size="2em" color="yellow" />{" "}
             <SiVuedotjs size="2em" color="green" />{" "}
             <SiTailwindcss size="2em" color="cyan" />{" "} 
             </div>
           </div>  
           <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileTap={{ scale: 1 }}
           > 
           <div class='h-64 w-64 sm:h-72 sm:w-72  bg-white rounded-[60px] hover:blur-sm'></div>
            </motion.div>
            <div 
            class='flex absolute z-10 h-fit w-36 mt-[354px] ml-[338px] items-center justify-center lg:ml-14 lg:mt-[1120px] sm:ml-[70px] sm:mt-[1320px] sm:text-xl'>
            <button onClick={() => {
             window.location.href= "https://github.com/developedbyven/Vue-Game-XvsO"
             }}
            class="hover-2 text-base"
            > 
              XvsO Game App 
            </button> 
            </div>
            <div class='flex flex-col absolute z-10 h-fit w-36 mt-[429px] ml-[338px] items-center justify-center text-sm md:ml-12 md:mt-[1190px] lg:ml-14 lg:mt-[1190px] sm:ml-[70px] sm:mt-[1390px]'
            >
              <div class='bg-purple-500 text-white w-fit rounded mb-3'> Used Techs </div>

            <div class='grid gap-3 grid-cols-4'>
             <SiJavascript class='bg-black 3xl:h-fit' size="2em" color="yellow" />{" "}
             <SiVuedotjs size="2em" color="green" />{" "}
             <SiTailwindcss size="2em" color="cyan" />{" "} 
             <SiVite size="2em" color="pink" />{" "}
            </div>
           </div>
            <motion.div
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 100, damping: 10 }}
             whileTap={{ scale: 1 }}
            >
            <div class='h-64 w-64 sm:h-72 sm:w-72  bg-white rounded-[60px] hover:blur-sm'></div>
             </motion.div>
           <div 
            class='flex absolute z-10 h-fit w-36 mt-[338px] ml-[620px] items-center justify-center text-base md:ml-12 md:mt-[1390px] lg:ml-14 lg:mt-[1380px] sm:ml-[70px] sm:mt-[1610px] sm:text-xl'> 
            <button 
            class="hover-2"
            >
              Star Wars Library Documentation App               
              <div>(in development)</div>
            </button> 
           </div>
            <div class='flex flex-col absolute z-10 h-fit w-36 mt-[428px] ml-[624px] items-center justify-center text-sm md:ml-12 md:mt-[1460px] lg:ml-14 lg:mt-[1460px] sm:ml-[70px] sm:mt-[1740px]'
            >
              <div class='w-fit mr-1 mb-3 mt-1 bg-purple-500 text-white rounded'> Used Techs </div>
            <div class='grid gap-3 grid-cols-4'>
             <SiJavascript class='bg-black 3xl:h-fit' size="2em" color="yellow" />{" "}
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
             <div class='h-64 w-64 sm:h-72 sm:w-72  bg-white rounded-[60px] hover:blur-sm'></div>
            </motion.div>
           <div 
            class='flex absolute z-10 h-fit w-36 mt-[82px] ml-14 items-center justify-center sm:ml-[70px] sm:mt-14'> 
            <button onClick={ () => {
                  window.location.href='https://github.com/developedbyven/Developer-Portfolio-website'
                    }} 
            class="hover-2 sm:text-2xl"
            >
             Developer Portfolio Website  
            </button>
            </div>
            <div class='flex flex-col absolute z-10 h-fit w-36 mt-[156px] ml-14 items-center justify-center text-sm sm:ml-[80px] sm:mt-[180px] sm:text-xl'
            >
              <div class='bg-purple-500 text-white w-fit mb-3 rounded'> Used Techs </div>
              <div class='grid grid-cols-3 gap-2'>
             <SiJavascript class='bg-black sm:text-lg' size="2em"  color="yellow" />{" "}
             <GrReactjs class='sm:text-lg sm:h-fit sm:w-fit' size="2em" color="purple" />{" "}
             <SiTailwindcss class='sm:text-lg sm:h-fit sm:w-fit' size="2.2em" color="cyan" />{" "}
             </div> 
           </div>
            </div>   
          </motion.div>
          </div>         
        </div>    
      </div>
  </div>
    );
}

export default Portfolio;