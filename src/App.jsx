import React from 'react'
import FindCoder from './Components/FindCoder'
import Fcode from './Components/Fcode'
import Explore from './Components/Explore'
import Home from './Components/Home'
import {Route, Routes  } from "react-router-dom";
import Board from './Components/Board'
import Challenges from './Components/Challenges'



export default function App() {
  return (
    <div>
      <FindCoder/>
    <Routes>
      <Route  path='/' element={<Home/>}   />
      <Route  path='/explore'   element={<Explore/>} />
      <Route  path='/hire'   element={<Fcode/>}/>
       <Route  path='/board'   element={<Board/>}/>
       <Route  path='/challenge'   element={<Challenges/>}/>
    </Routes>

    </div>
  )
}
