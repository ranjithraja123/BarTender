import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NAvbar from './components/Navbar/NavBar.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
import FeatureSection from './components/Features/FeatureSection.jsx'
import Products from './components/Products/Products.jsx'
import AboutSection from './components/About/AboutSection.jsx'


function App() {

  return (
    <>
    <div  className='sticky top-0 z-50'>
    <NAvbar />
    </div>
    <HeroSection />
    {/* <Routes>
    <Route path='/' element={} />
    <Route path='/products' element={<Products/>} />

    </Routes> */}
    <Products/>
    <AboutSection />
    
    
    
    </>
  )
}

export default App
