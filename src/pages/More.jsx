import React from 'react'
//ICONS
import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
//ASSETS
import Hello from '../assets/hello.mp4';

const More = () => {

  return (
 
 <div class="text" id='hello'>
    <div
     class="more-1"
     >
       <div 
        class="more-2"
        >
          <div class="more-3">
            <div 
             class="flex flex-col gap-6 text-lg 2xl:text-base
                  bg-black h-[424px] rounded-lg ml-2 drop-shadow-lg"
             >
                <div class="flex w-fit text-slate-300 font-semibold text-xl 2xl:text-lg
                            mt-5 xs:flex xs:mt-2 xs:mb-4 xs:indent-6 sm:flex indent-5
                            sm:mt-2 sm:mb-4 sm:indent-6 animate-pulse"
                >
                   Dev. <FiGithub class='ml-1 animate-pulse' color='white' size='1.8rem' />
                </div>
                <div class="flex w-fit xl:w-fit text-slate-300 font-semibold xl:text-sm
                            text-xl 2xl:text-lg mx-2"
                >
                    I live in İzmir and I'm 23. Graduated from Computer Programming 
                    (Computer Science) and I really love computer science, doing my
                    job with learning new features about Software Development🙍‍♂️  
                </div>
                <div class="flex w-fit xl:w-fit text-slate-400 font-semibold xl:text-sm
                            text-xl 2xl:text-lg mx-3"
                >
                    I'm working hard between X and Y coordinate two-dimensional space plane
                    in the web, you know what am I talking about🖥️
                </div>
                <div class="flex w-fit xl:w-fit text-slate-500 font-semibold xl:text-sm
                            text-xl 2xl:text-lg mx-2"
                >
                    I'm working for the best UI and UX experience. I can build, develop,
                    optimize your applications and provide high-performance developments.
                     This is my responsibility as a developer💫
                </div>
                <div class="flex w-fit xl:w-fit text-slate-600 font-semibold xl:text-sm
                            text-xl 2xl:text-lg mx-2"
                >
                   I always work hard and do my best. I love computer science. As you can see
                   my specializes in developing React apps. I can develop your future ideas🥰
                </div>
            </div>
            <div
             class=
             "flex justify-center h-96 mr-2 rounded-lg drop-shadow-lg 2xl:mb-10 3xl:mb-28"
             >  
               <motion.div
                    whileHover={{ y: -12, transition: { duration: 0.1 }, }}  
                    transition={{ type: "spring", stiffness: 80,  duration: 0.5 }} 
               >   
                <div class="">
                     <video class='rounded-2xl mb-1' autoPlay loop muted src={Hello} type="hello/mp4"/>
                </div>
             </motion.div>
            </div>
            <div class='more-5'>
                <p 
                  class=
                 'flex absolute w-[690px] h-fit text-slate-300 text-base 2xl:w-fit 2xl:mt-1 xl:mt-6 sm:hidden'
                 >
                    Dev note: lol trying to give a pose but I'can't :) and you can contact me at
                 <a class="ml-2 3xl:text-lg 2xl:text-base font-semibold text-gray-500
                          hover:text-white w-fit flex" rel="noreferrer" href="https://github.com/developedbyven"
                 >
                     helloberkin@gmail.com
                 </a> 
                </p>
            </div>
          </div>  
       </div>
    </div>
 </div>
  )
}

export default More;