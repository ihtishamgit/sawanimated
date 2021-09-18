import React from 'react'
import img from '../Images/saw.jpg'
import { motion } from "framer-motion"
import BoxSubComp from '../Components/BoxSubComp'
const Box = () => {
    return (
        <>
      <motion.div animate={{y:300}} transition={{duration:5}} className="flex justify-center">  
      <img src={img} className="w-32 h-32 "/>
      </motion.div>
           <div className="flex flex-col justify-start overflow-hidden">
              
               <BoxSubComp/>
               <BoxSubComp/>
               </div>
            
        
        </>
    )
}

export default Box
