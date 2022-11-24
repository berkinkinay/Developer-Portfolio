import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatePages from './AnimatePages';
import { HeaderButtons } from './HeaderButtons';

const Nav = () => {
    const activeLink = 'font-bold transition-all cursor-pointer duration-100 underline decoration-slate-400'
    const normalLink = 'font-bold hover:text-slate-300'

  return (

<AnimatePages>
<div>
 <a 
  href="mailto:helloberkin@gmail.com" 
  rel="noreferrer"  
  target="_blank"
  class="flex absolute left-20 text-xl 2xl:text-lg
         xl:text-base hover:underline sm:mb-20 top-8
         hover:decoration-pink-500 font-bold"
  >
     berkinkinay.dev
 </a>  
</div>  
 <div class="flex absolute w-[680px] h-16 right-5 top-4 bg-black
             items-center justify-center text-white"
  > 
   <div class="grid grid-cols-5 gap-4 w-fit h-fit"
    >
     <NavLink  
       to= '/Aboutmenew'
       className={({ isActive }) => (isActive ? activeLink : normalLink)}
      > 
         About me 
     </NavLink>
     <NavLink  
       to= '/Portfolio' 
       className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Portfolio
     </NavLink>
     <a 
      href="mailto:helloberkin@gmail.com"
      rel="noreferrer"  
      target="_blank"
      class="font-bold hover:text-slate-300"
      > 
        Contact
      </a>
     <a 
      href="https://developer-workspace.vercel.app/"
      rel="noreferrer"  
      target="_blank"
      class="font-bold hover:text-slate-300"
      >
       Workspace 
     </a>
      <div class="ml-6 text-slate-300 font-normal text-xl">I</div>
   </div>
   <div class="">
        <HeaderButtons />
    </div> 
 </div>
 </AnimatePages>
  )
}

export default Nav;