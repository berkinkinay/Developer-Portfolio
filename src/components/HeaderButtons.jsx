import React from 'react'
//ANIMATION AND TOOLTIPS
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
//ICONS
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';

export const HeaderButtons = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (

    <div class="grid grid-cols-3 mt-1 gap-3">
        <motion.div
     whileHover={{ scale: 1.1 }}
     transition={{ duration: 0.2 }}
    >
     <a 
      class="hover:animate-pulse"
      target="_blank"
      rel="noreferrer"  
      href="https://github.com/developedbyven">     
     <LightTooltip disableFocusListener disableTouchListener title="My Github">
        <button> <FaGithub class='hover:text-zinc-500' size={30}/> </button> 
     </LightTooltip>
     </a>
   </motion.div>
   <motion.div
     whileHover={{ scale: 1.1 }}
     transition={{ duration: 0.2 }}
    >                  
    <a 
      class="hover:animate-pulse"
      target="_blank"
      rel="noreferrer" 
      href="/">  
      <LightTooltip disableFocusListener disableTouchListener title="Dev.to profile">
        <button> <FaDev class='hover:text-zinc-500' size={30}/> </button> 
      </LightTooltip>
    </a>
    </motion.div> 
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >      
     <a
      class="hover:animate-pulse" 
      target="_blank"
      rel="noreferrer" 
      href='https://www.linkedin.com/in/berkin-k%C4%B1nay-04a137228/'>
        <LightTooltip disableFocusListener disableTouchListener title="Linkedin profile">
           <button> <FaLinkedin class='hover:text-zinc-500' size={30}/> </button>
        </LightTooltip>
    </a>   
    </motion.div> 
    </div>
  )
};