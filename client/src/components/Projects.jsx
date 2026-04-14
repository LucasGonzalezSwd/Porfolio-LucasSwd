import React, { useState } from 'react'
import backimg from "./Images/foodapi1.png"
import backimg2 from "./Images/ecommerce3.png"
import backimg1 from "./Images/ibiza.png"
import backimg4 from "./Images/barbers.png"
import backimg3 from "./Images/calc.jpg"
import backimg5 from "./Images/secureA.jpg"
import backimg6 from "./Images/lolcito.jpg"
import playmaker from "./Images/playmaker.jpg"
import playmaker2 from "./Images/slotsmasters.jpg"
import ChatMaster from "./Images/ChatMaster.png"
import racewagger from "./Images/racewagger.png"
import landingwagger from "./Images/landingwagger.png"
import panel from "./Images/panel.png"
import panel2 from "./Images/panelbomba.jpeg"
import "./Styles/projects.css"
import './Styles/home.css'

const projects = [
  {
    images: [landingwagger,racewagger],
    title: "Wagger Races",
    description:
      "This platform was built for a content creator to manage and display multiple “Wager Races” in a fully automated and scalable way. It includes five independent race systems, each connected to a different casino provider, tracking affiliate performance and player rankings in near real time. Data is refreshed every 10 minutes to ensure efficiency and avoid API overload. The system delivers a continuous 24/7 competitive experience, allowing the community to follow live rankings and engage with ongoing events.",
    deploy: "https://playermakertv.com/wager-race",
    
  },
  {
    images: [panel,panel2],
    title: "Casino Web",
    description:
      "This platform was built as a custom tool panel for a Spanish streamer and their admin team, designed to be used collaboratively in real time. It features a wide range of bespoke tools and interactive games that are dynamically rendered during live streams, allowing direct interaction with the audience. The system enhances engagement by enabling real-time participation and control during live sessions. Demo available below — username: admin, password: admin123.",
    deploy: "https://demo-panel-slots.vercel.app/home",
    
  },
  {
    images: [ChatMaster],
    title: "Chatbot AI",
    description:
      "This app is a conversational crypto assistant powered by OpenAI and DeepSeek models. It provides expert-level responses about cryptocurrencies, DeFi, blockchain technologies, and trading strategies. It also performs real-time API requests to CoinGecko and CoinMarketCap to retrieve live prices of any asset the user asks for.",
    deploy: "https://ia.mastercrypto-club.com/",
    github: null,
    objectFit: "contain",
  },
  {
    images: [playmaker],
    title: "Casino Web",
    description:
      "This app is for to promote the sponsors of a content creator. It includes an optional admin panel, allowing each content creator to create and delete promotions and offers whenever they want. Additionally, it features a shop that displays information and redirects to the creator's official store. Trial version, username: admin, password: admin",
    deploy: "https://playermakertv.com/",
    github: "https://github.com/LucasGonzalezSwd/FreelanceProject",
  },
  {
    images: [playmaker2],
    title: "Promocion Web",
    description:
      "This app is for to promote the sponsors of a content creator. It has several sections, such as store, contact, community and others still under construction.",
    deploy: "https://promoted-spa.vercel.app/",
    github: null,
  },
  {
    images: [backimg5],
    title: "Security Agency",
    description:
      "This app is for any company that wants to keep track of the status of their agents, if they are enabled, if they have credentials, and more data. It has an admin panel to edit, delete, create a new agent. Still Working on Responsive Styles.",
    deploy: "https://security-agency-lucasgonzalezswd.vercel.app",
    github: "https://github.com/LucasGonzalezSwd/securityAgency",
  },
  {
    images: [backimg6],
    title: "League of Cards",
    description:
      "This web application was developed with Node, express, typescript, MongoDB, Mongoose, React, Redux, Tailwind CSS, Vite js. It was done to practice back-end and the front to have a little fun.",
    deploy: "https://front-de-node-typescript-mongo-db.vercel.app/",
    github: "https://github.com/LucasGonzalezSwd/Node-Typescript-MongoDB",
  },
  {
    images: [backimg1],
    title: "Ibiza Station",
    description:
      "Develop a single page application end to end. Where you could buy a ticket for an event. At the time of purchasing, it notified you by email and when you made the payment you received the ticket in QR format.",
    deploy: "https://ibizastation.com/",
    github: null,
  },
  {
    images: [backimg3],
    title: "Calculator App",
    description:
      "This application has the traditional functions of a calculator, developed with Next.js and React. Styles with Tailwind CSS, functional tests with Jest and Testing Library, and strong typing with TypeScript.",
    deploy: "https://calculadora-next-js.vercel.app/",
    github: "https://github.com/LucasGonzalezSwd/Calculadora",
  },
  {
    images: [backimg4],
    title: "BarberShop Club",
    description:
      "Develop a single page application end to end. Where you can reserve your appointment to get a haircut and other services. When you reserve, it notifies you by email. It has an admin panel for the barber to manage shifts, delete or reschedule.",
    deploy: "https://www.barbershopclub.hair/",
    github: null,
  },
  {
    // Example of multi-image project — add your second image here
    images: [backimg2 /*, backimgExtra */],
    title: "Ecommerce Mate Express",
    description:
      "This is a SPA carried out as a final project in the Soy Henry bootcamp. I participated with the team handling the front-end: shopping cart, styles, and admin panel.",
    deploy: null,
    github: null,
  },
  {
    // Example of multi-image project — add your second image here
    images: [backimg /*, backimgExtra */],
    title: "Food App",
    description:
      "Individual final project of the Soy Henry bootcamp, where I carried out an end-to-end SPA on recipes, with filtering by name and type, recipe creation, deletion, and more.",
    deploy: null,
    github: null,
  },
]
 
