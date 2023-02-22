import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAddressBook, faBriefcase, faClipboard, faClipboardList, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
export const NavBar = () =>{

     return(
        <div className="flex flex-col  w-2/12 justify-start  min-[1650px]:text-lg bg-[#092547] shadow-lg drop-shadow-md shadow-[#00000090] rounded-tr-md rounded-br-md z-20">
            <div>
            <nav  className=" flex justify-center items-start text-white h-screen ">
                <ul className="flex flex-col  mt-10 h-3/6  w-full">
                    
                    <Link to="/">
                <li className="flex mt-8 justify-center text-yellow-200 font-medium"><button className=" font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 ">
                <FontAwesomeIcon className="mr-1" icon={faHome}/> Home 
                        </button ></li>
                        </Link>

                        <Link to="/about">
                    <li className=" mt-10 flex justify-center text-yellow-200 font-medium"><button className=" font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8">
                    <FontAwesomeIcon className="mr-1" icon={faUser}/> About Me
                        </button ></li>
                        </Link>


                        <Link to="/skills">
                    <li className=" mt-10 flex justify-center items-center self-center text-yellow-200 font-medium"> <button className="flex justify-center items-center self-center font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8">
                    <FontAwesomeIcon className="mr-2" icon={faClipboardList}/>  Skills
                        </button >
                        </li>
                        </Link>


                        <Link to="/projects">
                    <li className=" mt-10 flex justify-center text-yellow-200 font-medium"><button className=" font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8">
                    <FontAwesomeIcon className="mr-1" icon={faBriefcase}/> Projects
                        </button ></li>
                        </Link>
                    

                        <Link to="/contact">
                    <li className=" mt-10 flex justify-center items-center self-center text-yellow-200 font-medium"> <button className="flex justify-center items-center self-center font-medium border-b border-white p-1 w-4/5 hover:bg-slate-700 hover:bg-opacity-60 hover:shadow-[0_-3px_13px_-3px] hover:shadow-slate-50 transition duration-700 min-[1650px]:mt-8">
                    <FontAwesomeIcon className="mr-2" icon={faAddressBook}/>  Contact Me
                        </button >
                        </li>
                        </Link>

                      
                       
                        
                </ul>
             </nav>
             
              </div>

         
           
        </div>
     )
}