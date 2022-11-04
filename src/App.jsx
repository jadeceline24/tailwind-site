import React from "react"
import Banner from "./components/Banner"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"


function App() {
 

  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Content/>
     <Slider/>
     <Banner />
     <Footer/>
    </div>
  )
}

export default App
