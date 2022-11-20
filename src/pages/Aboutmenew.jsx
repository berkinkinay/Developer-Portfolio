import React from 'react'
import { motion } from 'framer-motion';
import Typewrite from "typewriter-effect";
import Me from "../components/img/hi.png";
//ICONS
import Iconsmobile from '../components/Iconsmobile';
import { AiOutlineDownCircle } from 'react-icons/ai';
//PAGES
import Moreinfo from './Moreinfo';
import IconsDesktop from '../components/IconsDesktop';

const Aboutmenew = () => {
    return (  
    
 <div className='text'>
  <div className='Mobileview'>
   <div
     class='flex xl:flex xl:flex-col xl:items-center xl:justify-center h-screen
            2xl:h-screen w-full lg:w-full items-center justify-center text-black
           bg-zinc-900 xl:h-[1600px] md:h-[1450px] sm:h-[1890px]'
     > 
      <button 
       class='flex absolute w-6 h-6 right-8 bottom-10 animate-bounce' 
       id='/hello'
       >
        <a href='#hello'> <AiOutlineDownCircle size="2.6em" color="white" />{" "} </a> 
     </button>
    <div class= "aboutme-info">      
      <img class='about-img' src={Me} alt='' /> 
     <div 
      class='flex ml-36 w-[900px] h-[380px] 2xl:h-[380px] right-64 xl:items-center xl:justify-center
             items-center justify-center lg:mb-24 lg:ml-1 lg:w-full sm:h-72 sm:mr-1 sm:w-full'
      >
      <div 
       class='grid grid-rows-4 grid-flow-col text-white text-xl bg-zinc-900 w-fit 
              h-[378px] lg:ml-24 sm:h-96 sm:w-full xl:mr-24 2xl:mr-24 2xl:mt-4'
       >  
        <motion.div
           animate={{ x: 15 }}
           transition={{ ease: "easeOut", duration: 1.8}}  
        >
         <p class='text-3xl mt-6 2xl:text-2xl text-gray-400 font-semibold sm:w-80 sm:text-2xl'>
          Hello👋 I'm 
          <a 
           class="text-sky-500 hover:text-slate-200 after:content-[''] ..."
           rel="noreferrer"  
           href="https://www.instagram.com/berkinkinay/" target="_blank"> Berkin Kınay
          </a> a Front-End Developer from Turkey
         </p>
       <p 
        class=
        'text-slate-500 font-semibold text-xl 2xl:text-lg mt-10 '
        >  
          I Build & Develop web apps 🌐 who specializes in developing 
          <a
             class="font-bold ml-2 mr-2 text-purple-600 after:content-[''] ..."
             rel="noreferrer"  
             href="https://github.com/developedbyven" target="_blank"
             >
              React
           </a> 
           apps. I can develop your future beautiful, smooth website to bring a high quality and beautiful web experience. 
       </p>
       <p
        class=
        'mr-16 mt-10 3xl:text-lg 2xl:text-base text-slate-300'
        > 
         I am focusing on developing the new features in Software Development.
         I work on JavaScript technologies mostly.  
         I'm also improving myself about Back-End currently.
        </p>
       <p 
        class=
        'mr-12 mt-10 3xl:text-lg 2xl:text-base text-slate-300'
        > 
         I determine some main topics while doing my job something like focusing to write
         clean user interfaces, problem solving, different perspective solutions, highly
         level fast coding and using new modern technologies.     
        </p>
        </motion.div>
      </div>
     </div>
   </div>
       <div
         class='flex text-xl text-purple-600 font-medium absolute 3xl:bottom-36 2xl:bottom-[125px]
                xl:top-[1050px] lg:bottom-0 xl:mt-[100px] ml-4 lg:mt-80 lg:ml-12 md:top-[1240px]
                sm:flex sm:text-base sm:top-[1060px] sm:left-4'
          >
           <Typewrite 
             onInit=
             {(typewriter) => { 
             typewriter
             .typeString ("Another happy web landing!")
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
       class="flex h-16 w-[520px] xl:top-[900px] lg:mt-36 absolute bottom-1
              items-center justify-center rounded-[30px] md:top-[1200px] sm:hidden"
        >
          <IconsDesktop />
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