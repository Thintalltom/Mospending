import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MainPage from './Components/Header 1/MainPage'
function App() {
  
  return (
    <>
   <div className=' w-full'>
     <Navbar />
     <MainPage />
   </div>
    </>
  )
}

export default App
