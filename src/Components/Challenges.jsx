import React from 'react'

export default function Challenges() {
    return (
        <div>
            <div className="min-h-screen pb-24">
                <div style={{ display: "flex", alignItems: "center" }} className="mx-auto min-h-min max-w-7xl items-center justify-between rounded-lg p-4 md:flex md:h-[50vh] md:p-0 md:pl-10">
                    <div className="flex flex-col justify-center md:w-[50%]"><div>
                        <h1 className="text-2xl font-semibold capitalize text-gray-900 md:text-4xl">Learn Better by -</h1>
                        <h1 className="text-2xl font-bold capitalize text-[#2D88E2] md:text-4xl">Participate in Challenges</h1>
                        <p className="mt-4 text-sm text-gray-700 md:text-lg">A challenge on <span className="text-[#2D88e2]">FindCoder.io</span> is like a hackathon, where we challenge you to come up <br />
                            with a solution in the form of a project, which will appear on your profile.</p>
                        <button className="no_highlights items-center justify-center font-medium transition-all duration-300 ease-in-out disabled:opacity-50 hover:bg-blue-50 hover:dark:bg-blue-600 hover:dark:bg-opacity-20 active:dark:bg-opacity-50 active:bg-blue-100 border-blue-500 text-blue-500 px-4 py-2 text-base bg-transparent border-button rounded-md  mt-6 ">
                            <div className="flex items-center justify-center gap-2">Learn More</div>
                        </button>
                    </div></div>
                    <div className="flex items-start justify-center md:w-[50%]">
                        <img src="https://www.findcoder.io/challenges/challenge.svg" height="400" width="500" alt="" />
                    </div></div><div className="mx-auto max-w-4xl">
                </div>
            </div>

        </div>
    )
}
