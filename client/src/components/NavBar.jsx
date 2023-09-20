import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBriefcase, faClipboardList, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
export const NavBar = () =>{


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        
          });
        }
      };

     return(
        <div className="fixed w-5/12 min-[1650px]:text-lg bg-[#000000a6] shadow-lg shadow-purple-300 h-[3.4rem] rounded-full mt-[2rem] max-[400px]:mt-[1rem] max-[400px]:w-full  max-[450px]:mt-[1.3rem] max-[450px]:w-full z-20">
          
            <nav  className=" flex w-full h-full  text-white ">
                <ul className="flex w-full h-full items-center justify-evenly  ">

                
                    <li className="  text-white font-medium"><button className=" outline-none font-medium hover:text-purple-400 active:text-purple-400 focus:text-purple-300"  onClick={() => scrollToSection("home")}>
                    <FontAwesomeIcon className="mr-1" icon={faHome}/> Home
                        </button ></li>
                       

                     
                    <li className=" text-white font-medium"><button className=" outline-none  font-medium  hover:text-purple-400 active:text-purple-400 focus:text-purple-400 " onClick={() => scrollToSection("about")}>
                    <FontAwesomeIcon className="mr-1" icon={faUser}/> About Me
                        </button ></li>
                       

      
                    <li className="  text-white font-medium"><button className="outline-none font-medium hover:text-purple-400 active:text-purple-400 focus:text-purple-400 " onClick={() => scrollToSection("skills")}>
                    <FontAwesomeIcon className="mr-1" icon={faClipboardList}/> Skills
                        </button ></li>
                       


                       
                    <li className=" text-white font-medium"><button className="outline-none font-medium hover:text-purple-400 active:text-purple-400 focus:text-purple-400  " onClick={() => scrollToSection("projects")}>
                    <FontAwesomeIcon className="mr-1" icon={faBriefcase}/> Projects
                        </button ></li>
                        
        
                </ul>
             </nav>
             
           

         
           
        </div>
     )
}