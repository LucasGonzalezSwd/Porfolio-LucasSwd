import React from 'react'
import { NavBar } from './NavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines,  faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import  doc from  "../components/Images/doc.pdf"
import "./Styles/about.css"


export const AboutMe = () => {
  return (
    <div className="flex flex-row w-screen box-border bg-gradient-to-r from-gray-600 to-gray-900 overflow-hidden cursor-pointer" >
      <NavBar/>
      <div className=" flex flex-col justify-start items-center w-screen  mt-8 ">
        
            <div className='flex flex-col rounded p-1 h-70 w-4/5 bg-[#092547] z-10 text-white shadow-xl ' id='moveOne'  >
              <div>
              <h1 className=' text-3xl ml-4 mt-4 '>{
              "< About Me />"}</h1>
              </div>
              <br />
              <div>
              <p className=' text-base ml-10 mr-2 min-[1650px]:text-xl mb-4'>Hi! My name is <span className='text-yellow-200'>Lucas Gonzalez</span> and I'm a Full Stack Developer from Argentina. I have experience working with JavaScript, React js, Redux, NodeJS, Express, sequelize and PostgreSql, among other technologies. I can code a website end-to-end, but I'm more comfortable working on the front-end. I feel comfortable working in a team, I have an agile learning process, I am self-taught, responsible, I adapt to changes, I always stay positive and I think that with perseverance and being constant we can all reach our goals.I also have a good handle of Git Flow and good level of english (B2 Upper Intermediate) 
              but in the near future I plan to have an english C2 .</p>
              </div>
            </div>

            <div id='moveTwo' className='flex flex-row flex-wrap h-40 rounded p-1  w-4/5 bg-[#092547] z-10 text-white shadow-xl mt-8 min-[1650px]:text-lg'  >
              <div className='flex flex-row flex-wrap items-center ml-10 -mr-10  w-full  '>
              
              <div  className='flex flex-row w-1/3 min-[1650px]:text-lg hover:scale-110 transition-all duration-500 ease-in-out ' >
                <a href="https://www.linkedin.com/in/lucas-gonzalez-swd/" target="_blank">
                <button className=' flex  items-center  hover:text-yellow-200'>
                <FontAwesomeIcon className="text-4xl  mr-2" icon={faLinkedin} />
                      Linkedin : Lucas Gonzalez
                </button>
                </a>
                </div>

              <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
              <a href="https://github.com/LucasGonzalezSwd" target="_blank">
                <button className=' flex  items-center hover:text-yellow-200'>
                <FontAwesomeIcon className="text-4xl  mr-2 " icon={faGithub} />
                
                GitHub : LucasGonzalezSwd
                </button>
                
                </a>
                </div>
               
                  <div  className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out  '>
                  <a href={doc} download="Resume Lucas Gonzalez Swd" target="_blank">
                <button className=' flex  items-center hover:text-yellow-200'>
                <FontAwesomeIcon className="text-4xl  mr-2 "  icon={faFileLines} />
                 Resume
               </button>
               </a>
               </div>
              
               <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
              <a  >
                <button className=' flex  items-center  hover:text-yellow-200'>
                <FontAwesomeIcon className="text-4xl  mr-2" icon={faEnvelope} />
                
                Email : lucas.ing.ind@gmail.com
                </button>
                
                </a>
                </div>
                <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
              <a href='https://wa.me/543406418085' target="_blank">
                <button className=' flex items-center hover:text-yellow-200' >
                <FontAwesomeIcon className="text-4xl  mr-2 " icon={faWhatsapp} />
                
                Phone : +54 03406 15418085
                </button>
                
                </a>
                </div>
                <div className='flex flex-row w-1/3 hover:scale-110 transition-all duration-500 ease-in-out'>
              <a href="https://goo.gl/maps/xcE27tPpeep8Xts18" target="_blank">
                <button className=' flex  items-center hover:text-yellow-200'>
                <FontAwesomeIcon className="text-4xl  mr-2  " icon={faLocationDot} />
                
               Location : Argentina
                </button>
                
                </a>
                </div>
               
               </div>
            </div>


            <div className='flex flex-row  w-4/5 gap-4 h-[30rem] z-10 mt-8 mb-4' id='moveThree'>
               <div className='w-1/2 min-[1650px]:text-lg flex flex-col p-1 rounded text-white shadow-xl  bg-[#092547] '>
                <h1 className='text-2xl ml-4 mt-2'>Experience</h1>
               <h2 className='mt-2 '> <FontAwesomeIcon icon={faStar} size="md" className='mr-2 text-yellow-200'/>Food App</h2>
                 <p className='ml-8 mt-3'>Nov of 2022 - Dec of 2022</p>
                <p className='ml-8 '>
                Design and develop a food app that includes searching, combined filtering, ordering, creating and deleting food recipes.
                  </p> 
                 <br />
              
                 <h2 className='mt-2 '> <FontAwesomeIcon icon={faStar} size="md" className='mr-2 text-yellow-200'/>E-commerce - Mate Express </h2>
                 <p className='ml-8 mt-3'> Nov of 2022 - Dec of 2022</p>
                 <p className='ml-8 '> In this project I worked on the Front-end part, creating components, functionalities, logic such as in the shopping cart, making the payment gateway and styles with Tailwind in many components, among other things. We work with the agile SCRUM methodology, we organize ourselves and divide tasks with Ora, which is a tool for project management and organization.</p>

               </div>
                
                
               
               <div className='w-1/2 min-[1650px]:text-lg flex flex-col p-1 rounded  text-white shadow-xl  bg-[#092547] '>
                <h1 className='text-2xl ml-4 mt-2'>Education</h1>
                <h2 className='mt-2 '><FontAwesomeIcon icon={faStar} size="md" className='mr-2 text-yellow-200'/>Soy Henry - Bootcamp</h2>
                 <p className='ml-8 mt-3'>Jul of 2022 - Feb of 2023</p>
                 <p className='ml-8 '>Full Stack Web Developer bootcamp.
                  More than 800 hours of theoretical-practical course. <br />
                  Fundamentals of JavaScript / Front-End / Back-End and Databases.<br />  
Individual Final Project and Group Final Project <br />
Job Preparation: A Guide to prepare ourselves to enter the world of work.</p>
                 
                 <br />
                 <h2 className='mt-2 '><FontAwesomeIcon icon={faStar} size="md" className='mr-2 text-yellow-200'/>UnRaf - Computer Engineering</h2>
                 <p className='ml-8 mt-3'>Feb of 2019 - Dec of 2021</p>
                 <p className='ml-8 '> 
In this career I learned a lot of mathematics, logic to solve problems and perseverance, on pause for economic reasons.</p>

               </div>
            </div>


          
      </div>
    </div>
   
  )
}
