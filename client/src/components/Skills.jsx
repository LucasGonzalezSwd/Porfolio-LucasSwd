import React from 'react'
import ath from "./Images/ath.png"
import bootstrap from "./Images/bootstrap.png"
import TestigLibrary from "./Images/testing.png"
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
import React2 from "./Images/React.svg.png"
import ReactNative from "./Images/ReactNative.jpg"
import redux from "./Images/redux.png"
import scrum from "./Images/scrum.png"
import mysql from "./Images/mysql.png"
import sequelize from "./Images/sequelize.png"
import TS from "./Images/TS.png"
import npm from "./Images/npm2.jpg"
import mui from "./Images/mui.png"
import next from "./Images/next.png"
import vite from "./Images/vite.png"
import strapi from "./Images/strapi.png"
import solidity from "./Images/solidity.png"
import cloud from "./Images/cloud.png"


import tailwind from "./Images/tailwind.png"
import "./Styles/skill.css"
import './Styles/home.css'

export const Skills = () => {
  return (
    <div className="flex flex-col w-screen fondo">
     
      <div className=" flex justify-center items-center  w-screen ">
              
            <div className='w-4/5 gap-4 max-[400px]:flex-col max-[400px]:w-full max-[450px]:flex-col max-[450px]:w-full  flex pb-[2rem] mb-[5rem]  rounded-xl h-full z-10  mt-[8rem]' >
                
                <div className='w-1/2 max-[400px]:w-full max-[450px]:w-full min-[1650px]:text-lg flex   text-black rounded-xl shadow-lg shadow-gray-400 gap-4  flex-wrap items-center justify-center pb-[2rem]  max-[400px]:mb-[2.5rem]  max-[450px]:mb-[2.8rem]'  >
                <div  className='max-[400px]:mt-[1.5rem] max-[450px]:mt-[1.5rem] w-full justify-center max-[400px]:items-center max-[450px]:items-center items-start flex flex-col pl-[1rem] pt-[0.3rem] text-3xl'>{"< Skills Front-end/>"}</div>
                {/* front */}
                <button className='flex flex-col hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={React2} alt="" id='ss'/>
                 <p className='flex text-xl text-black self-center mt-1' id='ss'> React</p>
                   </button>
                   <button className='flex flex-col hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={redux} alt="" id='ss'/>
                 <p className='flex text-xl text-black self-center mt-1' id='ss'> Redux</p>
                   </button>
                   <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={JS} alt="" id='ss' />
                <p className='flex text-xl text-black self-center mt-1' id='ss'> JavaScript</p>
                </button>
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={TS} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>TypeScript </p>
                </button>
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss' >
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={HTML} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>HTML</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={tailwind} alt=""  id='ss'/>
                 <p className='flex text-xl text-black self-center mt-1' id='ss'>Tailwind</p>
                </button>
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={CSS} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>CSS</p>
                </button>
                 
              
              

             
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={TestigLibrary} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Testing Library </p>
                </button>
        
                 <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={jest} alt=""  id='ss'/>
               
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Jest</p>
                </button>
               
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={vite} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Vite Js</p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={next} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Next Js </p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={mui} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Material Ui </p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={bootstrap} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>BootsTrap </p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={ReactNative} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>React Native </p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={figma} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Figma </p>
                </button>

                </div>

               
               <div className='w-1/2 max-[400px]:w-full max-[450px]:w-full min-[1650px]:text-lg flex   text-black shadow-lg shadow-gray-400 gap-4  flex-wrap  rounded-xl  items-center justify-center pb-[2rem] max-[400px]:mb-[1rem] max-[450px]:mb-[1.3rem] '>
               <div  className='w-full justify-center max-[400px]:items-center  max-[450px]:items-center items-start flex flex-col pl-[1rem] pt-[0.3rem] text-3xl'>{"< Skills Back-end />"}</div>
               <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={node} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Node</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={express} alt="" id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Express</p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={sequelize} alt="" id='ss' />
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Sequelize</p>
                </button>
                
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={postgreSQL} alt="" id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>PostgreSQL</p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={mysql} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>MySql</p>
                </button>
            
                    
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={git} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Git</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={github} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>GitHub </p>
                </button>

              

                   

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-cover' src={npm} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>NPM </p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={imso3} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Insomnia </p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={strapi} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Strappi </p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={solidity} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Solidity </p>
                </button>
                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={cloud} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Google Cloud</p>
                </button>

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>

                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain'  src={ath} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Auth0 </p>
                </button>

               

                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={scrum} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>SCRUM </p>
                </button>


                <button className='flex flex-col  hover:scale-125 transition-all duration-700 ease-in-out ' id='ss'>
                 <img className='w-16 min-[1650px]:w-20 h-16 min-[1650px]:h-20 mx-10 mt-14 rounded object-contain' src={ora} alt=""  id='ss'/>
                <p className='flex text-xl text-black self-center mt-1' id='ss'>Ora </p>
                </button>
              
  
                
             

               </div>
                   

                 
                
               

              
               
              
 

                
         
                </div>
            </div>
      </div>
   
  )
}
