import React from 'react'
import './MainPage.css'
import bluedot from '../../assets/46bluedot.png'
const MainPage = () => {
  return (
    <div className='bg-[#3734A9] text-white w-full h-[100vh]'>
       
            <div className='flex text-center items-center justify-center flex-col'>
                <div className='text-3xl breeze mt-[90px]  p-[10px]'>
                 <p>Our fintech app makes </p> 
                 <p className='mt-[40px]'> your transaction a </p> 
                <p className='mt-[40px]'> breeze.</p>
                </div>
                <div className='mt-[40px] font-light  '>
                <p>Our fintech app simplifies transaction management making it effortless to track your spending , monitor <br />  balances, stay on top of your finances</p>
                </div>
                <div className='mt-[30px] flex  bg-red-500 inputSlate rounded p-4'>
                    <input type='text'  className='bg-transparent  rounded '  placeholder="Enter your email"  />
                    <p className='btnStyle rounded'>Create Account</p>
                </div>
                
                </div>
            <div className='flex '>
            <img src={bluedot} />
            </div>

       
    </div>
  )
}

export default MainPage