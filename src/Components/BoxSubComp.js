import React from 'react'
import { motion } from "framer-motion"
import cloudss from '../Images/co.png'
const BoxSubComp = () => {
    return (
        <>
           <div className="flex"> 
               <motion.div className="w-1/2" animate={{x:600}} transition={{duration:5}}>
                   <img src={cloudss} />
                   </motion.div>
               
                   <motion.div className="w-1/2" animate={{x:-600}} transition={{duration:5}}>
                   <img src={cloudss} />
                   </motion.div>
                   </div>  
        </>
    )
}

export default BoxSubComp
