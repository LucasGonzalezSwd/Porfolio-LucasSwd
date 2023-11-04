  import React from "react"
  import { NavBar } from "../components/NavBar"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
  import { faFileLines } from "@fortawesome/free-solid-svg-icons";
  import  doc from  "../components/Images/LucasGonzalezCV.pdf"
  import './Styles/home.css'
  import { AboutMe } from "./AboutMe";
  import { Skills } from "./Skills";
  import { Projects } from "./Projects";
  export const Home = () => {

    const img = "https://storage.googleapis.com/ibiza-station/perfil.jpg"; 

      return (
          <div className="flex fondo flex-col h-full w-screen ">
            <div className="flex max-[840px]:mb-[3.8rem] justify-center mb-[1rem]  ">
            <NavBar />
            </div>
              

          <div className=" flex   justify-center items-center  w-screen h-screen " id="home" >
        
          <div className="flex  max-[400px]:flex-col max-[450px]:flex-col  flex-row w-4/6 h-4/6 justify-center items-center rounded-md">

                <div className="flex  max-[400px]:mt-[12rem] max-[450px]:mt-[12rem] flex-col w-full h-full items-center max-[400px]:pl-[1.5rem] max-[400px]:p-[0rem] max-[400px]:pt-[11.5rem] max-[450px]:pl-[1.5rem] max-[450px]:p-[0rem] max-[450px]:pt-[11.5rem] p-[2.5rem] pl-[3.5rem] justify-center ">
                <h1 className="flex w-full items-start justify-start  text-5xl  min-[1650px]:text-6xl ">Hello People!</h1>
                <br />
                <p className=' text-base min-[1650px]:text-xl '> My name is <span className='text-black'>Lucas Gonzalez</span> and I'm a Full Stack Developer from Argentina. I have experience working with JavaScript, React js, Redux, NodeJS, Typescript, Jest, Express, sequelize, MySql, PostgreSql, among other technologies. I can code a website end-to-end.
                </p>
                <div className="flex w-full justify-evenly h-[6rem] items-center pr-[2rem]  mt-[2rem]  ">
               
                <a href="https://github.com/LucasGonzalezSwd" target="_blank" rel="noreferrer">
                <button className="flex2">
                <FontAwesomeIcon className="min-[1650px]:text-5xl  text-4xl text-black hover:scale-125 transition-all duration-500 ease-in-out " icon={faGithub} id="one" />
                </button>
                </a>

                  <a href="https://www.linkedin.com/in/lucas-gonzalez-swd/" target="_blank" rel="noreferrer">
                  <button className="flex2">
                  <FontAwesomeIcon className="min-[1650px]:text-5xl text-4xl text-black hover:scale-125 transition-all duration-500 ease-in-out  " icon={faLinkedin} id="two"/>
                  </button>
                  </a>
    
                  <a href={doc}  target="_blank" download="Resume Lucas Gonzalez Swd" rel="noreferrer">
                <button className="flex2">
                <FontAwesomeIcon className="min-[1650px]:text-5xl text-4xl text-black hover:scale-125 transition-all duration-500 ease-in-out "  icon={faFileLines}  id="three"/>
                </button>
                </a>
                </div> 
                </div>
                    
                <div className="flex w-3/5  max-[400px]:w-full pl-[1rem] max-[450px]:w-full  max-[400px]:pl-0 max-[400px]:pt-[12rem]  max-[450px]:pl-0 max-[450px]:pt-[13rem] justify-start max-[400px]:justify-center max-[450px]:justify-center items-center text-black h-full max-[400px]:pb-[16rem] max-[400px]:mb-[3.5rem] max-[450px]:pb-[17rem] max-[450px]:mb-[3.5rem] ">
               
                <img className="flex max-[1650px]:w-52 max-[1650px]:h-52  min-[1650px]:w-56 min-[1650px]:h-56 rounded-full object-cover shadow-2xl shadow-[#000000] drop-shadow-2xl" src={img} alt="" />
                
                </div>
              </div>
            </div>
            
            <div className="max-[400px]:mt-[1rem] max-[450px]:mt-[1rem]" id="about">
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