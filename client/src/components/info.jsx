import React from 'react'
import { faEnvelope, faFileLines,  faLocationDot } from "@fortawesome/free-solid-svg-icons";
import  doc from  "../components/Images/Lucas.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
export const ProjectDetail = () => {
  return (
    <div id='moveTwo' className='flex flex-row flex-wrap h-40 rounded p-1  w-4/5 bg-red-400 z-10 text-white shadow-xl mt-8 min-[1650px]:text-lg'  >
    <div className='flex flex-row flex-wrap items-center ml-10 -mr-10  w-full  '>
    
    <div  className='flex flex-row w-1/3 min-[1650px]:text-lg hover:scale-110 transition-all duration-500 ease-in-out ' >
      <a href="https://www.linkedin.com/in/lucas-gonzalez-swd/" target="_blank" rel="noreferrer">
      <button className=' flex  items-center  hover:text-white'>
      <FontAwesomeIcon className="text-4xl  mr-2" icon={faLinkedin} />
            Linkedin : Lucas Gonzalez
      </button>
      </a>
      </div>

    <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
    <a href="https://github.com/LucasGonzalezSwd" target="_blank" rel="noreferrer">
      <button className=' flex  items-center hover:text-white'>
      <FontAwesomeIcon className="text-4xl  mr-2 " icon={faGithub} />
      
      GitHub : LucasGonzalezSwd
      </button>
      
      </a>
      </div>
     
        <div  className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out  '>
        <a href={doc} download="Resume Lucas Gonzalez Swd" target="_blank" rel="noreferrer">
      <button className=' flex  items-center hover:text-white'>
      <FontAwesomeIcon className="text-4xl  mr-2 "  icon={faFileLines} />
       Resume
     </button>
     </a>
     </div>
    
     <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
    <a  href='mailto:lucas.ing.ind@gmail.com' >
      <button className=' flex  items-center  hover:text-white'>
      <FontAwesomeIcon className="text-4xl  mr-2" icon={faEnvelope} />
      
      Email : lucas.ing.ind@gmail.com
      </button>
      
      </a>
      </div>
      <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
    <a href='https://wa.me/543406418085' target="_blank" rel="noreferrer">
      <button className=' flex items-center hover:text-white' >
      <FontAwesomeIcon className="text-4xl  mr-2 " icon={faWhatsapp} />
      
      Phone : +54 03406 15418085
      </button>
      
      </a>
      </div>
      <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
    <a href="https://goo.gl/maps/xcE27tPpeep8Xts18" target="_blank" rel="noreferrer">
      <button className=' flex  items-center hover:text-white'>
      <FontAwesomeIcon className="text-4xl  mr-2  " icon={faLocationDot} />
      
     Location : Argentina
      </button>
      
      </a>
      </div>
     
     </div>
  </div>
  )
}
