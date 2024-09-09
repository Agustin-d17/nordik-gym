import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HomeSection from './components/HomeSection/HomeSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomeSection id="HomeSection"/>
    </>
  )
}

export default App
