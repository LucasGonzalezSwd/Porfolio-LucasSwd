  import React from "react"
  
  import { NavBar } from "../components/NavBar"
  import img from "./Images/fondo2.jpg"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
  import { faFileLines } from "@fortawesome/free-solid-svg-icons";
  import  doc from  "../components/Images/Lucas.pdf"
  import './Styles/home.css'
  import { AboutMe } from "./AboutMe";
  import { Skills } from "./Skills";
  import { Projects } from "./Projects";
  export const Home = () => {
      return (
          <div className="flex flex-col h-full w-screen fondo">
            <div className="flex justify-center mb-[1rem]">
            <NavBar />
            </div>
              

          <div className=" flex  justify-center items-center  w-screen h-screen overflow-hidden " id="home" >
        
          <div className="flex flex-row w-4/6 h-4/6 justify-center items-center rounded-md">

                <div className="flex flex-col w-full h-full items-center p-[2.5rem] pl-[3.5rem] justify-center">
                <h1 className="flex w-full items-start justify-start  text-5xl  min-[1650px]:text-6xl ">Hello People!</h1>
                <br />
                <p className=' text-base min-[1650px]:text-xl '> My name is <span className='text-black'>Lucas Gonzalez</span> and I'm a Full Stack Developer from Argentina. I have experience working with JavaScript, React js, Redux, NodeJS, Typescript, Jest, Express, sequelize, MySql, PostgreSql, among other technologies. I can code a website end-to-end.
                </p>
                <div className="flex w-full justify-evenly h-[6rem] items-center pr-[2rem]  mt-[2rem]">
               
                <a href="https://github.com/LucasGonzalezSwd" target="_blank" rel="noreferrer">
                <button>
                <FontAwesomeIcon className="min-[1650px]:text-5xl  text-4xl text-black hover:scale-125 transition-all duration-500 ease-in-out " icon={faGithub} id="one" />
                </button>
                </a>

                  <a href="https://www.linkedin.com/in/lucas-gonzalez-swd/" target="_blank" rel="noreferrer">
                  <button>
                  <FontAwesomeIcon className="min-[1650px]:text-5xl text-4xl text-black hover:scale-125 transition-all duration-500 ease-in-out " icon={faLinkedin} id="two"/>
                  </button>
                  </a>
    
                  <a href={doc}  target="_blank" download="Resume Lucas Gonzalez Swd" rel="noreferrer">
                <button>
                <FontAwesomeIcon className="min-[1650px]:text-5xl text-4xl text-black hover:scale-125 transition-all duration-500 ease-in-out "  icon={faFileLines}  id="three"/>
                </button>
                </a>
                </div> 
                </div>
                    
                <div className="flex w-3/5 pl-[1rem] justify-start items-center text-black h-full ">
               
                <img className="flex max-[1650px]:w-52 max-[1650px]:h-52  min-[1650px]:w-56 min-[1650px]:h-56 rounded-full object-cover shadow-2xl shadow-[#000000] drop-shadow-2xl" src={img} alt="" />
                
                </div>
              </div>
            </div>
            
            <div className="" id="about">
              <AboutMe/>
            </div>

            <div  id="skills">
              <Skills/>
            </div>

            <div id="projects">
              <Projects/>
            </div>

          </div>
      )
  }