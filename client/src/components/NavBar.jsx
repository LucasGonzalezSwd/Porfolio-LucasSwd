import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight} from "@fortawesome/free-solid-svg-icons";
export const NavBar = () =>{

     return(
        <div className="flex flex-col  w-2/12 justify-start   bg-[#092547] shadow-lg drop-shadow-md shadow-[#00000090] rounded-tr-md rounded-br-md">
            <div>
            <nav  className=" flex justify-center items-start text-white h-screen ">
                <ul className="flex flex-col  mt-10 h-3/6  w-full">
                    
                    <Link to="/">
                <li className="flex mt-8 justify-center text-yellow-200 font-medium"><button className=" font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 ">
                    Home
                        </button ></li>
                        </Link>

                        <Link to="/about">
                    <li className=" mt-10 flex justify-center text-yellow-200 font-medium"><button className=" font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8">
                    About Me
                        </button ></li>
                        </Link>

                        <Link to="/projects">
                    <li className=" mt-10 flex justify-center text-yellow-200 font-medium"><button className=" font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8">
                    Projects
                        </button ></li>
                        </Link>

                        <Link to="/contact">
                    <li className=" mt-10 flex justify-center items-center self-center text-yellow-200 font-medium"> <button className="flex justify-center items-center self-center font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8">
                    Contact Me
                        </button >
                        </li>
                        </Link>

                        <Link to="/play">
                    <li className=" mt-28 flex justify-center items-center self-center text-yellow-200 font-medium"> <button className="flex justify-center items-center self-center font-medium border-b border-white p-1 w-4/5 hover:bg-red-900 hover:bg-opacity-40 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8 ">
                    Play with Background<FontAwesomeIcon className="-ml-2 text-xl" icon={faArrowRight}/>
                        </button >
                        </li>
                        </Link>
                       
                        
                </ul>
             </nav>
             
              </div>

         
           
        </div>
     )
}