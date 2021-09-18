import React from 'react'
import { motion } from "framer-motion"
import img from '../Images/ne.png'
const Card = () => {
    const cardVariant ={
        init:{
            rotateY: -60
           
        },
        final:{
            rotateY: 0
        }
      }
    return (
        <>
       
          <main class="flex  items-center justify-center bg-black h-full w-full p-4" >

              
	<motion.div
    variants={cardVariant}
    animate="final"
    initial='init'
    transition={{duration:6}}
		class="overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 w-72 h-96 object-cover text-white">
		<img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="desktop" />
		
	</motion.div>
    <div className="absolute text-white flex flex-col"> 
    <motion.div animate={{y:50}} transition={{duration:5}}  className="flex space-x-24 space-y-24"> 
<img   src={img} className="h-44 w-44"/>
<img  src={img} className="h-32 w-32"/>
</motion.div>
<motion.div animate={{y:50}} transition={{duration:5}} className="flex space-x-24  space-y-24"> 
<img  src={img} className="h-32 w-32"/>
<img  src={img} className="h-44 w-44"/>
</motion.div>
              </div>
</main>  
        </>
    )
}

export default Card
