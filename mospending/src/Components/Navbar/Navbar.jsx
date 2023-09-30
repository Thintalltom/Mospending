import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);
  return (
    <div className="bg-[#3734A9] w-full text-white">
      <div className="lg:flex hidden  justify-between p-4">
      <div>
          <img
            src={Logo}
            alt="logoimage"
            className="w-[100px] cursor-pointer"
          />
        </div>
     
        <div className="flex justify-between gap-9 text-xs">
          <p>Home</p>
          <p>Product</p>
          <p>Company</p>
          <p>Utility</p>
          <button className="bg-blue-500 btn text-white p-[5px] text-xs">
            Login
          </button>
        </div>
      </div>

      {/*Hamburger */}
      <div className="lg:hidden flex justify-between p-[20px]">
        <div>
          <img
            src={Logo}
            alt="logoimage"
            className="w-[100px] cursor-pointer"
          />
        </div>
     
      <div
        className="lg:hidden md:block text-lg cursor-pointer  z-10"
        onClick={handleClick}
      >
        {open ? (
          <CiMenuFries className="text-slate-800 text-3xl font-extrabold " />
        ) : (
          <CiCircleRemove className="text-slate-800 text-3xl font-extrabold" />
        )}
      </div>
      </div>

      {/*small screen*/}
      <div
        className={
          open
            ? "hidden"
            : `flex-col flex text-center justify-center items-center gap-9 p-4 xs:w-full xs:h-[50%] 2xl:hidden lg:hidden mt-[50px]   xs:h-screen md:h-screen bg-[#3734A9] absolute top-0 left-0`
        }
      >
        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-white">
          Home
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500 text-white">
          Product
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-white">
         Company
        </li>

        <li className="list-none px-4 cursor-pointer hover:text-lime-500  text-white">
         Utility
        </li>
      </div>
    </div>
  );
};

export default Navbar;
