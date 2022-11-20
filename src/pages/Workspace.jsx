import React from 'react'
import { motion } from 'framer-motion';

export const Workspace = () => {
  return (

<div className='text'>
<div class="w-full h-fit flex items-center justify-center mt-24">
  <button
   class='flex lg:hidden absolute 3xl:left-[690px] 3xl:mt-6 2xl:mt-12 2xl:left-[500px]
         w-fit h-36 items-center justify-center xl:flex xl:w-[full]
         xl:absolute xl:left-[290px] text-white text-sm'
   >
    <a class=''target="_blank" rel="noreferrer" href='https://developer-workspace.vercel.app/'>
    <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileTap={{ scale: 1 }}
           >
        <div 
         class='flex items-center justify-center ml-5 h-48 w-[520px] rounded-[60px]
                text-black bg-slate-400 hover:bg-black hover:duration-150
                drop-shadow-lg hover:drop-shadow-lg'
         >
      <div
       class="text-base sm:text-2xl"
          >
          <span class="before:block before:absolute before:-inset-3 before:-skew-x-12
                      before:bg-sky-600 before:rounded-sm relative inline-block mb-6">
              <span class="relative text-white font-normal 3xl:text-lg 2xl:text-sm"> Developer Workspace </span>
          </span>
       <div class='text-purple-500 text-semibold 3xl:text-lg 2xl:text-base'>Click here to learn more</div>
      </div> 
      </div>
      </motion.div>
    </a>
  </button> 
 </div>
</div>
  )
}