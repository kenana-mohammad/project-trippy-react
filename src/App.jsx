// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import PouplarDestaintion from "./Components/PouplarDestaintion/PouplarDestaintion";
import HomeBg from "./assets/1.jpg";
function App() {
 const navItems =[{label:"home",icon:"fa-solid fa-house-user"},
 {label:"aboute",icon:"fa-solid fa-circle-info"},{label:"services",icon:"fa-solid fa-house-user"},{label:"contact",icon:"fa-solid fa-house-user"}]

  return (
    <>
    <div className="app">
      <Navbar logo="Trippy" 
      Navitems={navItems} btn="signup" />
        <Hero img={HomeBg}
        
        title="Your journey your story"
        desc="chode your favourate "
        btn ='travel now'
        />
     <PouplarDestaintion/>
      </div>
    </>
  )
}

export default App
