import React from 'react'
//ICONS
import { FaDev, FaGithub, 
         FaInstagram, FaLinkedin } from 'react-icons/fa'

export const FooterIcons = () => {
  return (

<div class="flex absolute text-white right-[130px] 3xl:bottom-12 2xl:bottom-10 2xl:right-[68px]">
 <div
  class=
  "grid grid-cols-4 items-center gap-10 w-96 h-12"
  >
    <div 
     onClick={() =>
      { window.location.href= "https://github.com/developedbyven"}}
    >
      <button> 
        <FaGithub class='hover:text-black' size={29}/>
      </button>
    </div>
    <div 
        onClick={() =>
         { window.location.href= "https://github.com/developedbyven"}}
     >
      <button> 
        <FaDev class='hover:text-black' size={29}/>
      </button> 
    </div>
    <div 
         onClick={() =>
        { window.location.href= "https://github.com/developedbyven"}}
     >
       <button> 
          <FaInstagram class='hover:text-black' size={29}/>
       </button>
    </div>
    <div 
         onClick={() =>
         { window.location.href= "https://github.com/developedbyven"}}
     >
        <button> 
          <FaLinkedin class='hover:text-black' size={29}/>
        </button>
     </div>
 </div>        
</div>
  )
}
