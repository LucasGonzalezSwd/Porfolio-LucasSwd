import React from 'react'
import backimg from "./Images/foodapi1.png"
import backimg2 from "./Images/ecommerce3.png"
import backimg1 from "./Images/ibiza.png"
import backimg4 from "./Images/barbers.png"
import backimg3 from "./Images/calc.jpg"
import backimg5 from "./Images/secureA.jpg"
import backimg6 from "./Images/lolcito.jpg"
import playmaker from "./Images/playmaker.jpg"
import "./Styles/projects.css"
import './Styles/home.css'
export const Projects = () => {
  return (
    <div className="">
      
      <div className=" flex justify-center w-screen mt-[1rem] mb-[1rem] ">
              <div className='flex flex-col justify-center items-center rounded-xl max-[400px]:gap-[2.8rem] max-[450px]:gap-[3.1rem] gap-[1.8rem] max-[400px]:w-full max-[450px]:w-full w-4/5 z-10 mb-[1rem] h-full max-[400px]:mt-[0.1rem] max-[450px]:mt-[0.1rem] mt-[5rem] cursor-pointer ' >
                
                <div className='flex w-full max-[400px]:mt-[5rem] max-[450px]:mt-[5rem] '>
                <p  className=' text-black text-3xl pt-[1.2rem] '>{"< Projects />"}</p>
                </div>
                <div className='flex max-[400px]:flex-col max-[450px]:flex-col w-full gap-[1.4rem]  '>
                  <div className='flex max-[450px]:w-full  max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500 max-[450px]:h-full max-[400px]:h-full h-full '>
                       <img className='h-[25rem] max-[450px]:h-full  object-cover w-full' src={playmaker} alt="the project" />
                  </div>
                  <div className='flex flex-col max-[450px]:w-full   max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl p-[0.5rem]'>
                      <h1 className='text-3xl  '>Security Agency</h1>
                      <p className='mt-[1rem] max-[400px]:text-ms max-[450px]:text-ms'>
                      This app is for any company that wants to keep track of the status of their agents, if they are enabled, if they have credentials, and more data. It has an admin panel to edit, delete, create a new agent. Still Working on Responsive Styles.
                      </p>
                      <div className='flex items-end  h-full gap-[1.6rem] max-[450px]:mt-[1.8rem] max-[400px]:mt-[1.5rem] pb-[1rem]'>
                        <a href="https://security-agency-lucasgonzalezswd.vercel.app" target='_blank' rel='noreferrer'>
                        <button className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>Deploy</button></a>
                        <a href="https://github.com/LucasGonzalezSwd/securityAgency" target='_blank' rel='noreferrer'>
                        <button  className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>GitHub</button></a>
                      </div>

                  </div>
                </div>

                <div className='flex max-[400px]:flex-col max-[450px]:flex-col w-full gap-[1.4rem]  '>
                  <div className='flex max-[450px]:w-full  max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500 max-[450px]:h-full max-[400px]:h-full h-full '>
                       <img className='h-[25rem] max-[450px]:h-full object-cover  w-full' src={backimg5} alt="" />
                  </div>
                  <div className='flex flex-col max-[450px]:w-full   max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl p-[0.5rem]'>
                      <h1 className='text-3xl  '>Security Agency</h1>
                      <p className='mt-[1rem] max-[400px]:text-ms max-[450px]:text-ms'>
                      This app is for any company that wants to keep track of the status of their agents, if they are enabled, if they have credentials, and more data. It has an admin panel to edit, delete, create a new agent. Still Working on Responsive Styles.
                      </p>
                      <div className='flex items-end  h-full gap-[1.6rem] max-[450px]:mt-[1.8rem] max-[400px]:mt-[1.5rem] pb-[1rem]'>
                        <a href="https://security-agency-lucasgonzalezswd.vercel.app" target='_blank' rel='noreferrer'>
                        <button className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>Deploy</button></a>
                        <a href="https://github.com/LucasGonzalezSwd/securityAgency" target='_blank' rel='noreferrer'>
                        <button  className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>GitHub</button></a>
                      </div>

                  </div>
                </div>

               
                
                
                <div className='flex max-[400px]:flex-col max-[450px]:flex-col w-full gap-[1.4rem]  '>
                  <div className='flex max-[450px]:w-full  max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500 max-[450px]:h-full max-[400px]:h-full h-full '>
                       <img className='h-[25rem] object-cover max-[450px]:h-full w-full' src={backimg6} alt="" />
                  </div>
                  <div className='flex flex-col max-[450px]:w-full   max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl p-[0.5rem]'>
                      <h1 className='text-3xl  '>League of cards</h1>
                      <p className='mt-[1rem] max-[400px]:text-ms max-[450px]:text-ms'>
                      This web application was developed with Node, express, typescript, MongoDB, Mongoose, React, Redux, Tailwind CSS, Vite js. It was done to practice back-end and the front to have a little fun.
                      </p>
                      <div className='flex items-end  h-full gap-[1.6rem] max-[450px]:mt-[1.8rem] max-[400px]:mt-[1.5rem] pb-[1rem]'>
                        <a href="https://front-de-node-typescript-mongo-db.vercel.app/" target='_blank' rel='noreferrer'>
                        <button className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>Deploy</button></a>
                        <a href="https://github.com/LucasGonzalezSwd/Node-Typescript-MongoDB" target='_blank' rel='noreferrer'>
                        <button  className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>GitHub</button></a>
                      </div>

                  </div>
                </div>

                <div className='flex max-[450px]:flex-col max-[400px]:flex-col w-full gap-[1.4rem]  '>
                  <div className='flex  max-[450px]:w-full  max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500 max-[450px]:h-full  max-[400px]:h-full h-full'>
                       <img className='h-[25rem] object-cover max-[450px]:h-full w-full' src={backimg1} alt="" />
                  </div>
                  <div className='flex flex-col  max-[450px]:w-full   max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl  p-[0.5rem]'>
                      <h1 className='text-3xl'>Ibiza Station</h1>
                      <p className='mt-[1rem]'>
                  Develop a single page application end to end. Where you could buy a ticket for an event. At the time of purchasing, it notified you by email and when you made the payment you received the ticket in QR format.
                      </p>
                      <div className='flex items-end  h-full gap-[1.6rem] max-[400px]:mt-[1.8rem] max-[450px]:mt-[1.5rem] pb-[0.5rem]'>
                        <a href="https://ibizastation.com/" target='_blank' rel='noreferrer'>
                        <button className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>Deploy</button></a>
                        
                      </div>

                  </div>
                </div>
                <div className='flex max-[400px]:flex-col max-[450px]:flex-col w-full gap-[1.4rem]  '>
                  <div className='flex max-[450px]:w-full  max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500 max-[450px]:h-full max-[400px]:h-full h-full '>
                       <img className='h-[25rem] object-cover max-[450px]:h-full w-full' src={backimg3} alt="" />
                  </div>
                  <div className='flex flex-col max-[450px]:w-full   max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl p-[0.5rem]'>
                      <h1 className='text-3xl  '>Calculator App</h1>
                      <p className='mt-[1rem] max-[400px]:text-ms max-[450px]:text-ms'>
                      This application has the traditional functions of a calculator, it was developed with Next.js and React. The styles were made with Tailwind CSS to make it faster and more responsive. It has a functional test carried out with Jest and Testing Library. It also has strong typing to avoid errors and improve future code maintenance with Typescript.
                      </p>
                      <div className='flex items-end  h-full gap-[1.6rem] max-[450px]:mt-[1.8rem] max-[400px]:mt-[1.5rem] pb-[1rem]'>
                        <a href="https://calculadora-next-js.vercel.app/" target='_blank' rel='noreferrer'>
                        <button className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>Deploy</button></a>
                        <a href="https://github.com/LucasGonzalezSwd/Calculadora" target='_blank' rel='noreferrer'>
                        <button  className='bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>GitHub</button></a>
                      </div>

                  </div>
                </div>
                <div className='flex  max-[450px]:flex-col max-[400px]:flex-col w-full gap-[1.4rem] '>
                  <div className='flex  max-[450px]:w-full   max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500  max-[450px]:h-full  max-[400px]:h-full h-full'>
                       <img className='h-[25rem] object-cover max-[450px]:h-full w-full' src={backimg4} alt="" />
                  </div>
                  <div className='flex flex-col max-[450px]:w-full  max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl  p-[0.5rem] '>
                      <h1 className='text-3xl'>BarberShop Club</h1>
                      <p className='mt-[1rem]'>
                      Develop a single page application end to end. Where you can reserve your appointment to get a haircut, and other services offered by barbershops. When you reserve your appointment, it notifies you to the email with which you made the reservation. It has an admin panel for the barber, where he can manage shifts and delete or reschedule.
                      </p>
                      <div className='flex max-[400px]:mt-[1.5rem] max-[450px]:mt-[1.8rem] items-end  h-full gap-[1.6rem] pb-[1rem]'>
                        <a href="https://www.barbershopclub.hair/" target='_blank' rel='noreferrer'>
                        <button className='bg-[#3699a0b9]  rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]'>Deploy</button></a>
                       
                      </div>

                  </div>
                </div>
                <div className='flex max-[450px]:flex-col max-[400px]:flex-col w-full gap-[1.4rem] '>
                  <div className='flex  max-[450px]:w-full  max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500  max-[450px]:h-full max-[400px]:h-full h-full '>
                       <img className='h-[25rem] object-cover max-[450px]:h-full  w-full' src={backimg2} alt="" />
                  </div>
                  <div className='flex flex-col max-[450px]:w-full  max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl  p-[0.5rem]'>
                      <h1 className='text-3xl'>Ecommerce <br />Mate Express</h1>
                      <p className='mt-[1rem]'> 
                      This is a SPA carried out as a final project in the Soy Henry bootcamp. In it I participated with the team that took charge of the front-end performing tasks such as the shopping cart, styles, and admin panel.
                      </p>
                      <div className='flex items-end  h-full gap-[1.6rem] pb-[1.6rem]'>
                      
                      </div>

                  </div>
                </div>
                <div className='flex max-[450px]:flex-col max-[400px]:flex-col w-full gap-[1.4rem] mb-[2rem]'>
                  <div className='flex max-[450px]:w-full  max-[400px]:w-full w-2/3 p-[0.5rem] rounded-xl shadow-lg shadow-gray-400 hover:scale-105 transition-all ease-in-out duration-500 max-[450px]:h-full  max-[400px]:h-full h-full  '>
                       <img className='h-[25rem]  object-cover max-[450px]:h-full  w-full' src={backimg} alt="" />
                  </div>
                  <div className='flex flex-col max-[450px]:w-full  max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl  p-[0.5rem] '>
                      <h1 className='text-3xl'>Food App</h1>
                      <p className='mt-[1rem]'>
                     
                      Individual final project of the soy henry bootcamp, where I carried out an end-to-end SPA on recipes, with the functions of filtering by recipe name, recipe type, creation of a recipe, and deletion, among other functions.
                      </p>
                      <div className='flex max-[450px]:mt-[1.8rem] max-[400px]:mt-[1.5rem] items-end  h-full gap-[1.6rem] pb-[1rem]'>
                       
                       
                      </div>

                  </div>
                </div>
               
             
         </div>
    </div>
    </div>
  )
}