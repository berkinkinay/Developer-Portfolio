  import React from 'react';
  import bgImage from '../assets/hello.mp4';
  import {motion} from 'framer-motion'
  import {FiGithub} from 'react-icons/fi'

  const Moreinfo = () => {
    return (
    
<div className='text' id='hello'>
  <div
   class=
   'flex h-screen w-full 2xl:h-screen 2xl:w-full bg-zinc-900 text-white items-center xl:flex xl:flex-col justify-center'>
    <div 
     class=
     'flex absolute items-center justify-center xl:flex xl:flex-col xl:items-center xl:justify-center h-[520px] xl:h-screen w-full xl:mt-[380px] lg:mt-[800px] bg-gray-800 md:h-[980px] sm:w-full'
    >              
     <div 
      class=
      'flex! mx-12 w-1/2 1/3 h-[410px] mt-2 mr-6 3xl:ml-6 2xl:mr-12 xl:mt-24 xl:mr-1 xl:h-[700px] lg:ml-24 sm:h-[700px] sm:w-64 sm:flex! bg-slate-600 rounded-2xl shadow-2xl'
     >
      <div    
       class=
       'flex flex-col xl:justify-center xl:items-center 3xl:mx-8 gap-8 2xl:gap-5 h-56 w-[900px] 2xl:mr-36 items-center justify-center mt-[75px] xl:h-64 xl:mb-24 sm:mx-1 sm:mt-36'
      >
       <p 
        class=
       'flex w-full text-slate-400 font-semibold text-xl 2xl:text-lg mt-5 sm:mr-5 sm:flex sm:right-24 uppercase'
       >
         dev. <FiGithub class='ml-1' color='black' size='1.8rem' />
       </p>
       <div 
        class=
        'w-fit xl:w-fit text-slate-900 font-semibold xl:text-sm xl:mr-[400px] lg:mr-[500px] text-xl 2xl:text-lg mr-2 sm:mr-5 sm:flex sm:right-24 2xl:mr-48' 
         > 
          I live in İzmir and I'm 23. Graduated from Computer Programming (Computer Science) and
          I really love computer science, doing my job with learning new features about Software Development. 🙍‍♂️
       </div> 
        <div
         class=
         'mt-2 mr-24 xl:w-fit text-xl 2xl:text-lg xl:text-sm xl:mr-96 lg:mr-[500px] text-slate-300 font-semibold sm:mt-36 sm:w-fit 2xl:mr-56'
         >
          I'm working hard between X and Y coordinate two-dimensional space plane in the web, you know what am I talking about 🥰🖥️
        </div>
        <div 
         class=
         'text-xl xl:w-fit 2xl:text-lg xl:text-sm xl:mr-96 lg:mr-[500px] text-slate-200 mr-5 font-semibold sm:mr-24 sm:mt-72 sm:w-fit 2xl:mr-56'
        > 
          I'm working for the best UI and UX experience.
          Everything starts as an idea and successfully executing the process of doing it
          all by writing code is just one of the best things I’ve ever done. 💫
       </div>
      </div>
     </div>  
     <div 
      class=
      'flex mb-2 right-24 3xl:w-[800px] 3xl:h-[440px] 2xl:w-[600px] 2xl:h-[600px] mt-4 mr-4 rounded-2xl items-center justify-center lg:ml-36 sm:h-24 sm:w-fit'
     > 
      <motion.div
         whileHover={{ y: -17, transition: { duration: 0.1 }, }}  
         transition={{ type: "spring", stiffness: 50,  duration: 0.5 }}
      >   
       <div class='rounded-2xl shadow-2xl' autoPlay loop muted>
         <video class='rounded-2xl mb-1 shadow-2xl' autoPlay loop muted src={bgImage} type="hello/mp4"/>
       </div>
      </motion.div>       
    </div>
     <div class='flex absolute w-[650px] h-fit 3xl:bottom-8 3xl:right-[118px] 2xl:right-[16px] 2xl:bottom-24'>
       <p 
        class=
        'flex absolute w-fit h-fit text-slate-300 text-base 2xl:mt-8 xl:mt-6'
        >
          Dev note: lol trying to give a pose but I'can't :) and there is an object here that you can interact.</p>
     </div>
    </div>  
  </div>
</div>
    )
  }

  export default Moreinfo;
