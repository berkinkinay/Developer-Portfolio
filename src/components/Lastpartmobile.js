import React from 'react'

const Lastpart = () => {
  return (
   
<div class='text hidden'>
   <div
    class=
    'flex 3xl:hidden 2xl:hidden xl:hidden  h-36 w-full text-white bg-gray-600 items-center justify-center sm:flex sm:w-full sm:h-[400px] ms:flex! ms:absolute ms:mt-0 sm:justify-center sm:items-center ms:flex! xs:absolute xs:mt-0'
    >  
     <div class='sm:flex '></div>
       <div class='3xl:hidden sm:flex! sm:absolute text-sm sm:flex sm:left-[110px] sm:w-64 xs:flex! xs:absolute! xs:left-24!'>New projects will be here coming soon...</div>
       <div 
        class=
        '3xl:hidden sm:flex! sm:absolute text-sm sm:flex sm:left-[150px] sm:mt-36 sm:w-12'>
            <button className='text underline decoration-pink-500' onClick={() => {
               window.location.href= "https://berkinkinay.dev/"
               }}
              > contact me at  helloberkin@gmail.com</button> 
       </div>
       <div class='3xl:hidden sm:flex! sm:absolute text-sm sm:flex sm:left-[130px] sm:mt-12 sm:w-56'>For more, follow my socials.</div>
    </div>
 </div>
  )
}

export default Lastpart;