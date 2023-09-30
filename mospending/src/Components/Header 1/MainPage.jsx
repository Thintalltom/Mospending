import React from "react";
import "./MainPage.css";
import bluedot from "../../assets/46bluedot.png";
import orange from "../../assets/47orange.png";
import oval from "../../assets/Oval.png";
import dashboard from "../../assets/dashboard.png";
const MainPage = () => {
  return (
    <div className="bg-[#3734A9] text-white w-full h-[100vh]">
        
      <div className="flex  flex-col">
        <div className="lg:text-3xl sm:text-sm breeze mt-[90px]  p-[10px] flex sm:flex-col lg:flex-row justify-between">
          <img src={oval} className=" flex-none lg:block lg:w-[200px] sm:hidden md:hidden oval" />
          <div className="text-center bigText">
            <p>Our fintech app makes  managing
            your transaction a 
             breeze.</p>
          </div>
          <img src={orange}  className='orange'/>
        </div>
        <div className="mt-[5px] font-light  ">
          <p className="text-center sm:text-sm smallText">
            Our fintech app simplifies transaction management making it
            effortless to track your spending , monitor <br /> balances, stay on
            top of your finances
          </p>
        </div>
        <div className="mt-[30px] flex text-center items-center justify-center   rounded p-4">
          <div className="inputSlate flex items-center justify-center justify-between rounded">
            <input
              type="text"
              className="bg-transparent inputText rounded ml-[10px] "
              placeholder="Enter your email"
            />
            <p className="btnStyle rounded">Create Account</p>
          </div>
        </div>
      </div>
      <div className="flex ">
        <img src={bluedot}/>
      </div>
      <div className="flex items-center justify-center mt-[-100px] bigImage ">
      <img src={dashboard} className='w-[50%] bigImage2'/>
      </div>
    </div>
  );
};

export default MainPage;
