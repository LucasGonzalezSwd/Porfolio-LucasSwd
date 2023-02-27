import React from 'react'
import { NavBar } from './NavBar'
import ath from "./Images/ath.png"
import bootstrap from "./Images/bootstrap.png"
import clou from "./Images/clou.png"
import CSS from "./Images/CSS3.svg.png"
import express from "./Images/express.png"
import figma from "./Images/figma.png"
import git from "./Images/git.png"
import github from "./Images/github.png"
import HTML from "./Images/HTML.svg.png"
import imso3 from "./Images/imso3png.png"
import jest from "./Images/jest.png"
import JS from "./Images/JS.png"
import node from "./Images/node.png"
import ora from "./Images/ora.png"
import postgreSQL from "./Images/postgreSQL.png"
import reactRouter from "./Images/react-router.png"
import React2 from "./Images/React.svg.png"
import ReactNative from "./Images/ReactNative.jpg"
import redux from "./Images/redux.png"
import scrum from "./Images/scrum.png"
import SEO from "./Images/SEO.png"
import sequelize from "./Images/sequelize.png"
import TS from "./Images/TS.png"
import npm from "./Images/npm2.jpg"


import tailwind from "./Images/tailwind.png"
import "./Styles/skill.css"


export const Skills = () => {
  return (
    <div className="flex flex-row w-screen box-border bg-gradient-to-r from-gray-600 to-gray-900">
      <NavBar/>
      <div className=" flex justify-center items-center  w-screen ">
              
            <div className='w-4/5  bg-[#092547] rounded  mb-10 mt-8 z-10' id='moveB'>
                
                <p  className='text-white text-3xl -mb-8 mt-4 ml-4'>{"< Skills />"}</p>

                <div className='flex flex-wrap justify-center items-center mb-8  z-30' id='moveA'   >
                   <button className='flex flex-col hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={React2} alt="" id='ss'/>
                 <p className='flex text-xl text-white self-center mt-1' id='ss'> React</p>
                   </button>

                   <button className='flex flex-col hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={redux} alt="" id='ss'/>
                 <p className='flex text-xl text-white self-center mt-1' id='ss'> Redux</p>
                   </button>
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={JS} alt="" id='ss' />
                <p className='flex text-xl text-white self-center mt-1' id='ss'> JavaScript</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={node} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Node</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={express} alt="" id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Express</p>
                </button>
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={postgreSQL} alt="" id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>PostgreSQL</p>
                </button>
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={sequelize} alt="" id='ss' />
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Sequelize</p>
                </button>
                 

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss' >
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={HTML} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>HTML</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={CSS} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>CSS</p>
                </button>
                 
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={tailwind} alt=""  id='ss'/>
                 <p className='flex text-xl text-white self-center mt-1' id='ss'>Tailwind</p>
                </button>
                    
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={git} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Git</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={github} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>GitHub </p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={ReactNative} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>React Native </p>
                </button>


                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={TS} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>TypeScript </p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={bootstrap} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>BootsTrap </p>
                </button>
                   

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-cover' src={npm} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>NPM </p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={imso3} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Insomnia </p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>

                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain'  src={ath} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Auth0 </p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={clou} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Cloudinary </p>
                </button>

                <div className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={figma} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Figma </p>
                </div>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={scrum} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>SCRUM </p>
                </button>


                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={ora} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Ora </p>
                </button>
  
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={SEO} alt=""  id='ss'/>
                <p className='flex text-xl text-white self-center mt-1' id='ss'>SEO</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                
                 <img className='w-20 h-20 mx-10 mt-14 rounded object-contain' src={jest} alt=""  id='ss'/>
               
                <p className='flex text-xl text-white self-center mt-1' id='ss'>Jest</p>
                </button>

              
 

                
         
                </div>
            </div>
      </div>
    </div>
  )
}
