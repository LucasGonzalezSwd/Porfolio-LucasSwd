import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Styles/about.css"
import './Styles/home.css'

export const AboutMe = () => {

  const certificado = "https://storage.googleapis.com/ibiza-station/Certificatemin.png";
  
  return (
    <div className="flex w-screen  fondo cursor-pointer mt-[1rem] max-[400px]:mb-[1rem] " >
   
      <div className=" flex  justify-center items-center w-screen ">
        
   <div className='flex max-[400px]:flex-col max-[400px]:w-full w-4/5 gap-4 h-full  z-10  mb-4' >

               <div className='w-1/2 max-[400px]:w-full min-[1650px]:text-lg flex p-1 rounded text-black  gap-4  flex-wrap items-center justify-center'>
                <div className='  w-full justify-center items-start flex flex-col pl-[1rem] pt-[0.3rem] text-3xl max-[400px]:items-center '>Experience</div>
                <div className='p-[2rem] shadow-lg shadow-gray-400 w-[17rem] flex flex-col rounded-2xl h-[16rem]'>
               <h2 className=' '> <FontAwesomeIcon icon={faCircle} size="2xs" className=' text-black'/> Food App</h2>
                 <p className=''>Nov of 2022 - Dec of 2022</p>
                <p className=' '>
                It is about an end to end SPA of food recipes. <br/> Individual bootcamp project (I'm Henry).
                  </p> </div>
                <div className=' p-[1.5rem] shadow-lg shadow-gray-400 w-[17rem] flex flex-col rounded-2xl h-[16rem]'>
               <h2 className=' '> <FontAwesomeIcon icon={faCircle} size="2xs" className=' text-black'/> E-commerce "Mate Express"</h2>
                 <p className=''>Dec of 2022 - Jan of 2023</p>
                <p className=' '>
                Soy Henry bootcamp final project. Develop the front-end of the e-commerce together with my team.
                  </p> </div>

                <div className=' p-[2rem] shadow-lg shadow-gray-400 w-[17rem] flex flex-col rounded-2xl h-[16rem]'>
               <h2 className=''> <FontAwesomeIcon icon={faCircle} size="2xs" className=' text-black'/> Ibiza Station</h2>
                 <p className=''>Feb of 2023 - Mar of 2023</p>
                <p className=''>
                I work as a freelancer, where I developed an end-to-end SPA where you could buy your digital ticket for an event.
                  </p> </div>
                <div className=' p-[1.5rem] shadow-lg shadow-gray-400 w-[17rem] flex flex-col rounded-2xl h-[16rem]'>
               <h2 className=''> <FontAwesomeIcon icon={faCircle} size="2xs" className=' text-black'/> BarberShop Club</h2>
                 <p className=''>Mar of 2022 - Apr of 2022</p>
                <p className=''>
                I work as a freelancer, where I developed an end-to-end SPA where you can book your appointment to get a haircut.
                  </p> </div>     
                <div className=' p-[2rem] shadow-lg shadow-gray-400 flex flex-col rounded-2xl max-[400px]:w-[17rem] w-[35rem] mb-[1rem] h-[16rem]'>
               <h2 className=' '> <FontAwesomeIcon icon={faCircle} size="2xs" className=' text-black'/> Calculator App</h2>
                 <p className=''>Sep of 2023 - Sep of 2023</p>
                <p className=''>
                Develop a Calculator with technologies such as Next js, Typescript, React, Jest, Tailwind css, among others.
                  </p> </div>
                
               </div>
                
                
               <div className='w-1/2 max-[400px]:w-full min-[1650px]:text-lg flex p-1 rounded text-black gap-[1rem]  flex-wrap items-center justify-center max-[400px]:gap-[1.5rem] max-[400px]:mt-[1rem] max-[400px]:mb-[2rem] '>
                <div className=' w-full justify-center max-[400px]:items-center items-start flex flex-col pl-[1rem]  text-3xl'>Education</div>
                <div className=' shadow-lg shadow-gray-400 w-[35rem] flex flex-col rounded-2xl h-1/2 '>
               
               <img  className="h-full p-[1rem]"src={certificado} alt="" />
                  </div>
                <div className=' h-2/5  shadow-lg shadow-gray-400 flex flex-col  rounded-2xl p-[3rem] gap-[0.5rem] w-[35rem] mb-[1rem]  max-[400px]:h-1/2'>
               <h2 className=' '> <FontAwesomeIcon icon={faCircle} size="2xs" className='  text-black'/> National University of Rafaela </h2>
                 <p className=' '>Mar of 2020 - Nov of 2022</p>
                <p className=''>
                Studying advanced computer engineering, on pause for economic and personal reasons.
                  </p> </div>

               
                
               </div>

          </div>
      </div>
    </div>
   
  )
}
