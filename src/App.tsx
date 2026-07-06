import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Text from './components/Text/Text.tsx'
import './App.css'
import { Navbar } from './components/Navbar/Navbar.tsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
    <Navbar/>


     {/* <Text variant = 'h1'> Hi there</Text>
      <Text variant = 'h2'> Hi there</Text>
      <Text variant = 'p'> Hi there</Text>
      <Text variant = 'span'> Hi there</Text> */}

    </div>
     
  )
}

export default App
