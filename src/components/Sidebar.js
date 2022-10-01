import React from 'react';
import { FcPortraitMode } from 'react-icons/fc';
import { FaConnectdevelop } from 'react-icons/fa'; 
import { AiTwotoneMail } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div class=''>
    <div 
     className=
    "3xl:hidden lg:fixed lg:top-4 lg:right-0 lg:h-72 lg:w-24 lg:m-0 lg:flex lg:flex-col lg:text-white lg:shadow-lg lg:bg-slate-500 lg:rounded-lg lg:flex!"
     >       
      <div class='mt-2 text-base w-12 ml-6 h-fit flex items-center justify-center'>About</div>
       <SideBarIcon icon={<FcPortraitMode size="2em" />} />
       <div class='mt-2 text-base w-12 ml-6 h-fit flex items-center justify-center'>Portfolio</div>
       <SideBarIcon icon={<FaConnectdevelop size="2em" />} /> 
       <div class='mt-2 text-base w-12 ml-6 h-fit flex items-center justify-center'>Contact</div>
       <SideBarIcon icon={<AiTwotoneMail size="2em" />} />
    </div>
    <div 
     className=
    "fixed top-4 right-0 h-72 w-24 m-0 flex flex-col text-white shadow-lg bg-slate-500 rounded-lg 3xl:hidden hidden"
     >       
      <div class='mt-2 text-base w-12 ml-6 h-fit flex items-center justify-center'>About</div>
       <SideBarIcon icon={<FcPortraitMode size="2em" />} />
       <div class='mt-2 text-base w-12 ml-6 h-fit flex items-center justify-center'>Portfolio</div>
       <SideBarIcon icon={<FaConnectdevelop size="2em" />} /> 
       <div class='mt-2 text-base w-12 ml-6 h-fit flex items-center justify-center'>Contact</div>
       <SideBarIcon icon={<AiTwotoneMail size="2em" />} />
    </div>
    </div>
  )
}

const SideBarIcon = ({ icon }) => (
<div className='sidebar-icon group'>
    {icon}
</div>
)

export default Sidebar;
