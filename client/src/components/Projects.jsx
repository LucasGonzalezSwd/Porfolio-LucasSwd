import React from 'react'
import { NavBar } from './NavBar'
export const Projects = () => {
  return (
    <div className="flex flex-row w-screen box-border bg-gradient-to-r from-gray-600 to-gray-900">
      <NavBar/>
      <div className=" flex justify-center items-center  w-screen h-screen text-3xl text-red-600">
              IN PROGRESS
      </div>
    </div>
  )
}
