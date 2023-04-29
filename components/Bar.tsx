import { ISkill } from '@/typedeneme2'
import React, { FunctionComponent } from 'react'

const Bar:FunctionComponent<{value:ISkill}> = ({value:{Icon,level,name}}) => {
  return (
    <div className='my-2 text-white bg-gray-300 rounded-full'>
        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange to-blue-600" style={{width:level}}>
            <Icon className='mr-3'/>
            {name}
        </div>
    </div>
  )
}

export default Bar