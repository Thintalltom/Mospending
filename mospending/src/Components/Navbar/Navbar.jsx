import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='bg-indigo-600 w-full text-white '>
        <div className='flex  justify-between p-4'>
            <p> Mospending</p> 

            <div className='flex justify-between gap-9 text-xs'>
            <p>Home</p>
            <p>Product</p>
            <p>Company</p>
            <p>Utility</p>
            <button className='bg-blue-500 btn text-white p-[5px] text-xs'>Login</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar