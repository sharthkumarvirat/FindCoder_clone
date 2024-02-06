import React from 'react'

export default function Explore() {
  return (
    <div className="bg-primary-danger">
      <div className="container-lg d-flex justify-content-evenly align-items-center ">
        <div>
          <h1>Here Are Some- </h1>
          <h1 style={{ color: "rgb(45 136 226)" }}>Projects By Developers</h1>
          <p >Sometimes, the elegant implementation is a function. Not a method. <br />Not a class. Not a framework. Just a function</p>
        </div>
        <img src="https://www.findcoder.io/explore/startup-209.svg" alt="" />
      </div>
 
      <div style={{ display: "flex", alignItems: "center" }} class="md:flex md:items-center lg:-mt-[120px]">
        <div className="md:order-2 md:w-1/2">
          <img src="https://www.findcoder.io/landing/challenge.svg" height="400" width="500" alt="challenge svg" /></div>
        <div className="p-4 md:order-1 md:w-1/2 md:p-10"><div className="flex items-center">
          <h2 className="text-xl font-semibold capitalize md:text-3xl">Learn Better by Participate in <span class="text-[#2e88e2]">Challenges</span>
          </h2><span className="h-[1px] w-[100px] grow bg-[#2e88e2] md:w-[200px]"></span>
        </div><p className="md:text-md mt-3 text-sm font-medium text-gray-700">We organize challenges to help you develop your coding skills. <br />
            See what challenge participants have been up to and learn more about them by  <br />
            browsing their featured projects</p>
          <button class="mt-3 bg-transparent font-semibold text-[#2e88e2] md:text-lg">View Challenges</button>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }} className="md:flex md:items-center lg:-mt-[120px]">
        <div className="md:w-1/2"><img src="https://www.findcoder.io/landing/collab.svg" height="400" width="550" alt="collab svg" />
        </div><div className="p-4 md:w-1/2 md:p-10">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold capitalize md:text-3xl">Platform for Connect, Collab and Build more
              <span className="text-[#2e88e2]">stuff</span></h2>
            <span className="h-[1px] w-[100px] grow bg-[#2e88e2] md:w-[200px]"></span></div>
          <p className="md:text-md mt-3 text-sm font-medium text-gray-700">We want our users to be able to communicate with coders through our platform. <br />
            Embrace collaboration, connect with others, and code.  A simple glance at your <br /> showcased projects will connect
            you directly with startups and top-notch companies.</p>
          <button className="mt-3 bg-transparent font-semibold text-[#2e88e2] md:text-lg">View Developers</button>
        </div>
      </div>
    </div>
  )
}
