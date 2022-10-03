import React from "react";
import { motion } from "framer-motion";


const blackBox = {
    initial: {
      height: "100%",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };
  
  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 0.8],
      },
    },
  };
  
  
  
  export const Animatedloader = () => {
    // Scroll user to top to avoid showing the footer 

    React.useState(() => {
      typeof windows !== "undefined" && window.scrollTo(0);
    }, []);
  
    return (
    <div class='text'> 
    <motion.div     
        className="absolute z-10 flex items-center justify-center w-full bg-zinc-900"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.svg variants={textContainer} className="absolute z-10 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-purple-600"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            class="text-4xl 2xl:text-3xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Berkin Kınay
          </text>
        </motion.svg>
      </motion.div>
      </div>
    );
  };

  export default Animatedloader;