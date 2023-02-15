import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () =>{

     return(
        <div className="flex flex-col h-screen  w-2/12 justify-start   bg-[#092547] shadow-lg drop-shadow-md shadow-[#00000090] rounded-tr-md rounded-br-md">
            <div>
            <nav  className=" flex justify-center items-start text-white h-screen ">
                <ul className="flex flex-col justify-between mt-14 h-2/5 ">
                    
                    <Link to="/">
                <li><button className="font-medium bg-gradient-to-r from-gray-400 to-gray-700 w-32 p-1 rounded">
                    Home
                        </button ></li>
                        </Link>

                        <Link to="/about">
                    <li><button className="font-medium bg-gradient-to-r from-gray-400 to-gray-700 w-32 p-1 rounded">
                    About Me
                        </button ></li>
                        </Link>

                        <Link to="/projects">
                    <li><button className="font-medium bg-gradient-to-r from-gray-400 to-gray-700 w-32 p-1 rounded">
                    Projects
                        </button ></li>
                        </Link>

                        <Link to="/contact">
                    <li> <button className="font-medium bg-gradient-to-r from-gray-400 to-gray-700 w-32 p-1 rounded">
                    Contact Me
                        </button >
                        </li>
                        </Link>
                </ul>
             </nav>
            </div>
           
        </div>
     )
}