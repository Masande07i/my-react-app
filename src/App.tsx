import { useState } from 'react'
import Text from './components/Text/Text.tsx'
import './App.css'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { Search } from './components/Search/Search.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* <div id ='scrollable'></div> */}
    <Navbar/>
    <Search/>


     
    <Footer/>

    </div>
     
  )
}

export default App
