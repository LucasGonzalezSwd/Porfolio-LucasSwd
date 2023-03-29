import React from 'react'
import { NavBar } from './NavBar'
import backimg from "./Images/foodapi1.png"
import backimg2 from "./Images/ecommerce3.png"
import backimg1 from "./Images/proyectomz.png"
import "./Styles/projects.css"

export const Projects = () => {
  return (
    <div className="flex flex-row  w-screen box-border bg-gradient-to-r from-gray-600 to-gray-900">
      <NavBar/>
      <div className=" flex  justify-center w-screen mt-8 mb-4  ">
              <div className='flex flex-col justify-center items-center w-4/5 bg-[#092547] z-10 rounded h-full' id='movepr'>
                
              <p  className='flex self-start text-white text-3xl mt-4  ml-4'>{"< Projects />"}</p>
              <div  className='flex flex-col items-center justify-center rounded-lg  mt-8 mb-8 w-4/6 h-fit hover:scale-105  transition-all ease-in-out duration-500 gap-2' >
               
               <img className='flex self-center w-fit h-fit object-cover  shadow-[0_-3px_13px_2px] rounded-lg ' src={backimg1} alt="" />

               <div className=' flex flex-col w-full  bg-yellow-200 shadow-[0_-3px_13px_3px] -mt-5 rounded-b-lg z-20'>
                 <div>
                 <h1 className=' text-3xl mb-3 mt-1 ml-3'>Trabajo Freelance</h1>
                 <p className='  mb-3 mt-1 ml-3'>El Repositorio se encuentra privado por el momento.</p>
                 </div>
                 <div className='flex'> 
                 <a href="https://ibizastation.com/" target="_blank">
                 <button className='w-24 bg h-10 bg-gradient-to-r bg from-slate-800 to-black mb-3 text-white ml-3 rounded-lg hover:scale-105  transition-all ease-in-out duration-300 gap-2'  >Deploy</button>
                 </a>
                 {/* <a href="https://github.com/LucasGonzalezSwd/PI-Front-deploy" target="_blank">
                 <button className='w-24 h-10 bg-gradient-to-r from-black to-gray-900 mb-3 text-white ml-3 rounded-lg hover:scale-105  transition-all ease-in-out duration-300 gap-2'>GitHub</button>
                 </a> */}
                 </div>
                
               </div>
                </div>


                 <div  className='flex flex-col items-center justify-center rounded-lg  mt-8 mb-8 w-4/6 h-fit hover:scale-105  transition-all ease-in-out duration-500 gap-2' >
               
                <img className='flex self-center w-fit h-fit object-cover  shadow-[0_-3px_13px_2px] rounded-lg ' src={backimg} alt="" />

                <div className=' flex flex-col w-full  bg-yellow-200 shadow-[0_-3px_13px_3px] -mt-5 rounded-b-lg z-20'>
                  <div>
                  <h1 className=' text-3xl mb-3 mt-1 ml-3'>Food Api</h1>
                  </div>
                  <div className='flex'> 
                  <a href="https://pi-lucas-gonzalez-foods.vercel.app/" target="_blank">
                  <button className='w-24 bg h-10 bg-gradient-to-r bg from-slate-800 to-black mb-3 text-white ml-3 rounded-lg hover:scale-105  transition-all ease-in-out duration-300 gap-2'  >Deploy</button>
                  </a>
                  <a href="https://github.com/LucasGonzalezSwd/PI-Front-deploy" target="_blank">
                  <button className='w-24 h-10 bg-gradient-to-r from-black to-gray-900 mb-3 text-white ml-3 rounded-lg hover:scale-105  transition-all ease-in-out duration-300 gap-2'>GitHub</button>
                  </a>
                  </div>
                 
                </div>
                 </div>
                 <div  className='flex flex-col items-center justify-center rounded-lg  mt-8 mb-8 w-4/6  h-fit hover:scale-105  transition-all ease-out duration-500 gap-2'>
               
                <img className='flex self-center w-fit h-fit object-cover  shadow-[0_-3px_13px_2px] rounded-lg  ' src={backimg2} alt="" />

                <div className=' flex flex-col w-full  bg-yellow-200 shadow-[0_-3px_13px_3px] -mt-5 rounded-b-lg z-20'>
                  <div>
                  <h1 className=' text-3xl mb-3 mt-1 ml-3'>E-commerce "Mate Express"</h1>
                  </div>
                  <div className='flex'> 
                  
                  <a href="https://pf-front-deploy2.vercel.app/" target="_blank">
                  <button className='w-24 bg h-10 bg-gradient-to-r bg from-slate-800 to-black mb-3 text-white ml-3 rounded-lg hover:scale-105  transition-all ease-out duration-300 gap-2'  > Deploy</button>
                  </a>


                 <a href="https://github.com/LucasGonzalezSwd/Proyecto-Final-Front" target="_blank">
                  <button className='w-24 h-10 bg-gradient-to-r from-black to-gray-900 mb-3 text-white ml-3 rounded-lg hover:scale-105  transition-all ease-in-out duration-300 gap-2'>GitHub</button> 
                  </a>
              
                  </div>
                  
                 
                </div>
                
                 </div>
                 
                




 
              </div>
      </div>
    </div>
  )
}