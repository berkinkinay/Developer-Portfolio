import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatePages from './AnimatePages';
import { HeaderButtons } from './HeaderButtons';

const Nav = () => {
  return (

<AnimatePages>
<div>
 <a 
  href="https://berkinkinay.dev/"
  rel="noreferrer"  
  target="_blank"
  class="flex absolute left-20 text-xl 2xl:text-lg
         xl:text-base hover:underline sm:mb-20 top-8
         hover:decoration-pink-500 font-bold"
  >
     berkinkinay.dev
 </a>  
</div>  
 <div class="flex absolute w-[610px] h-16 right-4 top-4 bg-black
             items-center justify-center text-white rounded-2xl
             drop-shadow-lg backdrop-blur-lg"
  > 
   <div class="grid grid-cols-5 gap-2 w-fit h-fit"
    >
      <a
       rel="noreferrer"
       href = "/" class='Pointer'
       >
        <p class=''>About me</p>
      </a>
      <a
       rel="noreferrer"  
       href= "/Portfolio" class='Pointer'
       >
        <p>Portfolio</p>
      </a>
     <a 
      href="mailto:helloberkin@gmail.com"
      rel="noreferrer"
      target="_blank"
      class="font-bold hover:underline hover:text-slate-300"
      > 
        Contact
      </a>
     <a 
      href="https://developer-workspace.vercel.app/"
      rel="noreferrer"  
      target="_blank"
      class="font-bold hover:underline hover:text-slate-300"
      >
       Workspace 
     </a>
      <div class="ml-9 text-slate-300 font-normal text-xl">I</div>
   </div>
   <div class="">
        <HeaderButtons />
    </div> 
 </div>
 </AnimatePages>
  )
}

export default Nav;