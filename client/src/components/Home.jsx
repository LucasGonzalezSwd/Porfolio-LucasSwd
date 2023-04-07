 import React from "react"
 import { Link } from "react-router-dom"
 import { NavBar } from "../components/NavBar"
import img from "./Images/fondo2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import  doc from  "../components/Images/LucasGonzalezSwdCv.pdf"
import './Styles/home.css'
 export const Home = () => {
     return (
        <div className="flex flex-row w-screen box-border bg-gradient-to-r from-gray-600 to-gray-900 cursor-pointer">
          <NavBar />
            

         <div className=" flex  justify-center items-center  w-screen h-screen overflow-hidden shadow-xl shadow-[#00000030] drop-shadow-2xl">
       
         <div className="flex flex-row w-4/6 h-4/6 bg-[#092547] justify-center items-center rounded-md shadow-xl shadow-[#00000030] drop-shadow-2xl" id='container-move'>

               <div className="flex flex-row ml-4 ">
               <img className="flex  w-48  h-48  ml-4  min-[1650px]:w-52 min-[1650px]:h-52 rounded-full object-cover shadow-2xl shadow-[#000000] drop-shadow-2xl" src={img} alt="" />
               
               </div>

               <div className="flex flex-col items-start text-white ml-4 justify-between h-3/5 ">
               <h1 className="flex text-5xl ml-4  min-[1650px]:ml-8 min-[1650px]:text-6xl ">Hello People!</h1>
               <p className=" ml-4 text-xl min-[1650px]:ml-8 min-[1650px]:text-2xl ">My name is <span className="text-yellow-200 font-medium">Lucas Gonzalez</span> and I'm a <span className="text-yellow-200 font-medium">Full Stack Web Developer</span>
                <br />

               </p>
               <div className="flex flex-row self-start ml-4 w-2/5 justify-between min-[1650px]:ml-8">

                <a href="https://github.com/LucasGonzalezSwd" target="_blank">
                <button>
                <FontAwesomeIcon className="min-[1650px]:text-5xl  text-4xl text-yellow-100  hover:scale-125 transition-all duration-500 ease-in-out " icon={faGithub} id="one" />
                </button>
                </a>
               
                <a href="https://www.linkedin.com/in/lucas-gonzalez-swd/" target="_blank">
                <button>
                <FontAwesomeIcon className="min-[1650px]:text-5xl text-4xl text-yellow-100 hover:scale-125 transition-all duration-500 ease-in-out " icon={faLinkedin} id="two"/>
                </button>
                </a>
                  
                  <a href={doc}  target="_blank" download="Resume Lucas Gonzalez Swd">
                <button>
                <FontAwesomeIcon className="min-[1650px]:text-5xl text-4xl text-yellow-100 hover:scale-125 transition-all duration-500 ease-in-out "  icon={faFileLines}  id="three"/>
               </button>
               </a>
               </div>


             
              

               </div>
            </div>
          </div>
        </div>
     )
}