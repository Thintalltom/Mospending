import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MainPage from './Components/Header 1/MainPage'
import MainPage2 from './Components/Main 2/mainPage2'
function App() {
  
  return (
    <>
   <div className=' w-full'>
     <Navbar />
     <MainPage />
     <MainPage2 />
   </div>
    </>
  )
}

export default App
