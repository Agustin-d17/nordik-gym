import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HomeSection from './components/HomeSection/HomeSection'
import SheduleSection from './components/SheduleSection/SheduleSection'
import PricesSection from './components/PricesSection/PricesSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HomeSection />
      <SheduleSection />
      <PricesSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
