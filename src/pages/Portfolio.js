import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTailwindcss,
} from 'react-icons/si';
import { FaConnectdevelop } from 'react-icons/fa' 
import { GrReactjs } from 'react-icons/gr';
import { SiVuedotjs, SiTypescript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb'
import '../Logo.css'; 

const Portfolio = () => {
    return (      

  <div
   class='text'>   
      <div 
       class=
       'flex h-screen 2xl:h-screen w-full bg-zinc-900 items-center justify-center lg:h-[1720px] md:h-[1700px] md:w-[800px]'
       > 
       <div 
        class=
       'flex h-[730px] w-full bg-zinc-900 items-center justify-center'
        >
          <div className='App'>
            <div className='App-header'>
              <div class='w-fit h-fit flex absolute top-24 2xl:top-4 ml-[852px] rounded-full md:ml-[820px] lg:mr-4'
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
         'flex h-[540px] w-[820px] items-center justify-center text-black'
          >
          <motion.div
            animate={{ y: 50 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
           >
           <div class='grid grid-cols-3 gap-2 h-[full] w-full rounded-[70px] ml-4 lg:grid lg:grid-cols-1'
           >
           <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileTap={{ scale: 1 }}
           > 
            <div class='h-64 w-64 flex bg-white rounded-[50px] hover:blur-sm'> </div>
            </motion.div>
    
            <motion.div
             whileHover={{ scale: 1.1 }}  
             transition={{ type: "spring", stiffness: 100,  duration: 0.2 }}
             whileTap={{ scale: 1 }}
            >
            <div class='h-64 w-64 flex bg-white rounded-[50px] hover:blur-sm'>
              
               </div>
            </motion.div>
            <div 
            class='flex absolute z-10 h-fit w-36 mt-[74px] ml-80 md:ml-12 md:mt-[600px] items-center justify-center lg:ml-14 lg:mt-[590px]'> 
            <button 
            class="hover-2"
            >
                Coffe Store App
              <div>(in development)</div>
            </button> 
            </div>
            <div class='flex absolute z-10 h-fit w-36 mt-[150px] ml-80 items-center justify-center text-xs md:ml-12 md:mt-[670px] lg:ml-14 lg:mt-[670px]'
            >
              Used Techs 
             <SiJavascript class='bg-black' size="1.7em" color="yellow" />{" "}
             <GrReactjs size="2.2em" color="purple" />{" "}
             <SiTailwindcss size="2.3em" color="cyan" />{" "} 
           </div>
            
           <div 
            class='flex absolute z-10 h-fit w-36 mt-[70px] ml-[596px] md:ml-12 md:mt-[860px] items-center justify-center lg:ml-14 lg:mt-[850px]'> 
            <button href=""
            class="hover-2 text-base"
            >
               Music Player & Library App
              <div>(in development)</div>
            </button> 
            </div>
            <div class='flex absolute z-10 h-fit w-36 mt-[144px] ml-[598px] items-center justify-center text-xs md:ml-12 md:mt-[940px] lg:ml-14 lg:mt-[940px]'
            >
              <div class='w-24'> Used Techs </div>
             <SiTypescript class='bg-white' size="2.2em" color="blue" />{" "}
             <GrReactjs size="2.5em" color="purple" />{" "}
             <TbApi size="3.2em" color="purple" />{" "}
             <SiTailwindcss size="2.3em" color="cyan" />{" "} 
           </div>
            
            <motion.div
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 100, damping: 10 }}
             whileTap={{ scale: 1 }}
            > 
             <div class='h-64 w-64 bg-white rounded-[60px] hover:blur-sm'></div>
            </motion.div>
  
            <div 
            class='flex absolute z-10 h-fit w-36 mt-[330px] ml-14 items-center justify-center'> 
            <button 
            class="hover-2"
            >
              Chatting App
              <div>(in development)</div>
            </button> 
            </div>
            <div class='flex absolute z-10 h-fit w-36 mt-[404px] ml-14 items-center justify-center text-xs'
            >
              Used Techs 
             <SiJavascript class='bg-black' size="1.7em" color="yellow" />{" "}
             <SiVuedotjs size="2.2em" color="green" />{" "}
             <SiTailwindcss size="2.3em" color="cyan" />{" "} 
           </div>
            
           <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileTap={{ scale: 1 }}
           > 
           <div class='h-64 w-64 bg-white rounded-[60px] hover:blur-sm'></div>
            </motion.div>
            <div 
            class='flex absolute z-10 h-fit w-36 mt-[338px] ml-80 items-center justify-center lg:ml-14 lg:mt-[1120px]'>
            <button onClick={() => {
             window.location.href= "https://github.com/developedbyven/Vue-Game-XvsO"
             }}
            class="hover-2"
            > 
              XvsO Game App 
            </button> 
            </div>
            <div class='flex absolute z-10 h-fit w-36 mt-[409px] ml-80 items-center justify-center text-xs md:ml-12 md:mt-[1190px] lg:ml-14 lg:mt-[1190px]'
            >
              Used Techs 
             <SiJavascript class='bg-black' size="1.7em" color="yellow" />{" "}
             <SiVuedotjs size="2.2em" color="green" />{" "}
             <SiTailwindcss size="2.3em" color="cyan" />{" "} 
           </div>
            
            <motion.div
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 100, damping: 10 }}
             whileTap={{ scale: 1 }}
            >
            <div class='h-64 w-64 bg-white rounded-[60px] hover:blur-sm'></div>
             </motion.div>
           <div 
            class='flex absolute z-10 h-fit w-36 mt-[329px] ml-[590px] items-center justify-center md:ml-12 md:mt-[1390px] lg:ml-14 lg:mt-[1380px]'> 
            <button 
            class="hover-2 text-base"
            >
              Star Wars Library Documentation App               
              <div>(in development)</div>
            </button> 
           </div>
            <div class='flex absolute z-10 h-fit w-36 mt-[408px] ml-[598px] items-center justify-center text-xs md:ml-12 md:mt-[1460px] lg:ml-14 lg:mt-[1460px]'
            >
              <div class='w-24'> Used Techs </div>
             <SiJavascript class='bg-black h-fit' size="2.9em" color="yellow" />{" "}
             <GrReactjs size="2.9em" color="purple" />{" "}
             <TbApi size="3.2em" color="purple" />{" "}
             <SiTailwindcss size="2.9em" color="cyan" />{" "} 
           </div>
             <motion.div
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 100, damping: 10 }}
             whileTap={{ scale: 1 }}
            >
             <div class='h-64 w-64 bg-white rounded-[60px] hover:blur-sm'></div>
             </motion.div>
             <div 
            class='flex absolute z-10 h-fit w-36 mt-[74px] ml-14 items-center justify-center'> 
            <button onClick={ () => {
                  window.location.href='https://github.com/developedbyven/Developer-Portfolio-website'
                    }} 
            class="hover-2"
            >
             Developer Portfolio Website  
            </button> 
            </div>
            <div class='flex absolute z-10 h-fit w-36 mt-[146px] ml-14 items-center justify-center text-xs'
            >
              Used Techs 
             <SiJavascript class='bg-black' size="1.7em" color="yellow" />{" "}
             <GrReactjs size="2.4em" color="purple" />{" "}
             <SiTailwindcss size="2.3em" color="cyan" />{" "} 
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