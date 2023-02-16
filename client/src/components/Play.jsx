import React, { useState } from 'react'
import { NavBar } from './NavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnet, faWind, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export const Play = () => {
  const [mode,setMode] = useState(null)
  

 
  return (
    <div className="flex flex-row w-screen box-border bg-gradient-to-r from-gray-600 to-gray-900">
      <NavBar/>
      <div className=" flex justify-end items-start   w-screen h-screen ">
         

         <button  className='w-14 mt-10 mr-10 bg-white rounded  cursor-pointer'><FontAwesomeIcon  icon={faMagnet}/></button>
        
          
           <button className='w-14 mt-10 mr-10 bg-white rounded' ><FontAwesomeIcon icon={faWind}/></button>
           
      </div>
    </div>
  )
}