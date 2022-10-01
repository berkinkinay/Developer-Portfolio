import React from 'react'
import { FaGithub, FaLinkedin, FaDev, FaInstagram } from 'react-icons/fa'

const Lastpart = () => {
  return (
   
<div class='text'>
<div 
  class=
 'flex h-fit px-8 rounded-md ml-14 mt-14 absolute z-10 w-fit text-gray-400 hover:text-zinc-900 text-xl 2xl:text-lg xl:text-base font-bold lg:hidden'
  >
   <button className='text'>berkinkinay.dev</button> </div> 
   <div
    class=
    'flex h-36 w-full text-white bg-purple-900 items-center justify-center xl:hidden lg:hidden'
    >  
   <div 
    class=
    'flex h-36 w-36 ml-[208px]'
    >   
    <div class='h-8 w-fit flex absolute items-center 3xl:left-[490px] 2xl:left-[380px] mt-14 justify-center'>
      <div class='text-sm'> © 2022 Copyright. All Rights Reserved. </div></div>
     <div
      class=
      'gird grid-cols-1 h-fit w-fit 2xl:text-xs font-light text-sm mt-7'
      > 
      <div class='mb-4'> Links</div>
        <div class='grid grid-cols-2 gap-4 underline italic'
         >
          <ul class='underline hover:text-gray-400'>
             <li> <a href='/'>About me</a></li> </ul>
         <div class='hover:text-gray-400' >
           <ul class='ml-2'>
              <li> <a href='/Portfolio'> Portfolio </a></li>
           </ul> 
         </div>
         <div class='hover:text-gray-400' >
           <ul class=''>
              <li> <a href='/'> Contact </a></li>
           </ul> 
         </div>
       </div> 
      </div>
    </div>
   <div 
     class=
     'flex h-36 w-48 absolute 3xl:right-[310px] 2xl:right-[200px] items-center justify-center'
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
          <FaGithub class='hover:text-black' size={23}/>
        </button> 
     </div>
     <div 
       onClick={() =>
       { window.location.href= ""}}>
        <button> 
          <FaDev class='hover:text-black' size={23}/>
        </button> 
     </div>
     <div 
       onClick={() =>
       { window.location.href= "https://www.instagram.com/berkinkinay/"}}
       >
        <button> 
          <FaInstagram class='hover:text-black' size={23}/>
        </button> 
     </div>
     <div 
       onClick={() =>
       { window.location.href= "https://www.linkedin.com/in/berkin-k%C4%B1nay-04a137228/"}}
       >
        <button> 
          <FaLinkedin class='hover:text-black' size={24}/>
        </button> 
     </div>
    </div>
   </div>
 </div>
</div>
  )
}

export default Lastpart
