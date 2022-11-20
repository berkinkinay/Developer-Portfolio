import React from 'react'
import { FaGithub, FaLinkedin, FaDev, FaInstagram } from 'react-icons/fa'

const Lastpart = () => {
  return (
   
<div class='text'>
   <div 
    class='flex h-fit px-8 rounded-md ml-14 mt-14 absolute z-10 w-fit text-slate-400
         hover:text-zinc-500 text-xl 2xl:text-lg xl:text-base xl:flex xl:absolute 
           xl:left-[480px] xl:mt-12 xl:w-fit xl:h-fit font-bold sm:flex sm:w-fit
           sm:absolute sm:left-[70px] sm:mt-4 xs:ml-[40px]'
    >
      <button className='text hover:underline hover:decoration-pink-500 sm:mb-20' onClick={() => {
               window.location.href="https://berkinkinay.dev/"
               }}
              >   berkinkinay.dev
      </button>
   </div> 
   <div class='flex absolute bottom w-full h-36 xl:flex xl:h-96 xl:w-full xl:mt-0 xl:items-center xl:justify-center xl:absolute '>
   <div
    class='flex absolute bottom-0 h-36 w-full text-white bg-purple-900 items-center justify-center 
           xl:flex xl:absolute xl:bottom-0 xl:h-96 xl:w-full sm:flex sm:w-full sm:h-[400px] sm:mt-[350px] sm:justify-center sm:items-center'
    >  
       <div class='3xl:hidden sm:flex! sm:absolute text-sm sm:flex sm:left-24 sm:mt-56 sm:w-56'>© 2022 Copyright. All Rights Reserved.</div>
   <div
    class=
    'sm:flex sm:absolute sm:h-36 sm:w-36 sm:left-0'
    >   
     <div class='sm:hidden h-8 w-fit absolute items-center 3xl:left-[470px]
                 2xl:left-[380px] 3xl:mt-[37px] 2xl:mt-[30px] justify-center
                 sm:w-fit sm:h-fit sm:absolute sm:pr-[900px] sm:mt-48'
                 >
        <div class='sm:hidden text-sm xl:flex xl:absolute xl:left-[140px] xl:mt-36 xl:w-80 xl:h-fit'>© 2022 Copyright. All Rights Reserved.</div>
     </div>
     <div
      class='gird grid-cols-1 3xl:ml-[370px] xl:ml-36 h-fit w-fit 2xl:text-xs 2xl:ml-[400px]
             font-light text-sm mt-0 xl:bottom-48 xl:absolute xl:left-[420px] xl:w-fit
             sm:flex sm:text-base sm:absolute sm:bottom-8 sm:left-0 sm:w-full xs:ml-[120px]'
      > 
      <div class='mb-4 sm:flex sm:absolute sm:bottom-14 sm:h-12 sm:mb-16'> Links</div>
        <div class='grid grid-cols-2 gap-4 underline italic'
         >
          <ul class='underline hover:text-gray-400 w-1'>
             <li class='w-20'> <a class='w-1' href='/'>About me</a></li> </ul>
         <div class='hover:text-gray-400 w-1'>
           <ul class='ml-2 w-fit'>
              <li> <a class='flex w-1 absolute 3xl:right-[868px] 2xl:right-[675px] underline' href='/Portfolio'> Portfolio </a></li>
           </ul> 
         </div>
         <div class='hover:text-slate-100 sm:mb-10' >
           <ul class=' w-fit'>
              <li 
               class=''
               > 
                 <a href='mailto:helloberkin@gmail.com'> Contact &rarr;
                   <a 
                    class="not-italic text-xs font-extrabold hover:text-purple-500
                           text-white after:content-[''] ..."
                    href="mailto:helloberkin@gmail.com" >helloberkin@gmail.com
                  </a>
                </a>
              </li>
           </ul> 
         </div>
       </div> 
      </div>
    </div>
   <div class='flex h-36 w-48 absolute 3xl:right-[310px] 2xl:right-[180px] items-center justify-center
            3xl:mr-4 xl:flex xl:absolute xl:left-[480px] xl:mt-36 xl:w-fit xl:h-fit sm:flex
            sm:absolute sm:left-[78px] sm:mt-24 xs:left-12'
     >
     <div
      class=
      'flex 2xl:gap-16 3xl:gap-24 h-12 w-80 text-white mt-5'
      >
      <div 
       onClick={() =>
       { window.location.href= "https://github.com/developedbyven"}}
       >
       <button> 
          <FaGithub class='hover:text-black' size={25}/>
        </button> 
     </div>
     <div 
       onClick={() =>
       { window.location.href= ""}}>
        <button> 
          <FaDev class='hover:text-black' size={25}/>
        </button> 
     </div>
     <div 
       onClick={() =>
       { window.location.href= "https://www.instagram.com/berkinkinay/"}}
       >
        <button> 
          <FaInstagram class='hover:text-black' size={25}/>
        </button> 
     </div>
     <div 
       onClick={() =>
       { window.location.href= "https://www.linkedin.com/in/berkin-k%C4%B1nay-04a137228/"}}
       >
        <button> 
          <FaLinkedin class='hover:text-black' size={25}/>
        </button> 
     </div>
    </div>
   </div>
  </div>
 </div>
</div>
  )
}

export default Lastpart;