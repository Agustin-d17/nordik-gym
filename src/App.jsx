import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HomeSection from './components/HomeSection/HomeSection'
import SheduleSection from './components/SheduleSection/SheduleSection'
import PricesSection from './components/PricesSection/PricesSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomeSection />
      <SheduleSection />
      <PricesSection />
    </>
  )
}

export default App
