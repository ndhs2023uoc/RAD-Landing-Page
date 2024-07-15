import React, { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/NavBar/Navbar'
import AboutUs from './pages/AboutUs'
import ContactForm from './pages/ContactUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {GlobalStyles,Container,theme,Darktheme} from '../src/components/theme/Theme'

const App = () => {
  const [mode ,setMode] = useState(false)

  return (
    <>
      <BrowserRouter>
      <ThemeProvider theme={mode ? Darktheme : theme}>
      <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />   
          <Route path="/contact" element={<ContactForm/>} />          
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App