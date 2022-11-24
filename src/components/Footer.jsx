import React from 'react'
import { FooterIcons } from './FooterIcons'

export const Footer = () => {
  return (

<div class='text md:hidden'>
 <div 
  class="flex absolute h-fit w-full items-center justify-center
         mt-36 xl:flex xl:absolute 2xl:h-fit 2xl:w-full"
  >
   <div
    class="flex absolute bottom-0 h-36 w-full bg-purple-900
           items-center justify-center 2xl:flex 2xl:absolute 2xl:text-sm
           xl:flex xl:absolute xl:h-48 xl:w-ful l xl:flex-col"
    >
     <div
       class=
       "grid grid-cols-4 items-center xl:flex xl:flex-col justify-center"
      >
      <button
        onClick={() => {
         window.location.href="https://berkinkinay.dev/"
        }}
        class=
        "flex absolute text-white left-24 xl:top-0 xl:left-[500px] xl:items-center xl:justify-center"
      >
         <p class="flex text-xl 2xl:text-lg xl:text-base hover:underline
                   hover:decoration-pink-500 sm:mb-20 text-bold"
          >
            berkinkinay.dev
         </p>
       </button>
       <div
        class="flex absolute font-normal text-white left-[460px] text-sm 2xl:left-[350px]
               xl:flex xl:top-10 xl:left-[440px] xl:items-center xl:justify-center"
        >
           © 2022 Copyright. All Rights Reserved.
        </div> 
        <div
         class="flex absolute h-28 w-56 text-white right-[770px] 2xl:right-[580px] text-sm"
         >
           <div class="flex flex-col w-full">
              <p class="flex text-sm mt-1 font-semibold">Links</p>
               <div 
                class=
                "grid grid-cols-2 font-semibold mt-3 gap-6 h-14 w-full items-center justify-center text-white"
               >
                 <a class="italic hover:text-black" href="/"> About me </a> 
                 <a class="italic hover:text-black" href="/Portfolio"> Portfolio </a> 
                 <a 
                  class="flex italic hover:text-black"
                  target="_blank" rel="noreferrer" 
                  href='https://developer-workspace.vercel.app'
                 >
                    Workspace
                  </a>
                 <a class="flex italic font-bold text-sky-400 text-xs hover:text-white" href="/"> helloberkin@gmail.com </a>        
                </div>
           </div>
          </div>
          <div>
            <FooterIcons />
          </div>
      </div>
    </div>
  </div>
</div>
  )
}