import React from 'react'
import { motion } from "framer-motion"
import '../App.css';

const Discription = () => {
  return (
    <div>
      <motion.h1 
        initial={{x:-1000}}
        animate={{x:0}}
        transition={{duration:1}}>Описание</motion.h1>
    
      <div id='divMotion'>
        <motion.p
          initial={{opacity:0}}
          animate={{opacity:100}}
          transition={{duration:2}}>Описание — композиционная форма, которую используют в литературоведении и лингвистике для подробной характеристики предметов или явлений.</motion.p>
      </div>

      <div id='divMotion'>
        <motion.img src='../img/spinner.jpg' id='spinner'
          initial={{rotate:0}}
          animate={{rotate:360}}
          transition={{duration:2}}/>
      </div>
    </div>
  )
}

export default Discription