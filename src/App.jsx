import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Navbar from './Component/Navbar'
import axios from 'axios'
import Footer from './Component/Footer'

function App() {
  const [openDropDown,setOpenDropDown] = useState(false);
  const [location,setLocation] = useState(null);
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address 
        setLocation(exactLocation);
        setOpenDropDown(false);
      } catch (error) {
        console.log(error);
      }
    })
  }
  useEffect(()=>{
    getLocation();
  },[])

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation = {getLocation} openDropDown={openDropDown} setOpenDropDown = {setOpenDropDown}/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