// Slider for projects that have multiple images
const ImageSlider = ({ images, objectFit = "cover" }) => {
  const [current, setCurrent] = useState(0)
 
  return (
    <div className="relative w-full h-full">
      <img
        className={`h-[25rem] max-[450px]:h-full w-full object-${objectFit} transition-opacity duration-300`}
        src={images[current]}
        alt="project screenshot"
      />
      {images.length > 1 && (
        <>
          {/* Left arrow — fixed to left edge, vertically centered, outside scale transform */}
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev - 1 + images.length) % images.length) }}
            style={{ transform: 'translateY(-50%) translateX(0)' }}
            className="absolute left-2 top-1/2 z-20 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none select-none"
          >
            ‹
          </button>
 
          {/* Right arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev + 1) % images.length) }}
            style={{ transform: 'translateY(-50%) translateX(0)' }}
            className="absolute right-2 top-1/2 z-20 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none select-none"
          >
            ›
          </button>
 
          {/* Dots */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  i === current ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
 

export const Projects = () => {
  return (
    <div className="flex justify-center w-screen mt-[1rem] mb-[1rem]">
      <div className="flex flex-col justify-center items-center rounded-xl max-[400px]:gap-[2.8rem] max-[450px]:gap-[3.1rem] gap-[1.8rem] max-[400px]:w-full max-[450px]:w-full w-4/5 z-10 mb-[1rem] h-full max-[400px]:mt-[0.1rem] max-[450px]:mt-[0.1rem] mt-[5rem] cursor-pointer">
 
        <div className="flex w-full max-[400px]:mt-[5rem] max-[450px]:mt-[5rem]">
          <p className="text-black text-3xl pt-[1.2rem]">{"< Projects />"}</p>
        </div>
 
        {projects.map(({ images, title, description, deploy, github, objectFit }, index) => (
          <div key={index} className="flex max-[400px]:flex-col max-[450px]:flex-col w-full gap-[1.4rem]">
            {/* Image — outer div handles shadow/border-radius, inner handles scale so arrows stay fixed */}
            <div className="relative flex max-[450px]:w-full max-[400px]:w-full w-2/3 rounded-xl shadow-lg shadow-gray-400">
              <div className="w-full p-[0.5rem] rounded-xl hover:scale-105 transition-all ease-in-out duration-500 overflow-hidden">
                <ImageSlider images={images} objectFit={objectFit} />
              </div>
            </div>
 
            {/* Info */}
            <div className="flex flex-col max-[450px]:w-full max-[400px]:w-full w-1/3 shadow-lg shadow-gray-400 rounded-xl p-[0.5rem]">
              <h1 className="text-3xl">{title}</h1>
              <p className="mt-[1rem] max-[400px]:text-ms max-[450px]:text-ms">{description}</p>
 
              {(deploy || github) && (
                <div className="flex items-end h-full gap-[1.6rem] max-[450px]:mt-[1.8rem] max-[400px]:mt-[1.5rem] pb-[1rem]">
                  {deploy && (
                    <a href={deploy} target="_blank" rel="noreferrer">
                      <button className="bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]">
                        Deploy
                      </button>
                    </a>
                  )}
                  {github && (
                    <a href={github} target="_blank" rel="noreferrer">
                      <button className="bg-[#3699a0b9] rounded-lg p-[0.5rem] hover:scale-105 transition-all ease-in-out duration-300 w-[6rem]">
                        GitHub
                      </button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
 
      </div>
    </div>
  )
}