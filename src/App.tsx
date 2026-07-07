import { useState } from 'react'
import Text from './components/Text/Text.tsx'
import './App.css'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { Search } from './components/Search/Search.tsx'
import { Hero } from './components/Hero/Hero.tsx'
import { Service } from './components/Service/Service.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">

      <div className= "backgroundLetters">
        <span>H</span>
        <span>Y</span>
        <span>K</span>
        <span>R</span>
        <span>O</span>
        <span>X</span>
      </div>
      
    <Navbar/>
    <Hero/>
    {/* <Service/> */}
   
  
    {/* <Footer/> */}

    </div>
     
  )
}

export default App
