  import React from 'react';
  import bgImage from '../assets/hello.mp4';
  import {motion} from 'framer-motion'
  import {FiGithub} from 'react-icons/fi'

  const Moreinfo = () => {
    return (
    
<div className='text' id='hello'>
  <div
   class=
   'flex h-screen w-full 2xl:h-screen 2xl:w-full bg-zinc-900 text-white items-center xl:flex xl:flex-col lg:h-[1200px] sm:flex justify-center xs:flex sm:h-[1300px] xs:h-[1600px] sm:w-full'>
    <div 
     class=
     'flex absolute items-center justify-center xl:flex xl:flex-col xl:items-center xl:justify-center h-[520px] xl:h-screen w-full xl:mt-[380px] lg:mt-[800px] lg:h-[1400px] sm:mt-[400px] bg-gray-800 md:h-[980px] sm:flex sm:h-[1200px]'
    >              
     <div 
      class=
      'flex! mx-12 w-1/2 h-[410px] mt-2 mr-6 3xl:ml-6 2xl:mr-12 xl:mt-24 xl:mr-1 xl:h-[700px] lg:h-[500px] lg:ml-24 bg-slate-600 rounded-2xl shadow-2xl xs:mr-1 xs:ml-1 xs:mt-1 xs:w-80 sm:flex xs:h-[440px] xs:mb-64 sm:mr-1 sm:ml-1 sm:mt-1 sm:w-80 sm:h-[440px]'
     >
      <div    
       class=
       'flex flex-col xl:justify-center xl:items-center 3xl:mx-8 gap-8 2xl:gap-5 h-56 w-[900px] 2xl:mr-36 items-center justify-center mt-[75px] xl:h-64 xl:mb-24 xs:gap-0 xs:mx-1 xs:mb-72 xs:w-full sm:gap-0 sm:mx-1 sm:flex sm:mb-72 sm:w-full'
      >
       <p
        class=
       'flex w-full text-slate-400 font-semibold text-xl 2xl:text-lg mt-5 uppercase xs:flex xs:mt-2 xs:mb-4 xs:indent-6 sm:flex sm:mt-2 sm:mb-4 sm:indent-6'
       >
         dev. <FiGithub class='ml-1' color='black' size='1.8rem' />
       </p>
       <div 
        class=
        'w-fit xl:w-fit text-slate-900 font-semibold xl:text-sm xl:mr-[400px] text-xl 2xl:text-lg mr-2 sm:right-24 2xl:mr-48 xs:flex xs:w-64 xs:mr-1 sm:flex sm:w-64 sm:mr-1'
         > 
          I live in İzmir and I'm 23. Graduated from Computer Programming (Computer Science) and
          I really love computer science, doing my job with learning new features about Software Development🙍‍♂️   
       </div> 
        <div
         class=
         'mt-2 mr-24 xl:w-fit text-xl 2xl:text-lg xl:text-sm xl:mr-96 text-slate-300 font-semibold 2xl:mr-56 xs:flex xs:w-64 xs:mr-1 xs:mt-6 sm:flex sm:w-64 sm:mr-1 sm:mt-6'
         >
          I'm working hard between X and Y coordinate two-dimensional space plane in the web, you know what am I talking about 🥰🖥️
        </div>
        <div 
         class=
         'text-xl xl:w-fit 2xl:text-lg xl:text-sm xl:mr-96 text-slate-200 mr-5 font-semibold 2xl:mr-56 xs:flex xs:w-64 xs:mr-1 xs:h-fit xs:mt-8 sm:flex sm:w-64 sm:mr-1 sm:h-fit sm:mt-8'
        >
          I'm working for the best UI and UX experience.
          Everything starts as an idea and successfully executing the process of doing it
          all by writing code is just one of the best things I’ve ever done 💫
       </div>
      </div>
     </div>
     <div
      class=
      'flex mb-2 right-24 3xl:w-[800px] 3xl:h-[440px] 2xl:w-[600px] 2xl:h-[600px] mt-4 mr-4 rounded-2xl items-center justify-center lg:ml-36 sm:h-1 sm:flex sm:w-[360px] sm:mx-12 sm:mt-36 xs:mt-0'
     > 
      <motion.div
         whileHover={{ y: -17, transition: { duration: 0.1 }, }}  
         transition={{ type: "spring", stiffness: 50,  duration: 0.5 }}
      >   
       <div class='rounded-2xl shadow-xl' autoPlay loop muted>
         <video class='rounded-2xl mb-1' autoPlay loop muted src={bgImage} type="hello/mp4"/>
       </div>
      </motion.div>
    </div>
     <div class='flex absolute w-[650px] h-fit 3xl:bottom-8 3xl:right-[118px] 2xl:right-[16px] 2xl:bottom-24 xs:flex xs:absolute xs:left-14 xs:text-xs xs:w-72 xs:h-fit xs:mb-10 sm:flex sm:absolute sm:left-[80px] sm:text-xs sm:w-72 sm:h-fit sm:mb-10'>
       <p 
        class=
        'flex absolute w-fit h-fit text-slate-300 text-base 2xl:mt-8 xl:mt-6 sm:hidden'
        >
          Dev note: lol trying to give a pose but I'can't :) and there is an object here that you can interact.</p>
     </div>
    </div>
  </div>
</div>
    )
  }

  export default Moreinfo;