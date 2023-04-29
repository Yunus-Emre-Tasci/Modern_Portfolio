import { ISkill } from '@/typedeneme2'
import React, { FunctionComponent } from 'react'
import {motion} from "framer-motion"

const Bar:FunctionComponent<{value:ISkill}> = ({value:{Icon,level,name}}) => {

  const variants={
    initial:{
        width:0
    },
    animate:{
        width:level,
        transition:{
            duration:0.6,
            type:"spring",
            damping:10,
            stiffness:100
        },
    },
  }   
    
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange to-blue-600"
        style={{ width: level }}
        variants={variants}
        animate="animate"
        initial="initial"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
}

export default Bar