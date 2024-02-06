import React from 'react'
import styl from "./finder.modules.css";

export default function Fcode() {
  return (
    <div >
      <section  aria-label="hero-section" className="h-auto lg:h-[calc(63vh-75px)]">
        <div style={{display:"flex",alignItems:"center" }} className="mx-auto min-h-min items-center rounded-lg md:flex lg:max-w-7xl lg:pl-10">
          <div className="flex flex-col justify-center lg:w-1/2">
            <div className="p-4 lg:p-0">
              <h1 className="text-xl font-semibold capitalize text-gray-800 md:text-2xl lg:text-4xl">The Only Platform to</h1>
              <h1 className="text-3xl font-bold capitalize text-[#2D88E2] md:text-[34px] lg:text-5xl">Show off your skills</h1>
              <p className="mt-2 text-sm text-gray-800 lg:mt-4 lg:text-xl">Collab or hire coders with no middleman. An open platform to hire coders based on skills and Projects.</p>
              <div className="mt-6 flex items-center space-x-6">
                <button style={{backgroundColor:"blue"}} className="no_highlights items-center justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-500 text-white px-4 py-2 text-base border-none rounded-md  undefined ">
                  <div  className="flex items-center justify-center gap-2">EXPLORE WORK
                  </div>
                </button>
                <button className="no_highlights items-center justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 hover:bg-blue-50 hover:dark:bg-blue-600 hover:dark:bg-opacity-20 active:dark:bg-opacity-50 active:bg-blue-100 border-blue-500 text-blue-500 px-4 py-2 text-base bg-transparent border-button rounded-md  undefined ">
                  <div className="flex items-center justify-center gap-2">HIRE TALENTS</div>
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto -mt-10 lg:-mt-0 lg:w-1/2">
            <img src="https://www.findcoder.io/landing/challenge.svg" width="602" height="602" alt="icon" />
          </div>
        </div>
      </section>
    </div>
  )
}
