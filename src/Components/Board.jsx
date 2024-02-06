import React from 'react'

export default function Board() {
    return (
        <div>
            <div style={{display:"flex",alignItems:"center"}} className="md:flex md:items-center lg:-mt-[120px]">
                <div className="md:order-2 md:w-1/2">
                    <img src="https://www.findcoder.io/landing/seo.svg" height="400" width="500" alt="talent svg" />
                </div>
                <div  className="p-4 md:order-1 md:w-1/2 md:p-10">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold capitalize md:text-3xl">Learn, Upskill and Be Interview 
                        <span className="text-[#2e88e2]">Ready</span></h2>
                        <span className="ml-1 h-[1px] w-[200px] grow bg-[#2e88e2] md:ml-0"></span>
                    </div>
                    <p  className="md:text-md mt-3 text-sm font-medium text-gray-700">Are you unsure of how to prepare for your upcoming interview? ??? <br /> Our platform will help you connect with interviewers and <br /> You can solve all your doubts by interacting with them.</p>
                    <button className="mt-3 bg-transparent font-semibold text-[#2e88e2] md:text-lg"  style={{backgroundColor:"blue"}}>Coming soon</button>
                </div>
            </div>
        </div>
    )
}
